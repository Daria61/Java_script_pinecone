let product = [ 
    {id : 1, name : "Backbag", shopid : 1},
    {id : 2, name : "shoes", shopid : 1},
    {id : 3, name : "t-shirt", shopid : 1},
    {id : 4, name : "case", shopid : 1},
    {id : 5, name : "headphone", shopid : 1},
    {id : 6, name : "Backbag", shopid : 2},
    {id : 7, name : "shoes", shopid : 2},
    {id : 8, name : "t-shirt", shopid : 2},
    {id : 9, name : "case", shopid : 2},
    {id : 10, name : "headphone", shopid : 2},
    {id : 6, name : "Backbag", shopid : 3},
    {id : 7, name : "shoes", shopid : 3},
    {id : 8, name : "t-shirt", shopid : 3},
    {id : 9, name : "case", shopid : 3},
    {id : 10, name : "headphone", shopid : 3}
]
let mainProduct = document.getElementById("FirstProduct")
let row = ""
for (i = 0 ; i < product.length; i ++){
    row+= `<p> product Name :${product[i].name}</p>
     <p>id: ${product[i].id}</p>
     <p>shopID : ${product[i].shopid}</p>
     <button onclick = "idCatch(${product[i].shopid})">Find same product</button>
     <hr>
    `
}
mainProduct.innerHTML = row
// let btn = document.getElementsByTagName("button")
// btn.addEventListener("click", idCatch)
function idCatch (shopid){
    let idcatch = new Promise((resolve, reject) => {
        if (shopid !== -1 ){
            console.log(shopid);
            resolve(shopid)
        } else{
            reject(error)
        }
    })
}
let btn = document.getElementsByTagName("button")[1]
btn.addEventListener("click", idCatch)
let sameprint = document.getElementById("SameShopPro")
let sameList = ""

function FindSame(){
    for (i = 0 ; i < product.length; i++){
        if(result == product[i].shopid){
            sameList+= `
            <p>${product[i].name}</p>
            <p>id: ${product[i].id}</p>
            `
        }
    }
}




// async function FindSame (){
//     let result = await idCatch();
//     console.log(result);
    
//     console.log(sameList);
//     mainProduct.innerHTML = ""
//     sameprint.innerHTML = sameList
// }

 