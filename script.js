// Helper function that returns a Promise that resolves after "ms" milliseconds
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the delay and display the message
async function displayMessage() {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.textContent = '';

  // Wait for the specified delay
  await wait(delay);

  // Display the message
  outputDiv.textContent = text;
}

// Attach click event to the button
document.getElementById('btn').addEventListener('click', displayMessage);
