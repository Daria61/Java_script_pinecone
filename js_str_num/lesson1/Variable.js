//Comment can make code readable 
//Javacript lesson begin
/*  Comment can make code readable
 Comment can make code readable
  Comment can make code readable */
//4 Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх 
  var something
  something = "String";
  something = 7;
  something = true;
  something = null;
  console.log(something)

//6 Утга оноогоогүй хувьсагч зарлах 
var b;
//7 Утга оноосон хувьсагч зарлах
var b = 5;
//8 Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах  
var too= 23;
console.log(typeof too)
var useg= "string bna"
console.log(typeof useg )
var unen= false
console.log( typeof unen)
var hooson 
console.log( typeof hooson)
var bhgui = null
console.log(typeof bhgui )
//9 Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
var too2 = 23, useg2 = "string bna", unen2 = false, hooson2 , bhgui2 = null 
console.log( typeof too2 )
console.log( typeof useg2 )
console.log( typeof unen2 )
//10 MyAge, yourAge нэртэй хувьсагч зарлан эхний утгыг оноох 
var MyAge = 16;
var yourAge = 23;
//11 
var katet1 = 12, katet2 = 14, gip = 23, niilber;
niilber = katet1+katet2+gip
console.log(niilber)

//12
var radius= 10, p = 3.14;
console.log( p*(radius**2)) 
//13
var y = 5, x =1, m;
m = (y*2 - y*1)/(x*2-x*1)
console.log("m =  y2-y1/x2-x1-nii hariu: ",  m) 

//14
var GB= 15;
var b ; 
b = GB*(1024*1024*1024)
console.log(b)

//15
var MB = 15, bit, rate;
bit = MB * (1024**4)
rate = bit/3
console.log(rate)

//16
var side1 = 10, side2 = 12, side3= 14, p, s;
p = side1 + side2 + side3 ;  
s = Math.sqrt(p*(p - side1)*(p - side2)*(p - side3))
console.log(s)

//17, 18
var c = 21, f;
 f = c * 1.8 + 32; 
 var l = f.toString().substring(0, 2)
console.log(l);
 c = (f - 32)/ 1.8
var a = c.toString().substring(0, 2)
console.log(a);

//21 
var x = 10, y = 2, sum, axe, mul, div, mod ;
sum = x + y ;
axe= x - y;
mul = x * y;
div = x / y;
mod = x % y;
console.log(sum, axe, mul, div, mod);
//22 
var sm = 20, inch;
inch = sm * 2.54;
console.log(inch);
 sm = inch / 2.54;
 console.log(sm);

 //24 
 var a = 9234567;
 var b = a.toString().substring(0,1)
console.log(b);

 

