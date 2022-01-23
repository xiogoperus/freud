const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/router');
const config = require('./config/database');
const passport = require('passport');
const hbs = require("hbs");

require('./config/passport')(passport);
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.json())
app.use('/', router)



async function startApp() {
    try {
        mongoose.connect(config.database);
        
        const db = mongoose.connection
        db.once('open', _ => {
            console.log('Database connected:', config.database)
        })

        db.on('error', err => {
            console.error('connection error:', err)
        })

        app.listen(PORT, () => {
            console.log("Server running on port " + PORT);
        });

    } catch (e) {
        console.log(e);
    }
}

startApp();