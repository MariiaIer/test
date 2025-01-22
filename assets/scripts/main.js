document.addEventListener('DOMContentLoaded', () => {

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

  const sidebarOpenBtn = document.querySelector('.js-sidebar-open');
  const sizeRecipient = document.querySelector('.js-size-recipient');
  const bodyElement = document.querySelector('body');

  sidebarOpenBtn.addEventListener('click', () => {
    bodyElement.classList.add('modal-view');
  });

  document.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'body' || event.target.className.includes('js-sidebar-close')) {
      bodyElement.classList.remove('modal-view');
    }
    if (event.target.tagName.toLowerCase() === 'label') {
      sizeRecipient.innerHTML = event.target.closest('.js-size-option').dataset.size;
    }
  });

});
