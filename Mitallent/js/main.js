$('.top_slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true
});

var menu = $(".header");
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top >= 1 ) {
    menu.addClass('open');
  } 
  else if ( top < 1 ) {
    menu.removeClass('open');
  }
});
var login = $('.login')
var cart = $('.cart')
$(window).scroll(function() {
    var top = $(this).scrollTop();
    if ( top >= 1 ) {
        login.addClass('black');
        cart.addClass('black');
    } 
    else if ( top < 1 ) {
        login.removeClass('black');
        cart.removeClass('black');
    }
  });
  $('.main_slider_box').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1136,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 874,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 631,
        settings: {
          slidesToShow: 1,
        }
      }
  ],
});

$('.mob_button').click(function(){
  $('.menu_list').toggleClass('open');
});
$('.close').click(function(){
  $('.menu_list').toggleClass('open');
});
// $('body').click(function(){
//   if ($('.menu_list').hasClass('open')){
//     $('.menu_list').removeClass('open');
//   }
// });

