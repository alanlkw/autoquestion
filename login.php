<?php
// Start the session
session_start();


$servername = 'localhost:3307';
$username = "root";
$password = "";
$dbname = "login";

// Create a database connection
$conn = new mysqli('localhost', 'root', '', 'login');

// Check if the connection was successful
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the form data
$username = $_POST['username'];
$password = $_POST['password'];

// Prepare and execute the SQL query to validate the admin credentials
$sql = "SELECT * FROM admins WHERE username = '$username' AND password = '$password'";
$result = $conn->query($sql);

// Check if the admin login was successful
if ($result->num_rows == 1) {
  // Store the admin session data
  $_SESSION['admin_username'] = $username;
  $_SESSION['admin_logged_in'] = true;
   $_SESSION['role'] = $row['role'];
  header("Location: admin_panel.php"); // Redirect to admin panel
  exit;
} else {
  echo "Invalid login credentials.";
}

// Close the database connection
$conn->close();
?>