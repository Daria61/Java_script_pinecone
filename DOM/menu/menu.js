let menus = [
    { id : 1,
    name : "Home",
    href : "#" },
    { id : 2,
    name : "Contact",
    href : "#"
    },
    { id : 3,
    name : "About Us",
    href : "#"
    },
    { id : 4,
        name : "About Us",
        href : "#"
    }
]
let main = document.getElementById("contain")
let ul = document.createElement("ul")
for (i = 0; i < menus.length; i ++){
    let li = document.createElement("li")
    let aEl = document.createElement("a")
    aEl.innerHTML = menus[i].name
    aEl.href = menus[i].href
    li.appendChild(aEl)
    ul.appendChild(li)
}
main.appendChild(ul)
let newContent = document.createTextNode("Home");