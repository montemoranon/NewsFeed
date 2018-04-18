<?php
session_start();
require('common.php');

$username = $_SESSION['username'];
$link = $_POST['link'];

$user_favorites = read_database()[$username]['favorites'];
$favorite = array_key_exists($link, $user_favorites);

$result = new array();
$results['favorite'] = $favorited;

echo json_encode($results);