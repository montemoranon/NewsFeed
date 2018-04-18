<?php
session_start();
require('common.php');

$username = $_SESSION['username'];
$link = $_POST['link'];
$title = $_POST['text'];
$date = $_POST['date'];

// add favorite object to user
$current_users = read_database();
$current_users[$username]['favorites'][$link] = array($title, $date);

write_database($current_users);
echo json_encode($current_users);
