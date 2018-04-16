<?php

$user_info_file = "userInformation.json";

$username = $_POST['username'];
$password = $_POST['password'];


function read_json_file($filename) {
    $json_data = file_get_contents($filename);
    return json_decode($json_data, true);
}

function write_array_to_json_file($array, $filename) {
    $file_contents = json_encode($array);
    return file_put_contents($filename, $file_contents);
}


$user_data = array(
    'password' => $password,
    'favorites' => array()
);

$current_users = read_json_file($user_info_file);
$current_users[$username] = $user_data;

write_array_to_json_file($current_users, $user_info_file);
