import os

# Specify the directory containing the PNG files
directory = '/workspaces/Portfolio/games/covers'

# Loop through all the files in the directory
for filename in os.listdir(directory):
    if filename.endswith(".png"):
        # Create the full file path
        file_path = os.path.join(directory, filename)
        
        # Delete the file
        os.remove(file_path)
        print(f"Deleted {filename}")
