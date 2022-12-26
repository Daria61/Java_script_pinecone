let info = {};
fetch("https://randomuser.me/api")
.then((res) => res.json())
.then((data) => {
    info = {...data}
    console.log(info);
});

let ner = document.getElementById("FistName")
let FirstName = info.results[0].name.first
console.log(ner);
ner.innerHTML = FirstName