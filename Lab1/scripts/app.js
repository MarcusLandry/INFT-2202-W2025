// Name: Marcus Landry / 100646671
// Date Completed: March 15, 2025

// User class definition
class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

// jQuery for login functionality
$(document).ready(function() {
    $('#loginForm').on('submit', function() {
        const username = $('#username').val();
        $('#navbarText').text(username).addClass('navbar-text');
    });

    // jQuery for register functionality
    $('#registerButton').on('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Clear previous error messages
        $('#ErrorMessage').hide();

        // Validate first name and last name
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        let errorMessage = '';

        if (firstName.length < 2) {
            errorMessage += 'First name must be at least 2 characters long.<br>';
        }
        if (lastName.length < 2) {
            errorMessage += 'Last name must be at least 2 characters long.<br>';
        }

        // Validate email
        const email = $('#email').val();
        if (email.length < 8 || !email.includes('@')) {
            errorMessage += 'Email must be at least 8 characters long and contain an @ symbol.<br>';
        }

        // Validate password
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        if (password.length < 6) {
            errorMessage += 'Password must be at least 6 characters long.<br>';
        }
        if (password !== confirmPassword) {
            errorMessage += 'Passwords do not match.<br>';
        }

        // Display error messages if any
        if (errorMessage) {
            $('#ErrorMessage').html(errorMessage).show();
            return;
        }

        // Create a new User instance and log it
        const user = new User(firstName, lastName, username, email, password);
        console.log(user);

        // Clear the form
        $('#registerForm')[0].reset();
    });
});
