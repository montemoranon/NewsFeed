<?php

require('common.php');

$username = $_POST['username'];
$password = $_POST['password'];

$users = read_database();

if (array_key_exists($username, $users)) {
    $user_info = $users[$username];
    $password_on_file = $user_info['password'];

    if($password == $password_on_file) {
        echo "You're in."
    }
}


