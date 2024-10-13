document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting to the server
        event.preventDefault();

        // Retrieve the trimmed values from the input fields
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation status and error messages
        let isValid = true;
        let messages = [];

        // Username validation: must be at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation: must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // Password validation: must be at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Show feedback based on validation result
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            // Success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Success color (green)
        } else {
            // Error messages
            feedbackDiv.innerHTML = messages.join('<br>'); // Join error messages with line breaks
            feedbackDiv.style.color = '#dc3545'; // Error color (red)
        }
    });
});
