// Promise(ένα object είναι) το χειροζόμαστε με τα .then  τα  (thenables) παίρνουν 2 callback, to success kai to failure. αν δεν έχει failure callable τοτε πάει στο επόμενο thenable. Αν δεν έχει κανένα θα πάει στην catch

function fetchOneObject() {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
  if (!response.ok) {  // σημαινει το 2xx (200,201,202 κλπ)
    throw new Error(`HTTP Error. Status: ${response.status}`)
  }

  return response.json()  // parse το JSON σε JavaScript object
})
.then(data => {
  document.getElementById('responseText').innerHTML = `<b>Title</b>: ${data.title}`
})
.catch(error => console.error('Error' + error))
}   // αν συμβεί network error ή αν δουλέυει το δίκτυο και δεν είναι 200αρι το status. Δεν γίνεται αυτόματα το ελέγξαμε εμείς το άν δεν είναι 200αρι