var on, sar, udur;
on = prompt("on oruulna uu ")
if (on.length <= 4 && on > 0) {
    if (on.length < 2) {
        on = "000" + on
    } else if (on.length < 3) {
        on = "00" + on
    } else {
        on = on
    }
    sar = prompt("sar oruulna uu ")
    if (sar <= 12 && sar > 0) {
        let uld = sar % 2
        if (uld == 0) {
            if (sar ==  2) {
                udur = prompt("udur oruulna uu ")
                if (udur <= 28 && udur > 0) {
                    let zuvUdur = udur.length < 2 ? udur = "0" + udur : udur;
                    let zuvSdur = sar.length  < 2 ? sar = "0" + sar : sar
                } else {
                    window.alert(" ene sariin  udruud 28 ees baga baih ystoi, mun 0ees ih baih ystoi dahin oruulna uu")
                }
            } else if (sar >= 8) {
                udur = prompt("udur oruulna uu ")
                if (udur <= 31 && udur > 0) {
                    let zuvSdur = sar.length < 2 ? sar = "0" + sar : sar;
                    let zuvUdur = udur.length < 2 ? udur = "0" + udur : udur
                } else {
                    window.alert("ene sariin  udruud 31 ees baga baih ystoi, mun 0ees ih baih ystoi dahin oruulna uu")
                }
            } else {
                udur = prompt("udur oruulna uu ")
                if (udur <= 31 && udur > 0) {
                    let zuvSdur = sar.length < 2 ? sar ="0" + sar : sar;
                    let zuvUdur = udur.length < 2 ? udur = "0" + udur : udur
                } else {
                    window.alert("ene sariin  udruud 31 ees baga baih ystoi, mun 0ees ih baih ystoi dahin oruulna uu")
                }
            }
        } else {
            udur = prompt("udur oruulna uu ")
            if (sar >= 9) {
                if (udur <= 30 && udur > 0) {
                    let zuvSdur = sar.length < 2 ? sar = "0" + sar : sar;
                    let zuvUdur = udur.length < 2 ? udur = "0" + udur : udur;
                } else {
                    window.alert("ene sariin  udruud 30 ees baga baih ystoi, mun 0ees ih baih ystoi dahin oruulna uu");
                }
            } else {
                if (udur <= 31 && udur > 0) {
                    let zuvSdur = sar.length < 2 ? sar = "0" + sar : sar;
                    let zuvUdur = udur.length < 2 ? udur = "0" + udur : udur;
                } else {
                    window.alert("ene sariin  udruud 31 ees baga baih ystoi, mun 0ees ih baih ystoi dahin oruulna uu");
                }
            }
        }

    } else {
        window.alert(" sar 12 oos baga baih ystoi, mun 0 ees ih bhg ystoi  dahin oruulna uu");
    }
} else {
    window.alert(" jil 4 uus baga baihystoi dahin oruulna uu");
}
console.log("\"" + on + "-" + sar + "-" + udur + "\"");

// 2 
var utas = prompt("utasnii dugaaraa oruul")
let shalga = utas.length < 8 ? "Utasnii dugaar 8n orontoi baih ystoi": ""
if (utas.length == 8 ){
    if (utas.charAt(0, 1)== 8){
        if ( utas.charAt( 1,1) == 8  || utas.charAt(1,1)== 0 || utas.charAt(1,1)== 9 ||utas.charAt( 1,1) == 6  ){
            console.log("Unitel");
        }else if ( utas.charAt( 1,1) == 3  ){
            console.log("G-mobile");
        }
        else{
            console.log("burtgelgui");
        }
    } else if (utas.charAt(0, 1)== 9){
        if (utas.charAt( 1,1) == 9  || utas.charAt(1,1)== 5 || utas.charAt(1,1)== 5 ){
            console.log("mobicom");
        } else if (utas.charAt(1,1) == 0 || utas.charAt(1,1) == 1 || utas.charAt(1,1) == 6){
            console.log("skytel");
        } else if (utas.charAt(1,1) == 7 || utas.charAt(1,1) == 8 || utas.charAt(1,1) == 3){
            console.log("G-mobile");
        } 
    } else {
        window.alert(" utasnii dugaaraa zuv oruulna uu ")
    }

} else{
    window.alert(" utasnii dugaaraa zuv oruulna uu ")
}