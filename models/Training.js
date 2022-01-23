const mongoose = require('mongoose')

const TrainingSchema = new mongoose.Schema({
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    image: {type: String, reqiured: true}
})

let Training = module.exports = mongoose.model('Training', TrainingSchema);