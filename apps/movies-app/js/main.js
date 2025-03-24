$(function () {

  // debounce είναι όρος, σημαίνει ότι διακόπτεται το 
  // timeout ξαναρχιζει και μετραει διακοπτεται
  // με καποιο event κλπ (rest timeout, clear timeout)
  let debounceTimeout = null  
  $('#searchInput').on('input', function() {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => getMovies(this.value.trim()), 1500)
  })

  $('#showMore').on('click', function(e) {
    e.preventDefault()
    onShowMoreClicked();
  })

})

function getMovies(title) {
  if(!title) {
    return
  }

  onBeforeSend()
  fetchMovieFromAPI(title)
}

function fetchMovieFromAPI(title) {
  axios.get(`https://www.omdbapi.com/?t=${title}&apikey=c67403d1`)
        .then(response => {handleResults(response.data)})
        .catch(error => console.error('Error: ', error))
}

function handleResults(result) {
  if (result.Response === 'True') {
    render(result)
    hideComponent('#waiting')
  } else if (result.Response === 'False') {
    hideComponent('#waiting')
    showComponent('#notFound')
  }
}

function onBeforeSend() {
  showComponent('#waiting')
  hideComponent('#movie')
  hideComponent('#notFound')
  hideComponent('#error')
}

function onAPIError() {
  hideComponent('#waiting')
  showComponent('#error')
}

function onShowMoreClicked() {
  $('.extended').slideToggle(1000);  // Toggle visibility on and off with slide animation
}

function showComponent(jQueryComponent) {
  return $(jQueryComponent).removeClass('hidden')
}

function hideComponent(jQueryComponent) {
  return $(jQueryComponent).addClass('hidden')
}

function render(data) {
  const imdbUrl = `https://www.imdb.com/title/${data.imdbID}`

  const imdbLink = document.getElementById("imdbId")
  imdbLink.href = imdbUrl

  document.getElementById("title").textContent = data.title
  document.getElementById("year").textContent = `Έτος παραγωγής: ${data.Year}`
  document.getElementById("runtime").textContent = `Διάρκεια: ${data.Runtime}`
  document.getElementById("genre").textContent = `Είδος: ${data.Genre}`
  document.getElementById("imdbRating").textContent = data.imdbRating
  document.getElementById("plot").textContent = data.Plot
  document.getElementById("director").querySelector("span").textContent = data.Director
  document.getElementById("actors").querySelector("span").textContent = data.Actors
  document.getElementById("production").querySelector("span").textContent = data.Production
  document.getElementById("boxOffice").querySelector("span").textContent = data.BoxOffice
  document.getElementById("language").querySelector("span").textContent = data.Language
  document.getElementById("rated").querySelector("span").textContent = data.Rated

  const poster = document.getElementById("image")
  poster.src = data.Poster
  poster.alt = data.Title

  document.querySelector(".movie").classList.remove("hidden")
}