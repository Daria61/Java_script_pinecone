let rd = prompt("ID-gaa oruulna uu");
let n1 = Number.isInteger(Number(rd.substring(0,1))), n2 = Number.isInteger(Number(rd.substring(1,2))) ;
if (rd.length == 10 && n1 == false  && n2 == false ){ console.log("amjilttai");
}else{ console.log("buruu bna");}


// let rd = prompt("ID-gaa oruulna uu");
// console.log(Number.isInteger(Number(rd)))


//     let rd = prompt("ID-gaa oruulna uu");
// if (rd.length == 10 ){
//     let useg = rd.substr(0,1);
//     let type = Number(useg);
//     if (type == useg ){
//         console.log("ehnii useg buruu bn")
//     } else {
//         let usegg = rd.substr(1,1);
//         let typp = Number(usegg);
//         if ( typp == usegg ){
//             console.log("hoyr dah useg buruu bn")
//         }else {
//             let useg = rd.substr(2,10)
//             let boolll = Number.isInteger((Number(useg)))
//             if  ( boolll == true ){
//                 console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа");
//             } else{
//                 console.log("too ni buruu ")
//             }
//         } 
//     }
// } else {
//     console.log("id 2 useg 8 toonoos buteh ystoi")
// }