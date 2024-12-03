// init.js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const contentContainer = document.getElementById('content-container');
    const imageContainer = document.querySelector('.image-container');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    // Initially, display the content related to the first image
    showContent(images[0].id);

    // Set initial opacity for side images
    adjustSideImagesOpacity();

    // Event listeners for arrow buttons
    leftArrow.addEventListener('click', handleLeftArrowClick);
    rightArrow.addEventListener('click', handleRightArrowClick);
});

function toggleProfile() {
    var profile = document.getElementById("profileContainer");
    var button = document.getElementById("toggleButton");
    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}

function toggleProfile(containerId) {
    var profile = document.getElementById(containerId);
    if (profile.style.display === "none") {
        profile.style.display = "block";
    } else {
        profile.style.display = "none";
    }
}
