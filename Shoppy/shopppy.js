let allProduct = []
let wishList = []
let list = document.getElementById("list")
let cate =document.getElementById("catgo")
let aside = document.getElementById("asideCate")
let input = document.getElementById("input")
let wish = document.getElementById("wish")
let wishNum = 0
wish.innerHTML = wishNum
fillproduct()
function fillproduct(){
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        allProduct = [...data.products]
        console.log(allProduct);
        inner()
        categorFill()
    })
    .catch((err)=> console.log(err))
}
function inner(para){
    let row = ''
    list.innerHTML = "";
    (para ? (para.length == 0 ? [] : para) : allProduct).map((a) =>{
        row+= `<div class = "col-4 "> 
        <div class = "m-2 border rounded p-0">
        <img class = "rounded" src="${a.images[0]}">
        <div class = "m-3 ">
        <h5>${a.title}</h5>
        <p>Price: ${a.price}</p>
        <p class = "descrip">Description: ${a.description}</p>
        <button class ="btn btn-primary" onclick="AddWish('${a.id}')" >Add Wish List</button>
        </div>
        </div></div>`
    })
    list.innerHTML = row
}
function categorFill(){
    let row = ""
    let rowarr = []
    allProduct.map((a) =>{
       if(!rowarr.includes(a.category)){
        rowarr.push(a.category)
       }
    })
    rowarr.map((a) =>{
        row +=
        `<p class = "ms-3 col" onclick = "Category('${a}')">${a}</p>`
    })
    cate.innerHTML = row
    aside.innerHTML = row
}


input.addEventListener("input", (e) => {
   let filtedProduct = allProduct.filter((a) => {
    return a.title.includes(e.target.value) == true
   })
   inner(filtedProduct)
})
function Category(which){
    let filtedByCate = allProduct.filter((b) =>{
        return b.category.includes(which) == true
    })
    inner(filtedByCate)
}
function AddWish(id){
    confirm("Are yuo sure to add your wish list?")
    if(confirm){
        wishNum ++
        allProduct.map((a) =>{
            if(a.id == id){
                wishList.push(a)
            }
        })
    } 
    console.log(wishList);
    wish.innerHTML = wishNum
}