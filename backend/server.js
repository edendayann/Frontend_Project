const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer') // multer for handling file uploads
const upload = multer({ dest: 'uploads/' });  //sets the destination folder for uploaded files.
const express = require("express");
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;  // for uploading files to Cloudinary.

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'dcnbvgpbm',
    api_key: '765212827232443',
    api_secret: 'Mm-lfxue0-fIRQFzZw9yIhGKJ8c',
});

// CloudinaryStorage instance for handling file uploads to Cloudinary:
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      resource_type: ['video', 'image'],
    },
  });

// Create multer instance with a disk storage configuration
const parser = multer({
    storage: multer.diskStorage({}),
});

// Defines the MongoDB connection URL and establishes a connection using Mongoose
const mongoURL = `mongodb+srv://hazaniz:zohar112@cluster0.1s9hgkt.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false)
mongoose.connect(mongoURL)

const mongoSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     unique: true
    // },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: String,
    published: {
        type: Boolean,
        default: false,
    },
    video: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

// mongoSchema.plugin(autoIncrement.plugin, {
//     model: 'Post',
//     field: 'id',
//     startAt: 1, // The initial value for the auto-incrementing field
//     incrementBy: 1, // The increment value for each new document
//   });
  

// Creates a Mongoose model named Post based on the defined schema
const Post = mongoose.model('Post', mongoSchema)
mongoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
}})

// Route for profile picture upload - ZOAHR
app.post('/api/uploadPicture', upload.single('image'), (req, res) => {
    const result = async () => {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "image",
        });
        return { url: uploadResult.url };
    };
    result()
        .then(async result => {
            const email = req.body.email
            if(email){ // not a new user
                const user = await User.findOne({ email: email });
                if(user){
                    user.imageURL = result.url;
                    await user.save();
                    return res.status(200).json(result.url);
                }
                return res.status(403).json("email not valid");
            }
            return res.status(200).json(result);
        })
        .catch(error => res.status(500).json({ message: 'Image upload failed, with this error: ' + error }));
  });

// Route for handling file uploads to Cloudinary
app.post('/api/upload', parser.single('video'), (req, res) => {
    const result = async () => {
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "video",
        });
        return { url: uploadResult.url };
    };
    result()
        .then(result => {
            res.status(200).json(result) // The uploaded video's URL is returned as a JSON response
        })
        .catch(error => res.status(500).json({ message: 'Video upload failed, with this error: ' + error }))
});

const getTokenFrom = request => {
    const authorization = request.get('Authorization')
    if(authorization && authorization.startsWith('Bearer '))
        return authorization.replace('Bearer ','')
    return authorization
}
// Route for uploading metadata of a post
app.post('/api/uploadMetaData',upload.none(), async (req, res) => { 
    const decodedToken = jwt.verify(getTokenFrom(req), 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTIiLCJuYW1lIjoiem9oYXIgZWRlbiBtYXlhIiwiaWF0IjoxNTE2MjM5MDIyfQ.yStqsP9WD5HmBCNRTdoatO-FgOpWmEhOCIjs7HCLTNc')
    if(!decodedToken.id)
        return res.status(401).json({ error: 'Token invalid' })
    const user = await User.findById(decodedToken.id)
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: user.id,
        date: req.body.date,
        //id: req.body.postID,
        video: req.body.videoURL,
    })

    const savedPost = await post.save();
    user.posts = user.posts.concat(savedPost._id);
    await user.save();

    res.status(200).json(savedPost);
});

// Route for retrieving a post by postID
app.get("/api/post/:postID", async(req, res) => {
    const postID = req.params.postID;
    // Find a post with the given postID
    const response = Post.findOne();
    response.where({_id: postID})
    response.populate('author', { name: 1, email: 1, token: 1, imageURL: 1 })
    try{
        const post = await response.exec();
        return res.status(200).json(post);
    } catch {
        return res.status(400).json({message: 'not identified- '+ err})
    }
})

app.post("/api/post/publish/:postID", async(req, res) => {
    const post = await Post.findOne({_id: req.params.postID});
    post.published = true;
    await post.save();
    return res.status(200).json("");
})

app.post("/api/post/delete/:postID", async(req, res) => {
    await Post.deleteOne({ _id: req.params.postID });
    return res.status(200).json("");
})

app.post("/api/resetPicture/:email", async(req, res) => {
    const user = await User.findOne({email: req.params.email});
    if(user){
        user.imageURL = undefined;
        await user.save();
    }
    return res.status(200).json("");
})

  app.post("/api/posts", async (req, res) => {
    const { published, username, take, skip } = req.body;
    let query = Post.find();
    let resCount = Post.countDocuments();
    if(published != undefined){
        query = query.where({published: Boolean(published)});
        resCount = resCount.where({ published: Boolean(published) });
    }
    if (username)
        query = query.populate({
          path: 'author',
          match: { username: username },
          select: { name: 1, email: 1, token: 1, imageURL: 1 }
        });
    else
        query = query.populate('author', { name: 1, email: 1, token: 1, imageURL: 1 })
    if (take)
        query = query.limit(parseInt(take));
    if (skip)
        query = query.skip(parseInt(skip));
    try {
      const posts = await query.exec();
      const count = await resCount.exec();
      if (!posts) {
        res.status(200).json([]);
        return;
      }
      res.status(200).json({posts: posts, count: count});
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the video posts.' });
    }
  });

  app.post("/api/posts", async (req, res) => {
    await Post.countDocuments({ published: true });
  })

////////////////////////////////////  USER  ////////////////////////////////////////
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: false,
    },
    posts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
        }
      ],
    token: String,
})

const User = mongoose.model('User', UserSchema)

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })

app.post('/api/signUp',upload.none(), async (req, res) => {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        name: req.body.fullname,
        email: req.body.email,
        username: req.body.username,
        password: passwordHash,
        imageURL: req.body.imageURL,
    })        
    //ZOHAR
    try {
        const result = await user.save();
        res.status(200).json(result);
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.email)
            res.status(403).json({ message: 'Email already exists. Please choose a different email.' });
        else if (err.code === 11000 && err.keyPattern && err.keyPattern.useruame)
            res.status(400).json({ message: 'UserName already exists. Please choose a different UserName.' });
        else if(err.name === 'ValidationError' && err.errors.email)
            res.status(402).json({ message: 'Email is not in a proper format or already exist'});
        else
            res.status(400).json({message: 'not identified- '+ err})
    };
    return;
});


app.post('/api/login',upload.none(), async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username: username });
    if (!user)
        return res.status(404).json({message: 'User does not exist'});

    const userForToken = {
        username: user.username,
        id: user._id,
    }
    const token = jwt.sign(userForToken,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTIiLCJuYW1lIjoiem9oYXIgZWRlbiBtYXlhIiwiaWF0IjoxNTE2MjM5MDIyfQ.yStqsP9WD5HmBCNRTdoatO-FgOpWmEhOCIjs7HCLTNc')
    
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) 
        return res.status(401).json({error: 'incorrect credentials'});
    try{
        await User.updateOne({ username: username },{ $set: { token: token }});
        res.status(200).send({ token, username: user.username, name: user.name, email: user.email, imageURL: user.imageURL })
    }
    catch{
        return res.status(500).json({error: 'an error ocuured'});
    }
})


// Start the server
const server = app.listen(3001, () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});



