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
    var i, tabcontent, tablinks, main, footer, nav;
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

    main = document.querySelector('main');
    header = document.querySelector('header');
    footer = document.querySelector('footer');
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


const statusDiv = document.querySelector('.email-status');
const statusMsg = document.querySelector('#responseMessage');

document.querySelector("#contact-form").addEventListener("submit", function(event) {
    emailjs.init("VqVl3b_7r78Rq2paJ"); 


    event.preventDefault(); 


    emailjs.send("service_mw1d6bi", "template_6fmktoi", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }).then(response => {
        console.log("Email sent successfully!", response);
        statusDiv.style.visibility = "visible";
        document.querySelector("form").reset();
    }).catch(error => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Please try again.");
    });
});

