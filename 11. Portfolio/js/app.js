const Closebtn = document.querySelector('#close-btn')
const Openbtn = document.querySelector('.nav-btn')
const sidebar = document.querySelector('.sidebar')

Closebtn.addEventListener('click', function() {
    sidebar.classList.remove('show')
})
Openbtn.addEventListener('click', function() {
    sidebar.classList.add('show')
})