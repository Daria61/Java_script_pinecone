let input = "1254321"
if (input.length % 2 == 0){
    sub = input.substring(0, input.length / 2)
    split = sub.split("")
    equal =  split.reverse()
    joined = equal.join("")
    if(joined == input.substring(input.length / 2 )){
        console.log("true");
    } else {
        console.log("false");
    }
}else {
    sub = input.substring(0, Math.floor(input.length / 2))
    split = sub.split("")
    equal =  split.reverse()
    joined = equal.join("")
    if(joined == input.substring(Math.floor(input.length / 2 + 1) )){
        console.log("true");
    } else {
        console.log("false");
    }
}