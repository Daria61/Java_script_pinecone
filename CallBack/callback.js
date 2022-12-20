let options = document.getElementsByClassName("option")
function burenBugluh (){
    document.getElementsByTagName("select")[1].disabled = false
    for (i = 0 ; i <options.length; i++){
        if (options[i] == aimagNer){
            console.log(aimagNer);
        }
    }
}

function ableSum(burenBugluh){
    let aimagNer = document.getElementsByTagName("select").value
    console.log(aimagNer);
    
}

let aimag = document.getElementsByTagName("select")[0]
aimag.addEventListener("change", burenBugluh);

let sums = [
    {id : 1, aimagId : 1, name : "Tsetserleg "},
    {id : 2, aimagId : 1, name : "Tsenher "}
]



// Цэцэрлэг хот
// Батцэнгэл сум
// Булган сум 
// Жаргалант сум 
// Ихтамир сум
// Тариат сум
// Төвшрүүлэх сум
// Хайрхан сум
// Хангай сум
// Хашаат сум
// Хотонт сум
// Цахир сум
// Цэнхэр сум
// Цэцэрлэг сум 
// Чулуут сум
// Эрдэнэмандал сум
// Өгийнуур сум
// Өлзийт сум 
// Өндөр-Улаан сум