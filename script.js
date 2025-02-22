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


// Select elements
const submitBtn = document.querySelector('.submit-button');
const statusDiv = document.querySelector('.email-status');
const statusMsg = document.querySelector('#responseMessage');
const form = document.querySelector('form');
const nameInput = document.querySelector(input[name='name']);
const emailInput = document.querySelector(input[name='email']);
const messageInput = document.querySelector(textarea[name='message']);
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');


form.addEventListener("submit", (event) => {
    let isValid = true;

    if (nameInput.value.trim() === "") {
        isValid = false;
        nameError.style.visibility = "visible";
    } else {
        nameError.style.visibility = "hidden";
    }

    if (emailInput.value.trim() === "") {
        isValid = false;
        emailError.style.visibility = "visible";
    } else {
        emailError.style.visibility = "hidden";
    }

    if (messageInput.value.trim() === "") {
        isValid = false;
        messageError.style.visibility = "visible";
    } else {
        messageError.style.visibility = "hidden";
    }

    if (!isValid) {
        event.preventDefault(); 
        statusMsg.textContent = "Please fill in all fields.";
        statusDiv.style.border = "1px solid rgba(224, 67, 67, 0.795)";
        statusDiv.style.background = "rgb(248, 239, 239)";
        statusMsg.style.color = "rgba(224, 67, 67, 0.795)";
        statusDiv.style.visibility = "visible";
    }
});

