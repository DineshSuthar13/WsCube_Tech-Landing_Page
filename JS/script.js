//* Menu bar show and hide
let hamburgar = document.querySelector(".hamburgar");
let hamburgarIcon = document.querySelector(".hamburgar>i");
let navMenu = document.querySelector(".nav-menu");

hamburgar.addEventListener("click", ()=>{
    navMenu.classList.toggle("showModal");
    hamburgarIcon.classList.toggle("fa-xmark");
});