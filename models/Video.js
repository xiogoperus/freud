const mongoose = require('mongoose')

const VideoSchema = new mongoose.Schema({
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    video: {type: String, reqiured: true}
})

let Video = module.exports = mongoose.model('Video', VideoSchema);