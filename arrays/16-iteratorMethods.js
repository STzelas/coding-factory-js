const students = ['Alice', 'Andreas', 'Bob', 'Kostas']

students.forEach(function(val, index, arr) {   // _ σημαίνει να κάνουμε ignore. το index πχ (stu, index, arr)
  console.log(index, val, arr)
})

let filtered = students.filter(student => student === 'Andreas')  // Για κάθε στοιχείο student μεσα στο students οπου student 'Andreas'
console.log(filtered)

let mapped = students.map(student => "Student: " + student)       // Η map αντιστοιχεί
console.log(mapped)

const numbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val, index, arr) => total + val, 0)
console.log(sum)