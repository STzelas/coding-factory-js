const fetchCities = async () => {
  try {
    // const response = await axios.get('https://api.aueb.gr/cities')
    // const cities = response.data

    // Assume that the API returns an array of instances/objects (cities)

    const cities = [           // Το axios έκανε αυτόματα το parse
      {id: 1, name: "Αθήνα"},
      {id: 2, name: "Βόλος"},
      {id: 3, name: "Ιωάννινα"},
      {id: 4, name: "Πάτρα"},
      {id: 5, name: "Κοζάνη"},
      {id: 6, name: "Λαμία"},
      {id: 7, name: "Δράμα"},
    ]

    // μετατροπή Array σε UI element
    document.getElementById('city').innerHTML = cities
                                                .sort((a, b) => a.name.localeCompare(b.name))
                                                .map(city => `<option value="${city.id}">${city.name}</option>`)
                                                .join('')
  } catch (error) {
    console.error("Error fetching cities")
  }
}

const handleFormSubmit = async (event) => {   // event παράμετρος το click δηλαδη στην συγκεκριμένη περίπτωση

  // Οταν ενα submit button, που είναι μέσα σε μια φόρμα, πατηθεί, τότε στον browser 
  // 1. στέλνονται τα δεδομένα στο endpoint και
  // 2. κάνει refresh η φόρμα (τα πεδία κάνουν reset)
  // οπότε κάνουμε preventDefault όταν θέλουμε κάτι άλλο
  event.preventDefault()   
  
  const formData = {
    firstname: document.getElementById('firstname').value.trim(),
    lastname: document.getElementById('lastname').value.trim(),
    vat: document.getElementById('vat').value.trim(),
    cityId: document.getElementById('city').value.trim(),
  }

  try {

    // const response = await axios.post('https://api-aueb.gr/teachers', formData)
    // console.log('Form submitted successfully', response.data)   // Κάνει αυτόματα stringify ή toString 
    alert('Teacher data submitted successully' + JSON.stringify(formData))   // pop-up

  } catch(error) {
    console.error("Error in submitting the form")
    alert('Failed to submit the teacher form')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchCities();
  document.getElementById('teacherForm').addEventListener('submit', (submit) => handleFormSubmit(submit))
})