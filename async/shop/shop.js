let products = [ 
    {id : 1, name : "Backbag", shopid : 1},
    {id : 2, name : "shoes", shopid : 1},
    {id : 3, name : "t-shirt", shopid : 1},
    {id : 4, name : "case", shopid : 1},
    {id : 5, name : "headphone", shopid : 1},
    {id : 6, name : "neckless", shopid : 2},
    {id : 7, name : "shoe", shopid : 2},
    {id : 8, name : "e-shirt", shopid : 2},
    {id : 9, name : "phone", shopid : 2},
    {id : 10, name : "gloves", shopid : 2},
    {id : 11, name : "Backbag", shopid : 3},
    {id : 12, name : "shoes", shopid : 3},
    {id : 13, name : "t-shirt", shopid : 3},
    {id : 14, name : "case", shopid : 3},
    {id : 15, name : "headphone", shopid : 3}
]
let shops = [
    {id : 1, name: "Nomin"},
    {id : 2, name :"Sansar"},
    {id : 3, name : "Ulaanbaatar"}
]
function findByProductId(id){
    let prom = new Promise((resolve, reject) => {
        let product = "";
        for (i = 0; i < products.length; i++){
            if (products[i].id == id){
                product = products[i].shopid
            }
        }
        if (product != -1){
            resolve(product)
        } else {
            reject("not found")
        }
    })
    return prom
}
function findShop (shopid){
    let prom = new Promise((resolve, reject) => {
        let shop = ""
        let shopNer = ""
       for (i = 0; i < shops.length; i++){
        if (shops[i].id == shopid){
            shop = shops[i].id
        }
       }
       if (shop != -1 ){
        resolve(shop)
       } else {
        reject("shop not found")
       }
    })
    return prom
}
function findSamePro (shop){
    let prom = new Promise((resolve, reject) =>{
        let SamePro = []
        for (i = 0; i < products.length ; i ++){
            if (shop == products[i].shopid){
                SamePro.push(products[i])
            }
        }
        if (SamePro != -1){
            resolve(SamePro)
        }else {
            reject("Ijil buteegdehuuun bhgui")
        }
    })
    return prom
}
async function showNow(id){
    try{
        let FindID = await findByProductId(id)
        let shop = await findShop(FindID)
        let findPro = await findSamePro(shop)
        let mainProduct = document.getElementById("FirstProduct")
        let row = ""
        for (i = 0 ; i < findPro.length; i ++){
           row +=`
            <p>baraa ner:${findPro[i].name}</p>
            <p>id: ${findPro[i].id}</p>`
        }
        mainProduct.innerHTML = row
    }catch (error){
        console.log("err");
    }
}
showNow(12)
