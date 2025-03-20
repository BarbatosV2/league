// animations.js
function handleLeftArrowClick() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.animation = 'slideToLeft 0.4s ease-in-out';
    imageContainer.addEventListener('animationend', function onAnimationEnd() {
        imageContainer.removeEventListener('animationend', onAnimationEnd);
        imageContainer.style.animation = '';
        const lastImage = document.querySelector('.image-container img:last-child');
        imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
        showContent(document.querySelector('.image-container img:first-child').id);
        adjustSideImagesOpacity();
    });
}

function handleRightArrowClick() {
    const imageContainer = document.querySelector('.image-container');
    imageContainer.style.animation = 'slideToRight 0.4s ease-in-out';
    imageContainer.addEventListener('animationend', function onAnimationEnd() {
        imageContainer.removeEventListener('animationend', onAnimationEnd);
        imageContainer.style.animation = '';
        const firstImage = document.querySelector('.image-container img:first-child');
        imageContainer.appendChild(firstImage);
        showContent(document.querySelector('.image-container img:first-child').id);
        adjustSideImagesOpacity();
    });
}

function adjustSideImagesOpacity() {
    const images = document.querySelectorAll('.gallery-image');
    images.forEach(image => {
        if (image === document.querySelector('.image-container img:nth-child(8)') || image.classList.contains('middle-image')) {
            image.style.opacity = 1; // Full opacity for the middle image
        } else {
            image.style.opacity = 0.1; // Faded opacity for other images
        }
    });
}



