let saveBtn = document.getElementById("btn")
let title = document.getElementById("title")
let category = document.getElementById("category")
let price = document.getElementById("price")
let ImgFile = document.getElementById("image")
let input = document.getElementById("id")

let radio = document.getElementsByName("isspecial")
let check = document.getElementsByName("days")

saveBtn.addEventListener("click" , OnSave);

async function OnSave(e){
    e.preventDefault();
    let isSpe = false 
    let daysStri = ""
    let method = ""
    let location = window.location.search
    let urlParam = new URLSearchParams(location)
    
    let id = urlParam.get("id")
    for(i = 0 ; i < radio.length; i++){
        if (radio[i].checked){
            isSpe = radio[i].value == "yes" ? true : false ;
        }
    }
    for( i = 0 ; i < check.length; i++){
        if(check[i].checked){
            daysStri+= check[i].value + "," 
        }
    }




    if (id){
        await fetch(`http://192.168.1.198:4040/product/${id}`, 
        {
            method : "PUT",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify({
                title : title.value,
                category : category.value,
                price : price.value,
                image :"test",
                isSpecial: isSpe,
                days: daysStri.substring(0, daysStri.length - 1),
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    } else {
        await fetch(`http://192.168.1.198:4040/product`, {
            method : "POST",
            headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                title: titleEl.value,
                category: catEl.value,
                price: priceEL.value,
                imageURL: secure,
                isSpecial: ispe,
                days: daysStr.substring(0, daysStr.length - 1), 
        })
    })
    .then((res) => res.json())
    .then((data) =>{
        window.location.href = "index.html";

    });
  }
}

function initFunc() {
    let location = window.location.search;
  
    let urlParams = new URLSearchParams(location);
    let id = urlParams.get("id");
  
    inputHid.value = id;
  
    if (id && id.length > 0) {
      fetch(`http://localhost:4040/product/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          titleEl.value = data.product.title;
          catEl.value = data.product.category;
          priceEL.value = data.product.price;
  
          let str = data.product.isSpecial ? "yes" : "no";
  
          for (let i = 0; i < radio.length; i++) {
            if (radio[i].value == str) {
              radio[i].checked = true;
            }
          }
  
          let arr = data.product.days.split(",");
          for (let i = 0; i < checkMul.length; i++) {
            for (let x = 0; x < arr.length; x++) {
              if (checkMul[i].value == arr[x]) {
                checkMul[i].checked = true;
              }
            }
          }
        })
        .catch((err) => console.log(err));
    }
  }