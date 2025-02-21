const facto = function(n) {
  if (n == 0 || n == 1) {
    return 1
  }

  return n * facto(n - 1)  // Αναδρομική κλήση, δηλαδή καλεί τον εαυτό της μέσα στο σώμα της με μικρότερο μήκος δεδομένων 
}

console.log(facto(5))