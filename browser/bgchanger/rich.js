let color = undefined

// window.addEventListener("DOMContentLoaded", function() {
//   this.document.querySelector("#btn").addEventListener('click', () => onClickMeClicked())
// })

$(function() {
  $('#btn').on('click', () => onClickMeClicked())
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
  // const colors = ['black', 'red', 'green', 'white', 'blue']
  // return colors[Math.floor(Math.random() * colors.length)]
  const letters = ['A', 'B', 'C', 'D', 'E', 'F']
  const digits = ['0','1','2','3','4','5','6','7','8','9']
  const hex = [...letters, ...digits]
  
  // RGB
  let randomColor = '#'
  for (let i = 1; i <= 6; i++) {
    let randomHex = Math.floor(Math.random() * hex.length)
    randomColor += hex[randomHex]
  }

  return randomColor
}

/**
 * View - UI Rendering
 */
function renderBg(bgColor) {
  // document.querySelector('#hex').innerHTML = color
  // document.body.style.backgroundColor = color
  $('#hex').html(bgColor)
  $('body').css('background-color', bgColor)
}

