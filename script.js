const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const toggleButton = document.getElementById('toggleButton');

let isOpen = false;

toggleButton.addEventListener('click', () => {
    if (isOpen) {
        // Close the envelope
        envelope.style.transform = 'rotate(0deg)';
        content.style.display = 'none';
        toggleButton.textContent = 'Open Envelope';
        document.querySelector('.heart-top').style.transform = 'rotate(0deg)';
        document.querySelector('.heart-bottom').style.transform = 'rotate(0deg)';
    } else {
        // Open the envelope
        envelope.style.transform = 'rotate(15deg)';
        content.style.display = 'block';
        toggleButton.textContent = 'Close Envelope';
        document.querySelector('.heart-top').style.transform = 'rotate(-60deg)';
        document.querySelector('.heart-bottom').style.transform = 'rotate(60deg)';
    }
    isOpen = !isOpen;
});
