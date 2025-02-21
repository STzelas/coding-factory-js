const obj = { id: 1, firstname: "Alice"}

// Add properties

// Modify the object
obj.lastname = "W."
console.log(obj)

// Immutable - Fresh Copy μαζί με το modify που κάναμε
const addToObj = (obj, field, value) => ( {...obj, [field]: value})  // Τα brackets είναι σαν interpolate 
const objCopy = addToObj(obj, "lastname", "W.")
console.log(objCopy)



// Update the object - modify initial object
obj.firstname = "Sotiris"
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({ ...obj, [field]: newVal})
const updatedObj = updateObj(obj, "firstname", "Sotiris")
console.log(updatedObj)


// Delete property of an object

// Immutable Delete
const deleteFromObject = (obj, field) => {
  const {[field]: _, ...objToReturn} = obj
  return objToReturn
}

const objFromDelete = deleteFromObject(obj, "id")
console.log(objFromDelete)