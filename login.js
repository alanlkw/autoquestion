document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var password = passwordInput.value;

    // You can perform client-side validation here if required

    // You can use AJAX or fetch API to send the login request to the server
    // Here, we'll just log the entered username and password to the console
    console.log("Username: " + username);
    console.log("Password: " + password);

    // After sending the login request, you can redirect the user to the appropriate page
    // Here, we'll just reload the current page
    window.location.reload();
});
