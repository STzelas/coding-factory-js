const objArray = [
  {id: 1, first: "Bob", age: 23},
  {id: 2, first: "Alice", age: 40},
  {id: 3, first: "Kostas", age: 20},
  {id: 4, first: "Kostas", age: 18},
]


// sort by age ASCENDING / Ίδια λογική με το 10-sortArrays.js απλά εδώ έχουμε objects

objArray.sort(function(a, b) {
  return a.age - b.age
})

console.log(objArray)


objArray.sort(function(a, b) {
  if (a.first == b.first) {
    return a.age - b.age
  }
  return a.first.localeCompare(b.first)  // locale είναι η γλώσσα του υπολογιστή (πχ αγγλικα/ελληνικα)
})

console.log(objArray)
