// Get the form element
const form = document.getElementById('salesForm');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input values
    const produceName = document.getElementById('produceName').value;
    const tonnage = document.getElementById('tonnage').value;
    const amountPaid = document.getElementById('amountPaid').value;
    const buyerName = document.getElementById('buyerName').value;
    const salesAgentName = document.getElementById('salesAgentName').value;
    const saleDate = document.getElementById('saleDate').value;
    const saleTime = document.getElementById('saleTime').value;

    // Validate the input values
    if (produceName.length < 2) {
        alert('Produce name must be at least 2 characters long');
        return;
    }

    if (tonnage <= 0) {
        alert('Tonnage must be a positive number');
        return;
    }

    if (amountPaid.length < 5) {
        alert('Amount paid must be at least 5 characters long');
        return;
    }

    if (buyerName.length < 2) {
        alert("Buyer's name must be at least 2 characters long");
        return;
    }

    if (salesAgentName.length < 2) {
        alert("Sales agent's name must be at least 2 characters long");
        return;
    }

    if (saleDate === '') {
        alert('Sale date is required');
        return;
    }

    if (saleTime === '') {
        alert('Sale time is required');
        return;
    }

    // Create a JSON object to store the data
    const data = {
        produceName,
        tonnage,
        amountPaid,
        buyerName,
        salesAgentName,
        saleDate,
        saleTime
    };

    // Send the data to the backend
    fetch('/api/sales', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Sale recorded successfully!';
});