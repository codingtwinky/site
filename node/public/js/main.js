var $ = require('../../bower_components/jquery/dist/jquery.js');
jQuery = $;
require('../../bower_components/canjs/can.jquery.js');
require('../../bower_components/canjs/can.object.js');
require('../../bower_components/canjs/can.control.plugin.js');
require('../../bower_components/bootstrap/dist/js/bootstrap.min.js');
require("../../bower_components/blueimp-gallery/js/jquery.blueimp-gallery.min.js");
require("../../bower_components/blueimp-bootstrap-image-gallery/js/bootstrap-image-gallery.min.js");
require("../../bower_components/jquery.slimscroll/jquery.slimscroll.min.js");

var menu = require('./source/MenuControl.js');

$(document).ready(function() {
    new menu.MenuControl("#menuContainer");
    $(".addPopover").popover();
    $("#content").slimScroll({
      height: "100%",
      railVisible: true,
      alwaysVisible: false,
      color: '#cccccc',
      disableFadeOut: true
    });
});