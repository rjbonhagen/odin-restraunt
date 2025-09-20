
import "./styles.css"
import "./load-home"
import loadMenu from "./images/load-menu"
import loadHome from "./load-home"
loadHome()

const navBtns = document.querySelectorAll("button")
const home = document.querySelector(".home")
home.classList.add("active")
const content = document.querySelector("#content")

navBtns.forEach((btn) => btn.addEventListener("click", () => {
    content.innerHTML = ""
    navBtns.forEach((btn) => btn.classList.remove("active"))
    btn.classList.add("active")
    let page = btn.classList.item(0)
    switch (page) {
        case "home":
            loadHome()
            break
        case "menu":
            loadMenu()
            break
        case "about":
            loadContact()
            break
    }

}))


