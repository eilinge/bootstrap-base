var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/mutlidb', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("you are connect successfully")
});

module.exports = mongoose