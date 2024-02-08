// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => {
    message.textContent = "Yay! Happy Valentine's Day!";
});

noBtn.addEventListener('click', () => {
    message.textContent = "Great job using process of elimination!";
    noBtn.style.display = 'none'; // Optional: Hide the 'No' button
});