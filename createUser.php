<?php

require('common.php');

$username = $_POST['username'];
$password = $_POST['password'];

if (!array_key_exists($username, $users)) {
    // if the username does not exist, create user and return true
    $user_data = array(
        'password' => $password,
        'favorites' => array()
    );

    $current_users = read_database();
    $current_users[$username] = $user_data;

    write_database($current_users);

    return TRUE;
} else {
    // if username already exists, do nothing and return false
    return FALSE;
}