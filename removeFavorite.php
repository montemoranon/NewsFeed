<?php

require('common.php');

$username = $_POST['username'];
$link = $_POST['link'];

$current_users = read_database();
unset($current_users[$username]['favorites'][$link]);
write_database($current_users);

echo json_encode(read_database());
