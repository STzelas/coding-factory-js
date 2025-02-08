const vat = '123'
const num = 123

let comp1 = num == vat
let comp2 = num === vat
console.log(comp1, comp2)   // true

let temp = 40
let isSunny = temp > 40
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small-Sun"

//                   ^
//                   |
// if (isSunny) {
//   isSunnyStr = "Big-Sun"
// } else {
//   isSunnyStr = "Small-sun"
// }

console.log(isSunny, isSunnyStr)