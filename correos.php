<?php
    $destinatario = 'tudatapartner@gmail.com';
    $nombre = $_POST['nombrecompleto'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $motivo = $_POST['affair'];
    $mensaje = $_POST['mensaje'];

    $header = "Enviado desde Tu Data Partner";
    $mensajecompleto = $mensaje ."\nAtentamente:" . $nombre;

    mail($destinatario, $asunto, $mensajecompleto, $header); 
    echo "<script>alert('te responderemos en menos de 24 horas hábiles')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";

?>