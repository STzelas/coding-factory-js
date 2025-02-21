function createCounter() {
  let count = 0  // έχει private state. Το inner function έχει πρόσβαση σε αυτο το state

  return function() {
    count++
    return count
  }
}

const counter = createCounter() // Η inner συναρτηση καθώς και το state του outer scope συνεχίζουν να υπάρχουν μετά την κλήση της εξωτερικής συνάρτησης - Closure
console.log(counter())   // 1
console.log(counter())   // 2


function createCounter2() {
  let count = 0

  return {
    increment: function() {
      count++; 
      return count
    },
    getCount: function() {
      return count
    }
  }
}

const counter2 = createCounter2()
console.log((counter2).increment()) // 1 // counter2.increment επειδή είναι object τα properties τα παίρνω με τελεία
console.log((counter2).getCount())  // 1