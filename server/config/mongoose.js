var mongoose = require("mongoose");

module.exports = function(config) {
        mongoose.connect(config.db);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error...'));
        db.once('open', function callback() {
        console.log('multivision db opened');
    });

    var userSchema = mongoose.Schema(
        {
            firstName : String,
            lastName : String,
            userName : String
        });

    var User = mongoose.model('User', userSchema);
    
    User.find({}).exec(function(err, collection)
    {
        if (collection.length === 0 ) {
            User.create({firstName : 'Axel', lastName : 'MYRE', userName : 'Myranova'});
            User.create({firstName : 'Nadir', lastName : 'Arbia', userName : 'Analyze'});
            User.create({firstName : 'Alex', lastName : 'Dulorier', userName : 'HolyReformed'});
        }
    })
}