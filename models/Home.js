const mongoose = require('mongoose')

const HomeSchema = new mongoose.Schema({
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    heading: {type: String, required: true}
})

let Home = module.exports = mongoose.model('Home', HomeSchema);