// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if(buttonMenuMobile) {
  const menu = document.querySelector(".header .inner-menu");
  const overlay = menu.querySelector(".inner-overlay");

  buttonMenuMobile.onclick = () => {
    menu.setAttribute("show", "yes");
  }

  overlay.onclick = () => {
    menu.setAttribute("show", "");
  }
}
// End Button Menu Mobile

// Khởi tạo AOS
AOS.init();
// Hết Khởi tạo AOS

// Khởi tạo swiper blog
const swiperBlog = new Swiper(".swiper-blog", {
  slidesPerView: 1,
  spaceBetween: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
// Hết Khởi tạo swiper blog