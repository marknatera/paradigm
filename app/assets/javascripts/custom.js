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
    if(document.body.scrollTop > 550)
      $('#logotop').fadeIn( "slow", function() { });
      else
        $('#logotop').fadeOut( "slow", function() { });
      });

      $('a#srolltotop').click(function(){
        $('html, body').animate({scrollTop:0}, 100);
        return false;
      });
    });
