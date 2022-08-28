const navItems = document.querySelectorAll(".nav-link");
const formArea = document.querySelector(".main__form");
const signInForm = document.querySelector(".signin__form");
const signUpForm = document.querySelector(".signup__form");
const modalHeader = document.getElementById("signInModalLabel");
var activeTab = document.querySelector(".active");

setInterval(() => {
    activeTab = document.querySelector(".active")
    if(activeTab.classList.contains("signin")) {
        signUpForm.classList.add("hidden")
        if(signInForm.classList.contains("hidden")) signInForm.classList.remove("hidden")
        modalHeader.textContent = "Sign In!"
    } else if(activeTab.classList.contains("signup")) {
        signInForm.classList.add("hidden")
        if(signUpForm.classList.contains("hidden")) signUpForm.classList.remove("hidden")
        modalHeader.textContent = "Create Account!"
    }

}, 100)

// handling the click events on nav items to have one actove nav item at a single time.
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}