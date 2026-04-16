<?php
if $_SERVER["REQUEST_METHOD"] == "POST"
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $destino = "tuemail@sharkfit.com";
    $asunto = "Nuevo mensaje de $nombre";
    $contenido = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

    mail($destino, $asunto, $contenido);
    echo "Mensaje enviado correctamente.";
?>