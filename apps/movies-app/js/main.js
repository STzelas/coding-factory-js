$(function () {

  // debounce είναι όρος, σημαίνει ότι διακόπτεται το 
  // timeout ξαναρχιζει και μετραει διακοπτεται
  // με καποιο event κλπ (rest timeout, clear timeout)
  let debounceTimeout = null  
  $('#searchInput').on('input', function() {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => getMovies(this.value.trim()), 1500)  // todo
  })

  $('#showMore').on('click', function(e) {
    e.preventDefault()
    onShowMoreClicked(); // todo
  })

})