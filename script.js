function selectTrip(place, cost, days) {
    // Store the selected trip details in local storage
    localStorage.setItem('selectedPlace', place);
    localStorage.setItem('tripCost', cost);
    localStorage.setItem('tripDays', days);

    // Redirect to the booking page
    window.location.href = 'booking.html';
}
