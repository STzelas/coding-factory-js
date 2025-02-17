const numbers = [1, 2, 3, 4]

// Modifies initial array - πρόβλημα στην react - θέλει καινούργιο copy
numbers.push(5)
numbers.splice(4, 0, 5)



function addToArrayEnd(arr, num) {
  return [...arr, num]
}

function addToArrayStart(arr, num) {
  return [num, ...arr]
}

function addToArrayAtIndex(arr, num, index) {
  return [...arr.slice(0, index), num, ...arr.slice(index)] // shallow copy
}

// Updates
numbers.splice(3, 1, 8)


const updateArray = (arr,newValue) => arr.map(item => {return newValue})

// Fresh Copy
const updateOneItem = (arr, index, newValue) => 
  arr.map((item, i) => (i === index) ? newValue : item) 

const updatedNumbers = updateOneItem(numbers, 2, 17)

console.log(numbers)        // [ 1, 2, 3, 8, 5, 5 ]
console.log(updatedNumbers) // [ 1, 2, 17, 8, 5, 5 ]

// Delete

// Modifies initial array
let index = numbers.indexOf(1)
if(index !== -1) numbers.splice(0, 1)

// Fresh copy of deleted array

const deleteFromArray = (arr, num) => arr.filter(item => item !== num) // επιστρέφει όσα ΔΕΝ είναι num

const deleteByIndex = (arr, index) => [...arr.slice(0,imdex), ...arr.slice(index + 1)]