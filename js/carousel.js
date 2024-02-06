$(document).ready(function () {
  // Função para configurar o Slick Carousel
  function configureSlick(selector, slidesToShow, prevArrow, nextArrow) {
    $(selector).slick({
      slidesToShow: slidesToShow,
      infinite: false,
      slidesToScroll: 1,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
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
          breakpoint: 9999,
          settings: {
            centerMode: false,
            centerPadding: '0px'
          }
        }
      ]
    });
  }

  // Configuração do Slick Carousel para o carrossel de estudos de caso
  configureSlick('.carousel-case-studies', 4, false, false);

  // Configuração do Slick Carousel para o carrossel de marcas
  configureSlick('.carousel-brands', 1, '<button type="button" class="slick-prev">Previous</button>', '<button type="button" class="slick-next">Next</button>');

  // Configuração do Slick Carousel para o carrossel genérico
  configureSlick('.carousel', 3, false, false);
});
