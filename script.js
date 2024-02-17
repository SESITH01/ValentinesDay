const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const h1 = document.querySelector('h1');
const message = document.getElementById('message');
const img = document.getElementById('img');
const img2 = document.getElementById('img2');

let noClicked = false; // Initialize a variable to track if 'no' button was clicked

yesBtn.addEventListener('click', () => {
    if (!noClicked) { // Check if 'yes' button was clicked for the first time
        h1.textContent = "Yay!";
        img2.style.display =  'block';
    } else {
        h1.textContent = "Sorry, you're on the waitlist now ¯|_(ツ)_/¯ Try again next year!";
    }
    message.textContent = ""; 
    message.style.display = 'none';
    yesBtn.style.transform = 'translate(-50%, -50%) scale(0)'; //Set initial scale to 0;
    img.style.display = 'none'; //Hide the image
    setTimeout(() => {
        yesBtn.style.display = 'block'; //Show the 'Yes' button
        noBtn.style.display = 'none'; //Hide the 'No' button
    }, 10);
});


noBtn.addEventListener('click', () => {
    noClicked = true;
    message.textContent = "Good choice to eliminate!";
    message.style.display = 'block';
    noBtn.style.animation = 'popOut 0.5s forwards'; // Trigger the 'popOut animation for the 'No' button
    setTimeout(() => {
        noBtn.style.display = 'none' // Hide the 'No' button after animation
    }, 500); //Adjust the duration as needed
});
