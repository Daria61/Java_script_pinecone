let Perarray = []
let inform = ''
fetch(" https://randomuser.me/api ")
.then((res) => res.json())
.then((data) => {
    Perarray = {...data}
    console.log(Perarray);
    allWorkWell()
})
.catch((err) => console.log(err))

function Name(){
    let first = Perarray.results[0].name.first
    let last = Perarray.results[0].name.last
    let tit = Perarray.results[0].name.title
    let gender = Perarray.results[0].gender
    let phone = Perarray.results[0].phone
    let age = Perarray.results[0].registered.age
    let city = Perarray.results[0].location.city
    let nameTxt = `
    <h1 id="name"> Name : ${tit}  ${first}  ${last}</h1>
     <p id="gender"> Gender : ${gender}</p>
     <p id="phone">Phone :${phone}</p>
     <p id="age">Age :${age}</p>
     <p id="city">City : ${city}</p>`
    return nameTxt
}
function img(){
    let pic = Perarray.results[0].picture.large
    let img = document.getElementById("img")
    img.innerHTML = `<img src ="${pic}">`
}
async function allWorkWell(){
    let all = await Name()
    console.log(all);
    let pic = await img()
    console.log(pic);
    let infor = document.getElementById("information")
    infor.innerHTML = all
}