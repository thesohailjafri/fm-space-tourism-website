const openMenu = () => {
  const menu = document.getElementById('sidebar_menu')
  menu.classList.remove('translate-x-full')
}

const closeMenu = () => {
  const menu = document.getElementById('sidebar_menu')
  menu.classList.add('translate-x-full')
}
