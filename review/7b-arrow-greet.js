const greet = username => `Hello, ${username}`  // Αν είναι μία παράμετρος δεν χρειάζονται παρενθέσεις. Αν είναι 2 ή περισσότερες χρειαζεται
const sayHello = () => console.log("hello")

const add = (a, b) => a + b                     // Εδώ θέλει παρενθέσεις 


console.log(greet('Anna'))
sayHello()
console.log(add(10,30))