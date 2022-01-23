const mongoose = require('mongoose');
const Training = require('../models/Training.js');

class TrainingController {
    create(req, res) {
        const {author, title, content, image} = req.body;
        const work = Work.create({ author, title, content, image })
        res.redirect('/admin/works/new');
    }   

    index(req, res) {
        res.render('training');     
    }

    course(req, res) {
        res.render('training');     
    }

    order(req, res) {
        res.render('training');     
    }

    getOne(req, res) {
        let id = req.params.id.toString()
        Training.findById(id, (err, data) => {
            if(err) {
                console.log(err)
            } else {
                res.render('work', {data: data})
            }
        })
        if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    }

    async update(req, res) {

    }

    async delete(req, res) {

    }



}

module.exports =  new TrainingController();