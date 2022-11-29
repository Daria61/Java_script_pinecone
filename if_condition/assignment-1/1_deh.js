// 1 
let i = 4 > 3; //true
let iii = 4 < 3; //false 
let ii = 4 >= 3; //true
console.log( ii);
let iv = 4 <= 3; //false
console.log( iv);
let v = 4 == 4; // true
console.log( v);
let vi = 4 === 4; // true
console.log( vi);
let vii = 4 != 4; // false
console.log( vii);
let iix = 4 !== 4; // false
console.log( iix);
let ix = 4 != "4"; // false
console.log( ix);
let x = 4 == "4"; // true
console.log( x);
let xi = 4 === "4"; // false
console.log( xi); 

//2
let one = 4 > 3 && 10 < 12; // true
console.log(one);
let two = 4 > 3 && 10 > 12; // false
console.log(two);
let three = 4 > 3 || 10 < 12; // true
console.log(three);
let four = 4 > 3 || 10 > 12; //true
console.log(four);
let five = !(4 > 3);// false
console.log(five);
let six = !(4 < 3); // true
console.log(six);
let eight = !(4 > 3 && 10 < 12);// false
console.log(eight);
let nine = !(4 > 3 && 10 > 12); // true
console.log(nine);
let ten = !(4 === "4"); // true
console.log(ten);

//3
/*let MyAge = 12, YourAge ;
YourAge = prompt("How old are you?")
if (MyAge <= YourAge){
    console.log("Sain baina uu ta?");
} else{
    console.log("Yu baina?");
}*/

//4 
var udur = 4;
if (udur <= 5){
    console.log(" It is not Weekends ");
    /* if ( udur == 1){
        console.log("Davaa");
    } else if (udur == 2 ){
        console.log("Mygmar");
    } else if (udur == 3 ){
        console.log("lhagva");
    } else if (udur == 4){
        console.log("purev");
    } else if (udur == 5){
        console.log("baasan");
    } */
    switch (udur){
        case 1:
            console.log("Davaa");
            break;  
        case 2:
            console.log("Mygmar");
            break;   
        case 3:
            console.log("Lhagva");
            break;  
        case 4:
            console.log("Purev");
            break;  
        case 5:
            console.log("Baasan");
            break;  
    }
} else{
    console.log("It is Weekends");
} 
//5 
// let hours , niit;
// hours = prompt("heden tsag ajilahiin hu")
// let ratePerHour = 28
// niit = hours * ratePerHour
// console.log(niit);
//

//Undur jil 
var jil , huvaah, huvaa, zuu, bool, hur;
jil = 16000; 
bool = typeof jil
console.log(bool);
if ( bool == "number" ){
    console.log(jil);
    huvaah = jil % 4;
    huvaa = jil % 400;
    zuu = jil % 100
    if (huvaah == 0 || huvaa == 0){
        console.log("Undur jil baina");
        if (zuu == 0){
            console.log("undurjil baij chadashgui bna");
        }
        else{
            console.log("100 huvaagddag undur jil");
        }
    } else if (huvaah !== 0 || huvaa !== 0){
        console.log("undur jil bish");
    }  
} else {
    console.log("Toon utag oruulan uu");
}



//Hamgiin ih
var a = 5, b = 4, c = 4;
console.log(a , b, c );
// if ( a > b && a> c){
//     console.log("A hamgiin ih");
// } else if ( b >  a && b > c){
//     console.log("b hamgiin ih ");
// }else if( c > a && c > b){
//     console.log("C hamgiin ih ");
// } else{
//     console.log("Tentsuu too bna");
// }

