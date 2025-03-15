document.getElementById("btn").addEventListener('click', async () => { // ασύνγχρονο function, το async ενεργοποιεί μέσα στο σώμα την await
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    if (!response.ok) throw new Error('Invalid response')
    let data = await response.json()
    document.getElementById('output').innerHTML = `<b>Title:</b> ${data.title}
                                                    <br> 
                                                      <b>Body:</b>${data.body}`
  } catch(error) {
    console.error('Fetch error', error)
    document.getElementById('output').innerHTML = 'Error fetching data'
  }
})  