var express = require('express');
var path = require('path');
var fs = require('fs')
var app = express();
var controllers = [{}];

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  fs.readdir(path.join(process.cwd(), "controllers"), function (err, files) {
    if (err) {
      console.error("Error loading controllers: " + err);
      throw err;
      process.exit();
    }
    for (var controllerFile in files) {
      var controllerName = files[controllerFile].split(".")[0];
      console.info("Loading controller: " + controllerName);
      var controllerPath = path.join(process.cwd(), "controllers/") + controllerName + ".js"
      var modelPath = path.join(process.cwd(), "models/") + controllerName + ".json"
      var controller = require(controllerPath)(app);
      var model;
      fs.readFile(modelPath, function (err, data) {
        if (err) {
          console.error("Error loading model %s: %s", modelPath, err);
          throw err;
          process.exit();
        }
        model = JSON.parse(data.toString());
        controllers[controllers.length] = {
          name: controllerName,
          object: controller,
          model: model
        };
        console.info(controllers);
      });
    }
  });
  console.info('Server listening at http://%s:%s', host, port);
});
exports = {app: app, controllers: controllers};