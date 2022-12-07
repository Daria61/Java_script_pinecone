let array = [ 5, 6, 4, 12, 19, 121, 1, 7, 9, 63], tegsh = 0 , sondgoi = 0;
for (let i = 0; i < array.length; i ++){
    if (array[i] % 2 == 0){
        tegsh ++
    } else {
        sondgoi ++
    }
} 
console.log("tegsh ni " + tegsh);
console.log("sondgoi " + sondgoi);