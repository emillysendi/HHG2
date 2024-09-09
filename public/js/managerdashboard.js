// procurementForm.js

// Get the form element
const form = document.querySelector('.form-container form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get all input fields
  const inputs = form.querySelectorAll('input');

  // Check if all required fields are filled
  let allFilled = true;
  inputs.forEach((input) => {
    if (input.required && input.value === '') {
      allFilled = false;
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  // If all fields are filled, submit the form data
  if (allFilled) {
    const formData = new FormData(form);
    fetch('/submit-procurement-form', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
});