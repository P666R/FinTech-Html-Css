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

// ppppppppppppppppp

/*
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll(
    '.features-progress-content-accordion-item'
  );

  accordionItems.forEach((item) => {
    const header = item.querySelector(
      '.features-progress-content-accordion-item-thumb'
    );
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('is-active');
      closeAllPanels();
      if (!isActive) {
        openPanel(item);
      }
    });
  });

  function closeAllPanels() {
    accordionItems.forEach((item) => {
      item.classList.remove('is-active');
      const icon = item.querySelector('.accordion-icon');
      icon.src = 'https://img.icons8.com/android/24/228BE6/plus.png';
    });
  }

  function openPanel(item) {
    item.classList.add('is-active');
    const icon = item.querySelector('.accordion-icon');
    icon.src = 'https://img.icons8.com/material-outlined/24/228BE6/minus.png';
  }
});
*/
