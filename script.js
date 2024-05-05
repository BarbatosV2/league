document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const contentContainer = document.getElementById('content-container');
    const leftButton = document.querySelector('.arrow-button.left');
    const rightButton = document.querySelector('.arrow-button.right');

    // Initially, display the content related to the first image
    showContent(images[0].id);
    // Set initial opacity for side images
    adjustSideImagesOpacity();

    // Event listener for left arrow button
    leftButton.addEventListener('click', function() {
        // Move the first image to the end of the list
        const firstImage = document.querySelector('.image-container img:first-child');
        document.querySelector('.image-container').appendChild(firstImage);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
        // Add sliding animation to the left
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        imageContainer.style.transform = 'translateX(-100%)';
        // Reset transformation after animation
        setTimeout(() => {
            imageContainer.style.transition = '';
            imageContainer.style.transform = '';
        }, 500);
    });

    // Event listener for right arrow button
    rightButton.addEventListener('click', function() {
        // Move the last image to the beginning of the list
        const lastImage = document.querySelector('.image-container img:last-child');
        document.querySelector('.image-container').prepend(lastImage);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
        // Add sliding animation to the right
        imageContainer.style.transition = 'transform 0.5s ease-in-out';
        imageContainer.style.transform = 'translateX(100%)';
        // Reset transformation after animation
        setTimeout(() => {
            imageContainer.style.transition = '';
            imageContainer.style.transform = '';
        }, 500);
    });

    // Function to show content based on image ID
    function showContent(imageId) {
        // Clear existing content
        contentContainer.innerHTML = '';

        // Create new content based on the image ID
        const newContent = document.createElement('div');
        newContent.classList.add('image-content');

        switch (imageId) {
            case 'image1':
                newContent.innerHTML = '<h2>Mid Content</h2><p>This is the content related to Image 1.</p>';
                break;
            case 'image2':
                newContent.innerHTML = '<h2>Bot Content</h2><p>This is the content related to Image 2.</p>';
                break;
            case 'image3':
                newContent.innerHTML = '<h2>Support Content</h2><p>This is the content related to Image 3.</p>';
                break;
            case 'image4':
                newContent.innerHTML = '<h2>Jungle Content</h2><p>This is the content related to Image 4.</p>';
                break;
            case 'image5':
                newContent.innerHTML = '<h2>Top Content</h2><p>This is the content related to Image 5.</p>';
                break;
            // Add cases for more images here
            default:
                console.log('Image not found');
        }

        // Append new content to the container
        contentContainer.appendChild(newContent);
    }

    // Function to adjust opacity for side images
    function adjustSideImagesOpacity() {
        images.forEach(image => {
            if (image === document.querySelector('.image-container img:nth-child(3)') || image.classList.contains('middle-image')) {
                image.style.opacity = 1; // Full opacity for the middle image
            } else {
                image.style.opacity = 0.1; // Faded opacity for other images
            }
        });
}

});
