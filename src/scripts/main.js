'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('.main-image');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  // Якщо клік по <img>, беремо його батьківський <a>
  let target = event.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  // Якщо клік не по <a> — нічого не робимо
  if (target.tagName !== 'A') {
    return;
  }

  const newSrc = target.getAttribute('href');

  mainImage.setAttribute('src', newSrc);
});
