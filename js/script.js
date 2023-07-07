const btnMenu = document.querySelector('[data-btn-menu]')
const menu = document.querySelector('[data-menu]')

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('open')
  menu.classList.toggle('shown')
})