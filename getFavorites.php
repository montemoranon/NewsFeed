<?php

require('common.php');

$username = $_POST['username'];

$current_users = read_database();
$current_user_favorites = $current_users[$username]['favorites'];
echo json_encode($current_user_favorites);
