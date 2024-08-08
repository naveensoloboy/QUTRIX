

// var login1=document.querySelector(".container")

// function showlogin(){
//     login1.style.display="block"
//     a.style.display="none"
// }

// function closelogin(){
//     login1.style.display="none"
// }

// function showLogin() {
//     document.getElementById('background').style.display = 'flex';
// }
// function closeLogin() {
//     document.getElementById('background').style.display = 'none';
// }

/*Slide Details*/

document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.querySelector('.clgdetail1');
    const slides = document.querySelectorAll('.a');
    let currentIndex = 0;
    let timeoutId;

    function slideNext() {
        // Calculate the new transform value
        const newTransformValue = -100 * currentIndex;

        // Apply the transform to slide horizontally
        slider.style.transform = `translateX(${newTransformValue}%)`;

        // Move to the next slide
        currentIndex = (currentIndex + 1) % slides.length;

        // Schedule the next slide
        timeoutId = setTimeout(slideNext, 5000); // Adjust the delay as needed (3000 ms = 3 seconds)
    }

    // Start the slide show
    slideNext();

    slides.forEach(slide => {
        slide.addEventListener('mouseover', () => {
            clearTimeout(timeoutId);
        });
        slide.addEventListener('mouseout', () => {
            timeoutId = setTimeout(slideNext, 3000); // Restart the slideshow after mouse out
        });
    });
});

/* End */
