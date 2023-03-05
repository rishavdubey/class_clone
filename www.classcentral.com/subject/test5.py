import codecs
import requests
from deep_translator import GoogleTranslator
from bs4 import BeautifulSoup
from englisttohindi.englisttohindi import EngtoHindi
import os

current_dir = os.getcwd()
print(current_dir)

current = os.listdir(current_dir)    # Get a list of all file names in the directory

files = current[50:60]

for input in files:
    with codecs.open(input, 'r', encoding='utf-8') as f:
        html_text = f.read()

    # Create a BeautifulSoup object
    soup = BeautifulSoup(html_text, 'html.parser')

    # Find the body tag
    body_tag = soup.body

    # Traverse all the descendants inside the body tag
    for element in body_tag.descendants:
        if element.name is not None:
            # Print the name of the element
            if element.string is not None:
                message=element.string
                res = EngtoHindi(message)
 
                # displaying the translation
                print(res.convert)
                element.string.replace_with(str(res.convert))
        if element.string is not None:
            # Print the text content of the element
            # print(element.string)
            pass
    print()
    print(soup)
    with codecs.open(input, 'w', encoding='utf-8') as f:
        f.write(str(soup))

