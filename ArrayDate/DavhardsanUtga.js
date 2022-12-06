let simple = [4, 2, 34, 4, 1, 12, 1, 4];
for(i = 0; i < simple.length; i ++){
    for(j = 0 ; j< simple.length; j ++){
        if (simple[i] == simple[j]){
            console.log(simple[i]);
            break
        } 
    }
}
