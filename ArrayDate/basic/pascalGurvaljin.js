let mur = 5, start = 1, array = [1];
for (i = 1; i <= mur ; i++ ){
    console.log(array);
    if (array.length >= 2){
        for (j = 0; j <=5 ; j++){
            let a  = [ array[j] + array[j+1]]
            console.log(a);
        }
    }else {
        array[array.length ] = 1
    }
} 