// // while  
// //1
// let a = 0
// while (a < 10){
//     console.log(a);
//     a++
// }
// //2 
// let b =0 
// while (a < 10){
//     if (a % 2 !== 0){
//         console.log(a);
//     }
//     a ++;
// }
// //3 
// let c =0 
// while (a < 10){
//     if (a % 2 == 0){
//         console.log(a);
//     }
//     a ++;
// }

// //4 
// let d = 0, e = 0;
// while (a < 100){
//     e = e + a;
//     a ++
// }
// console.log(e);

// //5
// let q = 10, t = 1 , niil = 0 ;
// while (t <= q){
//     console.log(t);
//     niil = niil + t  
//     t ++ ; 
// }
// console.log(niil );
//13 
var k  = "12345678", n = 0 ;
console.log(k);
while (k > 0){
    n = Math.floor(k / (10 ** (k.length-1)))
    console.log(n);
    k = Math.floor(k % (10 ** (k.length-1 )))
    console.log(k);
    if (n == 1){
        console.log("neg");
    } else if (n == 2){
        console.log("hoyr");
    } else if (n == 3){
        console.log("gurav");
    } else if (n == 4){
        console.log("duruv");
    } else if (n == 5){
        console.log("tav");
    } else if (n == 6){
        console.log("zurgaa");
    } else if (n == 7){
        console.log("doloo");
    } else if (n == 8){
        console.log("naim");
    } else if (n == 9){
        console.log("ys");
    }

} 
// for 
//1 
for (let i = 1; i <= 10 ; i++){
    console.log(i);
}
//2
for (let i = 1; i <= 10 ; i++){
    if (i % 2 !== 0){
        console.log(i);
    }
}
//3
for (let i = 1; i <= 10 ; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
//4
let ll = 0; 
for (let i = 1; i <= 100 ; i++){
    ll = i + ll;
}
console.log(ll);
// 5 
let niilber = 0, garaasToo = 55;
for (let hh = 1; garaasToo >= hh; hh++){
    console.log(hh);
    niilber = niilber + hh ;
}
console.log(niilber);
//6 
let ww = 7, mess;
for (let ii = 2; ii < 10 ; ii++){
    if( ww % ii == 0){
        if (ww == ii ){
            mess = true 
        } else {
            mess = false 
            break
        }
        
    }else {
        mess = true
    }
}
if (mess){
    console.log("prime");
} else {
    console.log(" not prime");
}
// 7 
let garaasAvna = 10;
for  ( let toolol = 1;toolol < garaasAvna; toolol ++){
    for( let  oo = 1; oo < 100; oo ++){
        for( let qq = 1; qq < 10 ; qq++){
            if( oo % qq == 0){
                if (oo == qq ){
                    mess = true 
                } else {
                    mess = false 
                    break
                }
            }else {
                mess = true
            }
        }
        if (mess){
            console.log(oo);
        }
    }
}

//8 
let  urjiver= 1;
for (nnn = 1; nnn <= 10 ; nnn ++){
    urjiver = urjiver * nnn
}
console.log(urjiver);
//9 
let ugugdsun = "123456789", tsNiilber= 0, tsimp =0, urt = 0;
urt = ugugdsun.length
for (let pp = urt; pp > 0 ; pp--){
    tsimp = ugugdsun % 10 
    tsNiilber = tsNiilber + tsimp
    ugugdsun = Math.floor(ugugdsun / 10)
}
console.log(tsNiilber);
// 10 
// let gg = 0;
// for (let uu = 1; uu < 50; uu ++){
//     if (uu % 2 !== 0){
//         gg = gg + uu 
//         console.log(uu);
//     }
// }
// console.log(gg);
// 11
let gg = 0;
for (let uu = 1; uu < 50; uu ++){
    if (uu % 2 == 0){
        gg = gg + uu 
        console.log(uu);
    }
}
console.log(gg);
//12 
let urvuu = "12345", bb, uuvru = 0, kk= 0; 
for ( y = urvuu.length; y > 0 ; y-- ){
    bb =urvuu % 10 
    console.log(urvuu);
    uuvru = uuvru+ bb.toString()
    urvuu = Math.floor(urvuu / 10 )
}
console.log(Number(uuvru));
