$(document).ready(function(){
  $('.services__slider').slick({
    arrows:true,
    dots:false,
    slidesToShow: 4,
    autoplay:true,
    nextArrow: '<div class="prev"></div>',
    prevArrow: '<div class="next"></div>',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
  $('.pluses__slider').slick({
    arrows:true,
    dots:false,
    slidesToShow: 4,
    autoplay:true,
    nextArrow: '<div class="prev white"></div>',
    prevArrow: '<div class="next white"></div>',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
  $('.news__slider').slick({
    arrows:true,
    vertical: true,
    verticalSwiping: true,
    dots:false,
    slidesToShow: 2,
    autoplay:true,
    nextArrow: '<div class="prev"></div>',
    prevArrow: '<div class="next"></div>',
    responsive:[
      {
        breakpoint: 768,
        settings: {
          arrows:false,
          slidesToShow:2
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows:false,
          slidesToShow:1
        }
      }
    ]
  });
});
