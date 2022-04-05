const openButton = document.getElementById('menu-button');
const closeButton = document.querySelector('.close');
const closeItems = document.querySelector('.closeItem');

openButton.onclick = function openMenu() {
  document.querySelector('#mobile-menu').style = 'display: block';
  document.querySelector('#menu-button').style = 'display: none';
  document.querySelector('body').style = 'overflow: hidden';
  document.querySelector('#home').style = 'backdrop-filter: blur(35px)';
  document.querySelector('#home').style = 'z-index: -1;';
};

closeButton.onclick = function closeMenu() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
};

closeItems.onclick = function closeItem() {
  document.querySelector('#mobile-menu').style = 'display: none';
  document.querySelector('#menu-button').style = 'display: block';
  document.querySelector('body').style = 'overflow: scroll';
};