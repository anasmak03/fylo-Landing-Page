const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-menu')


hamburger.addEventListener('click', () =>{
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
})