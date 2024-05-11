import pygltflib

def get_animation_names(glb_path):
    # Load the GLB file
    glb = pygltflib.GLTF2().load(glb_path)

    # Get the animations
    animations = glb.animations
    
    # Check if animations exist
    if animations:
        # Print the names of all animations
        for animation in animations:
            print(animation.name)
    else:
        print("No animations found.")

# Provide the correct full path to your GLB file
glb_path = '../Documents/gitLeague/3dAnimated/solar-eclipse-sejuani.glb'

# Get animation names
get_animation_names(glb_path)
