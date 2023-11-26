const btnMenu = document.querySelector('[data-btn-menu]')
const menu = document.querySelector('[data-menu]')

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('shown')
  btnMenu.classList.toggle('open')
})