if  ( a > b && a> c){
    console.log("a negt");
    if (b > c){
        console.log("b hoyrt");
    } else if (c > b){
        console.log("c hoyrt");
    } else{
        console.log(" b=c ");
    } 
} else if ( a == b){
    console.log("a==b ih bna ");
} else if ( a == c){
    console.log("a ==c ih bna");
}
else if (  b > c && b > a){
    console.log("b negt");
    if (a > c){
        console.log("a hoyrt");
    } else if (c > a){
        console.log("c hoyrt");
    } else{
        console.log(" a=c ");
    } 
} else if (b == c){
    console.log("b==c hamgiin ih");
} else if (  c > b && c > a){
    console.log("c negt");
    if (b > a){
        console.log("b hoyrt");
    } else if (a > b){
        console.log("a hoyrt");
    } else{
        console.log(" a=b ");
    } 
} 
else if ( c== b && b==a ){
    console.log("hoorondoo tentsuu ");
}
//4 toonii baga 
// var  b , a  , c , d ;
// b =  prompt(" b toonii utga ")
// a =  prompt(" a toonii utga ")
// c =  prompt(" c toonii utga ")
// d =  prompt(" d toonii utga ")
// if ( b < a && b < c && b < d){
//     console.log(b);
// } else if ( a < c &&  a < d && a < b){
//     console.log(a);
// } else if ( c < a && c < b && c < d){
//     console.log(c);
// } else{
//     console.log(d);
// }
//shalgaltiin dun 
var Bat = 67, Ontsdumd = 59 , Tulga = 80, Nomin = 95 , Tugsgerel = 99;
var dun = Bat;
// var muu = 60, hagalttai = 70, dund = 80, sain = 90; 
if ( 60 < Bat){
    console.log("bat" + Bat + "tentsen");
    if ( Bat > 70){
        if ( Bat > 80){
            if ( Bat > 90){
                console.log("Mash sain");
            } else {
                console.log("Sain");
            }
        } else {
            console.log("dund");
        }
    } else {
        console.log("hangalttain");
    }
} else {
    console.log("bat" + Bat + " tentsseegui ee");
}
if ( 60 < Ontsdumd){
    console.log("bat" + Ontsdumd + "tentsen");
    if ( Ontsdumd > 70){
        if ( Ontsdumd > 80){
            if ( Ontsdumd > 90){
                console.log("Mash sain");
            } else {
                console.log("Sain");
            }
        } else {
            console.log("dund");
        }
    } else {
        console.log("hangalttain");
    }
} else {
    console.log("bat" + Ontsdumd + " tentsseegui ee");
}
if ( 60 < Tulga ){
    console.log("bat" + Tulga  + "tentsen");
    if ( Tulga  > 70){
        if ( Tulga  > 80){
            if ( Tulga  > 90){
                console.log("Mash sain");
            } else {
                console.log("Sain");
            }
        } else {
            console.log("dund");
        }
    } else {
        console.log("hangalttain");
    }
} else {
    console.log("bat" + Tulga  + " tentsseegui ee");
}
if ( 60 < Nomin ){
    console.log("bat" + Nomin  + "tentsen");
    if ( Nomin  > 70){
        if ( Nomin  > 80){
            if ( Nomin  > 90){
                console.log("Mash sain");
            } else {
                console.log("Sain");
            }
        } else {
            console.log("dund");
        }
    } else {
        console.log("hangalttain");
    }
} else {
    console.log("bat" + Nomin  + " tentsseegui ee");
}
if ( 60 < Tugsgerel ){
    console.log("bat" + Tugsgerel  + "tentsen");
    if ( Tugsgerel  > 70){
        if ( Tugsgerel  > 80){
            if ( Tugsgerel  > 90){
                console.log("Mash sain");
            } else {
                console.log("Sain");
            }
        } else {
            console.log("dund");
        }
    } else {
        console.log("hangalttain");
    }
} else {
    console.log("bat" + Tugsgerel  + " tentsseegui ee");
}
// temtseen
var a = (98 + 108 + 89)/3
var b = (88 + 91 + 110)/3
if ( a > 100 || b > 100){
    if (a < b){
        console.log("B bag ylsan baina");
    }else if ( a ==b ){
        console.log("Hoyr bag tentssen baina");
    } else {
        console.log(" A bag ylsan baina");
    }
} else {
    console.log("Ali ch bag hojoogui ");
}

// easy 1
var A = 1, B = 2, C = 3, D = 4, F = 5;
//easy 2
 var sar, uld ;
 sar = prompt("sariin dugaar oruul");
 uld = sar % 2
 if ( uld == 0 ){
    if (sar == 2){
        console.log("28 ymuu 29");
    } else if ( sar >= 8 ){
        console.log("31 honogtoi");
    } else {
        console.log("30 honogtoi ");
    }4
 } else{
    if ( sar >= 9 ){
        console.log("30 honogtoi");
    } else {
        console.log("31 honogtoi");
    }
 } 

//easy 3
var too = 140, huva, huvaah;
huva = too % 3;
huvaah = too % 7;
if ( too > 0 ){
    if (huva == 0 ){
        console.log("Ug too 3iin urjiver mun");
    }else if( huvaah == 0){
        console.log("Ug too 7giin urjiver mun");
    }else {
        console.log("Ug too aliniihan ch urjiver bish");
    }
} else {
    console.log("eyreg too oruulna uu");
}

//easy 4 
var n = 12;
if ( n > 0){
    console.log("positive");
} else {
    console.log("negative");
}
//easy 5
var weight = 62, height = 1.81, index, uzuulelt;
index = (weight/ (height**2))
if (index < 18){
    console.log("Jingiin tutagdaltai baina");
} else if (index < 24){
    console.log("Eruul baina ");
}else if (index < 29){
    console.log("Iluudeltei");
}else {
    console.log('Het targallalttai bna ');
}
//easy 6
var b, a = 100;
b = 100 %2 ;
if ( b == 0){
    console.log("Tegsh too");
} else {
    console.log("Sondgoi");
}

//easy 7
var n = -12 ;
if ( n > 0 ){
    console.log("eyreg too");
} else{
    console.log("surug");
}
// easy 8
var nas, on; 
// on = prompt("Tursun on")
// nas = 2022 - on
// if ( nas < 1){
//     console.log("Infant");
// } else if ( nas < 3){
//     console.log("Toddler");
// } else if ( nas < 5){
//     console.log("Preschool");
// } else if ( nas < 12){
//     console.log("Gradeschool");
// } else if ( nas < 18){
//     console.log("Teen");
// } else if ( nas < 21){
//     console.log("Young adult");
// } else {
//     console.log("Adult");
// } 
// TIP 
let payment = 3000;
let tuluh = payment >= 5000 && payment <= 30000 ?  (payment * 0.15 + payment ) : (payment *0.2 + payment)
console.log("tanii tuluh dun "+ tuluh );