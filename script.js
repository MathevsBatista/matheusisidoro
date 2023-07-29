const burger = document.querySelector(".burger-container");
const navbar = document.querySelector(".nav-menu");
const opacity = document.querySelector(".opacity");

burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    opacity.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    navbar.classList.remove("active");
    opacity.classList.remove("active");
}))

opacity.addEventListener("click", () => {
    navbar.classList.remove("active");
    opacity.classList.remove("active");
})

