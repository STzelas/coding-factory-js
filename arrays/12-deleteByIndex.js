const arr = [1, 2, 3]

let itemToRemove = arr.indexOf(2)
if (arr.includes(2)) {
  arr.splice(itemToRemove, 1)
}

console.log(arr) // [ 1, 3 ]