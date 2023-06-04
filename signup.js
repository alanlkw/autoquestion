document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var username = usernameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;

    
    console.log("Username: " + username);
    console.log("Email: " + email);
    console.log("Password: " + password);

    
});
