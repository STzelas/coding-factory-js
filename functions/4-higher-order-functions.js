// Τα functions που παίρνουν ως παράμετρο ενα function (callback) ή επιστρέφουν function, ονομάζονται - Higher-order Functions
// Function factory
// Closure / Παρόλο που έχει ολοκληρωθεί η κλήση της εξωτερικής συνάρτησης στην γραμμή 10 , η double θυμαται το multiplier έχει μνήμη
function createMultiplier(multiplier) {  
  return function(num) {
    return num * multiplier
  }
}

const double = createMultiplier(2)  // Το double είναι το inner function απο πάνω
const triple = createMultiplier(3)  // Το triple είναι το inner function απο πάνω
console.log(double(5))  // 10
