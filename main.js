const clientsLocations = document.querySelectorAll(".our-clients-locations ul li");
const clientLogosList = document.querySelectorAll(".our-clients-logos-container");

const scrollUp = document.getElementById('scroll-up');


const clientsRegion = (event) => {
        AOS.init();

    const selectedLocationElement = event.target;
    const selectedClientsLocationList = document.querySelector(`.our-clients-logos-container.${selectedLocationElement.className}`);

    if(selectedLocationElement && selectedClientsLocationList){
        clientsLocations.forEach(title => title.classList.remove("active-title-clients-option"));
        // clientLogosList.forEach(logo => logo.style.display = "none");
        clientLogosList.forEach(logo => logo.classList.add("hidden-clients"));

        
        selectedLocationElement.classList.add("active-title-clients-option");
        // selectedClientsLocationList.style.display = "block";
        selectedClientsLocationList.classList.remove("hidden-clients");
        // console.log(selectedClientsLocationList)
    }
}


// Scroll Up Functions
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100)
        scrollUp.style.display = 'block';
    else
        scrollUp.style.display = 'none';

});