const mongoose = require('mongoose');
const Home = require('../models/Home.js');
const Work = require('../models/Work.js');
const Header = require('../models/Header.js');
// const { works } = require('./AdminController.js');

class HomeController {

    index(req, res) {
        Home.findOne({}, function(err, data) {
            res.render('home', { data: data || {} });
        });
    }

    async update(req, res) {
        const { author, title, content, image } = req.body;
        const home = await Home.update({ title: req.body.title, content: req.body.content })
        res.redirect('/admin/home');
    }

    async header(req, res) {
        const { heading } = req.body;
        const headtitle = await Home.update({ heading: req.body.heading })
        res.redirect('/admin/home');
    }

    search(req, res) {
        const keywords = req.body.keywords;
        Work.find({ content: { $regex: keywords, $options: '$i' } })
            .then(data => {
                res.render('search', { data: data });
            })
    }

}

module.exports = new HomeController();