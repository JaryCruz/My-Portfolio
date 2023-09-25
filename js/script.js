const btnMenu = document.querySelector('[data-btn-menu]')
const iconMenu = btnMenu.querySelector('i')
const btnTheme = document.querySelector('[data-btn-theme]')
const iconTheme = btnTheme.querySelector('i')
const menu = document.querySelector('[data-menu]')
const logo = document.querySelector('[data-logo]')
const footerLogo = document.querySelector('[data-footer-logo]')
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const THEME_KEY = 'JARY_THEME'

setTheme()

function setTheme() {
  if (
    localStorage.length === 0 ||
    localStorage.getItem(THEME_KEY) === DARK_THEME
  ) {
    document.body.className = DARK_THEME

    iconTheme.classList.toggle('fa-sun')
    iconTheme.classList.toggle('fa-moon')
  } else {
    document.body.className = LIGHT_THEME
    logo.classList.add('white')
    footerLogo.classList.add('white')
  }
}

function toggleMobileMenu() {
  iconMenu.classList.toggle('fa-bars')
  iconMenu.classList.toggle('fa-xmark')

  menu.classList.toggle('shown')
}

function toggleTheme() {
  iconTheme.classList.toggle('fa-sun')
  iconTheme.classList.toggle('fa-moon')

  document.body.classList.toggle(LIGHT_THEME)
  document.body.classList.toggle(DARK_THEME)

  logo.classList.toggle('white')
  footerLogo.classList.toggle('white')

  localStorage.setItem(
    'JARY_THEME',
    `${document.body.className === LIGHT_THEME ? LIGHT_THEME : DARK_THEME}`
  )
}

btnMenu.addEventListener('click', toggleMobileMenu)

btnTheme.addEventListener('click', toggleTheme)
