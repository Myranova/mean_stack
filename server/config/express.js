var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config) {
    function compile(str, path) {
        return (stylus(str).set('filename', path));
    }

console.log("config.rootPath = " + config.rootPath);
app.set('views', config.rootPath + '/server/views'); //spécifie où se trouve les vues.
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cookieParser()); //search
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(session({secret: 'multi vision unicorns',resave:false,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(stylus.middleware(
    {
        src : config.rootPath + '/public',
        compile: compile
    }
));

app.use(express.static(config.rootPath + '/public'));

}