var routes = {
  "home-link" : {
    url: "/",
    area: "home-page"
  }
};

$(function () {
  $.fn.extend({
    polymerAjaxInit: function () {
      for (var route in routes) {
        $("." + route).click(function (e) {
          route = routes[$(e.target).attr("class")];
          $.pjax({url: route.url, container: route.area, fragment: route.area})
        });
      }
    }
  })
});