import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    author: {type: String, reqiured: true},
    title: {type: String, reqiured: true},
    content: {type: String, reqiured: true},
    image: {type: String, reqiured: true}
})

export default mongoose.model('Post', Post) 