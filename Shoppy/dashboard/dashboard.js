let table = document.getElementById("productList")

getData()
 function getData(){
    let row = ''
    fetch("http://192.168.1.198:4040/product")
    .then((res)=> res.json())
    .then((data) => {
        console.log(data);
        data.product.map(({_id, category, title , price, description , isSpecial, }, index)=>{
            row += ` <tr>
                    <td>${index + 1}</td>
                    <td>${title}</td>
                    <td>${price}</td>
                    <td>${category}</td>
                    <td>${description}</td>
                    <td>${isSpecial ?  "Yes" : "No"} </td>
                    <td> <a href = "productNew.html?id=${_id}" class ="btn btn-secondary text-light">Edit</a>
                    <a onclick = "deleteProduct('${_id}')" class = "btn bg-danger text=light"> Delete</a></td>
                     </tr>`
        })
        table.innerHTML = row 
    })
    .catch((err) => console.log(err))
 }
 function deleteProduct(id){
    let val = window.confirm("are sure to delete?")
    if(val){
        fetch(`http://192.168.1.198:4040/product/${id}`,{
            method: "DELETE",
            headers : {"Content-Type": "application/json"},
        })
        .then((res) => res.json())
        .then((data) =>{
            window.location.href = "index.html";
        })
    }
 }