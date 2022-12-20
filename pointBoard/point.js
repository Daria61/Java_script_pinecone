let sumBtn = document.getElementsByTagName("button")[0]
sumBtn.addEventListener("click", Uzuuleh)
 function Uzuuleh(event){
    event.preventDefault();
    let utga = document.querySelectorAll("input")
    let success = document.getElementById("medeelel")
    for (let i = 0 ; i < utga.length; i ++){
        if(utga[i].value.length == 0){
            success.innerHTML = "false"
            break
        } else{
            success.innerHTML = "true"
            Filled()
            break
        }
    }
 }
 let ListPer = []
 function Filled() {
    let pointView = document.getElementById("listBoard")
    let row = ""
    let utga = document.querySelectorAll("input")
    ListObj = {ner :utga[0].value, ovog : utga[1].value, huis : utga[2].value, onoo : utga[3].value}
    row+=`
        <div id = "${ListPer.length}">
           <p>ner : ${utga[0].value} </p>
           <p>ovog : ${utga[1].value}</p>
           <p>gender :${utga[2].value}</p>
           <p>point : ${utga[3].value}</p>
           <button>+5</button>
           <button class = "delete">delete</button>
        </div>`  
    ListPer.push(row)
    pointView.innerHTML = ListPer

    let ustag = document.getElementsByClassName("delete")
    console.log(ustag);
    ustag[0].addEventListener("click", function(){
    let pointView = document.getElementById("listBoard")
    pointView.remove()
})

 }



