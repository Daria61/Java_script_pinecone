let students=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male"
},
    {
    name: 'Индра',
    age: 19,
    gender: "female"
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male"
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male"
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female"
},
]

function gender (data){
    let male = 0, famale = 0
    for ( i = 0; i < data.length; i ++){
        if (data[i].gender == "male"){
            male ++
        } else {
            famale++
        }
    }
    console.log(' Emegtei ' + famale + ", eregtei "+ male + " suragch bn " );
}
gender(students)
 
function AverAge (data){
    let sum = 0 , aver = 0 ;
    for (i = 0 ; i < data.length; i ++){
        sum += data[i].age
    }
    aver = sum / i
    console.log("dundaj naslalt " + aver);
}
AverAge (students)

function SameAge (data){
    let array = []
    for ( i = 0 ; i < data.length; i ++){
        for (j = 0; j < data.length; j ++){
            if (i !== j){
                if (data[i].age == data[j].age){
                    array.push(data[j].age)
                }
            }
        }
    }
    console.log(array);
    array = []
}
SameAge(students)
function LastName (data){
    for (i = 0; i < data.length; i ++){
        let LastName = prompt(data[i] + "suragchiin ovogoo oruulaarai")
        data[i].lastName =  LastName
    }
    console.log(data);  
}
LastName (students)