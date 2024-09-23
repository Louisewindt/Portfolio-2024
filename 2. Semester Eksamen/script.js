let currentAnimal = null; // no default animal
let animalClicked = false; // to check if an animal has already been clicked boolean

// A function to play the corresponding animal sound on click
function playSound(animal) {
    const sound = new Audio(`sounds/${animal}_hello.mp3`);
    sound.play().catch(error => {
        console.error("Error playing sound:", error);
    }); // Catch any errors with sound playback
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
heading.addEventListener('click', playHoverSound);
heading.addEventListener('click', playClickSound);

// Hide the images and button initially
toggleImagesVisibility(false);
toggleButtonVisibility(false);
