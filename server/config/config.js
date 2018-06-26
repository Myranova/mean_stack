var path = require('path'); //voir la classe précisemment

var rootPath = path.normalize(__dirname + "../../../") //what is normalize ?

module.exports = { //why exports and not just require ?
    developpement : {
        db : "mongodb://localhost/multivision",
        rootPath : rootPath,
        port : process.env.PORT || 3030
    },
    production : {
        db : "mongodb://Myranova:POKEMYRE978@ds263660.mlab.com:63660/axel",
        rootPath : rootPath,
        port : process.env.PORT || 80
    }
}