<?php

  require 'db_config.php';

  $id  = $_POST["id"];
 
  $sql = "UPDATE items SET title = '". $_GET['title'] . "',description = '" .$_GET['description'] ."'  WHERE id = '". $_GET["id"] ."'";

  $result = $mysqli->query($sql);

  if ($result) {
    echo json_encode(array("OK"));    
  }else{
    echo json_encode(array("KO"));  
  }

 ?>