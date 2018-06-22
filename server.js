var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developpement';

if (env == "developpement") {
    mongoose.connect('mongodb://localhost/multivision');
} else {
    mongoose.connect("mongodb://Myranova:POKEMYRE978@ds263660.mlab.com:63660/axel");
}

var app = express();

function compile(str, path) {
    return (stylus(str).set('filename', path));
}

app.set('views', __dirname + '/server/views'); //spécifie où se trouve les vues.
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(stylus.middleware(
    {
        src : __dirname + '/public',
        compile: compile
    }
));

app.use(express.static(__dirname + '/public'));

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});


app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
})

app.get('*', function(req, res) {
    res.render('index', {
    });
})

var port = process.env.PORT || 3030;

app.listen(port);

console.log("listening to port : " + port);