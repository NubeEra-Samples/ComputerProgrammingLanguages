function connect(){
    var fname = document.getElementById("firstname").value;
    var lname = document.getElementById('lastname').value;
    document.getElementById('full-name').value = fname + ' ' + lname;

    
}



function generateJSON() {
    // Get values from input fields
    var email = document.getElementById("emailInput").value;
    var phone = document.getElementById("phoneInput").value;

    // Create an object with email and phone properties
    var userData = {
        email: email,
        phone: phone
    };

    // Convert the object to JSON format
    var jsonData = JSON.stringify(userData);

    // Set the JSON string as the value of the output input field
    document.getElementById("jsonOutput").value = jsonData;
}


// Function to update the appearance of the select field
function updateSelectAppearance(selectElement) {
    const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
    const selectedOptionsText = selectedOptions.map(option => {
        const optionElement = selectElement.querySelector(`option[value="${option}"]`);
        return optionElement.textContent;
    });

    // Update the select element's width to fit the selected options
    selectElement.style.width = 'auto';

    // Create a span element to hold the selected options text
    const spanElement = document.createElement('span');
    spanElement.textContent = selectedOptionsText.join(', ');

    // Hide the select element and append the span element
    selectElement.style.display = 'none';
    selectElement.insertAdjacentElement('afterend', spanElement);
}

// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the select element
    const selectElement = document.getElementById('dropdown');

    // Add event listener to update appearance when selection changes
    selectElement.addEventListener('change', () => {
        updateSelectAppearance(selectElement);
    });

    // Initial update to set the appearance
    updateSelectAppearance(selectElement);
});
