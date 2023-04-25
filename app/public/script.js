const menuBtn = document.querySelector('.ico_btn');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menuBtn.classList.toggle('is-active');
});
