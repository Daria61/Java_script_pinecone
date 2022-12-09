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
      amount: 200,
      totalPrice: 1000000,
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
    console.log(sum);
}

// 2 borluulsan too 
function too(data){
    let tooShirheg = 0
    for (i = 0 ; i < data.length; i ++){
        tooShirheg += data[i].amount
    }
    console.log(tooShirheg);
}

// 3 top 5in baraa 

function borluulalt(data){
    let array = [] 
    for (i = 0; i < data.length; i ++){
        array.push( data[i].totalPrice)
    }
    console.log(array);
    for (i = 0 ; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (array[j] < array[j + 1]){
                var tempo = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tempo
            }
        }
    }
    console.log(array);
    for (i = 0 ; i < 5; i ++){
        for (j = 0; j < data.length; j++){
            if (data[j].totalPrice == array[i]){
                if(array[i] !== array[i + 1]){
                    console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName);
                    break
                }else{
                    console.log("Top "  + (i + 1) + " deh borluulalttai baraa " + data[j].productName);
                }
            }
        }
    }
}
borluulalt(data)

