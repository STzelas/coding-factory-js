function convertMeters(meters) {
  return {
    centimeters: meters * 100,
    milimeters: meters * 1000,
  }
}


function convertCentimeters(centimeters) {
  return {
    meters: centimeters / 100,
    millimeters: centimeters * 10
  }
}


function convertMillimeters(millimeters) {
  return {
    meters: millimeters / 1000,
    centimeters: millimeters / 10
  }
}

const object = convertMillimeters(1500)
console.log(object.meters)
console.log(object.centimeters)