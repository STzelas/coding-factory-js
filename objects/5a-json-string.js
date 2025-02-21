const jsObj = {
  id: 1, 
  hobbies: [ {id: 1, title: "gym"}, {id: 2, title: "music"} ] // Μπορεί να είναι πολυ μεγάλα και περίπλοκα
}

// Serialization
const jsonStr = JSON.stringify(jsObj) // Μετατρέπει το object σε json string με static μεθοδο stringify / τα keys 
console.log(jsonStr)                  // Μοιαζει πολύ με object, πρέπει να έχει " " όχι μονά '

// Deserialization
const jsObj2 = JSON.parse(jsonStr)      // static μεθοδο παίρνει ένα JSON string και το μετατρέπει σε JS Object
console.log(jsObj2)