const btn = document.getElementById('btn')
btn.addEventListener('click', function() {
  alert('Hello World!')
}, false)         // useCapture είναι default το false. ισχύει bubbling