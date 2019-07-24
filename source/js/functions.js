// Custom Function
$(document).ready(function () {

  new WOW().init();

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });

  // Back to top button

  if ($(".js-go-top").length) {
    var scrollTrigger = 200, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $(".js-go-top").addClass("show");
        } else {
          $(".js-go-top").removeClass("show");
        }
      };

    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });

    $(".js-go-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    });
  }

  // Toggle menu mobile

  $('.js-menu-toggle').click(function () {
    $('.js-canvas-menu').addClass('side-nav-show');
    $('.overlay-mobile').addClass('d-block');
    $('body').css('overflow-y', 'hidden');
  });

  $('.js-close-menu, .overlay-mobile').click(function () {
    $('.js-canvas-menu').removeClass('side-nav-show');
    $('.overlay-mobile').removeClass('d-block');
    $('body').css('overflow-y', '');
  });

  // Change icon when click
  $('.js-change-icon').each(function () {
    $(this).on('click', function (event) {
      event.preventDefault();
      $(this).toggleClass('change-icon');
      $(this).prev().toggleClass('change-color');
    })
  })

  // Show/hide contact content
  $(".js-contact").each( function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.js-contact-content, .js-contact-close').toggleClass('show');
    });
  });

  $(".js-contact-close").each( function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.js-contact-content, .js-contact-close').toggleClass('show');
    });
  });
});
