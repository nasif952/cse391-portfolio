function toggleMenu() {
    var hamburgerNav = document.getElementById("hamburger-nav");

    if (hamburgerNav.style.display === "none" || hamburgerNav.style.display === "") {
        hamburgerNav.style.display = "block";
    } else {
        hamburgerNav.style.display = "none";
    }
}
