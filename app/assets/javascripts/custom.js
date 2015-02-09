
// All the custom js goes here!!!
// Scroll to function
$(document).on('ready page:load', function(){
  return $("a[href*=#]:not([href=#])").click(function() {
    var target;
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) {
      target = $(this.hash);
      target = (target.length ? target : $("[name=" + this.hash.slice(1) + "]"));
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

// Menu Button

var menuRight = $('#spmenu-s2'),
showRightPush = $('#showRightPush, .spmenu-overlay'),
container = $('.spmenu-push');

showRightPush.on('click', function(e){
  e.preventDefault();
  $('this').toggleClass('active');
  $(container).toggleClass('spmenu-push-toleft');
  $(menuRight).toggleClass('spmenu-open');
  $('.spmenu-overlay').toggleClass('active');
});


// Header-16 fades

$(window).scroll(function() {
  $("#center-main").css({
    'opacity' : 1-(($(this).scrollTop())/300)
  });
});
$(window).scroll(function() {
  $("#header-main").css({
    'opacity' : 1-(($(this).scrollTop())/500)
  });
});

// Nav-bar fades

$(document).ready(function() {
  $(window).scroll(function(){
    if(document.body.scrollTop > 400)
      $('#logotop').fadeIn( "slow", function() { });
      else
        $('#logotop').fadeOut( "slow", function() { });
      });

      $('a#srolltotop').click(function(){
        $('html, body').animate({scrollTop:0}, 100);
        return false;
      });
    });

$(document).ready(function() {
  $(window).scroll(function(){
    if(document.body.scrollTop > 400)
      $('#navbkg').fadeIn( "slow", function() { });
      else
        $('#navbkg').fadeOut( "slow", function() { });
      });

      $('a#srolltotop').click(function(){
        $('html, body').animate({scrollTop:0}, 100);
        return false;
      });
    });


// fadeThis. Look at http://www.jqueryscript.net/demo/jQuery-Plugin-For-Element-Fade-Slide-Effects-As-You-Scroll-FadeThis/ for more info

$(document).ready(function() {
  $(window).fadeThis({
    speed: 1000,
  });
});


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
  $('.content-23').each(function() {
    if (! isMobile.any() ) {
      $(this).parallax('50%', 0.3, true);
    } else {
      $(this).css('background-attachment', 'initial')
    }
  })
}(jQuery));

// About Page
