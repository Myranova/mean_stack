var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developpement';

var app = express();

var config = require("./server/config/config")[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

var User = mongoose.model("User");
 //New Way to Write mongoose.model ?

console.log("After mongoose.model");
passport.use(new LocalStrategy(
    function(username, password, done)
    {
        console.log("username in passport : " + username);
        User.findOne({username:username}).exec(function(err, user) {
            if (err) {
                console.log("error");
            }
            if (user) {
                console.log("user found");
                return done(null, user);
            } else {
                console.log("user not found");
                return (done(null, false)); //what is done ??
            }
        })
    }
));

passport.serializeUser(function(user, done) {
    if (user) {
        console.log("User serialized : " + user);
        done(null, user_id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({_id : id}).exec(function(err, user)
    {
        console.log("deserialize : " + user);
        if (user) {
            return done(null, user);
        }
        else {
            return (done, false);
        }
    });
})

require('./server/config/routes')(app);

app.listen(config.port);

console.log("listening to port : " + config.port);