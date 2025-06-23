// Clients
const clientsLocations = document.querySelectorAll(".our-clients-locations ul li");
const clientLogosList = document.querySelectorAll(".our-clients-logos-container");

// Scroll Up
const scrollUp = document.getElementById('scroll-up');

// Mobile Nav
const mobileNav = document.getElementById("mobile-burger-nav");
const burgerMenu = document.getElementById("burger-menu-icon");
const closeMobileNav = document.querySelector(".close");
const mobileListNav = document.querySelectorAll("#mobile-burger-nav-content a");


// Show / Hide Element Fucntions
const showHideElement = (btn, el, status="none") => btn.onclick = () => el.style.display = status;

const outClickHideModal = (modalEl) => window.onclick = (event) => {
    if (event.target == modalEl) {
        modalEl.style.display = "none";
    }
}



// Cliens Functions
const clientsRegion = (event) => {
        AOS.init();

    const selectedLocationElement = event.target;
    const selectedClientsLocationList = document.querySelector(`.our-clients-logos-container.${selectedLocationElement.className}`);

    if(selectedLocationElement && selectedClientsLocationList){
        clientsLocations.forEach(title => title.classList.remove("active-title-clients-option"));
        clientLogosList.forEach(logo => logo.classList.add("hidden-clients"));

        
        selectedLocationElement.classList.add("active-title-clients-option");
        selectedClientsLocationList.classList.remove("hidden-clients");
    }
}



// Mobile Functions

mobileListNav.forEach(seslected => {
    seslected.addEventListener('click', () => mobileNav.style.display = "none");
})

showHideElement(burgerMenu, mobileNav, "block");

showHideElement(closeMobileNav, mobileNav);
// showHideElement($(".mobile-burger-nav-content a"), mobileNav);

// Scroll Up Functions
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});