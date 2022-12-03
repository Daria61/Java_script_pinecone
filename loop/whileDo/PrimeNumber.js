let n = prompt("too oruul ");k =2, res = true
while(n > k && n < k && k < 100){
    if (n % k == 0 ){
        res= false
    }
    k++;
}

// while(k <= 100){
//     if (k < n){
//         if (n % k == 0 ){
//             res = true 
//          } else {
//              res = false 
//          }
//     } else if (k > n){
//         if (n % k == 0 ){
//             res = true 
//          } else {
//              res = false 
//          }
//     k++
//     }
// }

if (res){
    console.log("mun ");
} else {
    console.log("bish");
}


// if (k % 2 !== 0 &&  k % 3 !== 0 && k % 5 !== 0 && k % 7 !== 0){
//     if (n == k){
//         console.log("anhnii too");
//     } else{
//         console.log("anhnii too bish ");
//     }
// }  
// else {
//     console.log("anhnii too bish ");
// }