<?php

require('common.php');

$username = $_POST['username'];
$link = $_POST['link'];
$title = $_POST['title'];

$new_favorite = array(
    'link' => $link,
    'title' => $title
);

$current_users = read_database();

// add favorite object to user
$user_object = $current_users[$username];
$user_favorites = $user_object['favorites'];
array_push($user_favorites, $new_favorite);

write_database($current_users);
