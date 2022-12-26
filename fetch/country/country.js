let Countries =[]
let list = document.getElementById("ListOfcountry")
let total = document.getElementById("TotalCountry")
let input = document.getElementById("input")
let select = document.getElementById("select")
fillData()
function fillData(){
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
        Countries = [...data]
        console.log(Countries);
        CreateCard()
        regionFill()
    })
    .catch((error) => console.log(error))
}
function CreateCard(filterCountry){
    let row = ''
    list.innerHTML = ""
    if (Countries == 0){
        console.log("data i empty");
    }
    (filterCountry ? filterCountry.length == 0 ? [] : filterCountry : Countries).map((Countries) =>{
        row += `<div class="col"> 
        <a href="">
          <h6> ${Countries.name.common}</h6>
        </a>
        <span class="txt">Хүн амын тоо ${Countries.population}</span><br/>
        <span class="txt">Газар нутгийн хэмжээ ${Countries.area}</span>
        </div> <hr>`;
    })

    total.innerHTML = filterCountry ? filterCountry.length : Countries.length
    list.innerHTML = row
}
function regionFill(){
    let regionArr = []
    Countries.map((c) => {
        if(!regionArr.includes(c.region)){
            regionArr.push(c.region)
        }
    })
    for (i = 0; i< regionArr.length; i++){
        select.innerHTML += `<option value="${regionArr[i]}">${regionArr[i]}</option>`
    }
}
select.addEventListener("change", (e)=>{
    let newFiltedCountries = Countries.filter( (country) =>{
        if(input.value.length > 0){
            return (country.region == e.target.value && country.name.common.includes(input.value))
        } else {
            return country.region == e.target.value
        }
    })
    CreateCard(newFiltedCountries)

})
input.addEventListener("input", (e) => {
    let newCountries = Countries.filter(
        (co) =>{
            if (select.value != "0"){
                return(
                    co.name.common.includes(e.target.value) == true &&
                    co.region == select.value
                    )
            }else {
                return co.name.common.includes(e.target.value) == true 
            }
        }
    )
    CreateCard(newCountries)
})
function sort(para){
    if (para == 'name'){
        Countries.sort((a,b) =>
            a.name.common == b.name.common ? 0
            : a.name.common > b.name.common ? -1 
            : 1     
        )
    } else if (para == 'population'){
        Countries.sort((a,b) => b.population - a.population )
    } else {
        Countries.sort((a,b) =>b.area - a.area)
    }
    CreateCard()
}
function buleg(para){
    let row = ""
    if (para == 'firstLetter'){
        Countries.sort((a,b) =>{
            a.name.common == b.name.common ? 0
            : a.name.common > b.name.common ? 1
            : -1     
        })
        Countries.map((con) =>{
            console.log(con.name.common[0]);
            if(Countries.name.common[0] == ) 
        })
    }else {

    }
}