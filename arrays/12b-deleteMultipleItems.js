const arr = [2, 1, 1, 1, 5, 2]

const deleteBackwards = (arr, value) => {
  if (!arr) return            // !arr (δεν υπάρχει arr)
  let i = arr.length - 1
  while (i+1) {                 // i truthy, όταν γίνει 0 θα γίνει falsy και θα βγει από την while
    if (arr[i] === value) {
      arr.splice(i, 1)
    }
    i--
  }
}

deleteBackwards(arr, 2)
console.log(arr)          //  [ 1, 3, 5 ]