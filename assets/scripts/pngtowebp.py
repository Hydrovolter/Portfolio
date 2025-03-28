from PIL import Image
import os

# Specify the directory containing the PNG files
directory = '/workspaces/Portfolio/games/covers'

# Loop through all the files in the directory
for filename in os.listdir(directory):
    if filename.endswith(".png"):
        # Create the full file path
        file_path = os.path.join(directory, filename)
        
        # Open the PNG image
        with Image.open(file_path) as img:
            # Define the WebP output file path
            webp_filename = os.path.splitext(filename)[0] + '.webp'
            webp_file_path = os.path.join(directory, webp_filename)
            
            # Convert and save as WebP
            img.save(webp_file_path, 'WEBP')
            print(f"Converted {filename} to {webp_filename}")
