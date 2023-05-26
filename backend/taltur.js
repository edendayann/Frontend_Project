// const express = require("express");
// const app = express();
// const mongoose = require('mongoose')
// const multer = require('multer')
// const upload = multer()
// const cors = require('cors');
// const axios = require("axios");
// const { CloudinaryStorage } = require('multer-storage-cloudinary');

// app.use(cors());
// // app.use(express.json());
// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//     cloud_name: 'df1goouw7',
//     api_key: '773791876458251',
//     api_secret: 'tMI5EKM_0ZxmJZLQt7qayhR0b1E'
// });
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         resource_type: 'video',
//     },
// });
// const turevichPassword = `kUJZfummfmonbKfX`
// const talPassword = `6oHFBZjb2CZgQtT0`
// const url_turvich =
//     `mongodb+srv://turevich:${turevichPassword}@hw2.yyc1lpn.mongodb.net/?retryWrites=true&w=majority`
// const url_tal = `mongodb+srv://talsandrovich:${talPassword}@cluster0.0eowmjr.mongodb.net/?retryWrites=true&w=majority`
// mongoose.set('strictQuery',false)
// mongoose.connect(url_tal)

// const videoSchema = new mongoose.Schema({
//     user: String,
//     date: Date,
//     postId: Number,
//     url: String
// })

// const videoMetadata = mongoose.model('videosMetadata', videoSchema)

// // app.delete("/api/deleteVideo", (req, res) => {
// //     cloudinary.uploader.destroy()
// // }

// // Define route handlers
// app.post("/api/uploadMetaData", upload.none(), (req, res) => {
//     const body = req.body;
//     console.log("uploading metadata")
//     uploadVideo(body);
//     res.json({ message: "Video uploaded successfully" });
// });

// const parser = multer({
//     storage: multer.diskStorage({}),
// });

// app.post("/api/uploadVideo", parser.single('file'), (req, res) => {
//     console.log("uploading video")
//     console.log("blablabla\n" + req.file.path)

//     const result = async () => {
//         const uploadResult = await cloudinary.uploader.upload(req.file.path, {
//             resource_type: "video",
//         });

//         return { url: uploadResult.url };
//     };
//     result()
//         .then(result => {
//             console.log(result)
//             res.json(result)
//         })
//         .catch(err => {
//             res.json("")
//         })


// })


// const uploadVideo = (formData) => {
//     const video = new videoMetadata({
//         user: formData.user,
//         date: formData.date,
//         postId: formData.post_id,
//         url: formData.url
//     })
//     console.log('created metadata')
//     video.save().then(result => {
//         console.log('video saved!')
//     })
// }

// app.get("/api/video", (req, res) => {
//     const postId = Number(req.query.postId);
//     console.log(`getting video for post ${postId}`)
//     videoMetadata.findOne({postId: postId})
//         .then(result => {
//             if (result)
//                 res.status(200).json(result)
//             else
//                 res.status(200).json("")
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(404).json("")
//         })
// })

// app.delete("/api/deleteVideo/:url", (req, res) => {
//     // Deletes video from cloudinary
//     const url = decodeURIComponent(req.params.url);
//     const publicIdMP4 = url.substring(url.lastIndexOf("/") + 1, url.length)
//     const publicId = publicIdMP4.substring(0, publicIdMP4.lastIndexOf("."))

//     console.log(`deleting video ${publicId}`)

//     cloudinary.uploader.destroy(publicId, {
//         resource_type: "video",
//     })
//         .then(result => {
//             console.log("deleted video from cloudinary")
//             console.log(result)
//         })
//         .catch(err => {
//             console.log(err)
//         })


//     // Deletes video from mongoDB
//     videoMetadata.deleteOne({url: url})
//         .then(result => {
//             console.log(result)
//             res.status(200).json(result)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(404).json("")
//         })

// })

// const server = app.listen(3001, () => {
//     const port = server.address().port;
//     console.log(`Server is running on port ${port}`);
// });