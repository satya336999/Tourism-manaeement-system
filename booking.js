document.addEventListener('DOMContentLoaded', function() {
    // Get the selected trip details from local storage
    const place = localStorage.getItem('selectedPlace');
    const cost = localStorage.getItem('tripCost');
    const days = localStorage.getItem('tripDays');

    // Populate the booking form with the selected trip details
    document.getElementById('place').value = place;
    document.getElementById('cost').value = cost;
    document.getElementById('days').value = days;

    // Handle form submission
    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user details
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
       

        // Store user details and selected trip details in local storage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
       

        // Redirect to the confirmation page
        window.location.href = 'confirmation.html';
    });
});
