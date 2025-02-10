class ProductAlreadyExistsError extends Error {
  constructor(message) {                          // Όνομα απλά constructor όχι το όνομα της κλάσης
    super(message)                                // έχει και super απο το Error που κάνουμε extend
    this.code = "ProductExists"                   // Δικό μας message
  }
}

class ProductNotFoundError extends Error {        // 
  constructor(message) {
    super(message)
    this.code = "ProductNotFound"
  }
}

try {
  throw new ProductNotFoundError("Product not found.")
} catch(error) {
  if (error instanceof ProductNotFoundError) {

    console.error("Product not found. \n" + error.message, error.code)
  } else if (error instanceof ProductAlreadyExistsError) {
    console.error("Product already exists.\n" + error.message, error.code)
  } 
}