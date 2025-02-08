console.log(Number.MAX_VALUE, Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
console.log(Number.POSITIVE_INFINITY)   //  12/0 γίνεται στην JS, δίνει μια σταθερά
console.log(Number.NEGATIVE_INFINITY)   // -12/0


if(Number.isInteger(12)) {
  console.log("Is integer")
} else {
  console.log("Is not integer")
}

if(Number.isNaN(NaN)) {   // NaN = Not a Number   10/"AUEB" Η js θα προσπαθήσει να μετατρέψει το "AUEB" σε number (δεν θα τα καταφέρει) και θα δώσει NaN
  console.log("true")
} else {
  console.log("false")
}

if(isNaN(NaN)) {
  console.log("Is NaN")
} else {
  console.log("Not is NaN")
}

console.log(Number.parseInt("44"))
console.log(parseInt("42"))

console.log(Number.parseFloat("40.5"))
console.log(parseFloat("15.32"))

function compareFloatingPoints(a, b) {
  return Math.abs(a-b) < Number.EPSILON
}

console.log(compareFloatingPoints(num1, num2))
