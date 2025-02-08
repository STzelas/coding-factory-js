const s = "Coding Factory"

const substr = s.substring(0, 6)  // (από, έως) Αν δεν δώσουμε δεύτερη παράμετρο, δίνει μέχρι το τέλος
console.log(substr)  

const mySlice = s.slice(7)
const mySlice2 = s.slice(7, 8)

console.log(mySlice)
console.log(mySlice2)

const copyStr = s.slice()  // Χωρίς παραμέτρους είναι ένα ανεξάρτητο copy, σε άλλο σημείο του heap
console.log(copyStr)

const mySlice3 = s.slice(-7)  // Με το - μετράει από το τέλος
console.log(mySlice3)

const splitted = s.split(" ") // Δίνει τα tokens που διαχωρίζονται με τον delimiter που εισάγουμε (εδώ το κενό " ")
console.log(splitted)