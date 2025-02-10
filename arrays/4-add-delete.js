const arr = [0, 1, 2, 3, 4]
delete arr[0]

console.log(arr)  // [ <1 empty item>, 1, 2, 3, 4 ]

arr.push(5)       // Ο ίδιος array παραμένει.
arr.push(6, 7)    //  [ <1 empty item>, 1, 2, 3, 4, 5, 6, 7 ]
console.log(arr)