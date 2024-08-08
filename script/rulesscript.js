// NavBar Script
    var sidenav=document.querySelector(".side-navbar")
         function showNavbar(){
            sidenav.style.left="0";
            sidenav.style.display="block";
         }

         function closeNavbar(){
            sidenav.style.left="-10%";
            sidenav.style.display="none";
         }

    document.addEventListener("DOMContentLoaded", function() {
           // Get the elements
           const navbar = document.querySelector(".navbar");
           const toggleButton = document.getElementById("toggle-button");
           const removeButton = document.getElementById("remove-button");
           const removeButton1 = document.getElementById("side-navbar-home");
           const removeButton2 = document.getElementById("side-navbar-about");
           const removeButton3 = document.getElementById("side-navbar-contact");
         
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
           removeButton.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
           removeButton.addEventListener("click", function() {
             // Remove the 'active' class from the navbar
             navbar.classList.remove("active");
           });
         });

// Rules Script

var poverlay = document.querySelector(".poverlay")
var ppopup = document.querySelector(".ppopup")
    function pshow()
    {
        ppopup.style.display="block";
        poverlay.style.display="block";
        // document.body.classList.add("remove");
    }
    function pcloserule()
    {
        ppopup.style.display="none";
        poverlay.style.display="none";
        // document.body.classList.remove("remove");
    }

var qoverlay = document.querySelector(".qoverlay");
var qpopup = document.querySelector(".qpopup");

    function qshow() {
        qpopup.style.display = "block";
        qoverlay.style.display = "block";
        // document.body.classList.add("remove");
    }

    function qcloserule() {
        qpopup.style.display = "none";
        qoverlay.style.display = "none";
        // document.body.classList.remove("remove");
    }

var whoverlay = document.querySelector(".whoverlay");
var whpopup = document.querySelector(".whpopup");

    function whshow() {
        whpopup.style.display = "block";
        whoverlay.style.display = "block";
        // document.body.classList.add("remove");
    }
    
    function whcloserule() {
        whpopup.style.display = "none";
        whoverlay.style.display = "none";
        // document.body.classList.remove("remove");
    }    

var wdoverlay = document.querySelector(".wdoverlay");
var wdpopup = document.querySelector(".wdpopup");

    function wdshow() {
        wdpopup.style.display = "block";
        wdoverlay.style.display = "block";
        // document.body.classList.add("remove");
    }
    
    function wdcloserule() {
        wdpopup.style.display = "none";
        wdoverlay.style.display = "none";
        // document.body.classList.remove("remove");
    }

var scoverlay = document.querySelector(".scoverlay");
var scpopup = document.querySelector(".scpopup");

    function scshow() {
        scpopup.style.display = "block";
        scoverlay.style.display = "block";
        // document.body.classList.add("remove");
    }
    
    function sccloserule() {
        scpopup.style.display = "none";
        scoverlay.style.display = "none";
        // document.body.classList.remove("remove");
    }
var moverlay = document.querySelector(".moverlay");
var mpopup = document.querySelector(".mpopup");
    function mshow() {
        mpopup.style.display = "block";
        moverlay.style.display = "block";
        // document.body.classList.add("remove");
    }

    function mcloserule() {
        mpopup.style.display = "none";
        moverlay.style.display = "none";
        // document.body.classList.remove("remove");
    }

