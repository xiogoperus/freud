
const Article = require('../models/Article.js');

class ArticleController {
    async create(req, res) {
        const {author, title, content, image} = req.body;
        const article = await Article.create({ author, title, content, image })
        res.redirect('/admin/new');
    }   

    index(req, res) {
        Article.find({}, function (err, data) {
            res.render('articles', {data: data})
        });      
    }

    getOne(req, res) {
        const {id} = req.params
        const data = Article.findById(id);
        res.render('article', {data: data})
    }

    async update(req, res) {
        
    }

    async delete(req, res) {

    }



}

module.exports =  new ArticleController();