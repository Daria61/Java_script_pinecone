let reArray = [[2, 1, 6, 5, 8], 6], utga = 6, a = 0;
function hasah(array, utga){
    joined = array.join()
    splited = joined.split(",")
    utga = utga.toString()
    for (i = 0; i < splited.length; i++){
        if (splited.includes(utga)){
            a = splited.indexOf(utga)
            splited.splice(a,1)
            console.log(splited);
        }
    }
}
hasah(reArray, utga)