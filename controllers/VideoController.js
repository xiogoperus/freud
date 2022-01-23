const mongoose = require('mongoose');
const Video = require('../models/Video.js');

class VideoController {
    create(req, res) {
        const {author, title, content, image} = req.body;
        const work = Video.create({ author, title, content, image })
        res.redirect('/admin/video/new');
    }   

    index(req, res) {

        Video.find({}, function(err, data) {
            res.render('video', {data: data})
        })       
    }

    getOne(req, res) {
        let id = req.params.id.toString()
        Video.findById(id, (err, data) => {
            if(err) {
                console.log(err)
            } else {
                res.render('video', {data: data})
            }
        })
        if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    }

    async update(req, res) {

    }

    async delete(req, res) {

    }



}

module.exports =  new VideoController();