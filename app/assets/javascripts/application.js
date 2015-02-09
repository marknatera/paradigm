// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets
//= require bootstrap.min
//= require jquery-1.10.2.min
//= require jquery.scrollTo-1.4.3.1-min
//= require modernizr.custom
//= require page-transitions
//= require easing.min
//= require jquery.svg.js
//= require jquery.svganim
//= require jquery.parallax.min
//= require startup-kit
//= require custom
//= require jquery.fadethis

// Home Page

(function($) {
  $('.header-16-sub-home').each(function() {
    if (! isMobile.any() ) {
      $(this).parallax('50%', 0.3, true);
    } else {
      $(this).css('background-attachment', 'initial')
    }
  })
}(jQuery));

(function($) {
  $('.content-20-home').each(function() {
    if (! isMobile.any() ) {
      $(this).parallax('50%', 0.3, true);
    } else {
      $(this).css('background-attachment', 'initial')
    }
  })
}(jQuery));

(function($) {
  $('.content-23-home').each(function() {
    if (! isMobile.any() ) {
      $(this).parallax('50%', 0.3, true);
    } else {
      $(this).css('background-attachment', 'initial')
    }
  })
}(jQuery));
