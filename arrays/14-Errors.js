/**
 * Όλα τα Errors είναι unchecked γιατί όλα είναι σε runtime
 */

const products = []

function insert(arr, product) {
  if(!arr || !product) return
  
  try {
     if (arr.includes(product)) {
      throw new Error("Product exists")
     }
     products.push(product)
  } catch (error) {
    console.error(error.message, error.trace)
    throw error
  }
}

insert(products, "Apples")
console.log(products)

// insert(products,"Apples")   / Error 