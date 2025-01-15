document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Simple client-side validation (for demonstration purposes)
        if (username === 'user' && password === 'password') {
            // Redirect to the main page if login is successful
            window.location.href = 'myfiles1.html'; // Ensure this is the correct path
        } else {
            // Show error message if login fails
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});


