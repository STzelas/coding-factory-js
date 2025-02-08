let num1 = 10
let num2 = 3

let divResult = num1 / num2
let expr = (num1 / num2) * (8.5 / 3.3)

let fixedDiv = (num1 / num2).toFixed(1)   // toFixed θα δείξει με ένα δεκαδικό μόνο (ή όσα βάλουμε)
let intResult = Math.floor(num1 / num2)   // int, the bottom limit
let upperInt = Math.ceil(num1 / num2)     // int, the upper limit
let roundResult = Math.round(num1 / num2) // int, rounds

// Το modulo διατηρεί το πρόσημο του Διαιρετέου.
let modResult = num1 % num2               // JS & Java το υπόλοιπο απο μία διαίρεση

console.log(expr, divResult, fixedDiv, intResult, upperInt, roundResult, modResult)