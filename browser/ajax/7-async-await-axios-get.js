/**
 * Best practice / current practice
 */

document.getElementById("btn").addEventListener('click', async () => { // ασύνγχρονο function, το async ενεργοποιεί μέσα στο σώμα την await
  try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    // if (!response.ok) throw new Error('Invalid response')     // το κάνει μόνο του το axios
    // let data = await response.json()                          // δεν χρειάζεται ούτε parse.
    document.getElementById('output').innerHTML = `<b>Title:</b> ${response.data.title}
                                                    <br> 
                                                      <b>Body:</b>${response.data.body}`
  } catch(error) {
    console.error('Get error', error)
    document.getElementById('output').innerHTML = 'Error fetching data'
  }
})  