

// When the page loads, check if the user has a saved theme preference
let Savedtheme = localStorage.getItem("theme") || "light_mode"
if (Savedtheme === "dark_mode") {
    document.body.classList.add("dark-mode")
}

function ChangeTheme() {
    let theme = document.body.classList.toggle("dark-mode")
    let element = document.getElementById("theme-changer-span")
    if (theme) {
        localStorage.setItem("theme", "dark_mode")
    }
    else {
        localStorage.setItem("theme", "light_mode")
    }
    element.innerHTML = localStorage.getItem("theme")
}

function PhoneNavbarOptionsToggler() {
    let phoneOptions = document.getElementById("phone-options")
    if (phoneOptions.style.display === "none") {
        phoneOptions.style.display = "block"
    }
    else {
        phoneOptions.style.display = "none"
    }
}

