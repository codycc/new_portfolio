$(document).ready(function(){

  updateInspirationTiles = function() {
      tileInterval = setInterval(function() {
        // grabbing a random number between 0 and the length of tile data array so can index that array
        tileDataRandom = Math. floor(Math. random() * (inspirationTilesData.length - 1) );
        // grabbing random number between 1 and amount of tiles
        tilesRandomNumber = 1 + Math. floor(Math. random() * 7 );
        //indexing the tiledata with the random number
        var photoReference = inspirationTilesData[tileDataRandom];
        // updating the random tile with the random css image
        var tile =  $('.tile-' + tilesRandomNumber)
        $('.tile-' + tilesRandomNumber).css({
          "background": "url(/assets/"+ photoReference + ")",
          "background-size" : "cover"
          });

      }, 4000);
  }

  // $('.inspiration-link').hover( function(e) {
  //   e.preventDefault();
  //   helper();
  //
  //   $('.inspiration-tiles').addClass('visible');
  //   $('.hero-jumbo').animate({"width": "90%"});
  // });

  // $('.inspiration-link').mouseleave( function(e) {
  //   e.preventDefault();
  //   helper();
  // });



});
