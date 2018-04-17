<?php

// require('common.php');

// $username = $_POST['username'];
// $password = $_POST['password'];

// $users = read_database();

// $results = array();
// if (array_key_exists($username, $users)) {
//     $user_info = $users[$username];
//     $password_on_file = $user_info['password'];

//     if($password == $password_on_file) {
//         $results['success'] = TRUE;
//     } else {
//         $results['success'] = FALSE;
//         $results['message'] = "Incorrect password.";
//     }
// } else {
//     $results['success'] = FALSE;
//     $results['message'] = "This username does not exist in our database.";
// }

echo json_encode($results);
