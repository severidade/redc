$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    centerPadding: '20px',
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
