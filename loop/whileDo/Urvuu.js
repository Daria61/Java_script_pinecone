let urvuu = "12345", bb, uuvru = 0, kk= 0; 
for ( y = urvuu.length; y > 0 ; y-- ){
    bb =urvuu % 10 
    console.log(urvuu);
    uuvru = uuvru+ bb.toString()
    urvuu = Math.floor(urvuu / 10 )
}
console.log(Number(uuvru));