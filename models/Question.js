const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    image: {type: String, reqiured: true}
})

let Question = module.exports = mongoose.model('Question', QuestionSchema);