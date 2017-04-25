$( document ).ready(function() {
  $('.navbar-brand').click( function(e) {
    e.preventDefault();
    helper();
    $(".portfolio").removeClass('visible');
    $(".inspiration-tiles").removeClass('visible');
    $('.about-me').removeClass('visible');
    $('.hero-jumbo').addClass('visible');
    cyclePortfolio();
  });
});
