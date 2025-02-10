const arr = []                          // κενός πίνακας
const arr1 = [1, 2, 3, 4, 5]            // populate
const arr2 = [1, "Alice", 3.4, true]    // error prone, αλλά γίνεται να έχουμε διαφορετικούς τύπους σε έναν πινακα

const sparseArr = [1, , 3]              // sparse array 
const arr3 = [ , , , ]                  // full sparse ( 3 στοιχεία , length is 3)
const arr4 = new Array(2)               // Και με new και χωρίς, το ίδιο
const grid = [[1, 2], [2, 3], [5, 6, 7]]
const objArr =[{id: 1}, {id: 2}, {id: 3}]  // Και objects

console.log(arr1[0])    // 1

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i])
}

for (const el of arr1) {
  console.log(el)
}

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++)
    console.log(grid[i][j])
}

for (const row of grid) {
  for (const item of row) {
    console.log(item)
  }
}


 
