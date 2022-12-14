let container = document.getElementById("contain")
let head = document.getElementById("head")
let list = document.getElementById("list")
let headtit = document.createElement('h1')
headtit.innerHTML = "To Do List"
head.appendChild(headtit)
// years
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDay()
    let hour =d.getHours()
    let min = d.getMinutes()
    let date = document.createElement("p")
    head.appendChild(date)
    date.innerHTML = `${year}оны ${month}сарын ${day}өдөр  ${hour}цаг ${min}мин ` 
    tsag()
function tsag(){
    let d = new Date();
    let year = d.getFullYear()
    let month = d.getMonth()
    let day = d.getDay()
    let hour =d.getHours()
    let min = d.getMinutes()
    date.innerHTML = `${year}оны ${month}сарын ${day}өдөр  ${hour}цаг ${min}мин ` 
    setTimeout(tsag, 1000)
}
// list too 
let listToo = 0
let too = document.createElement("p")
too.innerHTML = `Нийт ${listToo} жагсаалт`
head.appendChild(too)
// add 
let input = document.createElement("input")
head.appendChild(input)
let btn = document.createElement("button")
btn.innerHTML = "Нэмэх"
head.appendChild(btn)



let utga = document.getElementsByTagName("input")[0].value
let text = document.createElement("div")
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    let pp = document.createElement("p")
    pp.innerHTML = utga
    let icontg = document.createElement("div")
    let icon = '<i class="bi bi-trash3"></i>'
    icontg.innerHTML = icon
    

btn.addEventListener("click", nemeh)




//  list show 
let secTwo = document.getElementById("list") 
let jagsaaltTit = document.createElement("h1")
jagsaaltTit.innerHTML ="Жагсаалт"
secTwo.appendChild(jagsaaltTit)



    
    


function nemeh (){
   if (utga.length > 1){
    listToo++

    list.appendChild(text)
    text.appendChild(checkBox)
    text.appendChild(pp)
    text.appendChild(icontg)
    
    document.getElementsByTagName("input")[0].value = ""
    too.innerHTML = `Нийт ${listToo} жагсаалт`
   }
}

icontg.addEventListener("click", deleted)
function deleted(){
    let barih = document.getElementsByClassName(index)[0]
    barih.remove()
}



