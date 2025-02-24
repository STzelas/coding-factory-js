const daysGr = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGr = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαϊου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

  this.document.querySelector('#addNotebtn').addEventListener('click', function() {
    onInsertHandler({key: count + 1, note: document.querySelector('#inputNote').value, softDelete: false})
  })

  this.document.querySelector('#inputNote').addEventListener('keyup', function(event, ) {
    if(event.key === 'Enter') {
      // event.target είναι ίδιο με querySelector απλά όταν 
      // είναι ίδιο με το element που έχουμε κάνει register 
      // το event (σε αυτή την περίπτωση το inputNote)
      onInsertHandler({key: count + 1, note: event.target.value, softDelete: false})  
      
    }
   
  })

})