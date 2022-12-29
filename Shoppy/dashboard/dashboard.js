let table = document.getElementById("productList")

getData()
 function getData(){
    let row = ''
    fetch("http://192.168.1.198:4040/product")
    .then((res)=> res.json())
    .then((data) => {
        console.log(data);
        data.product.map(({_id, category, title , price, description , isSpecial, }, index)=>
        row += ` <tr>
        <th scope="row"></th>
        <td>${index + 1}</td>
        <td>${title}</td>
        <td>${price}</td>
        <td>
            ${category}
        </td>
        <td>
            ${description}
        </td>
        <td>${isSpecial} ?  Yes : No</td>
      </tr>`
        )
        table.innerHTML = row 
    })
    
 }