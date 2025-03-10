$(function() {   // $ kai function σημαίνει ότι πρώτα φορτώνει το DOM $(document).ready(function() {})
  // sayHello()
  // sayHello2()
  // sayHello3()
  creatAndAppent()
})

// const sayHello = () => console.log('Hello!')
// const sayHello2 = () => $('#root').text('Hello Coding')
// const sayHello3 = () => $('#root').html('<h1>Hello Coding</h1>')   // .html είναι parse html σαν την innerHTML

const $p = $('<p>')
// $p.html('Hello World')
// $('body').append($p)

$p.html("Hello Coding").appendTo($('body'))


const creatAndAppent = () => $('#root').append($('<p>World</p>'))