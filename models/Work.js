const mongoose = require('mongoose')

const WorkSchema = new mongoose.Schema({
    title: { type: String, reqiured: true },
    content: { type: String, reqiured: true },
    image: { type: String, reqiured: true },
    heading: [{ type: mongoose.Types.ObjectId, ref: 'Home' }]
})

let Work = module.exports = mongoose.model('Work', WorkSchema);