// Go back to the previous page when "Tilbage" button is clicked
document.querySelector('.page-header__back-button').addEventListener('click', function() {
    history.back();
});

// Function to open the lightbox and display the clicked image
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src; // Set the source of the clicked image
    lightbox.style.display = "flex"; // Show the lightbox
    resetZoom(); // Reset zoom state when opening the lightbox
}

// Function to close the lightbox when clicking outside the image or on the "X"
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    resetZoom(); // Reset zoom state
}

// Add click event listeners to all projects__image elements
const images = document.querySelectorAll(".projects__image");
images.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src));
});

let scale = 1; // Initial zoom scale
let isDragging = false; // To track if the image is being dragged
let startX = 0, startY = 0; // Starting coordinates of the mouse drag
let translateX = 0, translateY = 0; // Translate position for panning

const lightboxImg = document.getElementById("lightbox-img");

// Function to toggle zoom when clicking the image
function toggleZoom() {
    if (scale === 1) {
        scale = 2; // Zoom in
        lightboxImg.style.cursor = "zoom-out"; // Change to zoom-out cursor
        lightboxImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    } else {
        resetZoom(); // Reset zoom if it's already zoomed in
    }
}

// Reset zoom state
function resetZoom() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    lightboxImg.style.cursor = "zoom-in"; // Reset cursor to zoom-in
    lightboxImg.style.transform = "scale(1)"; // Reset scale and translation
}

// Add click-to-zoom functionality
lightboxImg.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent closing the lightbox when clicking the image
    toggleZoom();
});

// Allow panning when zoomed in
lightboxImg.addEventListener('mousedown', (event) => {
    if (scale > 1) {
        isDragging = true;
        startX = event.clientX - translateX;
        startY = event.clientY - translateY;
        lightboxImg.style.cursor = "grabbing"; // Change cursor to grabbing
        event.preventDefault(); // Prevent text selection or unwanted behavior
    }
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        translateX = event.clientX - startX;
        translateY = event.clientY - startY;
        lightboxImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        lightboxImg.style.cursor = "zoom-out"; // Change cursor back to zoom-out when zoomed in
    }
});

// Prevent dragging from closing the lightbox
document.getElementById("lightbox").addEventListener("click", (event) => {
    if (!isDragging) {
        closeLightbox();
    }
});
