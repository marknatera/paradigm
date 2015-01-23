$(window).scroll(function() {
  $("#logo-main").css({
    'opacity' : 1-(($(this).scrollTop())/300)
  });
});
$(window).scroll(function() {
  $("#header-main").css({
    'opacity' : 1-(($(this).scrollTop())/500)
  });
});

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
