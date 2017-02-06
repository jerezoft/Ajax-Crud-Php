<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");


$nombree = $_POST["textnombre"];
$estadoo = $_POST["cmbestado"];


$sql = "insert into alumnos (nombre) values ('$nombree')";
$hecho=Database::ejecutar_idu($sql);
if($hecho){
	$respuesta = json_encode(array('err' => false,'mensaje' => 'creado correctamente')
	);
}else{
	$respuesta = json_encode(array('err' => true, 'mensaje' => $hecho));	
}





echo $respuesta;



?>