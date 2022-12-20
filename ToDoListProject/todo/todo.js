let main = document.getElementById("contain")
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
let day = date.getDate()
let hour = date.getHours()
let task = []

main.innerHTML = 
`<div>
     <div>
         <h3>To Do List App</h3>
         <p>Он сар өдөрд ${year}:${month + 1}:${day}</p>
         <p id = "taskToo">${task.length}  үлдсэн</p>
         <input placeholder="white down your task">
         <button>+add</button>
     </div>
     <div>
         <h3>List</h3>
         <div id = "listCon">
         </div>
     </div>
</div>`
let addTask = document.getElementsByTagName("button")[0]
addTask.addEventListener("click", taskNem)
function taskNem(){
     console.log(document.getElementsByTagName("input")[0].value);
     let shineTask = document.getElementsByTagName("input")[0]
     let taskObj = {id:task.length, txt :document.getElementsByTagName("input")[0].value}
     task.push(taskObj)
     shineTask.value = ""
     taskHevleh()
}
function taskHevleh(){
     let ConList = document.getElementById("listCon")
     let row = ""
     for (i = 0 ; i < task.length; i++){
          row+= `
          <div  id = "${i}">
              <p>
                ${task[i].txt}
              </p>
              <i class="bi bi-trash3"></i>
              <i class="bi bi-pencil"></i>
          </div>`
     }
     ConList.innerHTML =  row
     let taskToo = document.getElementById("taskToo")
     taskToo.innerHTML = `${task.length} үлдсэн`
}
