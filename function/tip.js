let dun = [ 3000, 27500, 100_000];
function niit(mungu){
    let niitt = 0
    for (let i = 0 ; i < dun.length; i++){
        if (dun[i] > 5000 && dun[i] < 30000 ){
            x = dun[i] * 1.15
            console.log(x);
        }else {
            x = dun[i] * 1.2
            console.log(x);
        }
        niitt += x  
    }
    console.log(niitt);
    
} 

function nemelt(mungu){
    for (let i = 0 ; i < dun.length; i++){
        if (dun[i] > 5000 && dun[i] < 30000 ){
            x = dun[i] * 0.15
            console.log("15% nemelt une " + x);
        }else {
            x = dun[i] * 0.2
            console.log( "20% nemelt une " + x);
        }
    }
} 
function tulburDund(mungu){
    let niitt = 0
    for (let i = 0 ; i < dun.length; i++){
        if (dun[i] > 5000 && dun[i] < 30000 ){
            x = dun[i] * 1.15
        }else {
            x = dun[i] * 1.2
        }
        niitt += x  
    }
    console.log("niit tulburiin dundaj " + Math.floor(niitt / dun.length));
    
}
niit(dun)
nemelt(dun)
tulburDund( dun)