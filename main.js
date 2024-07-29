//navbar
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//home 
const container = document.querySelector('.container');
const images = [
    'images/sCKCZMKZ-SwissotelMakkah.jpg',
    'images/5c592f1e09f06c20d01594e4.png',
    'images/background.jpg'
];
let currentIndex = 0;

function changeBackgroundImage() {
    container.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

// Initialize with the first image
changeBackgroundImage();
