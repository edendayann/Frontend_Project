const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer') // multer for handling file uploads
const upload = multer({ dest: 'uploads/' });  //sets the destination folder for uploaded files.
const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt')
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

// Defines a Mongoose schema for the Post model
const mongoSchema = new mongoose.Schema({
    userName: String,
    date: String,
    postID: String,
    videoURL: String,
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
        .catch(error => res.status(500).json({ message: 'Video upload failed' }))
});

// Route for uploading metadata of a post
app.post('/api/uploadMetaData',upload.none(), (req, res) => {
    const post = new Post({
        userName: req.body.userName,
        date: req.body.date,
        postID: req.body.postID,
        videoURL: req.body.videoURL,
    })
    // Save the post to the database
    post.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {res.status(400).json(err)})
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
    FullName: String,
    Email: String,
    UserName: String,
    Password: String,
})

const User = mongoose.model('User', UserSchema)
UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
}})

// usersRouter.post('/api/uploadUserData', async (request, response) => {
//     const { fullName, email, userName, password } = request.body
  
//     const passwordHash = await bcrypt.hash(password, 10)
//    // check email
//     const user = new User({
//         FullName: fullName,
//         Email: email,
//         UserName: userName,
//         Password: passwordHash,
//     })

//     const savedUser = await user.save()
//     response.status(201).json(savedUser)
//   })

app.post('/api/uploadUserData',upload.none(), async (req, res) => {
    
    const passwordHash = await bcrypt.hash(req.body.password, 10)

    const user = new User({
        FullName: req.body.fullName,
        Email: req.body.email,
        UserName: req.body.userName,
        Password: passwordHash,
    })

    user.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => {res.status(400).json(err)})
});


// Start the server
const server = app.listen(3001, () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});



