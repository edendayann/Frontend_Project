// const mongoose = require('mongoose')

// if (process.argv.length<3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[1]
// const url = `mongodb+srv://hazaniz:zohar112@cluster0.1s9hgkt.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.set('strictQuery',false)
// mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)
// // const Note = require('./models/note')


// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

// // const note = new Note({
// //   content: 'HTML is Easy',
// //   important: true,
// // })

// // note.save().then(result => {
// //   console.log('note saved!')
// //   mongoose.connection.close()
// // })

// // Note.find({}).then(result => {
// //   result.forEach(note => {
// //     console.log(note)
// //   })
// //   mongoose.connection.close()
// // })