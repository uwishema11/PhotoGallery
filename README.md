# COA Taskforce Take Home Challenge

## Table of Contents

- [Introduction](#introduction)
- [Interactive Photo Gallery](#interactive-photo-gallery)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Usage](#usage)
- [Coding Challenges](#coding-challenges)
  - [Challenge 1: Array Manipulation](#challenge-1-array-manipulation)
  - [Challenge 2: String Transformation](#challenge-2-string-transformation)
- [License](#license)

## Introduction

This project implements an interactive photo gallery where users can view images and get additional information by hovering over them. It also includes solutions to two coding challenges.

### Features

- **Responsive Design**: Adapts to various screen sizes for both desktop and mobile views.
- **Hover Interaction**: Displays additional details on hovering over a photo.
- **Cross-browser Compatibility**: Ensures consistent performance across Chrome, Firefox, Safari, and Edge.
- **Image Thumbnail Navigation**: Allows users to navigate through thumbnails.
- **Full-size Image Viewing**: Users can view full-size images with additional details.

### Technologies Used

- HTML5
- CSS
- JavaScript
- Font Awesome (for icons)
- [Figma](https://www.figma.com/proto/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=1-482&t=1pNlK3GeH25LqCtr-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A524) (for design reference)

### Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uwishema11/PhotoGallery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PhotoGallery
   ```
3. Open `index.html` in your browser to view the gallery.

### Usage

- On desktop, hover over the images to see more information
- On mobile devices, the images are displayed in a stacked layout.
- To test the coding challanges open developer tool and check your console

## coding-challenges

### Challenge 1: String Transformation

A function that transforms a string based on its length:

- If the length is divisible by 3 and 5, reverse the string, convert each character to its char code, and join them with spaces.
- If the length is divisible by 3, reverse the string.
- If the length is divisible by 5, convert each character to its char code and join them with spaces.

### Challenge 2: Array Manipulation

A function that determine if there exists a contiguous subarray with the array that sums up to the target. Return true if such a subarray exists, otherwise return false:

Example:

- Input: arr =[4,3,7,1,9,5], target = 14

- Output: true

Explanation: The subarray [4,3,7] sums up to 14, which is equal to the target.
