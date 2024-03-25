<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['login']) && isset($_POST['password'])) {
        $password = $_POST['password'];
        $login = $_POST['login'];
        
        if ($login !== '' && $password !== '') {
            echo "<h1>Welcome, $login!</h1>";
            echo "<h1>Your password is: $password</h1>";
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <title>мяу мяу мяу</title>
</head>
<style>
    h1 {
        font-family: Poppins;
        color: #FFD723;
    }
</style>
<body>
</body>
</html>