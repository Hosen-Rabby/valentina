$(".banner_slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1,

draggable: true,
    autoplay: true,
    autoplaySpeed: 800,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1500,
    infinite: true,
    cssEase: 'ease-in-out',
})

$(".screenshot-slider").slick({
  dots: true,
  arrows: false,
infinite: true,
speed: 300,
slidesToShow: 5,
slidesToScroll: 1,
})



$(".team-slider").slick({
  dots: false,
  arrows: false,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
})


$(".details-slider").slick({
  dots: false,
  arrows: false,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
asNavFor:'.img-slider',
})


$(".img-slider").slick({
dots: true,
 arrows: false,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
centerMode:true,
centerPadding:"0",
asNavFor:'.details-slider',
})

$('.venobox').venobox(); 