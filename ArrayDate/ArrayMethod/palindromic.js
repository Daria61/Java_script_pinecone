let input = "123321"
if (input.length % 2 == 0){
    sub = input.substring(0, input.length / 2)
    split = sub.split("")
    equal =  split.reverse()
    equal.join("")
    console.log(equal);
}else {

}