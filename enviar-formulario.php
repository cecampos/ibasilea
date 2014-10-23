<?php
 
if(isset($_POST['email'])) {
 
    $email_to = "contacto@institutobasilea.cl";
    $email_subject = "Contacto desde la Web Instituto Basilea";
    function died($error) {
 
        // your error code can go here
        echo "Ocurrieron errores en el envio de un correo. Los errores apareceran a continuacion <br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
    $first_name = $_POST['first_name']; // required
    $last_name = $_POST['last_name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required
 
    $error_message = "";
    $email_message = "Detalles del formulario:.\n\n";
 
    $email_message .= "Nombre: ".$first_name."\n";
 
    $email_message .= "Apellido: ".$last_name."\n";
 
    $email_message .= "Correo: ".$email_from."\n";
 
    $email_message .= "Telefono de contacto: ".$telephone."\n";
 
    $email_message .= "Mensaje: ".$comments."\n";
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
              'Reply-To: '.$email_from."\r\n";
 mail($email_to, $email_subject, $email_message, $headers) or die('No se puedo enviar el correo');
 echo "Estimado(a) $first_name $last_name su correo ha sido enviado exitosamente, le responderemos a la brevedad, Gracias Por Preferirnos!";
?>
<?php
}
?>
<META HTTP-EQUIV="Refresh" CONTENT="5; URL=contacto.html"> 
<p>Sera Redirigido en 5 seg. Gracias..... </p>