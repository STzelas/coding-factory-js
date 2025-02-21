const initial = { name: "Alice", age: 30, address: { street: "Patission", num:76 }}

// Copy 1ος τρόπος (Spread operator gives a Shallow copy)
const copyInitial = {...initial}
console.log(copyInitial)


// Copy 2ος τρόπος με Object
const copyInitial2 = Object.assign({}, initial) // (Που θα αντιγράψουμε, Απο που θα αντριγράψουμε)


// Copy 3ος τρόπος με συνάρτηση JSON  -- Deep Copy
const copyInitial3 = JSON.parse(JSON.stringify(initial)) // Γίνεται το initial json και μετά γίνεται JS object. Δεν μπορούμε να αντιγράψουμε objects με undefined ή με functions


// Copy 4ος τρόπος με stucturedClone  -- Deep Copy
const copyInitial4 = structuredClone(initial)