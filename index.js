document.getElementById('menu-button').onclick = function openMenu() {
  if (document.getElementById('mobile-menu').style !== 'display: block') {
    document.getElementById('mobile-menu').style = 'display: block';
    document.getElementById('menu-button').style = 'display: none';
  }
};

document.getElementById('close').onclick = function openMenu() {
  if (document.getElementById('mobile-menu').style !== 'display: none') {
    document.getElementById('mobile-menu').style = 'display: none';
    document.getElementById('menu-button').style = 'display: block';
  }
};