// 1
// function many(a , b){
//     if (a < b){
//         console.log("ih too ni " + b);
//     } else {
//         console.log("ih too ni " + a);
//     }
// }
// many( -1, 9)
//2
let arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20] , ugsun = 20;
function ijilToo( array, ugugdul){
    let unen = true ;
    for(i = 0; i < array.length; i ++){
        if (array[i]== ugugdul){
            unen = true
            break
        } else {
            unen = false 
        }
    }
    if(unen){
        console.log("Toonii index " + i);
    } else{
        console.log(" -1");
    }
}
ijilToo(arr, ugsun)
//3 
