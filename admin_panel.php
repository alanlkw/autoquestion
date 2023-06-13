<?php
// Start the session
session_start();

// Check if the admin is logged in
if (!isset($_SESSION['admin_logged_in']) || $_SESSION['admin_logged_in'] !== true) {
  header("Location: login.php"); // Redirect to login page
  exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Admin Panel</title>
    <link rel="stylesheet" type="text/css" href="admin_panel.css">
</head>

<body>
    <div class="container">
        <h1>Admin Panel</h1>
        <h2>Admin and User Data Information</h2>
        <!-- Display the first data information table -->
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>User Type</th>
                </tr>
            </thead>
            <tbody>

                <?php
// Assuming you have established a database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login";

// Create a database connection
$conn = new mysqli('localhost', 'root', '', 'login');

// Check if the connection was successful
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the admin and user data from the database
$sql = "SELECT * FROM admin_users";
$result = $conn->query($sql);

// Display the first data information table
echo "<h2>Admin and User Data</h2>";
echo "<table>";
echo "<thead>";
echo "<tr>";
echo "<th>Username</th>";
echo "<th>Password</th>";
echo "<th>User Type</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";

if ($result->num_rows > 0) {
  // Output the data in the table rows
  while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['username'] . "</td>";
    echo "<td>" . $row['password'] . "</td>";
    echo "<td>" . $row['user_type'] . "</td>";
    echo "</tr>";
  }
} else {
  echo "<tr><td colspan='3'>No data available</td></tr>";
}

echo "</tbody>";
echo "</table>";

// Retrieve the postings from the database
$sql = "SELECT * FROM postings";
$result = $conn->query($sql);

// Display the second data information table
echo "<h2>Postings from Users</h2>";
echo "<table>";
echo "<thead>";
echo "<tr>";
echo "<th>Question</th>";
echo "<th>Answer</th>";
echo "<th>Subject</th>";
echo "<th>Sent Date</th>";
echo "<th>Last Action</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";

if ($result->num_rows > 0) {
  // Output the data in the table rows
  while ($row = $result->fetch_assoc()) {
    echo "<tr>";
    echo "<td>" . $row['question'] . "</td>";
    echo "<td>" . $row['answer'] . "</td>";
    echo "<td>" . $row['subject'] . "</td>";
    echo "<td>" . $row['sent_date'] . "</td>";
    echo "<td>" . $row['last_action'] . "</td>";
    echo "</tr>";
  }
} else {
  echo "<tr><td colspan='5'>No data available</td></tr>";
}

echo "</tbody>";
echo "</table>";

// Close the database connection
$conn->close();
?>