<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject1 = $_POST['subject'];
$message = $_POST['message'];

$to = "";
$subject = "Mail From Website";
$text = "Name = ". $name ."\r\nEmail = " . $email . "\r\nSubject =" . $subject1 . "\r\nMessage =" . $message;
$headers = "From noreply@trenchwarefare.com" . "\r\n" .

if($email!NULL){
	mail($to,$subject,$text,$headers);
}



?>