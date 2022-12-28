const  params = new URLSearchParams(window.location.search)
console.log(params);
let ID = params.get("productID")
console.log(ID);
let Product =[]
fillData()
function fillData(){
    fetch (`https://dummyjson.com/products/${ID}`)
    .then((res) => res.json())
    .then((data) =>{
        console.log(data);
        Product = {...data}
        console.log(Product);
        show()
    })
}
let main = document.getElementById("main")
function show(){
    let  row  =""
    row += `
    <div class ="container row m-5">
       <div class = "col-5">
          <h5>${Product.title}</h5>
          <img src = "${Product.thumbnail}" class = "w-100 rounded">
       </div>
       <div class= "col-5">
          <div class="mt-5">
             <p class="p-0 m-0">Price</p>
             <h4 class="p-0 m-0">$${Product.price}</h4>
             <div>
                <p>${Product.description}</p>
                <p class ="col"><i class="color-warning bi bi-star-fill"></i> ${Product.rating}/5</p>
             </div>
             <div class= "row justify-content-evenly mt-3">
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[1]}"></div>
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[2]}"></div>
             <div class="col-3"><img class="w-100 rounded" src= "${Product.images[3]}"></div>
          </div>
          </div>
       </div>
    </div>
    `
    main.innerHTML = row
}