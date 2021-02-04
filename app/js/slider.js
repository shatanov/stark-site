$(document).ready(function(){
  $('.services__slider').slick({
    arrows:true, // показать стрелки
    dots:false, // не показывать точки
    slidesToShow: 4, // показывать по 3 слайда
    autoplay:true, // автоматическое проигрывание слайдов
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
    arrows:true, // показать стрелки
    dots:false, // не показывать точки
    slidesToShow: 4, // показывать по 3 слайда
    autoplay:true, // автоматическое проигрывание слайдов
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

});
