document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var role = document.getElementById('role').value;

  // Perform AJAX request to send signup data to the server
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'signup.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        // Redirect to the appropriate page based on the role
        if (response.role === 'user') {
          window.location.href = 'user_page.html';
        } else if (response.role === 'admin') {
          window.location.href = 'admin_panel.html';
        }
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };
  xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&role=' + encodeURIComponent(role));
});
