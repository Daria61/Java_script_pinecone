document.getElementById("contain").style.width = "300px"
document.getElementById("contain").style.height = "400px"
document.getElementById("contain").style.border = " 1px solid black"
document.getElementById("contain").style.borderRadius = "10px"
let main = document.getElementById("contain")
let image = document.createElement("img")
image.src = "https://i.pinimg.com/564x/b0/e1/86/b0e1866ee122fd2787f17d757a93e8d9.jpg"
main.appendChild(image)
document.getElementsByTagName("img")[0].style.width = " 300px"
document.getElementsByTagName("img")[0].style.height = " 250px"
document.getElementsByTagName("img")[0].style.objectFit = " cover"
document.getElementsByTagName("img")[0].style.borderRadius = "10px"

let subTitle = document.createElement("h1")
subTitle.innerHTML = "Do not touch"
main.appendChild(subTitle)
document.getElementsByTagName("h1")[0].style.textAlign = "center"

let title = document.createElement('p')
title.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio veritatis sed quia."
main.appendChild(title)
document.getElementsByTagName("p")[0].style.textAlign = "center"