const obj = {}   // κενό

// literal
const point =  {x: 1, y: 1}    // literal τρόπος να ορίζουμε instances της γενικής wrapper Object(objects δηλαδη) 
point.z = 2                    // Δυναμικό add


const point3D = new Object()   // κενό
point3D.x = 1
point3D.y = 2
point3D.z = 35

const newObj = Object.create(Object.prototype)   // Το prototype είναι ένα object το οποίο έχει όλες τις μεθόδους του object wrapper Object