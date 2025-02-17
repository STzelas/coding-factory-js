const cities = ["Athens", "London", "Berlin"]

// Add - Modified ο ίδιος ο πίνακας
cities.push("Toronto")

let city = cities[0]
console.log(city)

cities[1] = "London"

cities.forEach(c => console.log(c))   // Lambda / c το value 

cities.sort()

cities.sort((a, b) => a.localeCompare(b))
const citiesSorted = cities.slice().sort((a, b) => a.localeCompare(b))



// Copy - Shallow copy
const citesCopye1 = JSON.parse(JSON.stringify(cities))   // stringify Μετατρέπει ενα JS object σε string

const cities2 = structuredClone(cities)


// Shallow copies -- Spread operator
const cities3 = [...cities]

const nums = [1, 2, 3, 4]
let maxVal = Math.max(...nums)
let maxIndex = nums.indexOf(maxVal)
console.log(`Max Value: ${maxVal}, Max Index: ${maxIndex}`)