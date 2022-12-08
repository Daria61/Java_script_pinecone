let animals = [
 {type: "dog", sound: "woof"},
 {type: "cow", sound: "moo"},
 {type: "cat", sound: "meow"}
] 
console.log(animals);
function says (animals){
    let garaasNer = "cat" ;
    for (i = 0; i < animals.length; i ++){
        if ( garaasNer == animals[i].type){
            console.log( animals[i].type + " says " + animals[i].sound );
        }
    }
}
says(animals)