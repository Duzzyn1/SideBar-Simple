const menuOpen = document.getElementById("menu-open")
const menuClose = document.getElementById("menu-close")

const menuContent = document.getElementById("menuContent")
const containerMenu = document.querySelector(".container__menu-items")
const containerContent = document.querySelector(".container__content")
const borderBottom = document.querySelector(".container__menu")

menuOpen.addEventListener("click", () => {
    menuContent.style.display = "flex"
    containerMenu.style.display = "none"
    containerContent.style.display = "none"
    borderBottom.style.border = "none"
})

menuClose.addEventListener("click", () => {
    menuContent.style.display = "none"
    containerMenu.style.display = "flex"
    containerContent.style.display = "block"
    borderBottom.style.borderBottom = "1px solid #2F3336"
})