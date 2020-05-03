<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$host = "localhost"; 
$user = "root"; 
$password = "YOUR_MYSQL_DB_PASSWORD"; 
$dbname = "reactdb"; 
#$id = '';
#$con = mysqli_connect($host, $user, $password, $dbname);

#$sql = "insert into orders (oid, fname, lname, email, phone, crednum, address, zip, shipmethod, date)
#        values ('$oid', '$fname', '$lname', '$email', '$phone', '$crednum', '$address', '$zip', '$shipmethod', '$date')";



$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    
    $name = $_POST['fullName'];
    $email = $_POST['email'];
    $phone = $_POST['telephone'];
    $address = $_POST['address'];
    $creditnum = $_POST['ccNum'];
    $shipmethod = $_POST['shipMethod'];
    $order = $_POST['order'];

    #if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    #    $errors[] = 'Invalid email';
    #}

    if (empty($errors)) {
        #$oid = uniqid();
        #$date = date('j, F Y h:i A');
        #$result = mysqli_query($con,$sql);
        echo $name;
    }
    #if (!$result) {
    #    http_response_code(404);
    #    die(mysqli_error($con));
    #}
}

?>