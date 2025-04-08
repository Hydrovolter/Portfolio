import os

def remove_wi_prefix(directory_path):
    """
    Removes the "wi-" prefix from all SVG files in the specified directory.

    Args:
        directory_path (str): The path to the directory containing the SVG files.
    """
    try:
        if not os.path.isdir(directory_path):
            print(f"Error: Directory '{directory_path}' not found.")
            return

        for filename in os.listdir(directory_path):
            if filename.endswith(".svg") and filename.startswith("wi-"):
                old_filepath = os.path.join(directory_path, filename)
                new_filename = filename[3:]  # Remove the "wi-" prefix
                new_filepath = os.path.join(directory_path, new_filename)

                try:
                    os.rename(old_filepath, new_filepath)
                    print(f"Renamed '{filename}' to '{new_filename}'")
                except OSError as e:
                    print(f"Error renaming '{filename}': {e}")

        print("Finished processing SVG files.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    target_directory = input("Enter the path to the directory containing the SVG files: ")
    remove_wi_prefix(target_directory)