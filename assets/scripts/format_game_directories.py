import os
import shutil

def organize_subdirectories(target_folder=".", skip_folders=None):
    """
    Goes through all subdirectories in the target folder.
    If a subdirectory's name is in the 'skip_folders' list, it skips processing.
    Otherwise, if a subdirectory does not contain a folder named 'g',
    it creates a 'g' folder and moves all contents (files and subfolders)
    from that subdirectory into the new 'g' folder, maintaining structure.

    Args:
        target_folder (str): The path to the folder to process.
                             Defaults to the current script's directory.
        skip_folders (list): A list of subdirectory names (strings) to skip.
                             Case-sensitive. Defaults to None (no skips).
    """
    if skip_folders is None:
        skip_folders = [] # Ensure it's an empty list if not provided

    print(f"Starting organization process in '{os.path.abspath(target_folder)}'...")
    if skip_folders:
        print(f"Folders to skip: {', '.join(skip_folders)}")
    else:
        print("No folders specified to skip.")

    for item in os.listdir(target_folder):
        subdirectory_path = os.path.join(target_folder, item)

        # Check if it's a directory
        if os.path.isdir(subdirectory_path):
            # Check if the current subdirectory name is in the skip list
            if item in skip_folders:
                print(f"\nSkipping '{item}': Folder name is in the skip list.")
                continue # Move to the next item in the target folder

            g_folder_path = os.path.join(subdirectory_path, 'g')

            # Check if 'g' folder exists
            if not os.path.exists(g_folder_path) or not os.path.isdir(g_folder_path):
                print(f"\nProcessing '{item}': No 'g' folder found. Creating '{g_folder_path}' and moving contents.")
                os.makedirs(g_folder_path, exist_ok=True)

                # Move all contents (files and subfolders) from the current subdirectory
                # into the newly created 'g' folder
                for content_item in os.listdir(subdirectory_path):
                    content_item_path = os.path.join(subdirectory_path, content_item)

                    # Ensure we don't try to move the newly created 'g' folder itself
                    if content_item == 'g': # Check by name, simpler after creation
                        continue

                    destination_path = os.path.join(g_folder_path, content_item)

                    # Handle potential naming conflicts (for top-level items being moved)
                    counter = 1
                    original_destination_path = destination_path
                    while os.path.exists(destination_path):
                        name, ext = os.path.splitext(original_destination_path)
                        # For directories, just append to the name, for files, use extension
                        if os.path.isdir(content_item_path): # Check if the source is a directory
                            destination_path = f"{name}_{counter}"
                        else: # It's a file
                            destination_path = f"{name}_{counter}{ext}"
                        counter += 1
                        print(f"Conflict detected. Renaming destination to: {destination_path}")

                    try:
                        shutil.move(content_item_path, destination_path)
                        print(f"Moved: {content_item_path} -> {destination_path}")
                    except Exception as e:
                        print(f"Error moving {content_item_path}: {e}")

            else:
                print(f"\nSkipping '{item}': 'g' folder already exists.")
        else:
            print(f"Skipping '{item}': Not a directory.")


# Example usage:
if __name__ == "__main__":
    # --- Example 1: Process current directory with no skips ---
    # organize_subdirectories()

    # --- Example 2: Process a specific directory with no skips ---
    # target_folder_path = "C:\\Users\\YourUser\\Documents\\MyTestFolder" # Windows example
    # target_folder_path = "/Users/YourUser/Documents/MyTestFolder" # macOS/Linux example
    # organize_subdirectories(target_folder=target_folder_path)

    # --- Example 3: Process current directory, skipping certain subfolders ---
    # Define the list of subfolder names you want to skip. These names are case-sensitive.
    folders_to_skip = ["template", "covers", "js", "css"]
    organize_subdirectories(skip_folders=folders_to_skip)

    # --- Example 4: Process a specific directory, skipping certain subfolders ---
    # target_folder_path = "C:\\Users\\YourUser\\Documents\\MyTestFolder"
    # folders_to_skip_specific = ["Photos", "Videos"]
    # organize_subdirectories(target_folder=target_folder_path, skip_folders=folders_to_skip_specific)

    print("\nOrganization process finished.")
