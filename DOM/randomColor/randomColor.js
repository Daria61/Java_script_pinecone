document.querySelector("#btn").style.border = "1px solid black"
document.querySelector("#btn").style.display = " inline-block"
document.querySelector("#btn").style.padding = " 20px"
document.querySelector("main").style.height = " 400px"
document.querySelector("main").style.backgroundColor ="Yellow"
var btn = document.querySelector("#btn")
btn.addEventListener("click", randomCol)

function randomCol (){
    a = Math.random()*200 + 55
    b = Math.random()*200 + 55
    c = Math.random()*200 + 55
    document.querySelector("main").style.backgroundColor ="rgb(" + a + "," + b + "," + c + ")"
}