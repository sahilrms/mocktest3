// Get the input field and submit button
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');

// Get the items container
const itemsContainer = document.getElementById('itemsContainer');

// Add event listener to the submit button
submitButton.addEventListener('click', function() {
  // Get the value from the input field
  const inputValue = inputField.value;

  // Create a new paragraph element
  const newItem = document.createElement('p');
  newItem.textContent = inputValue;

  // Append the new item to the items container
  itemsContainer.appendChild(newItem);

  // Clear the input field
  inputField.value = '';
});
