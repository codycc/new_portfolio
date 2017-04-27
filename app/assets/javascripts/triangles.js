$( document ).ready(function() {
    var triangle = $('.triangle');
    var rectangle = $('.rectangle');
    var rectangle2 =$('.rectangle-2');
    var firstName = $('.first');
    var lastName = $('.last');
    var whiteBlock = $('.white-block');


    firstName.animate({"margin-left": "-110px"}, 1500);
    lastName.animate({"margin-right": "-110px"}, 1500);



    $(whiteBlock).animate({right: "0px"}, 3500);
    $(whiteBlock).fadeOut();



});
