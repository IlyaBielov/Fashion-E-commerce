$(document).ready(function() {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
          items:1,
          dots: true,
          nav: false
      },
      480:{
          items:1
      }
    }
});

});
