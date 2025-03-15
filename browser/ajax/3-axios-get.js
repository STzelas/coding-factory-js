// κάνει αυτόματα parsing το axios.  
// Επίσης θεωρεί success μόνο τα 2xx. 
// Όλα τα άλλα είναι error, τα στέλνει αμέσως στην catch
// Axios είναι το πιο χρησιμοποιούμενο και καλύτερο/απλό

function fetchOneObject() {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(respone => {
    document.getElementById('responseText').innerHTML = `<b>Title:</b> ${response.data.title}`
  }).catch(error => console.error("Error :" + error)) 
  
     
}  