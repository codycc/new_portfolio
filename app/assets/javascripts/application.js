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
//= require_slider



var count = 0;
var tileDataRandom;
var tilesRandomNumber;
var tileInterval;
var cyclePortfolio;
var updateInspirationTiles;
var helper;
var updateContactTiles;
var contactTileDataRandom;

// used on inspiration pages
var inspirationTilesData = ["drake_photo.jpg",
 "hong_kong.jpg",
  "lil_yachty.jpeg",
  "elon_musk.jpg",
  "sydney_photo_2.jpg",
  "nike_image.jpg",
  "me_photo_2.jpg",
  "taronga_photo.jpg",
  "toronto_image_2.jpg",
  "beach_image.jpg",
  "faith_photo.jpg"
];


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
  {
    "name": "ICC Sydney",
    "link": "www.iccsydney.com.au",
    "image": "sydney_icc_image.jpg"
  },
  {
    "name": "EFIC: Export Credit Agency",
    "link": "www.efic.gov.au",
    "image": "efic_image.jpg"
  },
  {
    "name": "Sydney Writer's Festival",
    "link": "www.sydneywritersfestival.com.au",
    "image": "sydney_writers_image.jpg"
  },
  {
    "name": "Deepend Group",
    "link": "www.deependgroup.com.au",
    "image": "deepend_image.png"
  }
];

$("a").click(function(e){
  if ($(this).css('opacity')==0) e.preventDefault();
});


function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:

preload([
    '/assets/beach_image.jpg',
    '/assets/drake_photo.jpg',
    '/assets/elon_musk.jpg',
    '/assets/hong_kong.jpg',
    '/assets/lil_yachty.jpeg',
    '/assets/me_photo_2.jpg',
    '/assetsme_photo.jpg',
    '/assets/nike_image.jpg',
    '/assets/sydney_photo.jpg',
    '/assets/taronga_photo.jpg',
    '/assets/toronto_image_2.jpg',
    '/assets/toronto_image.jpg',
    '/deepend_image.png',
    '/efic_image.jpg',
    '/london_eye_image.jpg',
    '/sydney_icc_image.jpg',
    '/sydney_tower_image.jpg',
    '/sydney_writers_image.jpg'

]);



//helper functions
helper = function() {
  clearInterval(tileInterval);
}
