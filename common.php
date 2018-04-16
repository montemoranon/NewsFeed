<?php

$user_info_file = "/home/fall2016/nmm9422/public_html/NewsFeed/userInformation.json";

function read_database() {
	global $user_info_file;
    $json_data = file_get_contents($user_info_file);
    return json_decode($json_data, true);
}

function write_database($array) {
	global $user_info_file;
    $file_contents = json_encode($array);
    return file_put_contents($user_info_file, $file_contents);
}
