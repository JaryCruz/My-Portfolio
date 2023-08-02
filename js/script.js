const btnMenu = document.querySelector('[data-btn-menu]')
const menu = document.querySelector('[data-menu]')

btnMenu.addEventListener('click', () => {
  const iconMenu = btnMenu.querySelector('i')

  iconMenu.classList.toggle('fa-bars')
  iconMenu.classList.toggle('fa-xmark')
  menu.classList.toggle('shown')
})