// script.js
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const h1 = document.querySelector('h1');
const message = document.getElementById('message');

yesBtn.addEventListener('click', () => {
    h1.textContent = "Yay! Happy Valentine's Day!";
    message.textContent = ""; 
    message.style.display = 'none';
    yesBtn.style.display = 'none'; // Optional: Hide the 'Yes' button
    noBtn.style.display = 'none'; // Optional: Hide the 'No' button
});

noBtn.addEventListener('click', () => {
    message.textContent = "Great job using process of elimination!";
    message.style.display = 'block';
    noBtn.style.display = 'none'; // Optional: Hide the 'No' button
    
});