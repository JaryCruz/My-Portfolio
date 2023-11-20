const btnMenu = document.querySelector('[data-btn-menu]')
const iconMenu = btnMenu.querySelector('i')
const menu = document.querySelector('[data-menu]')

function toggleMobileMenu() {
  iconMenu.classList.toggle('fa-bars')
  iconMenu.classList.toggle('fa-xmark')

  menu.classList.toggle('shown')
}

btnMenu.addEventListener('click', toggleMobileMenu)
