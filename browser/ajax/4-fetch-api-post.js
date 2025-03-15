/**
 * Τρόπος να γίνει POST στο fetch API
 */

const createPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', { 
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({  // payload
      title: "Coding Factory",
      body: "Coding Factory says Hello",
      userId: 1
    }) // 2h parametros options object που έχει τα 3 βασικά στοιχεία του request (μέθοδο, headers και body (το payload))
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error. Status: ${response.status}`)
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('fetchResponse').innerHTML = `<b>Post created</b> : ${data.title}`
  })
  .catch(error => {
    console.error('Error: ' + error)   // logging
    document.getElementById("fetchResponse").innerHTML = `Error. ${error.message}`   // user friendly localized feedback
  })
}