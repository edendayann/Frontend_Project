const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer') // multer for handling file uploads
const upload = multer({ dest: 'uploads/' });  //sets the destination folder for uploaded files.
const express = require("express");
require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersRouter = express.Router()

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
        resource_type: 'video',
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
    postID: String, // TODO auto increment if prisma is deleted!
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
    videoURL: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
})

// Creates a Mongoose model named Post based on the defined schema
const Post = mongoose.model('Post', mongoSchema)
mongoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
}})

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

// Route for uploading metadata of a post
app.post('/api/uploadMetaData',upload.none(), async (req, res) => {
    const user = await User.findOne({ UserName: req.body.userName }); //TODO can be found by id- change create.tsx
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        user: user.id,
        date: req.body.date,
        postID: req.body.postID,
        videoURL: req.body.videoURL,
    })

    //EDEN: from meni's lecture- save post and update users posts. CHECK
    const savedPost = await post.save();
    user.Posts = user.Posts.concat(savedPost._id);
    await user.save();

    res.status(200).json(savedPost);
    // Save the post to the database
    // post.save()
    //     .then(result => {
    //         res.status(200).json(result);
    //     })
    //     .catch(err => {res.status(400).json(err)})
});

// Route for retrieving a video post by postID
app.get("/api/video/:postID", async(req, res) => {
    const postID = req.params.postID;
    // Find a post with the given postID
    const post = await Post.findOne({postID: postID}).exec();
    if(!post){
        res.status(200).json("");
        return;
    }
    res.status(200).json(post);
})

app.post("/api/video", async (req, res) => {
    const postIDs = req.body.postIDs;
    try {
        const posts = await Post.find({ postID: { $in: postIDs } }).exec();
        if(!posts){
            res.status(200).json("");
            return;
        }
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the video posts.' });
    }
  });

////////////////////////////////////  USER  ////////////////////////////////////////
const UserSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    },
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },
    Posts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
        }
      ],
    Token: String,
})

const User = mongoose.model('User', UserSchema)
UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
}})

app.post('/api/signUp',upload.none(), async (req, res) => {
    const passwordHash = await bcrypt.hash(req.body.password, 10)
    const user = new User({
        FullName: req.body.fullName,
        Email: req.body.email,
        UserName: req.body.userName,
        Password: passwordHash,
    })
    //ZOHAR
    user.save()
    .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
    if(err.name === 'ValidationError')
        return res.status(402).json({ message: 'Email is not in a proper format'});
    if (err.code === 11000 && err.keyPattern && err.keyPattern.Email)
        return res.status(403).json({ message: 'Email already exists. Please choose a different email.' });
    if (err.code === 11000 && err.keyPattern && err.keyPattern.UserName)
        return res.status(400).json({ message: 'UserName already exists. Please choose a different UserName.' });
    else return res
     });
});


app.post('/api/login',upload.none(), async (req, res) => {
    const { userName, password } = req.body
    const user = await User.findOne({ UserName: userName });
    //ZOHAR 
    if (!user)
        return res.status(404).json({error: 'Invalid username or password - this user does not exist'});
    const userForToken = {
        userName: user.UserName,
        id: user._id,
    }
    const token = jwt.sign(userForToken, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTIiLCJuYW1lIjoiem9oYXIgZWRlbiBtYXlhIiwiaWF0IjoxNTE2MjM5MDIyfQ.yStqsP9WD5HmBCNRTdoatO-FgOpWmEhOCIjs7HCLTNc')
    
    const passwordCorrect = await bcrypt.compare(password, user.Password);
    if (!passwordCorrect) 
        return res.status(401).json({error: 'incorrect credentials'});
    try{
    await User.updateOne({ UserName: userName },{ $set: { Token: token }});
    res.status(200).send({ token, username: user.UserName, name: user.FullName, email: user.Email })
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



