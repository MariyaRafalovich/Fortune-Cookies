<?php
//CREATE QUERT
require 'db_config.php';

//CREATE QUERT
$sql = "SELECT * FROM users where username ='" . $_GET["username"] . "' and password = '" .  md5($_GET["password"]) . "'";

//EXECUTE QUERY
$result = $mysqli->query($sql);

if ($result->num_rows == 1) {
	//GET DATA	
	$row = $result->fetch_assoc();
	
	//Generate SessionID;
	$data["sessionId"] = uniqid();

	//CREATE SQL STRING UPDATE SESSION ID	
	$dataExpired =  "DATE_ADD(NOW(), INTERVAL 10 MINUTE)";

	//CREATE SQL STRING
	$sql = "update users set sessionId ='" . $data["sessionId"] . "' , dataExpired =" . $dataExpired ." where idUser = '" . $row["idUser"] . "'";

	//Execute query
	$mysqli->query($sql);

}else{
	$data["sessionId"] = "";
}

echo json_encode($data);

?>