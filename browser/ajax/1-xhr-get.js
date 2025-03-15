function fetchOneObject() {
  // Δημιουργούμε το xhr
  const xhr = new XMLHttpRequest();  // ajax

  // Αρχικοποιούμε το xhr

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true)  // Το true δείχνει ότι είναι ασύγχρονη μέθοδος

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300) {
          handleResponse(JSON.parse(xhr.responseText))   // xhr.responseText είναι το JSON String
      } else {
          showError(xhr.statusText)
      }
    }
  }

  xhr.send();
}

function handleResponse(response) {
  document.getElementById('responseText').innerHTML = `<b>Title</b>: ${response.title}
                                                  <br> <b>Body</b>: ${response.body}`
}

function showError(statusText) {
  document.getElementById('responseText').innerHTML = `Error: ${statusText}`
}