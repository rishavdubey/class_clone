import os

current_dir = os.getcwd()
print(current_dir)

path = current_dir  # Replace with the path to your directory
current = os.listdir(path)    # Get a list of all file names in the directory

files = current[0:10]
print(files)



