let mur = 11, start = 1, array = [], bigAry =[];
for (i = 0; i < mur ; i++ ){
    if(i == 0){
        array.push(start)
        bigAry.push(array)
    } else{
        array.push(start)
        lastLast = 0
        for(j = 1; j <= i - 1; j++){
            lastindex = bigAry.length - 1
            array.splice(lastLast + 1 , 0 ,bigAry[lastindex][lastLast] + bigAry[lastindex][lastLast + 1] )
            lastLast ++
        }
        array.push(start)
        bigAry.push(array)
    }
    console.log(array);
    array =[]
} 
console.log(bigAry);





