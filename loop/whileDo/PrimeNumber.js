let n = prompt("too oruul ");k =0, res = false
while(k <= 100){
    if (n != k){
        if (n % k == 0 ){
            res = true 
         } else {
             res = false 
         }
    } else {
        
    k++
}


if (res){
    console.log("Prime bish ");
} else {
    console.log("mun");
}
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