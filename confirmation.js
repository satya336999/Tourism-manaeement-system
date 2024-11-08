document.addEventListener('DOMContentLoaded', function() {
    // Get the user and trip details from local storage
    const place = localStorage.getItem('selectedPlace');
    const cost = localStorage.getItem('tripCost');
    const days = localStorage.getItem('tripDays');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const phone = localStorage.getItem('userPhone');

    // Create the confirmation message
    const confirmationMessage = `
        Dear ${name},<br>
        Thank you for booking your trip to ${place}.<br>
        Trip Details:<br>
        - Duration: ${days} days<br>
        - Cost: $${cost}<br>
        Your contact details:<br>
        - Email: ${email}<br>
        - Phone: ${phone}<br>
        We will send further details to your email address.
    `;

    // Display the confirmation message
    document.getElementById('confirmation-message').innerHTML = confirmationMessage;
});
