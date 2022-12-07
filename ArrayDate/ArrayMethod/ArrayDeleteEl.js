let reArray = [[2, 1, 6, 5, 8], 6], utga = 6, a = 0;
function ustag (array, utga){
    if (array.includes(utga)){
        let a = array.indexOf(utga)
        array.splice(a, 1)
        console.log(array);
    }
    if (array[0].includes(utga)){
        let a = array[0].indexOf(utga)
        array.splice(a, 1)
        console.log(array);
    }
}
// ustag(reArray,utga)
function hussenHasah (array, utga){
    let a = array.join()
    b = a.split(',')
    console.log(b);
    let c = b.indexOf("6")
    console.log(c);
    b.splice(a, 1)
    console.log(b);
    
}
hussenHasah(reArray, utga)

// if (b.includes(utga)){
//     let cc = b.indexOf(utga)
//     console.log(cc);
//     b.splice(a, 1)
//     console.log(b);
// }else {
//     console.log("hud");
// }