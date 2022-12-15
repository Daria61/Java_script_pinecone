// console.log(document.getElementById("aimag-101"));
// document.getElementById("aimag-101").style.color = " blue"
// document.getElementById("aimag-101").style.border =   '2px solid  black';
// document.getElementById("aimag-101").style.margin = "20px"
// document.getElementById("aimag-101").style.padding = "20px"


document.getElementById('aimagNames').style.color = "dark";
document.getElementById('aimagNames').style.border = "2px solid black";
document.getElementById('aimagNames').style.margin = "20px"
document.getElementById('aimagNames').style.padding = "50px"
document.getElementById('aimagNames').style.fontSize = "30px"
let egym = document.getElementsByTagName("li")
for (i = 0; i < egym.length; i++){
    egym[i].style.border = "2px solid blue";
    egym[i].style.margin = "20px"
    if (egym[i].id[6] == 1){
        egym[i].style.backgroundColor = "green"
    } else if  (egym[i].id[6] == 2){
        egym[i].style.backgroundColor = "red"
    } else if  (egym[i].id[6] == 3 ){
        egym[i].style.backgroundColor = "yellow"
    } else if  (egym[i].id[6] == 4){
        egym[i].style.backgroundColor = "orange"
    } else {
        egym[i].style.backgroundColor = "blue"
    }
}