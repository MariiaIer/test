$(document).ready(function () {

  // Product gallery

  const swiperThumbs = new Swiper(".thumbsSwiper", {
    spaceBetween: 8,
    direction: "vertical",
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiperMain = new Swiper(".mainSwiper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });


  // Sizes panel

  $(".js-sidebar-open").on('click', function () {
    $("body").addClass("modal-view");
  });

  $(document).on('click', function (event) {
    if (event.target.tagName.toLowerCase() === 'body' ||
      event.target.className.includes('js-sidebar-close')) {
      $("body").removeClass("modal-view");
    }
  });

  $(document).on('click', '.js-size-option', function (event) {
    $('.js-size-recipient').text($(this).data('size'));
  });

});

