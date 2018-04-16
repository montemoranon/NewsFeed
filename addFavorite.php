<?php

require('common.php');

$username = $_POST['username'];
$link = $_POST['link'];
$title = $_POST['title'];

// add favorite object to user
$current_users = read_database();
$current_users[$username]['favorites'][$link] = $title;
write_database($current_users);
