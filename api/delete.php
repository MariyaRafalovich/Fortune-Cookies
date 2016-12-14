<?php

 require 'db_config.php';

 $sql = "DELETE FROM items WHERE id = '". $_GET["id"] ."'";

 $result = $mysqli->query($sql);

 echo json_encode([$id]);

?>