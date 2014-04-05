var $ = require("../../../bower_components/jquery/jquery.min.js");

var MenuControl = can.Control({
  init: function(element, options) {
    this.element.html(can.view("menuTemplate"), {});

    switch (window.location.hash) {
      case "#gallery":
        $("#galleryMenuButton").trigger("click");
        break;
      case "#disclaimer":
        $("#disclaimerMenuButton").trigger("click");
        break;
      default:
        $("#galleryMenuButton").trigger("click");    
    }
  },
  "#galleryMenuButton click": function(el, ev) {
    setActive(el);
    $("#content").html(can.view("galleryTemplate"), {});
    $("#blueimp-gallery").data("useBootstrapModal", false);
  },
  "#disclaimerMenuButton click": function(el, ev) {
    setActive(el);
    $("#content").html(can.view("disclaimerTemplate"), {});
  }
});
exports.MenuControl = MenuControl;

var setActive = function(el) {
  $('.navbar li.active').removeClass('active');
  $(el).parent().addClass("active");
};
