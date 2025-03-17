/**
 * Best practice / current practice
 */

document.getElementById("btn").addEventListener('click', async () => { // ασύνγχρονο function, το async ενεργοποιεί μέσα στο σώμα την await
  try {

    const postData = {
      title: 'Coding',
      body: 'Coding Factory',
      userId: 1,
    }

    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(postData)     // Στο fetch API τα data πρέπει να γίνουν stringify και να μπουν στο payload. Στο axios γίνεται αυτόματα και αυτο και το content type όταν δει json!
    // }

    let response = await axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    // if (!response.ok) throw new Error('Invalid response')     // το κάνει μόνο του το axios
    // let data = await response.json()                          // δεν χρειάζεται ούτε parse.
    document.getElementById('output').innerHTML = ` <b>Id:</b> ${response.data.id}
                                                    <br>
                                                    <b>Title:</b> ${response.data.title}
                                                    <br> 
                                                      <b>Body:</b> ${response.data.body}`
  } catch(error) {
    console.error('Get error', error)
    document.getElementById('output').innerHTML = 'Error fetching data'
  }
})  