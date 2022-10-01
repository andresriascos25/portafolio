const menu = document.getElementById('menu');
const backdrop = document.getElementById('backdrop');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

const menuOptions = document.getElementById('menu-options');

menuOptions.addEventListener('click', () => {
  menu.classList.remove('open');
  backdrop.classList.remove('open');
})

menuOpen.addEventListener('click', () => {
  menu.classList.add('open');
  backdrop.classList.add('open');
}); 

menuClose.addEventListener('click', () => {
  menu.classList.remove('open');
  backdrop.classList.remove('open');
});