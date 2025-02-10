const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Delete
const arr2 = arr.splice(0, 4)   // Διαγράφει απο το 0 έως 4 και επιστρέφεται στον arr2. 

console.log(arr2)    // [ 1, 2, 3, 4 ]
console.log(arr)     // [ 5, 6, 7, 8 ]


// Insert
arr.splice(0, 0, 10) // Διαγράφει απο την θέση 0 (5) διέγραψε 0 στοιχεία, και στην θέση 0 εισήγαγε το 10 και όλα θα κάνουν shift right
console.log(arr)     // [ 10, 5, 6, 7, 8 ]


// Update
arr.splice(0, 1, 11) // Διαγράφει 1 στοιχείο ξεκινώντας απο την θέση 0 και βάζει το 11 ( άρα update )
console.log(arr)     // [ 11, 5, 6, 7, 8 ]