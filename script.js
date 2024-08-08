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
        // Apply slide to left animation
        imageContainer.style.animation = 'slideToLeft 0.4s ease-in-out';
        // Wait for the animation to finish before proceeding
        imageContainer.addEventListener('animationend', function onAnimationEnd() {
            // Remove the event listener to prevent multiple executions
            imageContainer.removeEventListener('animationend', onAnimationEnd);
            // Reset animation
            imageContainer.style.animation = '';
            // Move the last image to the beginning of the list
            const lastImage = document.querySelector('.image-container img:last-child');
            imageContainer.insertBefore(lastImage, imageContainer.firstElementChild);
            // Show content related to the new first image
            showContent(document.querySelector('.image-container img:first-child').id);
            // Adjust opacity for side images
            adjustSideImagesOpacity();
        });
    });

    // Event listener for right arrow button
    rightArrow.addEventListener('click', function() {
        // Apply slide to right animation
        imageContainer.style.animation = 'slideToRight 0.4s ease-in-out';
        // Wait for the animation to finish before proceeding
        imageContainer.addEventListener('animationend', function onAnimationEnd() {
            // Remove the event listener to prevent multiple executions
            imageContainer.removeEventListener('animationend', onAnimationEnd);
            // Reset animation
            imageContainer.style.animation = '';
            // Move the first image to the end of the list
            const firstImage = document.querySelector('.image-container img:first-child');
            imageContainer.appendChild(firstImage);
            // Show content related to the new first image
            showContent(document.querySelector('.image-container img:first-child').id);
            // Adjust opacity for side images
            adjustSideImagesOpacity();
        });
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
                    <h2 class="title">Jungle</h2>
                    <div class="champ-select">
                    <label for="model1" >Choose a Champion:</label>
                    <select value="project-warwick.glb" id="modelSelector1">
                        <option value="project-warwick.glb">Warwick</option>
                        <option value="solar-eclipse-sejuani.glb">Sejuani</option>
                    </select>
                    </div>
                    <div id="modelViewerContainer1"></div>
                    <div id="paragraphContainer1" class="paragraph-container1"></div>`;
                break;
            case 'image2':
                newContent.innerHTML = `
                <h2 class="title">Top</h2>
                <div class="champ-select">
                <label for="model2">Choose a Champion:</label>
                <select id="modelSelector2">
                    <option value="dragon-knight-mordekaiser.glb" selected>Mordekaiser</option>
                    <option value="badlands_baron_rumble.glb">Rumble</option>
                    <option value="the-thousand-pierced-bear.glb">Volibear</option>
                    <option value="elderwood-ornn.glb">Ornn</option>
                </select>
                </div>
                <div id="modelViewerContainer2"></div>
                <div id="paragraphContainer2" class="paragraph-container2"></div>`;
                break;
            case 'image3':
                newContent.innerHTML = `
                <h2 class="title">Mid</h2>
                <div class="champ-select">
                <label for="model3">Choose a Champion:</label>
                <select id="modelSelector3">
                    <option value="hextech-malzahar.glb" selected>Malzahar</option>
                    <option value="veigar.glb">Veigar</option>
                </select>
                </div>
                <div id="modelViewerContainer3"></div>
                <div id="paragraphContainer3" class="paragraph-container3"></div>`;
                break;
            case 'image4':
                newContent.innerHTML = `
                <h2 class="title">Bot</h2>
                <p class="para">You don't want to see me play this role.</p>
                <p class="para">Quite the opposite of Support, I cannot CS :( </p>`;
                    //<model-viewer src="3dAnimated/sejuani.glb" alt="Model 4" ar ar-modes="webxr scene-viewer quick-look" camera-controls autoplay camera-orbit="0deg 90deg m"></model-viewer>
                    //<p>This is the content related to Image 5.</p>`
                break;
            case 'image5':
                newContent.innerHTML = `
                <h2 class="title">Support</h2>
                <p class="para">You don't want to see me play this role.</p>
                <p class="para">Quite the opposite of ADC/APC(Bot), I will take all the CS :)</p>`;
                break;
            // Add cases for more images here
            default:
                console.log('Image not found');
        }
        // Append new content to the container
        contentContainer.appendChild(newContent);
        // Show content based on the selected option
        showSelectedModelContent();
    }

    // Function to show content based on the selected model
    function showSelectedModelContent() {
        const modelSelector1 = document.getElementById('modelSelector1');
        const modelSelector2 = document.getElementById('modelSelector2');
        const modelSelector3 = document.getElementById('modelSelector3');
        if (modelSelector1) {
            const selectedModel = modelSelector1.value;
            const modelViewerContainer1 = document.getElementById('modelViewerContainer1');
            const paragraphContainer1 = document.getElementById('paragraphContainer1');
            // Clear model viewer container content
            modelViewerContainer1.innerHTML = '';
            // Update model viewer container based on the selected model
            switch (selectedModel) {
                case 'solar-eclipse-sejuani.glb':
                    // Set model viewer container content for Sejuani
                    modelViewerContainer1.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="sejuani_2013_taunt" autoplay>
                        </model-viewer>`;
                    paragraphContainer1.innerHTML = `
                        <h2 class="champ-name">Sejuani</h2>
                        <p class="para">Starts with W</p>
                        <p class="para">I can finish the camps within 3:30 mins so just survive :P</p>
                        <h2 class="title">Jungle Pathing (Blue)</h2>
                        <div class="map-container">
                        <img src="map/Sejuani/LoLMap_Blue.png" alt="LoLMap_Blue">
                        </div>
                        <h2 class="title">Jungle Pathing (Red)</h2>
                        <div class="map-container">
                        <img src="map/Sejuani/LoLMap_Red.png" alt="LoLMap_Red">
                        </div>
                        <h2 class="title">Spells</h2>
                        <div class="spells">
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/E.webp" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/W.webp" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/Q.webp" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/W.webp" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/W.webp" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/R.webp" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/W.webp" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/Q.webp" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/W.webp" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/Q.webp" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/R.webp" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/Q.webp" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/Q.webp" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/E.webp" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/E.webp" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/R.webp" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/E.webp" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Sejuani/E.webp" alt="E">
                                <div class="label">E</div>
                            </div>
        
                            <!-- Repeat the above structure for other images -->
                            <!-- Add more <div class="spell-image"> elements for each image -->
                        </div>
                        <h2 class="title">Runes</h2>
                        <h3 class="title">Primary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Resolve/Resolve_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Grasp_of_the_Undying_rune.webp">
                                <img class="rune-image" src="Runes/Resolve/Aftershock_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Guardian_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Demolish_rune.webp">
                                <img class="rune-image" src="Runes/Resolve/Font_of_Life_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Shield_Bash_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Resolve/Conditioning_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Second_wind_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Bone_Plating_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Resolve/Overgrowth_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Revitalize_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Resolve/Unflinching_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Secondary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Precision/Precision_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Overheal_rune.webp">
                                <img class="rune-image" src="Runes/Precision/Triumph_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Presence_of_Mind_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Precision/Legend-_Alacrity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Legend-_Tenacity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Legend-_Bloodline_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Coup_de_Grace_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Cut_Down_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Last_Stand_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Shards</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image" src="Runes/Shards/Attack_Speed.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Cooldown_Reduction.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Movement_Speed.webp">
                                <img class="rune-image" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Health.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Tenacity_and_Slow_Resist.webp">
                                <img class="rune-image" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                        </div>
                        <h2 class="title">Items</h2>
                        <h3 class="title">Initial State</h3>
                        <div class="rune-row">
                            <img class="rune-image item" src="items/jungle/Mosstomper.webp">
                            <img class="rune-image item" src="items/potions/Health_Potion.webp">
                        </div>`;
                    break;
                case 'project-warwick.glb':
                    // Set model viewer container content for Warwick
                    modelViewerContainer1.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Taunt" autoplay>
                        </model-viewer>`;
                    paragraphContainer1.innerHTML = `
                        <h2 class="champ-name">Warwick</h2>
                        <p class="para">Woof woof</p>
                        <p class="para">I bite and heal</p>
                        <h2 class="title">Jungle Pathing (Blue)</h2>
                        <div class="map-container">
                        <img src="map/Warwick/LoLMap_Blue.png" alt="LoLMap_Blue">
                        </div>
                        <h2 class="title">Jungle Pathing (Red)</h2>
                        <div class="map-container">
                        <img src="map/Warwick/LoLMap_Red.png" alt="LoLMap_Red">
                        </div>
                        <h2 class="title">Spells</h2>
                        <div class="spells">
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/E.jpg" alt="E">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/W.jpg" alt="W">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/W.jpg" alt="W">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Warwick/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
        
                            <!-- Repeat the above structure for other images -->
                            <!-- Add more <div class="spell-image"> elements for each image -->
                        </div>

                        <h2 class="title">Runes</h2>
                        <h3 class="title">Primary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Precision/Precision_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Precision/Press_the_Attack_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Lethal_Tempo_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Fleet_Footwork_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Conqueror_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Overheal_rune.webp">
                                <img class="rune-image" src="Runes/Precision/Triumph_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Presence_of_Mind_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Precision/Legend-_Alacrity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Legend-_Tenacity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Legend-_Bloodline_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Coup_de_Grace_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Precision/Cut_Down_rune.webp">
                                <img class="rune-image" src="Runes/Precision/Last_Stand_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Secondary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Sorcery/Sorcery_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Nullifying_Orb_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Manaflow_Band_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Nimbus_Cloak_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Transcendence_rune.webp">
                                <img class="rune-image" src="Runes/Sorcery/Celerity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Absolute_Focus_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Scorch_rune.webp">
                                <img class="rune-image" src="Runes/Sorcery/Waterwalking_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Gathering_Storm_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Shards</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image" src="Runes/Shards/Attack_Speed.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Cooldown_Reduction.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Movement_Speed.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Health.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Tenacity_and_Slow_Resist.webp">
                                <img class="rune-image" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                        </div>
                        <h2 class="title">Items</h2>
                        <h3 class="title">Initial State</h3>
                        <div class="rune-row">
                            <img class="rune-image item" src="items/jungle/Gustwalker.webp">
                            <img class="rune-image item" src="items/potions/Health_Potion.webp">
                        </div>`;
                    break;
                // Add cases for other models here
                default:
                    // Clear model viewer container content if no model matches
                    modelViewerContainer1.innerHTML = '';
                    // Clear paragraphs if no model matches
                    paragraphContainer1.innerHTML = '';
                    break;
            }
        }
        if (modelSelector2) {
            const selectedModel = modelSelector2.value;
            const modelViewerContainer2 = document.getElementById('modelViewerContainer2');
            const paragraphContainer2 = document.getElementById('paragraphContainer2');
            // Clear model viewer container content
            modelViewerContainer2.innerHTML = '';
            // Update model viewer container based on the selected model
            switch (selectedModel) {
                case 'dragon-knight-mordekaiser.glb':
                    // Set model viewer container content for Sejuani
                    modelViewerContainer2.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Walk" autoplay>
                        </model-viewer>`;
                    paragraphContainer2.innerHTML = `
                        <h2 class="champ-name">Mordekaiser</h2>
                        <p class="para">Starts with Q</p>
                        <p class="para">Bonk the enemy and kill them with my Passive :P</p>
                        <h2 class="title">Priority</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Prio.png" alt="LoLMap_Prio">
                        </div>
                        <h2 class="title">Counter</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Counter.png" alt="LoLMap_Counter">
                        </div>`;
                    break;
                    case 'badlands_baron_rumble.glb':
                        // Set model viewer container content for Sejuani
                        modelViewerContainer2.innerHTML = `
                            <model-viewer src="3dAnimated/${selectedModel}" 
                            alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                            camera-controls 
                            animation-name="Idle2" autoplay>
                            </model-viewer>`;
                        paragraphContainer2.innerHTML = `
                            <h2 class="champ-name">Rumble</h2>
                            <p class="para">Starts with Q</p>
                            <p class="para">Fire Yeahhh.... Burnnnn 🔥🔥🔥</p>
                            <h2 class="title">Priority</h2>
                            <div class="map-container">
                            <img src="map/Top/LoLMap_Prio.png" alt="LoLMap_Prio">
                            </div>
                            <h2 class="title">Counter</h2>
                            <div class="map-container">
                            <img src="map/Top/LoLMap_Counter.png" alt="LoLMap_Counter">
                            </div>`;
                        break;
                case 'the-thousand-pierced-bear.glb':
                    // Set model viewer container content for Warwick
                    modelViewerContainer2.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        camera-orbit="20deg 100deg"
                        animation-name="Taunt" autoplay>
                        </model-viewer>`;
                    paragraphContainer2.innerHTML = `
                        <h2 class="champ-name">Volibear</h2>
                        <p class="para">Starts with Q</p>
                        <p class="para">Objective, Survive</p>
                        <h2 class="title">Priority</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Prio.png" alt="LoLMap_Prio">
                        </div>
                        <h2 class="title">Counter</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Counter.png" alt="LoLMap_Counter">
                        </div>`;
                    break;
                case 'elderwood-ornn.glb':
                    // Set model viewer container content for Warwick
                    modelViewerContainer2.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Taunt" autoplay>
                        </model-viewer>`;
                    paragraphContainer2.innerHTML = `
                        <h2 class="champ-name">Ornn</h2>
                        <p class="para">Starts with Q</p>
                        <p class="para">Objective, Survive</p>
                        <h2 class="title">Priority</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Prio.png" alt="LoLMap_Prio">
                        </div>
                        <h2 class="title">Counter</h2>
                        <div class="map-container">
                        <img src="map/Top/LoLMap_Counter.png" alt="LoLMap_Counter">
                        </div>`;
                    break;
                // Add cases for other models here
                default:
                    // Clear model viewer container content if no model matches
                    modelViewerContainer2.innerHTML = '';
                    // Clear paragraphs if no model matches
                    paragraphContainer2.innerHTML = '';
                    break;
            }
        }
        if (modelSelector3) {
            const selectedModel = modelSelector3.value;
            const modelViewerContainer3 = document.getElementById('modelViewerContainer3');
            const paragraphContainer3 = document.getElementById('paragraphContainer3');
            // Clear model viewer container content
            modelViewerContainer3.innerHTML = '';
            // Update model viewer container based on the selected model
            switch (selectedModel) {
                case 'hextech-malzahar.glb':
                    // Set model viewer container content for Malzahar
                    modelViewerContainer3.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Dance" autoplay>
                        </model-viewer>`;
                    paragraphContainer3.innerHTML = `
                        <h2 class="champ-name">Malzahar</h2>
                        <p class="para">I turn off my brain</p>
                        <p class="para">E W Q the wave, if Jungle come Flash (if necessary), E R the enemy champ</p>
                        <h2 class="title">Priority</h2>
                        <div class="map-container">
                        <img src="map/Mid/LoLMap_Prio.png" alt="LoLMap_Prio">
                        </div>
                        <h2 class="title">Counter</h2>
                        <div class="map-container">
                        <img src="map/Mid/LoLMap_Counter.png" alt="LoLMap_Counter">
                        </div>
                        <h2 class="title">Spells</h2>
                        <div class="spells">
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/E.jpg" alt="E">
                                <div class="label">E</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/W.jpg" alt="W">
                                <div class="label">W</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/R.jpg" alt="R">
                                <div class="label">R</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
                            <div class="spell-image">
                                <img src="ChampSpells/Malzahar/Q.jpg" alt="Q">
                                <div class="label">Q</div>
                            </div>
        
                            <!-- Repeat the above structure for other images -->
                            <!-- Add more <div class="spell-image"> elements for each image -->
                            </div>

                        <h2 class="title">Runes</h2>
                        <h3 class="title">Primary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Sorcery/Sorcery_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Sorcery/Summon_Aery_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Arcane_Comet_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Phase_Rush_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Nullifying_Orb_rune.webp">
                                <img class="rune-image" src="Runes/Sorcery/Manaflow_Band_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Nimbus_Cloak_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Sorcery/Transcendence_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Celerity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Absolute_Focus_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Sorcery/Scorch_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Waterwalking_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Sorcery/Gathering_Storm_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Secondary Rune</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Inspiration/Inspiration_icon.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Hextech_Flashtraption_rune.webp">
                                <img class="rune-image" src="Runes/Inspiration/Magical_Footwear_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Cash_Back_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Triple_Tonic_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Time_Warp_Tonic_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Biscuit_Delivery_rune.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Cosmic_Insight_rune.webp">
                                <img class="rune-image" src="Runes/Inspiration/Approach_Velocity_rune.webp">
                                <img class="rune-image rune-unselect" src="Runes/Inspiration/Jack_of_All_Trades_rune.webp">
                            </div>
                        </div>
                        <h3 class="title">Shards</h3>
                        <div class="rune-container">
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Attack_Speed.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Cooldown_Reduction.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image" src="Runes/Shards/Adaptive_Force.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Movement_Speed.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                            <div class="rune-row">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Health.webp">
                                <img class="rune-image rune-unselect" src="Runes/Shards/Tenacity_and_Slow_Resist.webp">
                                <img class="rune-image" src="Runes/Shards/Health_Scaling.webp">
                            </div>
                        </div>
                        <h2 class="title">Items</h2>
                        <h3 class="title">Initial State</h3>
                        <div class="rune-row">
                            <img class="rune-image item" src="items/doran/Doran_Ring.webp">
                            <img class="rune-image item" src="items/potions/Health_Potion.webp">
                        </div>`;
                    break;
                case 'veigar.glb':
                    // Set model viewer container content for Veigar
                    modelViewerContainer3.innerHTML = `
                        <model-viewer src="3dAnimated/${selectedModel}" 
                        alt="Model" ar ar-modes="webxr scene-viewer quick-look" 
                        camera-controls 
                        animation-name="Idle1" autoplay>
                        </model-viewer>`;
                    paragraphContainer3.innerHTML = `
                        <h2 class="champ-name">Veigar</h2>
                        <p class="para">I play the long game.</p>
                        <p class="para">Stacking AP until I can one-shot anyone.</p>
                        <h2 class="title">Priority</h2>
                        <div class="map-container">
                        <img src="map/Mid/LoLMap_Prio.png" alt="LoLMap_Prio">
                        </div>
                        <h2 class="title">Counter</h2>
                        <div class="map-container">
                        <img src="map/Mid/LoLMap_Counter.png" alt="LoLMap_Counter">
                        </div>`;
                    break;
                // Add cases for other models here
                default:
                    // Clear model viewer container content if no model matches
                    modelViewerContainer3.innerHTML = '';
                    // Clear paragraphs if no model matches
                    paragraphContainer3.innerHTML = '';
                    break;
            }
        }
    }

    // Add event listener for model selector
    document.addEventListener('change', showSelectedModelContent);

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
