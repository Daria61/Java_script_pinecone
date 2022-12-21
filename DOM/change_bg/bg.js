let main = document.getElementsByClassName("main")[0]
let btn = document.createElement("button")
btn.innerHTML = "change background"
let yellow = document.createElement("p")
yellow.id = "yellow"
yellow.innerHTML = "yellow"
let red =  document.createElement("p")
red.id = "red"
red.innerHTML = "red"
main.appendChild(btn)
main.appendChild(red)
main.appendChild(yellow)


btn.addEventListener('click', function(){
    document.querySelector("#yellow").style.backgroundColor = "yellow"
    document.querySelector("#red").style.backgroundColor = "red"
})