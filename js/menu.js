//  Open the drawer when the menu ison is clicked.
var menu_button = document.querySelector('#menu_button');
var menu_drawer = document.querySelector('.menu_drawer');
var main = document.querySelector('main');

menu_button.addEventListener('click', function(e) {
  menu_drawer.classList.toggle('open');
  e.stopPropagation();
});

main.addEventListener('click', function() {
  menu_drawer.classList.remove('open');
});
