// Reference to the buttons
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleBtn = document.getElementById('toggleBtn');

// Initial text for the button
let buttonText = 'Click me!';
let isButtonEnabled = true;

// Function to change the text of the button
function changeButtonText() {
    buttonText = prompt('Enter new text for the button:', buttonText);
    if (buttonText === null) {
        return; // User clicked cancel
    }
    updateButtonText();
}

// Function to toggle the button's enable/disable state
function toggleButton() {
    isButtonEnabled = !isButtonEnabled;
    updateButtonState();
}

// Function to update the text of the button
function updateButtonText() {
    changeTextBtn.textContent = buttonText;
}

// Function to update the enable/disable state of the button
function updateButtonState() {
    toggleBtn.textContent = isButtonEnabled ? 'Disable' : 'Enable';
    changeTextBtn.disabled = !isButtonEnabled;
}

// Initial setup
updateButtonText();
updateButtonState();
