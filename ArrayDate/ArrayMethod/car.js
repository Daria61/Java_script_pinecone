let carBrands = [ 
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];

//1
let input = "a", booll = 0;
for ( i = 0 ; i < carBrands.length; i ++ ){
    if( input.toUpperCase() == carBrands[i][0].substring(0, 1)){
        console.log(carBrands[i]);
        booll ++
    } 
}
if (booll <= 0){
    console.log("oldsongui");
}

//2
let uls = "USA", bool = 0;
for ( i = 0 ; i < carBrands.length; i ++ ){
    if( uls.toUpperCase() == carBrands[i][1]){
        console.log(carBrands[i]);
        bool ++
    } 
}
if (bool <= 0){
    console.log("oldsongui");
} 

// 3 
let  boolll = 0, ulsuud = [] , text = "";
for ( i = 0 ; i < carBrands.length; i ++ ){
    ulsuud.push(carBrands[i][1])
}
ulsuud.sort()
console.log(ulsuud);

for (i = 0 ; i < ulsuud.length; i++){
    if (ulsuud[i] == ulsuud[i+1]){
        text += ulsuud[i] + " 2, "
    } else {
        if (ulsuud[i] !== ulsuud[i - 1]){
            text += ulsuud[i] + " 1,  "
        }
    }
}
console.log("Niit " + carBrands.length + " mur medeelel bna. " + text ) ;