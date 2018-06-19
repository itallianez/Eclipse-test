$(document).ready(function(){
   $('.tm-slider').slick({
      arrows: false,
      dots: true,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      autoplay: true,
      autoplaySpeed: 2000
  });
     $('.advantages-slider').slick({
         arrows: false,
         dots: true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        autoplay: true,
        autoplaySpeed: 2000
  });
  $('.team-slider').slick({
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    "slidesToShow": 4,
    "slidesToScroll": 1,
    autoplay: true,
    autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
    $('.main-header-button').on('click', function(){
                  $('.callback-block').fadeIn("fast");
              });
                 $('.callback-close').on('click', function(){
                  $('.callback-block').fadeOut("fast");
              });
    $('.tm-order-translate').on('click', function(){
                  $('.order-translate').fadeIn("fast");
              });
               $('.translate-close').on('click', function(){
                  $('.order-translate').fadeOut("fast");
              });
    $('.callback-button').on('click', function(){
                  $('.callback-block').fadeOut("fast");
              });
    $('.rush-translate-button').on('click', function(){
                  $('.fade-rush-translate').fadeIn(500).fadeOut(1000);
              });
    $('.footer-button').on('click', function(){
                  $('.fade-footer-question').fadeIn(500).fadeOut(1000);
              });
    $('.oral-translate-button').on('click', function(){
                  $('.fade-oral-translate').fadeIn(500).fadeOut(1000);
              });
    $('.translate-button').on('click', function(){
                  $('.fade-order-translate').fadeIn(0).fadeOut(1000);
              });
    $('.translate-button').on('click', function(){
                  $('.order-translate').fadeOut(2000);
              });
    $('.upload-file-button').on('click', function(){
                  $('.fade-upload-file').fadeIn(500).fadeOut(1000);
              });
});
