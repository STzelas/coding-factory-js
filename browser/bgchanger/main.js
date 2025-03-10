let color = undefined

// window.addEventListener("DOMContentLoaded", function() {
//   // this.document.querySelector("#btn").addEventListener('click', () => onClickMeClicked())
// })

$(function() {
  $('#btn').on('click', () => {
    onClickMeClicked()
  })
})

function onClickMeClicked() {
  updateBg()
}


/**
 * Model
 */

function updateBg() {
  color = getBgColor() // update state
  renderBg(color)
}

function getBgColor() {
  const colors = ['black', 'red', 'green', 'white', 'blue']
  return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * View - UI Rendering
 */
function renderBg(bgColor) {
  // document.querySelector('#hex').innerHTML = color
  // document.body.style.backgroundColor = color
  $('#hex').text(bgColor)
  $('body').css('background-color', bgColor)
}

