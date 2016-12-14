<?php
require 'db_config.php';


$sql = "SELECT * FROM fcookies";

$result = $mysqli->query($sql);

while($row = $result->fetch_assoc()){

    $json[] = $row;

}

$data['data'] = $json;

echo json_encode($data);

?>