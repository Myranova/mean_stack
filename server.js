var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developpement';

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

mongoose.connect("mongodb://localhost/multivision");

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

var messageSchema = mongoose.Schema({message : String}); // Create a database class (schema)
var Message = mongoose.model("Message", messageSchema); // Create a ...
var mongoMessage = new Message({message : "Hello Im the best"}); //create an object of the schema

mongoMessage.save(function(err, doc) {
    Message.findOne().exec(function(err, messageDoc) {
        mongoMessage = messageDoc.message;
    }) 
})

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
})

app.get('*', function(req, res) {
    res.render('index', {
        mongoMessage : mongoMessage
    });
})

app.listen(3030);

console.log("listening to port : " + 3030);