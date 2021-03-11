function openNav() {
  const offset = "250px"
  document.getElementById("my-sidenav").style.width = offset
  document.getElementById("main").style.marginLeft = offset
  document.getElementById("menu-btn").style.marginLeft = offset
}

function closeNav() {
  const offset = 0
  document.getElementById("my-sidenav").style.width = offset
  document.getElementById("main").style.marginLeft= offset
  document.getElementById("menu-btn").style.marginLeft= offset
}

function changeColor(color, type) {
  document.getElementById("main").className = ['wrapper', ...[color, type]].join(' ')
  closeNav()
}
