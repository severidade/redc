$(document).ready(function () {
  $('.carousel-brands').slick({
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 9999,
        settings: {
          centerMode: false,
          centerPadding: '0px'
        }
      }
    ]
  });
});
