// animations.js
function handleLeftArrowClick() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.animation = 'slideToLeft 0.4s ease-in-out';
    imageContainer.addEventListener('animationend', function onAnimationEnd() {
        imageContainer.removeEventListener('animationend', onAnimationEnd);
        imageContainer.style.animation = '';
        
        // Move the last image to the beginning
        const lastImage = document.querySelector('.image-container img:last-child');
        imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
        
        // Adjust opacity for side images
        adjustSideImagesOpacity();
    });
}

function handleRightArrowClick() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.animation = 'slideToRight 0.4s ease-in-out';
    imageContainer.addEventListener('animationend', function onAnimationEnd() {
        imageContainer.removeEventListener('animationend', onAnimationEnd);
        imageContainer.style.animation = '';
        
        // Move the first image to the end
        const firstImage = document.querySelector('.image-container img:first-child');
        imageContainer.appendChild(firstImage);
        
        // Adjust opacity for side images
        adjustSideImagesOpacity();
    });
}

function adjustSideImagesOpacity() {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach((image, index) => {
        if (index === 3) { // Middle image (3rd image)
            image.style.opacity = 1; // Full opacity for the middle image
        } else {
            image.style.opacity = 0.1; // Faded opacity for other images
        }
    });
}

// Initialize the gallery with cloned images for infinite loop effect
function initializeGallery() {
    const imageContainer = document.querySelector('.image-container');
    const images = document.querySelectorAll('.gallery-image');

    // Clone the first and last images and append them to the container
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    imageContainer.appendChild(firstClone);
    imageContainer.insertBefore(lastClone, images[0]);

    // Adjust opacity for side images
    adjustSideImagesOpacity();
}

// Call the initializeGallery function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGallery);