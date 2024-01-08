const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const navBar = document.querySelector(".nav-bar");
const body = document.querySelector("body");
const navClose = document.querySelector(".nav-close");
const navOpen = document.querySelector(".nav-open");

// JS CODE FOR NAVBARS

navOpen.addEventListener("click" , () =>{
    navBar.classList.add("nav-active");
});

navClose.addEventListener("click", () =>{
    navBar.classList.remove("nav-active");
});



// Scripts for Login Form

registerLink.addEventListener("click", () =>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", () =>{
    wrapper.classList.remove("active");
});

let popup = document.getElementById("login-popup-notif");

function openLoginPopupNotif(){
    popup.classList.add(".open-reg-popup-notif-con");
}

function openLoginPopupNotif(){
    var Name = document.getElementById('l-username');
    var password = document.getElementById('l-password');
    var checkbox = document.getElementById('l-checkbox');

    if(checkbox.checked == true) {
        window.location.assign("index.html");
        alert("You have Successfully Logged in");
    }
    else {
        return;
    }

}

function openRegPopupNotif(){
    var Name = document.getElementById('r-username');
    var email = document.getElementById('r-email');
    var password = document.getElementById('r-password');
    var checkbox = document.getElementById('r-checkbox');

    if(checkbox.checked == true) {
        window.location.assign("login.html");
        alert("You have Successfully Registered");
    }
    else {
        return;
    }

}

// Navbar Scroll Options

var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else {
    document.getElementById("header").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// Get in Touch //

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('message');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else {
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}