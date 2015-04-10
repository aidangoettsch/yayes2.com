module.exports = function (app, collection) {
  var controller = {
    router: {}
  };
  controller.router.getIndex = function (req, res) {
    var presentations = [];
    collection.find({}).toArray(function (err, docs) {
      if (err) {
        console.error("Error getting presentations: " + err);
        return;
      }
      presentations = docs;
    });
    res.render("presentations/index", {presentations: presentations, title: "Presentations"});
  };
  controller.router.show = function (req, res) {
    res.render("presentations/show", {title: "Presentations"});
  };
  controller.router.getAdd = function (req, res) {
    res.render("presentations/add", {title: "Presentations"});
  };
  controller.router.getEdit = function (req, res) {
    res.render("presentations/edit", {title: "Presentations"});
  };
  controller.router.add = function (req, res) {
    res.render("home/index");
  };
  controller.router.edit = function (req, res) {
    res.render("home/index");
  };
  controller.router.deleteObj = function (req, res) {
    res.render("home/index");
  };
  return controller;
};