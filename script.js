// On-load


// Open nav
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const nav = document.querySelector(".nav");
    const contactText = document.querySelector(".contact-text");
    const socialsIcon = document.querySelector("#socials")

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
            contactText.style.display = "none";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
            contactText.style.display = "block";
        }
    });

    closeIcon.addEventListener("click", () => {
        nav.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.classList.toggle("hidden");
    });


});

// Tab Section
function openSection(evt, sectionName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}