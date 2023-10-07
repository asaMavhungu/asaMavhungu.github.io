// Get the line-numbers container and the text-container
const lineNumbersContainer = document.querySelector('.line-numbers');
const textContainer = document.querySelector('.text-container');

// Define the number of lines you want (adjust as needed)
const numberOfLines = 20;

// Generate an array of line numbers
const lineNumbers = Array.from({ length: numberOfLines }, (_, index) => index + 1);

// Create a string of line numbers with line breaks
const lineNumbersText = lineNumbers.join('\n');

// Set the line numbers text as the content of the line-numbers container
lineNumbersContainer.textContent = lineNumbersText;

// Add a class to the text-container to create space for the line numbers
textContainer.classList.add('with-line-numbers');
