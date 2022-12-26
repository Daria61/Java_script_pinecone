<<<<<<< HEAD
document.getElementById("red").style.color = "red"
document.getElementById("green").style.color = "green"
document.getElementById("blue").style.color = "blue"
document.getElementById("black").style.color = "black"
let img = document.querySelector("img");
let sp = document.querySelector("#red");
sp.addEventListener("click", changeImg)
function changeImg(){
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/768px-Solid_red.svg.png?20150316143248"
}
=======
document.getElementById("red").style.color = " red "
document.getElementById("green").style.color = "green "
document.getElementById("blue").style.color = " blue "
document.getElementById("black").style.color = " black "
document.getElementById("yellow").style.color = " yellow "
document.getElementById("orange").style.color = " orange "

let sp = document.getElementsByTagName("li");
let img = document.getElementsByTagName("img");
sp[0].addEventListener("click", changeImg)

>>>>>>> feca83bbd8d886c0d18a09702d8d5f96d9c098b3

let green = document.querySelector("#green")
green.addEventListener("click", changeG)
function changeG(){
    img.src = "https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bottle-green-solid-color-background.jpg"
}
let blue = document.querySelector("#blue")
blue.addEventListener("click", changeB)
function changeB(){
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/768px-Solid_blue.svg.png?20150316143734"
}

let black = document.querySelector("#black")
black.addEventListener("click", chanageBL)
function  chanageBL(){
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/330px-Black_colour.jpg"
}