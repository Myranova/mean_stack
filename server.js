var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy; //What is that ?

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developpement';

var app = express();

var config = require("./server/config/config")[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);

var User = mongoose.model("User");
 //New Way to Write mongoose.model ?
passport.use(new LocalStrategy( //what is a local strategy ?
    function(username, password, done)
    {
        User.findOne({username:username}).exec(function(err, user) {
            if (user) {
                return done(null, user);
            } else {
                return (done(null, false)); //what is done ??
            }
        })
    }
));

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, user_id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({_id : id}).exec(function(err, user)
    {
        if (user) {
            return done(null, user);
        }
        else {
            return (done, false);
        }
    });
})

app.listen(config.port);

console.log("listening to port : " + config.port);