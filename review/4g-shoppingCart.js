const shoppingCart = {
  items: [
    {productName: "Apples", price: 8.59, quantity: 40, },
    {productName: "Oranges", price: 12, quantity: 100, }
  ],

  addItemToCart(item) {
    this.items.push(item)   // Το this.item (το this συγκεκριμένα) το βάζουμε για να ψάξει στο local scope. Αλλιώς από μόνο της η funtion ψάχνει στο global scope να βρεί item
  },
}

shoppingCart.addItemToCart({productName: "Honey", price: 18.59, quantity: 400, })

console.log(shoppingCart.items)
