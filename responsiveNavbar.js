const toggleButton = document.getElementsByClassName('togglebutton')[0]
const navBarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarlinks.classList.toggle('active')
})