<?php

$username = $_POST['username'];
$password = $_POST['password'];

$user_data = array(
    'password' => $password,
    'favorites' => array()
);
$user_object = array(
    $username => $user_data
);

var_dump($user_object);

//$DATABASE_FILE = 'userInformation.json';
//
//function read_database() {
//
//}
//
////Get data from existing json file
//$jsondata = file_get_contents($myFile);
//
//// converts json data into array
//$arr_data = json_decode($jsondata, true);
//
//// Push user data to array
//array_push($arr_data,$formdata);
//
////Convert updated array to JSON
//$jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
//
////write json data into data.json file
//if(file_put_contents($myFile, $jsondata)) {
//    echo 'Data successfully saved';
//}
//else
//    echo "error";
//
