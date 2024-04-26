document.onreadystatechange = function () {
    if (document.readyState == 'interactive') {
        console.log("c'est ok");

        // script.js

        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Here you can add the logic to handle the form submission, such as sending the data to a server for processing.
            // For demonstration purposes, let's just log the form data to the console.
            const formData = {
                cardNumber: document.getElementById('card-number').value,
                cardName: document.getElementById('card-name').value,
                expiryDate: document.getElementById('expiry-date').value,
                cvv: document.getElementById('cvv').value
            };
            console.log(formData);

        });

    }
}