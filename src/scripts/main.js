'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  let target = ev.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName !== 'A') {
    return;
  }

  // Беремо відносний шлях
  const relativeSrc = target.getAttribute('href');

  // Формуємо повний URL, як очікує Cypress
  const fullUrl = window.location.origin + relativeSrc.replace('.', '');

  mainImage.setAttribute('src', fullUrl);
});
