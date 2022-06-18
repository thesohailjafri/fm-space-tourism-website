window.addEventListener('hashchange', () => hashBasedSwitch())
window.addEventListener('onload', () => hashBasedSwitch())

const allHashs = ['home', 'destination', 'crew', 'technology']

const hashBasedSwitch = () => {
  closeMenu()
  const hashFor = window.location.hash.substring(1)

  switch (hashFor) {
    case 'home':
      hashBasedchanges('home')
      break
    case 'destination':
      hashBasedchanges('destination')
      break
    case 'crew':
      hashBasedchanges('crew')
      break
    case 'technology':
      hashBasedchanges('technology')
      break
    default:
      hashBasedchanges('home')
      break
  }
}

const hashBasedchanges = (hash) => {
  /* underline */
  allHashs.forEach((item) => {
    if (item === hash) {
      document.getElementById(`${item}-link`).classList.add('nav-active')
      document.getElementById(`${item}-link`).classList.remove('nav-links')
    } else {
      document.getElementById(`${item}-link`).classList.add('nav-links')
      document.getElementById(`${item}-link`).classList.remove('nav-active')
    }
  })
}
