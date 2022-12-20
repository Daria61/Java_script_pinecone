let sumBtn = document.getElementsByTagName("button")[0]
let utga = document.getElementsByTagName("input")
sumBtn.addEventListener("click", Uzuuleh)

let prom = new Promise((resolve, reject) =>{
    let utga = document.getElementsByTagName("input")
    for (i = 0 ; i < utga.length; i++){

        console.log(utga[0].value);

        if(utga[i].value == ""){
            reject("error")
            break;
        } else {
            resolve("sucess")
        }
    }
})

 function Uzuuleh(event){

    event.preventDefault();
    prom.then((res)=> {
        console.log(res);
        // medee = "succes"
            let not = document.getElementById("medeelel")
            not.innerHTML = "Amjelttei nemlee"
    })
    prom.catch((err)=>{
        // medee = "error"
        console.log(err);
        let not = document.getElementById("medeelel")
        not.innerHTML = "Zaaval bugdiin buglunu uu"
    })
 

 }



