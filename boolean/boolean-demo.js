console.log(Boolean(1))  // true
console.log(Boolean(0))  // false
console.log(Boolean("Hello"))  // true
console.log(Boolean(""))       // false
console.log(Boolean(null))     // false
console.log(Boolean(undefined)) // false 
console.log(Boolean({}))       // true
console.log(Boolean([]))       // true


while(1) {
  console.log("Hello")
  break
}

do {
  console.log("One iteration")
} while(0) 


for (let i = 1; 1; i++) {
  console.log("In for")
  break
}

let num = 10
while(num) {     // Θα τρέξει μέχρι να φτάσει στο 0 που είναι false και θα βγει
  console.log(num)
  num--
}


// && || !
console.log("Coding" && 7)  // truthy && truthy  -> last truthy -VALUE- (το 7 θα επιστρέψει, όχι true)

// truthy && falsy  -> falsy -VALUE- // (falsy && falsy) ή (falsy && truthy) , first falsy -VALUE- //

console.log("User" || "Default")  // first truthy -VALUE- //  (truthy || truthy) -> first truthy -VALUE- //  (falsy || truthy) -> truthy -VALUE- // (falsy || falsy) -> 

const username = "" || "Default"
let isBtnExists = true
let button = "Button"
const buttonToShow = isBtnExists && button