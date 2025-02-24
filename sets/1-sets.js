/**
 * Set χρησιμοποιούμε όταν θέλουμε collection χωρίς διπλότυπα
 */

let bag = new Set();

bag.add('Oranges')
bag.add('Apples')
bag.delete('Apples')                   // delete

if (bag.has('Apples')) console.log('Has Apples')

  function addToSet(set, ...values) {  // add
    values.forEach(value => set.add(value))
  }

  const mySet = new Set();
  addToSet(mySet, 1, 2, 3, 4, 5)

  function createSet(...elements) {
    return new Set(elements)           // μετατρέπει ένα πίνακα σε Set με τον constructor 
  }

  const numSet = createSet(1, 10, 30, 100, 1000)

  const cities = [{prod: 1, city:"Athens"}, {prod:2, city:"Athens"}, {prod:3, city: "Lamia"}]
  function getUniqueCities(arr) {
    return [...new Set(arr.map(product => product.city))]   // Set παίρνει constructor που παίρνει πίνακα
  }

