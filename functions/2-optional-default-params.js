// Πριν την ECMASCRIPT 6
function greet(name) {
  if (name === undefined) {
    name = "Quest"
  }
  console.log(`Hello ${name}`)
}

greet()

// Μετά την ECMASCRIPT 6 - Default params
function getUser(name = "Guest", age = 18) {
  return { name, age }   // {name: name, age: age} οταν key και value είναι ίδια τοτε αφήνουμε 1 φορά
}

const obj = getUser()
console.log(obj)


function getFormattedDateTime(
  locale = "en-US",
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }
)  {
  const now = new Date()
  return now.toLocaleString(locale, options)  // Μετατρέπει ένα date σε string format
}
console.log(getFormattedDateTime("el-GR"), {})