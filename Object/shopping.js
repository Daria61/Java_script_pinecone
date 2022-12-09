const data = [
    {
      productName: "Bakery",
      unitPrice: 5000,
      amount: 110,
      totalPrice: 550000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate",
      unitPrice: 3000,
      amount: 10,
      totalPrice: 30000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery2",
      unitPrice: 5000,
      amount: 210,
      totalPrice: 1500000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate2",
      unitPrice: 3000,
      amount: 15,
      totalPrice: 45000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery3",
      unitPrice: 5000,
      amount: 201,
      totalPrice: 1005000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate3",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery4",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 1000000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate5",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery6",
      unitPrice: 5000,
      amount: 200,
      totalPrice: 5000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate6",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Bakery7",
      unitPrice: 5000,
      amount: 50,
      totalPrice: 250000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate7",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54000,
      casherId: 1,
      date: "2022-11-01",
    },
    {
      productName: "Chocolate8",
      unitPrice: 3000,
      amount: 18,
      totalPrice: 54000,
      casherId: 1,
      date: "2022-11-01",
    },
  ];


  //1 niit borluult
function total(data){
    let sum = 0 
    for (i = 0; i < data.length; i ++){
        sum += data[i].totalPrice
    }
    return sum
    console.log(sum);
}
console.log(total(data));
// 2 borluulsan too 
function too(data){
    let tooShirheg = 0
    for (i = 0 ; i < data.length; i ++){
        tooShirheg += data[i].amount
    }
    return tooShirheg
}

// 3 top 5in baraa 

// function borluulalt(data){
//     let array = [] 
//     for (i = 0; i < data.length; i ++){
//         array.push( data[i].totalPrice)
//     }
//     console.log(array);
//     for (i = 0 ; i < array.length; i++){
//         for (j = 0; j < array.length; j++){
//             if (array[j] < array[j + 1]){
//                 var tempo = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = tempo
//             }
//         }
//     }
//     console.log(array);
//     for (i = 0 ; i < 5; i ++){
//         for (j = 0; j < data.length; j++){
//             if (data[j].totalPrice == array[i]){
//               console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName);
//                 break
//             }
//         }
//     }
// }
// borluulalt(data)

// //4 Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.

// function borluulalToo(data){
//   let array = [] 
//   for (i = 0; i < data.length; i ++){
//       array.push( data[i].amount)
//   }
//   for (i = 0 ; i < array.length; i++){
//       for (j = 0; j < array.length; j++){
//           if (array[j] < array[j + 1]){
//               var tempo = array[j]
//               array[j] = array[j + 1]
//               array[j + 1] = tempo
//           }
//       }
//   }
//   for (i = 0 ; i < 5; i ++){
//       for (j = 0; j < data.length; j++){
//           if (data[j].amount == array[i]){
//             console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName + " " + data[j].amount);
//               break
//           }
//       }
//   }
// }
// borluulalToo(data)
// //5 Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах. 
// function borluulaltBaga(data){
//   let array = [] 
//   for (i = 0; i < data.length; i ++){
//       array.push( data[i].totalPrice)
//   }
//   for (i = 0 ; i < array.length; i++){
//       for (j = 0; j < array.length; j++){
//           if (array[j] > array[j + 1]){
//               var tempo = array[j]
//               array[j] = array[j + 1]
//               array[j + 1] = tempo
//           }
//       }
//   }
//   for (i = 0 ; i < 5; i ++){
//       for (j = 0; j < data.length; j++){
//           if (data[j].totalPrice == array[i]){
//             console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName + " " + data[j].totalPrice);
//               break
//           }
//       }
//   }
// }
// borluulaltBaga(data)

// //6. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгээр/ харуулах.
// function borluulaltBagaToo(data){
//   let array = [] 
//   for (i = 0; i < data.length; i ++){
//       array.push( data[i].amount)
//   }
//   for (i = 0 ; i < array.length; i++){
//       for (j = 0; j < array.length; j++){
//           if (array[j] > array[j + 1]){
//               var tempo = array[j]
//               array[j] = array[j + 1]
//               array[j + 1] = tempo
//           }
//       }
//   }
//   for (i = 0 ; i < 5; i ++){
//       for (j = 0; j < data.length; j++){
//           if (data[j].amount == array[i]){
//             console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName + " " + data[j].amount);
//               break
//           }
//       }
//   }
// }
// borluulaltBagaToo(data)
//7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд эзлэх хувь харуулах.
function Huvi(data){
  let array = [] , sum = 0 ;
  for (i = 0; i < data.length; i ++){
      array.push( data[i].totalPrice)
  }
  for (i = 0 ; i < array.length; i++){
      for (j = 0; j < array.length; j++){
          if (array[j] < array[j + 1]){
              var tempo = array[j]
              array[j] = array[j + 1]
              array[j + 1] = tempo
          }
      }
  }
  for (i = 0; i < 10; i++){
    sum += array[i]
  }
  console.log( "top 10 niit borluulaltiin " + Math.floor((sum*100) / total(data)) + "%");
}
Huvi(data)

//8
function huvi5(data){
  let array = [] , sum = 0 ;
  for (i = 0; i < data.length; i ++){
      array.push( data[i].amount)
  }
  for (i = 0 ; i < array.length; i++){
      for (j = 0; j < array.length; j++){
          if (array[j] < array[j + 1]){
              var tempo = array[j]
              array[j] = array[j + 1]
              array[j + 1] = tempo
          }
      }
  }
  for (i = 0; i < 5; i++){
    sum += array[i]
  }
  console.log( "top 5 niit borluulaltiin " + Math.floor((sum*100) / too(data)) + "%");
}
huvi5(data)
 
//9
function huviBaga5(data){
  let array = [] , sum = 0 ;
  for (i = 0; i < data.length; i ++){
      array.push( data[i].totalPrice)
  }
  for (i = 0 ; i < array.length; i++){
      for (j = 0; j < array.length; j++){
          if (array[j] > array[j + 1]){
              var tempo = array[j]
              array[j] = array[j + 1]
              array[j + 1] = tempo
          }
      }
  }
  for (i = 0; i < 5; i++){
    sum += array[i]
  }
  console.log( "baga 5 niit borluulaltiin " + Math.floor((sum*100) / total(data)) + "%");
}
huviBaga5(data)
//10
function huviBaga(data){
  let array = [] , sum = 0 ;
  for (i = 0; i < data.length; i ++){
      array.push( data[i].amount)
  }
  for (i = 0 ; i < array.length; i++){
      for (j = 0; j < array.length; j++){
          if (array[j] > array[j + 1]){
              var tempo = array[j]
              array[j] = array[j + 1]
              array[j + 1] = tempo
          }
      }
  }
  for (i = 0; i < 5; i++){
    sum += array[i]
  }
  console.log( "baga 5 niit borluulaltiin " + Math.floor((sum*100) / too(data)) + "%");
}
huviBaga(data)