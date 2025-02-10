const initial = [1, 2, 3]
const copy = [...initial] // ... spread operator / Δίνει ως output τα στοιχεία του πίνακα / swallow copy

const extended = [0, ...initial, 4]  // πάλι swallow copy εντός άλλου πίνακα
const chars = [..."Hello"]


console.log(copy)     // [ 1, 2, 3 ]
console.log(extended) // [ 0, 1, 2, 3, 4 ]
console.log(chars)    // [ 'H', 'e', 'l', 'l', 'o' ]



