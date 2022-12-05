// let urtni = 5, string = " ";
// for (let i = 1; i <= urtni; i++){
//     string = string +" " + i 
//     console.log(string);
// }

let start = 5 , string = " ", e = 0 , davtalt = start;
while (davtalt > 0){
    e ++
    for (let i = start; i >= e; i--){
        string = string + " " + i 
    }
    console.log(string);
    string = " "
    davtalt --
}