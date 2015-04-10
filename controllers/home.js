module.exports = function (app) {
  var controller = {
    router: {}
  };
  controller.router.getIndex = function(req, res) {
    res.render("home/index", {title: "Test"});
  };
  return controller;
};