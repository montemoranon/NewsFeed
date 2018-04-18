<?php
session_start();
require('common.php');

$username = $_POST['username'];
$link = $_POST['link'];

$data = read_database();
$user_favorites = $data[$username]['favorites'];
$favorite = array_key_exists($link, $user_favorites);

$result = array();
$result['favorite'] = $favorite;

echo json_encode($result);
