const arr = [1, 2, 3, 2, 5, 4, 6, 3, 1, 7, 2 , 4 , 6]

// function να επιστρέφει ένα function με τις θέσεις
// που βρίσκετε ένας συγκεκριμένος αριθμός

// Λύση
function locations(arr, num) {
  let indices = [];
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] == num) indices.push(i);
  }
  console.log(indices)
}

locations(arr, 3)


// Προτεινόμενη
const getIndexes = (arr, val) => {
  const indexes = []

  arr.forEach((v, index) => {
    if (v === val) {
      indexes.push(index)
    }
  })

  return indexes
}

console.log(getIndexes(arr, 2))