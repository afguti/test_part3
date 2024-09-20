require('dotenv').config()
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI;

console.log("The URI:",url)

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'MongoDB rocks',
  important: false,
})

note.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

//Note.find({}).then(result => {
//    result.forEach(note => {
//        console.log("note:",note)
//    })
//    mongoose.connection.close()
//})