var mongoose = require('mongoose');

mongoose.connect('mongodb://stacy:stacygirl@ds035607.mlab.com:35607/testtom', function (error) {
    if (error) {
        console.log(error);
    }
});

module.exports = mongoose.connection;
