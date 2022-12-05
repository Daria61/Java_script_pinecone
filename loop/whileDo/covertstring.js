let ConString = "Hello World", ConString2 = "This Is STRING!", changes = " ", contain = " ";
for (i = 0; i < ConString.length; i++){
if (ConString[i] == ConString[i].toUpperCase()){
    changes = ConString[i].toLowerCase()
} else{
    changes = ConString[i].toUpperCase()
}
contain = contain + changes
}
console.log( contain );