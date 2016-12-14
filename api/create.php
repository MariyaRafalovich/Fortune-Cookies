<?php

require 'db_config.php';

$sql = "INSERT INTO items (title,description) VALUES ('".$_GET['title']."','".$_GET['description']."');";

$result = $mysqli->query($sql);

if ($result->num_rows == 1) {
	echo json_encode(array("OK"));		
}else{
	echo json_encode(array("KO"));	
}

?>