const users = [
  {id: 1, firstname: "Alice", email: "alice@aueb.gr", isActive: true}, 
  {id: 3, firstname: "Bob", email: "bob@aueb.gr", isActive: false},
  {id: 3, firstname: "Costas", email: "costas@aueb.gr", isActive: true},
]

users.forEach(user => console.log(user))


const email = users.map(user => user.email)

const activeUsers = users.filter(user => user.isActive === true)
console.log(activeUsers)

const cart = [
  {title:"laptop", price: 1000, stock: 10},
  {title:"mouse", price: 50, stock: 0},
  {title:"keyboard", price: 80, stock: 20}
]

const totalSum = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalSum)  // 1130

const user = users.find(user => user.email === "alice@aueb.gr")
const userIndex = users.findIndex(user => user.email === "alice@gmail.com")
console.log(user, userIndex) // { id: 1, firstname: 'Alice', email: 'alice@aueb.gr', isActive: true } -1

const isOutOfStock = cart.some(item => item.stock === 0)
const isAllOfStock = cart.every(item => item.stock === 0)
console.log(isOutOfStock) // true
console.log(isAllOfStock) // false


const posts = [
  {title: "post1", tags: ["js", "web"]},
  {title: "post1", tags: ["nodejs", "backend"]},
  {title: "post1", tags: ["react", "frontend"]}
]

const allTags = posts.flatMap(post => post.tags)
console.log(allTags) // [ 'js', 'web', 'nodejs', 'backend', 'react', 'frontend' ]

const fruits = ["Apples", "Oranges"]
for(const[index, fruit] of cart.entries()) {   // entries επιστρέφει ένα πίνακα που έχει μέσα ως στοιχεία πίνακες(υποπίνακες)
  console.log(`${index}, Fruit: ${fruit}`)     // [[0, "Apples"], [1,"Oranges"]]
}

