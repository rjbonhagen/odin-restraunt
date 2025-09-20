export default function loadMenu() {
    const content = document.getElementById("content")
    const containerHeader = document.createElement("div")
    const header = document.createElement("h1")

    const head2Con = document.createElement("div")
    const header2 = document.createElement("h2")


    header.textContent = "Menu"
    containerHeader.classList.add("header")
    containerHeader.appendChild(header)
    content.appendChild(containerHeader)

    header2.textContent = "Beverages"
    head2Con.appendChild(header2)
    content.appendChild(head2Con)

}