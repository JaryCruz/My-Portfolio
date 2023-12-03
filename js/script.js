const btnMenu = document.querySelector('[data-btn-menu]')
const menu = document.querySelector('[data-menu]')
const contactForm = document.querySelector('[data-contact-form]')
const nameInput = document.querySelector('[data-name-input]')
const inputError = document.querySelector('[data-error-input]')

contactForm.addEventListener('submit', e => {
  if (!nameInput.value) {
    inputError.classList.add('shown')
    e.preventDefault()
  } else {
    inputError.classList.remove('shown')
    console.log('Shwon')
  }
})

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('shown')
  btnMenu.classList.toggle('open')
})
