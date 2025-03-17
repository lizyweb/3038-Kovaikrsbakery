document.addEventListener('DOMContentLoaded', () => {

    //Page Slider
  
    function pageSlider() {
      $('.page-slider').slick({
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: false,
          speed: 600,
          arrows: true,
          prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
          nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
  }
  pageSlider();

  /*------------------
        Counter
    --------------------*/
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
  
    $('.owl-men-item').owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Specify custom icons for navigation
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    

  });

  document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    window.onpageshow = function(event) {
      if (event.persisted) {
        location.reload(); // Reload the page when navigated back to
      }
    };
  
  });