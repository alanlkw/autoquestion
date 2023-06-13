<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // Redirect to the login page if not logged in
    exit();
}

// Access user information using $_SESSION['user_id'], $_SESSION['username'], etc.
?>