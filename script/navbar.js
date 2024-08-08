var sidenav=document.querySelector(".side-navbar")

function showNavbar(){
    sidenav.style.left="0"
    sidenav.style.display="block"
}

document.addEventListener("DOMContentLoaded", function() {
           // Get the elements
           const navbar = document.querySelector(".navbar");
           const toggleButton = document.getElementById("toggle-button");
           const removeButton = document.getElementById("remove-button");
           const removeButton1 = document.getElementById("side-navbar-home");
           const removeButton2 = document.getElementById("side-navbar-qutrix");
           const removeButton3 = document.getElementById("side-navbar-course");
           const removeButton4 = document.getElementById("side-navbar-about");
           const removeButton5 = document.getElementById("side-navbar-contact");
         
           // Add click event listener to the toggle button
           toggleButton.addEventListener("click", function() {
             // Toggle the 'active' class on the navbar
             navbar.classList.toggle("active");
           });

           // Add click event listener to the remove button
           removeButton.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton1.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton2.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton3.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton4.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton5.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
         });

function closeNavbar(){
    sidenav.style.left="-10%"
    sidenav.style.display="none"
}