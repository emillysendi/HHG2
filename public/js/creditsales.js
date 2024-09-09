// creditSalesForm.js

// Get the form element
const form = document.getElementById('credit-sales-form');

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
    const buyerName = document.getElementById('buyer-name').value;
    const nationalId = document.getElementById('national-id').value;
    const location = document.getElementById('location').value;
    const contacts = document.getElementById('contacts').value;
    const amountDue = document.getElementById('amount-due').value;
    const salesAgent = document.getElementById('sales-agent').value;
    const dueDate = document.getElementById('due-date').value;
    const produceName = document.getElementById('produce-name').value;
    const produceType = document.getElementById('produce-type').value;
    const tonnage = document.getElementById('tonnage').value;
    const dispatchDate = document.getElementById('dispatch-date').value;

    const formData = {
      buyerName,
      nationalId,
      location,
      contacts,
      amountDue,
      salesAgent,
      dueDate,
      produceName,
      produceType,
      tonnage,
      dispatchDate,
    };

    // Submit the form data to the server
    fetch('/submit-credit-sales-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
});