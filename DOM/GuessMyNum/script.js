let newOne = document.getElementsByClassName("again")[0]
newOne.addEventListener("click", newStart)
let a = Math.floor(Math.random()*20 + 1), score = 20, amjelt = 0;

let check = document.getElementsByClassName("check")[0];
check.addEventListener("click", start);

function newStart (){
    a = Math.floor(Math.random()*20 + 1)
    console.log(a);
    score = 20, amjelt = 0;
    document.getElementsByClassName("score")[0].innerHTML = score
    document.getElementsByClassName("highscore")[0].innerHTML = amjelt
    document.getElementsByClassName("message")[0].innerHTML = "Тааж эхлээрэй..."
}

function start (){
    let too = document.getElementsByClassName("guess")[0].value;
    console.log(a);
    if (Number(too) == too ){
        if ( too > a){
            document.getElementsByClassName("message")[0].innerHTML = "Тоо их байна!!!"
            score -= 1
            console.log(score);
            document.getElementsByClassName("score")[0].innerHTML = score
            lost()
        } else if ( too == a ) {
            document.getElementsByClassName("message")[0].innerHTML = "Зөв байна!!!"
            amjelt = amjelt + 1
            document.getElementsByClassName("highscore")[0].innerHTML = amjelt
        } else {
            document.getElementsByClassName("message")[0].innerHTML = "Тоо бага байна!!!"
            score -= 1
            console.log(score);
            document.getElementsByClassName("score")[0].innerHTML = score
            lost()
        }
    } else {

        document.getElementsByClassName("massage").innerHTML = "Тоо оруулна уу!!!"
    }
}

function lost (){
    if (score == 0){
        document.getElementsByClassName("message")[0].innerHTML = "Та хожигдолоо!!!"
        score = 20, amjelt = 0;
        document.getElementsByClassName("score")[0].innerHTML = score
        document.getElementsByClassName("highscore")[0].innerHTML = amjelt
    }
}


