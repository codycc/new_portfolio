// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .


$(document).ready(function(){

  var portfolioWork = [
    {
      "name": "Sydney Tower Eye",
      "link": "www.sydneytowereye.com.au",
      "image": "sydney_tower_image.jpg"
    },
    {
      "name": "London Eye",
      "link": "www.londoneye.com",
      "image": "london_eye_image.jpg"
    },
  ];
  var count = 0;


  //checking if the running count is greater or equal to the array length, if so, set back to zero
  function checkPortfolioLength() {
    if (count >= portfolioWork.length || count < 0) {
      count = 0;
    } else {
      console.log('count is within array length');
    }
  }

  //this is only called when clicking portfolio button, which will reset the running count and slider
  function cyclePortfolio() {
    count = 0;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // updating the count to cycle through data plus count
  function cyclePortfolioNext() {
    count += 1;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // updating the count to cycle through data minus count
  function cyclePortfolioPrev() {
    count -= 1;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // the function that actually updates the elements
  function updatePortfolio(project) {
    $('.project-name').text(project.name);
    $(".project-image").css("background-image", "url(" + project.image + ")");
  }

  // JQUERY EVENTS
  $('.portfolio').click( function(e) {
    e.preventDefault();
    $(".first").addClass('hidden');
    $(".last").addClass('hidden');

    $(".buttons").addClass('show');

    cyclePortfolio();
  });

  // NEXT BUTTON SLIDER
  $('.next').click( function(e) {
    e.preventDefault();
    cyclePortfolioNext();
  });

  //PREV BUTTON SLIDER
  $('.prev').click( function(e) {
    e.preventDefault();
    cyclePortfolioPrev();
  });

});
