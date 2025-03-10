const DEFAULT = 0
let counter = DEFAULT   // State - model

// window.addEventListener('DOMContentLoaded', function() {
  // this.document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
  // this.document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
  // this.document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())
// })

$(function() {
  $('#btnDecr').on('click', () => onDecreaseClicked())
  $('#btnReset').on('click', () => onResetClicked())
  $('#btnIncr').on('click', () => onIncreaseClicked())
})

/**
 * Handlers - Controller
 */

function onDecreaseClicked(data) {
  // validate
  decreaseCounter()
}

function onResetClicked() {
  resetCounter()
}

function onIncreaseClicked() {
  increaseCounter()
}

/**
 * Model
 */
function decreaseCounter() {
  counter--;
  render();
}

function resetCounter() {
  counter = DEFAULT;
  render();
}

function increaseCounter() {
  counter++;
  render();
}

/**
 * View
 */
function render() {
  // const counterDOM = document.getElementById("counter")
  // counterDOM.textContent = counter
  // styleCounter(counterDOM)
  const $counterDOM = $('#counter')
  $counterDOM.text(counter)

  styleCounter($counterDOM)
}

function styleCounter($counterDOM) {
  // counterDOM.classList.toggle('color-green', counter > 0)
  // counterDOM.classList.toggle('color-red', counter < 0)
  // counterDOM.classList.toggle('color-black', counter === 0)
  $counterDOM.toggleClass('color-green', counter > 0)
  $counterDOM.toggleClass('color-red', counter < 0)
  $counterDOM.toggleClass('color-black', counter === 0)
}

// function styleCounter(counterDOM) {
//   if (counter === 0) {
//     counterDOM.style.color = 'black'
//   } else if (counter > 0) {
//     counterDOM.style.color = 'green'
//   } else {
//     counterDOM.style.color = 'red'
//   }
// }


// let counter = 0;
// const btnDecr = document.getElementById("btnDecr")
// const btnReset = document.getElementById("btnReset")
// const btnIncr = document.getElementById("btnIncr")
// let counterDOM = document.getElementById("counter")

// btnDecr.addEventListener('click', function(e) {
//   counter--;
//   counterDOM.innerHTML = counter
  
// })

// btnReset.addEventListener('click', function(e) {
//   counter = 0;
//   counterDOM.innerHTML = counter
// })

// btnIncr.addEventListener('click', function(e) {
//   counter++;
//   counterDOM.innerHTML = counter
// })