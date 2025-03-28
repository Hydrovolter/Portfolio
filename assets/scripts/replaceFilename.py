import os

# directory containing target svgs
directory_path = r'C:\Users\ray.r\OneDrive - Oundle School\Co-Curricular\Coding\REPOS\Portfolio\assets\badges'  # raw string to avoid escape sequence issues

# prefixes to remove from the filenames
prefixes = ['file_type_', 'folder_type_', 'default_']

def rename_svg_files(directory):
    for filename in os.listdir(directory):
        # filename ending (.svg) check
        if filename.endswith('.svg'):
            # check and remove filename prefixes
            new_filename = filename
            for prefix in prefixes:
                if new_filename.startswith(prefix):
                    new_filename = new_filename[len(prefix):]
                    break  # stop checking once a prefix is removed

            # only rename if the filename has changed
            if new_filename != filename:
                old_file_path = os.path.join(directory, filename)
                new_file_path = os.path.join(directory, new_filename)

                # check if the new file path already exists
                if not os.path.exists(new_file_path):
                    os.rename(old_file_path, new_file_path)
                    print(f'Renamed: {filename} -> {new_filename}')
                else:
                    print(f'Skipped: {new_filename} already exists')

            else:
                print(f'No prefix removed for: {filename}')

rename_svg_files(directory_path)
