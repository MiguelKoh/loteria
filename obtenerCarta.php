<?php 
include("conexion.php");
$cn = ConectaBD();
if (!$cn) {
  die('Error al conectarse a la base de datos');
}

$query = "SELECT * FROM cartas";

$result = mysqli_query($cn, $query);
if (!$result) {
  die('Consulta fallida');
}

$json = array();

while ($filaCarta = mysqli_fetch_array($result)) {

  $json[] = array(
    'id' => $filaCarta['id'],
    'nombre' => $filaCarta['nombre'],
    'rutaImagen' => $filaCarta['rutaImagen'],
    'rutaAudio' => $filaCarta['rutaAudio']
);

}//fin de while

$jsonString = json_encode($json);
echo $jsonString;



?>