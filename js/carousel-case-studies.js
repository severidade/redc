$(document).ready(function () {
  $('.carousel-case-studies').slick({
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    centerPadding: '20px',
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 9999, // Regra para telas maiores que 1000 pixels
        settings: {
          centerMode: false, // Desativa o centerMode em telas maiores que 1000 pixels
          centerPadding: '0px' // Define o centerPadding como '0px' em telas maiores que 1000 pixels
        }
      }
    ]
  });
});
