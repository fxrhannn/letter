const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const toggleButton = document.getElementById('toggleButton');

let isOpen = false;

toggleButton.addEventListener('click', () => {
    if (isOpen) {
        envelope.style.transform = 'rotate(0deg)';
        content.style.display = 'none';
        toggleButton.textContent = 'Open Envelope';
        document.querySelector('.top').style.transform = 'rotate(0deg)';
        document.querySelector('.bottom').style.transform = 'rotate(0deg)';
        document.querySelector('.left').style.transform = 'rotate(0deg)';
        document.querySelector('.right').style.transform = 'rotate(0deg)';
    } else {
        envelope.style.transform = 'rotate(15deg)';
        content.style.display = 'block';
        toggleButton.textContent = 'Close Envelope';
        document.querySelector('.top').style.transform = 'rotate(-60deg)';
        document.querySelector('.bottom').style.transform = 'rotate(60deg)';
        document.querySelector('.left').style.transform = 'rotate(-45deg)';
        document.querySelector('.right').style.transform = 'rotate(45deg)';
    }
    isOpen = !isOpen;
});
