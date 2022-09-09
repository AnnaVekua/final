var submitBtn = document.getElementById("submit")
var burgerBtn = document.getElementById("burgerBtn")
var burgerNavbar = document.querySelector('.burger-navbar')

submitBtn?.addEventListener("click", function () {
    alert('are you sure?')
})

burgerBtn.addEventListener("click", function () {
    if (burgerNavbar.classList.contains("active")) {
        burgerNavbar.classList.remove('active')
    } else {
        burgerNavbar.classList.add('active')
    }

})