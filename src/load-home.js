const hoursData = {
    Sunday: "8am - 8pm",
    Monday: "6am - 6pm",
    Tuesday: "6am - 6pm",
    Wednesday: "6am - 6pm",
    Thursday: "6am - 10pm",
    Friday: "6am - 10pm",
    Saturday: "8am - 10pm"
  };



export default function loadHome() {
    const content = document.getElementById("content")
    const containerHeader = document.createElement("div")
    const header = document.createElement("h1")

    const sumCon = document.createElement("div")
    const sum = document.createElement("div")
    const name = document.createElement("div")

    const hoursCon = document.createElement("div")
    const hoursTitle = document.createElement("div")
    const list = document.createElement("ul")

    const locCon = document.createElement("div")
    const locTitle = document.createElement("div")
    const loc = document.createElement("div")


    header.textContent = "Beary's Breakfast Bar"

    containerHeader.classList.add("header")

    containerHeader.appendChild(header)
    content.appendChild(containerHeader)

    sum.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    name.textContent = "Goldilocks"

    sumCon.appendChild(sum)
    sumCon.appendChild(name)
    sumCon.classList.add("summary")
    content.appendChild(sumCon)

    hoursCon.classList.add("hours")
    hoursTitle.textContent = "Hours"

    for (const [day, time] of Object.entries(hoursData)) {
        const li = document.createElement("li")
        li.textContent = `${day}: ${time}`
        list.appendChild(li)
    }
    hoursCon.appendChild(list)
    content.appendChild(hoursCon)

    locCon.classList.add("location")
    locTitle.textContent = "Location"
    loc.textContent = "123 Forest Drive, Forestville, Maine"

    locCon.appendChild(locTitle)
    locCon.appendChild(loc)

    content.appendChild(locCon)
}
