 function Uzuuleh(){
    let success = document.getElementById("medeelel")
    let utga = document.querySelectorAll("input")
    let prom = new Promise((resolve, reject ) =>{
        let bool = true
        for (let i = 0 ; i < utga.length; i ++){
            if(utga[i].value.length > 0){
                bool = true
            } else{
                bool = false
                break
            }
        }
        if (bool){
            success.innerHTML = "true"
            resolve("Amjilt form ")
        }else {
            success.innerHTML = "false"
            reject("input hooson")
        }
        
    })
    prom.then((res)=> Filled()).catch(err=>console.log(err))
 }
 let ListPer = []
 function Filled() {
    let pointView = document.getElementById("listBoard")
    let row = ""
    let utga = document.querySelectorAll("input")
    ListObj = {ner :utga[0].value, ovog : utga[1].value, huis : utga[2].value, onoo : utga[3].value}
    ListPer.push(ListObj)
    console.log(ListPer);
    for (i = 0 ; i < ListPer.length; i++){
        row+=`
        <div id = "${ListPer.length}">
           <p>ner : ${ListPer[i].ner} </p>
           <p>ovog : ${ListPer[i].ovog}</p>
           <p>gender :${ListPer[i].huis}</p>
           <p>point : ${ListPer[i].onoo}</p>
           <button>+5</button>
           <button id = "${i}" onclick = "deleteFun()">delete</button>
        </div>`  
    pointView.innerHTML = row
    }
 }
 function deleteFun (id){
    console.log(id);
    let btns = document.getElementsByTagName("button")
    console.log(btns);
    for (i = 0; i <btns.length; i++){
        if (id == btns[i].id){
            console.log("olson");
            let pointView = document.getElementById("listBoard")
            let removeList = document.getElementById("0")
            console.log(document.getElementById("0"));
            pointView.removeChild(removeList)
        }
    }
 }
    
       

