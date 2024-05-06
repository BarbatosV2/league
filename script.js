document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const contentContainer = document.getElementById('content-container');
    const leftButton = document.querySelector('.arrow-button.left');
    const rightButton = document.querySelector('.arrow-button.right');
    const imageContainer = document.querySelector('.image-container');

    // Initially, display the content related to the first image
    showContent(images[0].id);
    // Set initial opacity for side images
    adjustSideImagesOpacity();

    // Event listener for left arrow button
    leftArrow.addEventListener('click', function() {
        // Move the last image to the beginning of the list
        const lastImage = document.querySelector('.image-container img:last-child');
        imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
    });

    // Event listener for right arrow button
    rightArrow.addEventListener('click', function() {
        // Move the first image to the end of the list
        const firstImage = document.querySelector('.image-container img:first-child');
        imageContainer.appendChild(firstImage);
        // Show content related to the new first image
        showContent(document.querySelector('.image-container img:first-child').id);
        // Adjust opacity for side images
        adjustSideImagesOpacity();
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
                newContent.innerHTML = `
                    <h2>Mid Content (Still in testing State)</h2>

                    <model-viewer src="3dAnimated/hextech-malzahar.glb" alt="Model 1" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay></model-viewer>
                    <p>My Malzahar Playstyle.</p>
                    <p>E W Q the wave, if Jungle come Flash, E R the enemy champ`
                break;
            case 'image2':
                newContent.innerHTML = '<h2>Bot Content</h2><p>This is the content related to Image 2.</p>';
                break;
            case 'image3':
                newContent.innerHTML = '<h2>Support Content</h2><p>This is the content related to Image 3.</p>';
                break;
            case 'image4':
                newContent.innerHTML = `
                <h2>Jungle Content</h2>
                <div class="model-viewer-container">
                <model-viewer src="3dAnimated/sejuani.glb" alt="Model 4" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay></model-viewer>
                </div>
                <p>This is the content related to Image 4.</p>`
                break;
            case 'image5':
                newContent.innerHTML = `
                <h2>Jungle Content</h2>
                <div class="model-viewer-container">
                <model-viewer src="3dAnimated/dragon-knight-mordekaiser.glb" alt="Model 4" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay animation-name="Walk"></model-viewer>
                </div>
                <p>This is the content related to Image 5.</p>`
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
