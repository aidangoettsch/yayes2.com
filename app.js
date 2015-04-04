var express = require('express');
var path = require('path');
var app = express();

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    fs.readdir(path.join(process.cwd(), "controllers"), function (err, files) {
        if (err) {
            console.log("Error loading controllers: " + err);
            throw err;
        }
        for (var controller in files) {

        }
    });
    console.log('Server listening at http://%s:%s', host, port);
});
exports = {app: app};