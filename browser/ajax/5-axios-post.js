const payload =  {
  title: "Coding Factory",
  body: "CF JS Course",
  userid: 1
}

const createPost = () => {
  axios.post('https://jsonplaceholder.typicode.com/posts', payload) // αυτόματα stringify και το content-type application/json
  .then(response => {
    document.getElementById('axiosResponse').innerHTML = `<b>Post</b>: ${response.data.title}`
  })
  .catch(error => {
    
    console.error('Error: ' + error)   // logging
    document.getElementById("axiosResponse").innerHTML = `Error. ${error.message}`   // user friendly localized feedback
  })
}