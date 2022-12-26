let main  = document.getElementById("contain")
let date = new Date()
let year = date.getFullYear()
let day = date.getDate()
let month = date.getMonth()  + 1
let task  = 0 , id = 0
main.innerHTML = `
<div>
    <h2>To Do List App</h2>
<div id = "DateTask">
    <div>Он сар өдөр: ${year}-${month}-${day}</div>
    <div id= "taskCount">${task} task left</div>
</div>
<div id = "inputSec">
    <input placeholder="What is your task?" id = "task">
    <button>+Add</button>
</div>
 </div>
 <div>
 <h2>List</h2>
 <div id = "listCon"></div>
 </div>
 `

 let addList = document.getElementsByTagName("button")[0]
 addList.addEventListener("click" , function(){
    let valueCatch = document.getElementsByTagName("input")[0].value
    let changeTask = document.getElementById("taskCount")
    task++
    id++
    changeTask.innerHTML = `${task} task left`
    let add = document.getElementById("listCon")
    add.innerHTML = `<div id = "${id}"></div>`
    let newDiv = document.getElementById(`${id}`)
    console.log(newDiv);
    add.appendChild(newDiv)
    newDiv.innerHTML = `
    <div>
    <p>${valueCatch}</p>
   <div>
   <i class="bi bi-pencil-fill"></i>
   <i class="bi bi-trash3-fill"></i>
   </div>
    </div>`
    
    document.getElementsByTagName("input")[0].value = ""
 })