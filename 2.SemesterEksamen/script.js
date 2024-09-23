let currentAnimal = null; // no default animal
let animalClicked = false; // to check if an animal has already been clicked boolean

// A function to play the corresponding animal sound on click
function playSound(animal) {
    const sound = new Audio(`sounds/${animal}_hello.mp3`);
    sound.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

// Function to play the sound when h2 is clicked
function playClickSound() {
    if (animalClicked && currentAnimal) {
        const sound = new Audio(`sounds/${currentAnimal}_introduction.mp3`);
        sound.play().catch(error => {
            console.error("Error playing click sound:", error);
        });
    }
}

// Function to change the background based on the clicked animal
function changeBackground(animal) {
    const backgroundSection = document.querySelector('.background');
    backgroundSection.className = `background background-${animal.toLowerCase()}`;
}

// Function to change the h2 text based on the clicked animal
function changeHeading(animal) {
    const heading = document.querySelector('.container__text');
    let newText = '';
    switch (animal.toLowerCase()) {
        case 'elephant':
            newText = 'Kreative Elefant';
            break;
        case 'monkey':
            newText = 'Aktive Abe';
            break;
        case 'fox':
            newText = 'Naturglade Ræv';
            break;
        case 'owl':
            newText = 'Kulturglade Ugle';
            break;
        case 'seal':
            newText = 'Vandglade Sæl';
            break;
    }
    heading.textContent = newText;
}

// Function to change the images based on the clicked animal
function changeImages(animal) {
    const imagePaths = {
        elephant: [ 
            'images/cards/elephant_imageone.png',
            'images/cards/elephant_imagetwo.png',
            'images/cards/elephant_imagethree.png',
            'images/cards/elephant_imagefour.png'
        ],
        monkey: [
            'images/cards/monkey_imageone.png',
            'images/cards/monkey_imagetwo.png',
            'images/cards/monkey_imagethree.png',
            'images/cards/monkey_imagefour.png'
        ],
        fox: [
            'images/cards/fox_imageone.png',
            'images/cards/fox_imagetwo.png',
            'images/cards/fox_imagethree.png',
            'images/cards/fox_imagefour.png'
        ],
        owl: [
            'images/cards/owl_imageone.png',
            'images/cards/owl_imagetwo.png',
            'images/cards/owl_imagethree.png',
            'images/cards/owl_imagefour.png'
        ],
        seal: [
            'images/cards/seal_imageone.png',
            'images/cards/seal_imagetwo.png',
            'images/cards/seal_imagethree.png',
            'images/cards/seal_imagefour.png'
        ]
    };

    const images = document.querySelectorAll('.images img');
    images.forEach((img, index) => {
        img.src = imagePaths[animal][index];
    });
}

// Function to toggle the visibility of the images
function toggleImagesVisibility(visible) {
    const imagesSection = document.querySelector('.images');
    imagesSection.style.visibility = visible ? 'visible' : 'hidden';
}

// Function to toggle the visibility of the button
function toggleButtonVisibility(visible) {
    const button = document.querySelector('button');
    button.style.visibility = visible ? 'visible' : 'hidden';
}

// Function to handle the animal click event
function handleAnimalClick(animal) {
    currentAnimal = animal.toLowerCase();
    animalClicked = true;
    changeBackground(animal);
    changeHeading(animal);
    changeImages(animal);
    toggleImagesVisibility(true); // Show the images
    toggleButtonVisibility(true); // Show the button
    document.querySelector('.container').classList.add('clickable'); // Add clickable class
    scaleAnimal(animal); // Scale the clicked animal
}

// Function to scale the clicked animal and reset others
function scaleAnimal(animal) {
    document.querySelectorAll('.animal').forEach(a => {
        a.classList.remove('clicked');
    });
    document.querySelector(`.${animal}`).classList.add('clicked');
}

// Adding click event listeners to each animal for sound playback and handling the click
document.querySelectorAll('.animal').forEach(animal => {
    const animalName = animal.classList[1]; // Get the animal name from the class
    animal.addEventListener('click', () => {
        playSound(animalName);
        handleAnimalClick(animalName);
    });
});

// Adding click event listeners to the h2 element
const heading = document.querySelector('.container__text');
heading.addEventListener('click', playClickSound);

// Hide the images and button initially
toggleImagesVisibility(false);
toggleButtonVisibility(false);

