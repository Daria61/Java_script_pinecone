// const arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
// function arraySorter(ary){
//     for (let  i = 0; i < ary.length; i++){
//         for (let j = 0; j < ary.length; j++){ 
//             if(ary[j] > ary[j + 1]){
//                 var tempo = ary[j];
//                 ary[j]= ary[j + 1]
//                 ary[j + 1] = tempo
//             }
//         } 
//     }
//     console.log(ary);
// }
// arraySorter(arr)

const arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]
function arraySorter(ary){
    let bagaToo = ary[0], daraalal = []
    for (j = 0; j < ary.length; j++){
        for(i = 0 ; i < ary.length; i++){
            if (ary[i] == null){
            } else {
                if (bagaToo < ary[i]){
                } else {
                    bagaToo = ary[i]
                    a = i
                }
            }
        }
        ary[a] = null
        daraalal.push(bagaToo)
        bagaToo = daraalal[daraalal.length]
    }
    console.log(daraalal);
}
arraySorter(arr)


