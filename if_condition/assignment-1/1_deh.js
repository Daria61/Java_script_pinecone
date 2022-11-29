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


