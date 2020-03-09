<?php
// Check for empty fields

//
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
$carModel = strip_tags(htmlspecialchars($_POST['CBName']));
$carName = strip_tags(htmlspecialchars($_POST['CName']));

// Create the email and send the message
// $to = 'yourname@yourdomain.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "NEW ENQUIRY FROM:  $name";
$email_body = "You have received a new message from your website contact form.<br/>"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
// $headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $headers .= "Reply-To: $email_address";
// mail($to,$email_subject,$email_body,$headers);







/**
* This example shows making an SMTP connection with authentication.
*/

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Europe/Amsterdam');

require 'PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = 'xo.rs';
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->SMTPSecure = '';
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "customer@bestautoparts.ae";
//Password to use for SMTP authentication
$mail->Password = "B3st@ut0";
//Set who the message is to be sent from
$mail->setFrom('customer@bestautoparts.ae', 'Customer Querry');
//Set an alternative reply-to address
$mail->addReplyTo('customer@bestautoparts.ae', 'Customer Querry');
//Set who the message is to be sent to
$mail->addAddress('customer@bestautoparts.ae', 'Aghil');
//Set the subject line
$mail->Subject = $email_subject;
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($email_body);
//Replace the plain text body with one created manually
$mail->AltBody = $email_body;
//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    return true;
} else {
    //echo "Mailer Error: " . $mail->ErrorInfo;
    return false;
    
}
?>
