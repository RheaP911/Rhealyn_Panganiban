<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = 465;

$mail->Username = "forfabssake@gmail.com";
$mail->Password = "bahcetnvvkecrcoh";

$mail->setFrom("forfabssake@gmail.com", "From Personal Website");
    $mail->addAddress("rhealynpanganiban20@gmail.com");
    $mail->addReplyTo($email, $name);
    $mail->Subject = $subject;
    $mail->Body = "You received a message from: \n\n" .
                  "Name: $name \n" .
                  "Email: $email \n\n" .
                  "Subject: $subject \n\n " .
                  "Message: $message";

$mail->send();

echo "<script>
        alert('Your message has been sent successfully!');
        window.location.href = 'index.html';
      </script>";

// echo "Your message has been sent. Thank you!";