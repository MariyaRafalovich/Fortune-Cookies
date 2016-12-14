<?php
require 'db_config.php';

$sql = "SELECT dataExpired FROM users where dataExpired >= now() and sessionId ='" . $_GET["sessionId"] . "'";

//EXECUTE QUERY
$result = $mysqli->query($sql);

if ($result->num_rows == 1) {
	echo json_encode(array("OK"));		
}else{
	echo json_encode(array("KO"));	
}

