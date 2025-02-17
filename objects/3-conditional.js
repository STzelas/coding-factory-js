const book = {author : {first: "Th.", last: "Andr"} }

let lastname = book?.author?.last  // Αν το book είναι null θα δώσει null αλλιώς θα προχωρήσει κλπ

console.log(lastname)