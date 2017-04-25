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
  "faith_photo.jpg",
  "bondi_image.jpg",
  "building_image.jpg",
  "emma_image.jpg",
  "lil_wayne.jpg",
  "louis_image.jpg",
  "sydney_image.jpg",
  "weeknd_image.jpg",
  "yeezy_image.png",
  "young_thug.jpg",
  "rihanna_image.jpg",
  "toronto_image_3.jpg",
  "travis_image.jpg",
  "winter_image.jpg",
  "daniel_image.jpg"
];


var portfolioWork = [
  {
    "name": "Sydney Tower Eye",
    "link": "https://www.sydneytowereye.com.au/",
    "image": "sydney_tower_image.jpg"
  },
  {
    "name": "London Eye",
    "link": "https://www.londoneye.com/",
    "image": "london_eye_image.jpg"
  },
  {
    "name": "ICC Sydney",
    "link": "http://www.iccsydney.com.au/",
    "image": "sydney_icc_image.jpg"
  },
  {
    "name": "EFIC: Export Credit Agency",
    "link": "https://www.efic.gov.au/",
    "image": "efic_image.jpg"
  },
  {
    "name": "Sydney Writer's Festival",
    "link": "https://www.swf.org.au/",
    "image": "sydney_writers_image.jpg"
  },
  {
    "name": "Deepend Group",
    "link": "http://www.deependgroup.com.au/",
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
    '/assets/rihanna_image.jpg',
    '/assets/toronto_image_3.jpg',
    '/assets/travis_image.jpg',
    '/assets/winter_image.jpg',
    '/assets/daniel_image.jpg',
    '/assets/bondi_image.jpg',
    '/assets/building_image.jpg',
    '/assets/emma_image.jpg',
    '/assets/lil_wayne.jpg',
    '/assets/louis_image.jpg',
    '/assets/sydney_image.jpg',
    '/assets/weeknd_image.jpg',
    '/assets/yeezy_image.png',
    '/assets/young_thug.jpg',
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
