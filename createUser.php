<?php

require('common.php');

$username = $_POST['username'];
$password = $_POST['password'];

$user_data = array(
    'password' => $password,
    'favorites' => array()
);

$current_users = read_database();
$current_users[$username] = $user_data;

write_database($current_users);
