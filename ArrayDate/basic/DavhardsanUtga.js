let simple = [4, 2, 34, 4, 1, 12, 1, 4], daraalal = [];
for(i = 0; i < simple.length; i ++){
    for(j = 0; j < simple.length; j ++){
        if ( i !== j){
            if (simple[i] == simple[j]){
                b = simple[j]
                break
            } 
        }
    }
    j = 0
    if (! daraalal.includes(b)){
        daraalal.push(b)
    } 
}
console.log(daraalal);
    