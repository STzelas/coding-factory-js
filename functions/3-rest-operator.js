/**
 * Το rest απο το spread αλλάζει ανάλογα το context.
 * -Rest operator puts the rest of some specific 
 *  user-supplied values into a JavaScript array
 * -Spread syntax expands iterables into individual elements
 */

function max(...numbers) { // Δεν χρειάζεται να ονομάζεται rest. είναι το όνομα τις τεχνικής. θα μπορούσε πχ να είναι ...numbers
  let maxVal = -Infinity
  
  for (let n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}  
console.log(max(1,88,9,3,2))

function sum(...rest) {
  return rest.reduce((total,num) => total + num, 0)
}
console.log(sum(1,2,7,8,12,43))


function greet(message, ...names) {  // η rest παράμετρος πρέπει να είναι πάντα τελευταία
  console.log(message + ", " + names.join(", "))
} 

greet("Hello", "Alice", "Bob", "Costas")