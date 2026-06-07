'use strict';

const gallery = document.querySelector('.gallery');
const mainImage = document.querySelector('#largeImg');

gallery.addEventListener('click', (ev) => {
  ev.preventDefault();

  let target = event.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName !== 'A') {
    return;
  }

  const newSrc = target.getAttribute('href');

  mainImage.setAttribute('src', newSrc);
});
