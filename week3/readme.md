This is a report for the image carousel slider

First we are creating a variable called index and setting it to zero.
Then an array called images is created to store all the images we downloaded from canva
After that we create a function called ImageShift. This displays the images in a slideshow process
By using document.querySelector and [name="slide"] we get the imgElement.
Then the variable index is incremented to go through all the images
setInterval calls the imageshift function every 2000 milliseconds, this controls the transitions of the image.
