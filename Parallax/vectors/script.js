document.addEventListener("DOMContentLoaded", () => {
    const parallaxImages = document.querySelectorAll(".parallax__image");

    function updateParallax() {
        const scrollY = window.scrollY

        parallaxImages.forEach(image => {
            const modifier = parseFloat(image.getAttribute("data-modifier"));
            const translateY = scrollY * modifier / 100;
            image.style.transform = `translateY(${translateY}px)`;
        });
    }

    window.addEventListener("scroll", updateParallax);
});