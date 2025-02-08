const calc = {
  add: function(a, b) {
    return a + b
  },

  sub(a, b) {    // Μπορούμε με την μία να ορίσουμε συνάρτηση και το σώμα της
    return a - b
  }
}

console.log(calc.add(5, 7))   // Το add είναι reference. Όταν συνοδεύεται από παρενθέσεις λέγεται Callable
console.log(calc.sub(10, 4))  // Το ίδιο και εδώ.