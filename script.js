window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-main');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});
