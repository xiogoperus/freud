const Work = require('../models/Work.js');

class AdminController {
    async index(req, res) {
        res.render('admin/index')
    }

    async home(req, res) {
        res.render('admin/home')
    }

    works(req, res) {
        Work.find({}, function(err, data) {
            res.render('admin/works', {data: data})
        })    
    }

    articles(req, res) {
        res.render('/admin/articles');
    }

    async training(req, res) {
        
    }

    async video(req, res) {
        
    }

    async analytics(req, res) {
        
    }


}

module.exports =  new AdminController();