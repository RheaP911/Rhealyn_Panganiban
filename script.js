
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav");


// Open nav
document.addEventListener("DOMContentLoaded", () => {

    menuIcon.addEventListener("click", () => {
        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuIcon.style.display = "none";
            closeIcon.style.display = "block";
        } else {
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
            nav.classList.remove("active");

        }
    });

    closeIcon.addEventListener("click", () => {
        nav.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
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

//Active After
document.querySelectorAll('.nav ul li button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.nav ul li button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        nav.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
});
