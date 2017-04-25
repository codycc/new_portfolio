$(document).ready(function(){

  $('.contact-link-2').click( function(e) {
    e.preventDefault();
    $('.menu-listing').addClass('visible');
    $('.menu-listing-2').removeClass('visible');
    $('.menu-listing-2').css({"z-index": -10});
    clickContact();
  });

  $('.enter-link').click( function(e) {
    e.preventDefault();
    $('.menu-listing-2').css({"display": "none"});
    $('.menu-listing').addClass('visible');
    $('.menu-listing-2').removeClass('visible');
    $('.hero-jumbo').animate({"width": "100%"}, 500);

    $('.inspiration-tiles').removeClass("visible");
    $('.mobile-nav').css({"visibility": "visible" });

  });

  $('.portfolio-link-2').click( function(e) {
    e.preventDefault();
    $('.menu-listing').addClass('visible');
    $('.menu-listing-2').removeClass('visible');
    $('.menu-listing-2').css({"z-index": -10});
    clickPortfolio();
  });

  $('.inspiration-link-2').click( function(e) {
    e.preventDefault();
    $('.menu-listing').addClass('visible');
    $('.menu-listing-2').removeClass('visible');
    $('.menu-listing-2').css({"z-index": -10});
    clickInspiration();
  });

  $('.about-link-nav').click( function(e) {
    e.preventDefault();
    clickAbout();
  });

  $('.portfolio-link-nav').click( function(e) {
    e.preventDefault();
    clickPortfolio();
  });

  $('.contact-link-nav').click( function(e) {
    e.preventDefault();
    clickContact();
  });

  $('.inspiration-link-nav').click( function(e) {
    e.preventDefault();
    clickInspiration();
  });





  $('.enter-link').hover( function(e) {
    $('.inspiration-tiles').css({"z-index": -10});
    $('.hero-jumbo').animate({"width": "90%"}, 500);
    $('.inspiration-tiles').addClass('visible');
  });


  $('.enter-link').mouseleave( function(e) {
    $('.hero-jumbo').animate({"width": "100%"},200);
      $('.inspiration-tiles').removeClass('visible');
  });



  $('.portfolio-link-2').hover( function(e) {

    $('.hero-jumbo').animate({"width": "90%"}, 500);
    $('.portfolio').css({'opacity': 1});
    cyclePortfolio();
  });

  $('.portfolio-link-2').mouseleave( function(e) {
    $('.hero-jumbo').animate({"width": "100%"},200);
    $('.portfolio').css({'opacity': 0});
  });


$('.inspiration-link').click( function(e) {
  e.preventDefault();
  clickInspiration();
});

// JQUERY EVENTS
$('.portfolio-link').click( function(e) {
  e.preventDefault();
  clickPortfolio();
});

$('.about-link').click( function(e) {
  e.preventDefault();
  clickAbout();
});

$('.contact-link').click( function(e) {
  e.preventDefault();
  clickContact();
});


function clickAbout(e) {

  helper();
  $('.about-me').addClass('visible');
  $(".portfolio").removeClass('visible');
  $('.inspiration-tiles').removeClass('visible');
  $('.contact-tiles').removeClass('visible');
  $('.hero-jumbo').removeClass('visible');
}


function clickPortfolio(e) {

  helper();
  $(".portfolio").addClass('visible');
  $(".inspiration-tiles").removeClass('visible');
  $('.about-me').removeClass('visible');
  $('.contact-tiles').removeClass('visible');
  $('.hero-jumbo').removeClass('visible');
  cyclePortfolio();
}

function clickContact(e) {

  $('.about-me').removeClass('visible');
  $(".portfolio").removeClass('visible');
  $('.contact-tiles').addClass('visible');
  $('.inspiration-tiles').removeClass('visible');
  $('.hero-jumbo').removeClass('visible');
  updateInspirationTiles();
}


function clickInspiration(e) {
  helper();
  $('.inspiration-tiles').addClass('visible');
  $(".portfolio").removeClass('visible');
  $('.contact-tiles').removeClass('visible');
  $('.about-me').removeClass('visible');
  $('.hero-jumbo').removeClass('visible');
  updateInspirationTiles();
}

});
