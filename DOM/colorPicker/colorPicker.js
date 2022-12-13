document.getElementById("red").style.color = " red "
document.getElementById("green").style.color = "green "
document.getElementById("blue").style.color = " blue "
document.getElementById("black").style.color = " black "
document.getElementById("yellow").style.color = " yellow "
document.getElementById("orange").style.color = " orange "

let sp = document.getElementsByTagName("li");
let img = document.getElementsByTagName("img");
sp[0].addEventListener("click", changeImg)



function colorChange(){
    for (i = 0; i < negym.length; i++){
        console.log("true");
        if (negym[i].id == "green"){

        }else if (negym[i].id == "blue"){

        } else if (negym[i].id == "black"){

        } else if (negym[i].id == "yellow"){

        }else if (negym[i].id == "red"){

        }else {

        }
    }
}