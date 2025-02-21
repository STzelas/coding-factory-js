// 1. Basic function definition - Γινεται hoisting
function greet(name) {
  reutrn `Hello ${name}`
}


function add(a,b) {
  return a + b
}

console.log(greet("Alice"))

// 2. Function expressions - Hoisting γίνεται αλλά σαν undefined
const mul = function (a, b) {
  return a * b
}

let result = mul(3,4)


// 3. Arrow Functions - (ECMASCRIPT 6 και μετά)
const div = (a, b) => a / b // const something = (παράμετροι εισόδου) => {return σώμα} | Άν έχει 1 εντολή (παράμετροι εισόδου) => σώμα