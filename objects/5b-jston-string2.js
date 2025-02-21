const storeJSON = `[
{ "id": "pro4vog",
  "fields": {
    "company":"ikea",
    "colors": ["#FF1234", "#222"],
    "featured": true,
    "price": 990,
    "genre": "white-black-chair"    
  }
},
{ "id": "pro4vpr",
  "fields": {
    "company":"ikea",
    "colors": ["#FF199", "#222"],
    "featured": true,
    "price": 880,
    "genre": "black-black-chair"    
  }
}]
`   // Ορίζουμε ενα JSON String μόνο μεσα σε ` ` με πολλά objects

const storeObj = JSON.parse(storeJSON)  // Μετατρέπουμε σε Object το JSON String με parse
console.log(storeObj)