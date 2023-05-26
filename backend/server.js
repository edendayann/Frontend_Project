const express = require("express");
const cors = require('cors');
const multer = require('multer')
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dcnbvgpbm',
  api_key: '765212827232443',
  api_secret: 'Mm-lfxue0-fIRQFzZw9yIhGKJ8c',
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        resource_type: 'video',
    },
});
const parser = multer({
    storage: multer.diskStorage({}),
});

const mongoURL = `mongodb+srv://hazaniz:zohar112@cluster0.1s9hgkt.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set('strictQuery',false)
mongoose.connect(mongoURL)

const mongoSchema = new mongoose.Schema({
    userName: String,
    date: String,
    postID: String,
    videoURL: String,
})
const Post = mongoose.model('Post', mongoSchema)
mongoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

app.post('/api/upload', parser.single('video'), (req, res) => {
//   try {
//     if (!req.video) {
//       res.status(400).json({ message: 'No video file provided' });
//       return;
//     }
//     const result = async () => await cloudinary.v2.uploader.upload(req.file.path, { resource_type: 'video' });
//     res.json({ public_id: result.public_id, url: result.secure_url });
//     res.header("Access-Control-Allow-Origin", "*");

//   } catch (error) {
//     console.error('Error uploading video:', error);
//     res.status(500).json({ message: 'Video upload failed' });
//   }

const result = async () => {
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "video",
    });
    return { url: uploadResult.url };
};
result()
    .then(result => {
        console.log(result.url)
        res.json(result)
    })
    .catch(err => {
        res.json(err)
    })
});

app.post('/api/uploadMetaData',upload.none(), (req, res) => {
    const post = new Post({
        userName: req.body.userName,
        date: req.body.date,
        postID: req.body.postID,
        videoURL: req.body.videoURL,
    })
    post.save().then(result => {
        res.json(result);
        console.log("result: "+result.userName+", "+result.date+", "+result.postID+", "+result.videoURL);
        mongoose.connection.close();
    }).catch(err => res.json(err))
});

app.get('/api/video', (req, res) => {
    Post.findById(req.body.postID).then(result => {
        console.log(result.videoURL)
        res.json(result.videoURL)
    }).catch(err => res.json("video not found: "+err))
})



// Start the server
const server = app.listen(3001, () => {
    const port = server.address().port;
    console.log(`Server is running on port ${port}`);
});
