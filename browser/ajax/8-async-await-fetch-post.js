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

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)     // Στο fetch API τα data πρέπει να γίνουν stringify και να μπουν στο payload. Στο axios γίνεται αυτόματα.
    }


    let response = await fetch('https://jsonplaceholder.typicode.com/posts', options)

    if (!response.ok) throw new Error('Invalid response')   
    let data = await response.json()                        
    document.getElementById('output').innerHTML = ` <b>Id:</b> ${data.id}
                                                    <br>
                                                    <b>Title:</b> ${data.title}
                                                    <br> 
                                                    <b>Body:</b>${data.body}`
  } catch(error) {
    console.error('Fetch error', error)
    document.getElementById('output').innerHTML = 'Error fetching data'
  }
})  