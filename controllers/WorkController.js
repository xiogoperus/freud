const mongoose = require('mongoose');
const Home = require('../models/Home.js');
const Work = require('../models/Work.js');
const { works } = require('./AdminController.js');

class WorkController {
    create(req, res) {
        const {author, title, content, image} = req.body;
        const work = Work.create({ author, title, content, image })
        res.redirect('/admin/works/new');
    }   

    index(req, res) {
      
            Work.find({}, function(err, data) {
                res.render('works', {data: data})
            })       

    }

    getOne(req, res) {
        let id = req.params.id.toString()
        Work.findById(id, (err, data) => {
            if(err) {
                console.log(err)
            } else {
                res.render('work', {data: data})
            }
        })
        if( !mongoose.Types.ObjectId.isValid(id) ) return false;
    }

    new(req, res) {
        res.render('admin/works/new');
    }
    edit(req, res) {
        let checkedItemId = req.body.check;
        res.render('admin/works/edit', {checkedItemId: checkedItemId});
        console.log(checkedItemId);
    }

    async update(req, res) {
        const {author, title, content, image} = req.body;
        const work = await Work.update({ title: req.body.title, content: req.body.content })
        return res.redirect('back');
    }

    delete(req, res) {
        let checkedItemId = req.body.check;
        
        if(typeof checkedItemId === "string"){
            Work.findByIdAndDelete(checkedItemId, function(err){
                if(err){
                    console.log('error');
                    return;
                }
            });
        }
        else if(typeof checkedItemId === "object"){
            for(var i = 0 ; i < checkedItemId.length ; i++){
                Work.findByIdAndDelete(checkedItemId[i], function(err){
                    if(err){
                        console.log('error');
                        return;
                    }
                });
            }
        }
        return res.redirect('back');
    }

    

}

module.exports =  new WorkController();