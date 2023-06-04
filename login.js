document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var password = passwordInput.value;

    
    console.log("Username: " + username);
    console.log("Password: " + password);

    
    window.location.reload();
});
