# Symbol-Recognition-System

We propose a system for recognizing symbols: users input symbol images, and the system applies an algorithm to identify them. In this system, we implement several image processing steps. First, we convert the RGB image to grayscale to facilitate further processing. Next, we convert the grayscale image to black and white for improved accuracy. We apply additional preprocessing steps to remove unwanted objects and environmental interference. Symbol templates are stored in a directory, with each image being of a fixed size for easier recognition. These template images are grayscaled. The system creates a dataset of these templates.

When a user provides a query image, the system resizes it and compares its values with those of the template images in the dataset. The result is displayed in text format. The system takes an image as input and outputs the result in text format. The concept of template matching is used to recognize the symbol, achieving an accuracy rate of 80%-90%.





