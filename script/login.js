function showLogin() {
    document.getElementById('login-background').style.display = 'flex';
}
function closeLogin() {
    document.getElementById('login-background').style.display = 'none';
}
function closeOtp() {
    document.getElementById('otp-background').style.display = 'none';
}

 //Function to show the OTP form
 function showOtpForm() {
     document.getElementById('login-background').style.display = 'none';
     document.getElementById('otp-background').style.display = 'flex';
 }

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('otp-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Redirecting To Events Page");
        window.location.href = 'card.html'; // New target HTML file
    });
});