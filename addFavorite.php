<?php

require('common.php');

$username = $_POST['username'];
$link = $_POST['link'];
$title = $_POST['title'];

$new_favorite = array(
    'link' => $link,
    'title' => $title
);

// add favorite object to user
$current_users = read_database();
array_push($current_users[$username]['favorites'], $new_favorite);
write_database($current_users);
