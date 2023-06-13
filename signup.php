<?php
// Replace with your actual database credentials
$hostname = 'localhost:3307';
$username = 'root';
$password = '';
$database = 'signup';

// Get the signup data from the request
$username = $_POST['username'];
$password = $_POST['password'];
$role = $_POST['role'];

// Perform necessary validations here (e.g., check for unique username, strong password, etc.)

// Create a new user record in the appropriate table based on the role
$conn = new mysqli('localhost', 'root', '', 'signup');
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

if ($role === 'user') {
  $table = 'users';
} elseif ($role === 'admin') {
  $table = 'admins';
}

$sql = "INSERT INTO $table= 'users' (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
  $response = array('success' => true, 'role' => $role);
} else {
  $response = array('success' => false);
}

$conn->close();

// Return the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>