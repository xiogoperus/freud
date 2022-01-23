const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    image: {type: String, reqiured: true}
})

let Article = module.exports = mongoose.model('Article', ArticleSchema);