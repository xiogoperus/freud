const mongoose = require('mongoose')

const HeaderSchema = new mongoose.Schema({
    title: {type: String, reqiured: true}
})

let Header = module.exports = mongoose.model('Header', HeaderSchema);