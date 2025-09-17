// Helper function that returns a Promise that resolves after "ms" milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the delay and display the message
async function displayMessage() {
  event.preventDefault(); // Prevent form submission

  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.textContent = ' ';

  // Validate delay input
  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = "Please enter a valid delay time.";
    return; // Exit the function if the delay is invalid
  }

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  outputDiv.textContent = text;
}

// Attach click event to the button
document.getElementById('btn').addEventListener('click', displayMessage);