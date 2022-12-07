const arr1 = [3, 45, 23, 78, 34, 1] , arr2 = [4, 2, 34, 4, 12, 1], arr3 =[];
let urjiver = 1;
for (i = 0; i < arr1.length; i++){
    urjiver = arr1[i] * arr2[i]
    arr3.push(urjiver)
}
console.log(arr3);
