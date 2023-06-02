document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    // You can perform client-side validation here if required

    // You can use AJAX or fetch API to send the signup data to the server
    // Here, we'll just log the username, email, and password to the console
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);

    // After signing up, you can redirect the user to a success page or perform any other necessary action
});
