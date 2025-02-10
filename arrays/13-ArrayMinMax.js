const ages = [20, 30, 50, 18, 34]

function getMin(arr) {
  if (!arr) return

  let minValue = Math.min(...arr)
  let minPosition = arr.indexOf(minValue)
  return [minValue, minPosition]
}

function getMax(arr) {
  if (!arr) return

  let maxValue = Math.max(...arr)
  let maxPosition = arr.indexOf(maxValue)
  return [maxValue, maxPosition]
}

console.log(getMin(ages))
console.log(getMax(ages))
