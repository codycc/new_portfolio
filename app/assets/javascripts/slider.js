$(document).ready(function(){



  //checking if the running count is greater or equal to the array length, if so, set back to zero
  function checkPortfolioLength() {
    if (count >= portfolioWork.length || count < 0) {
      count = 0;
    } else {
      console.log('count is within array length');
    }
  }

  function portfolioHelper() {
    $('.project-name').hide();
  }

  //this is only called when clicking portfolio button, which will reset the running count and slider
  cyclePortfolio = function() {
    portfolioHelper();
    count = 0;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // updating the count to cycle through data plus count
  function cyclePortfolioNext() {
    portfolioHelper();
    count += 1;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // updating the count to cycle through data minus count
  function cyclePortfolioPrev() {
    portfolioHelper();
    count -= 1;
    checkPortfolioLength();
    var project = portfolioWork[count];
    updatePortfolio(project);
  }

  // the function that actually updates the elements
  function updatePortfolio(project) {
    $('.project-name').text(project.name);
    $('.project-name').fadeIn(2000);
    $(".project-image").css("background-image", "url(" + project.image + ")");
  }


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
