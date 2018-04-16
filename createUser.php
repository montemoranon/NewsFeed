<?php

require('common.php');

$username = $_POST['username'];
$password = $_POST['password'];

$user_data = array(
    'password' => $password,
    'favorites' => array()
);

$current_users = read_json_file($user_info_file);
$current_users[$username] = $user_data;

write_array_to_json_file($current_users, $user_info_file);
