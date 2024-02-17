// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const h1 = document.querySelector('h1');
const message = document.getElementById('message');
const img = document.querySelector('img');

yesBtn.addEventListener('click', () => {
    h1.textContent = "Sorry, you're on the waitlist now ¯|_(ツ)_/¯ Try again next year!";
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
    message.textContent = "Good choice to eliminate!";
    message.style.display = 'block';
    noBtn.style.animation = 'popOut 0.5s forwards'; // Trigger the 'popOut animation for the 'No' button
    setTimeout(() => {
        noBtn.style.display = 'none' // Hide the 'No' button after animation
    }, 500); //Adjust the duration as needed
 });
    
