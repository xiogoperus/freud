const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const multer = require('multer');
const bcrypt = require('bcryptjs');

const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const config = require('../config/database');
const passport = require('passport');
require('../config/passport')(passport);

app.use(passport.initialize());
app.use(passport.session());

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = express-messages(req, res);
  next();
});

// Multer
const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './uploads/images');
        },
        filename: function (request, file, callback) {
            callback(null, Date.now() + file.originalname);
        },

});

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 3,
    },
})

// Controllers
const HomeController = require('../controllers/HomeController.js');
const WorkController = require('../controllers/WorkController.js');
const VideoController = require('../controllers/VideoController.js');
const ArticleController = require('../controllers/ArticleController.js');
const TrainingController = require('../controllers/TrainingController.js');
const QuestionController = require('../controllers/QuestionController.js');
const AdminController = require('../controllers/AdminController.js');
const UserController = require('../controllers/UserController.js');

// Routes
router.get('/', HomeController.index);
router.get('/works', WorkController.index);
router.get('/works/:id', WorkController.getOne);
router.get('/articles', ArticleController.index);
router.get('/articles/:id', ArticleController.getOne);
router.get('/training', TrainingController.index);
router.get('/video', VideoController.index);
router.get('/video/:id', VideoController.getOne);
router.get('/question', QuestionController.index);
router.get('/question/:id', QuestionController.getOne);

router.get('/course', TrainingController.course);
router.get('/order', TrainingController.order);
// Admin Routes
router.get('/admin', AdminController.index);
router.get('/admin/home', AdminController.home);
router.get('/admin/works', AdminController.works);
router.get('/admin/articles', AdminController.articles);
router.get('/admin/training', AdminController.training);
router.get('/admin/video', AdminController.video);
router.get('/admin/analytics', AdminController.analytics);
router.get('/admin/works/new', WorkController.new)
router.get('/admin/works/edit', WorkController.edit)
router.post('/admin/works/add', upload.single('image'), WorkController.create)
router.post('/admin/works/delete',  WorkController.delete)
router.post('/admin/works/update',  WorkController.update)
router.post('/admin/articles/add', ArticleController.create)
router.post('/admin/home/add', HomeController.update)
router.post('/admin/header/change', HomeController.header);
// Auth & Reg Routes
router.get('/register', UserController.index);
router.post('/register', UserController.register);
router.get('/login', UserController.loginPage);
router.post('/login', UserController.login);
router.post('/search', HomeController.search);
module.exports = router;