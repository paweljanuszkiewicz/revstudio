<?php
  $to = 'hello@revstudio.pl';
  require 'vendor/autoload.php';

  $success = false;
  $successMsg = "Something went wrong, try again";

  function sendMail ($subject, $body, $to, &$success, &$successMsg) {
    $mail = new PHPMailer;

    $mail->isSMTP();                                            // Set mailer to use SMTP
	$mail->isAuth=false;
    $mail->Host = 'ssl0.ovh.net';    							// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                                     // Enable SMTP authentication
    $mail->Username = 'no-reply@revstudio.pl';               	// SMTP username
    $mail->Password = 'sKJ*d>9uV?#shmHEYrHVHe8kJTcMTU';         // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable encryption, 'ssl' also accepted

    $mail->From = 'no-reply@revstudio.pl';
    $mail->FromName = 'revstudio.pl - No-Reply';
    $mail->addAddress($to);                               // Name is optional

    $mail->WordWrap = 50;                                 // Set word wrap to 50 characters
    $mail->isHTML(true);                                 // Set email format

    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = $body;

    if(!$mail->send()) {
      $success = false;
      $successMsg = "Something went wrong, try again";
    } else {
      $success = true;
      $successMsg = "Message is sent";
    }
  }

  function validateLength ($string, $maxLength) {
    if (strlen($string) === 0 || (strlen($string) > $maxLength)) {
      return false;
    }
    return true;
  }

  function validateEmail ($string) {
    if (!filter_var($string, FILTER_VALIDATE_EMAIL)) {
      return false;
    }
    return true;
  }

  if (($_SERVER['REQUEST_METHOD'] === 'POST') && $_POST['dont_fill'] === '') {
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $message = strip_tags($_POST['message']);

	if (isset($_POST['budget'])) {
		$budget = strip_tags($_POST['budget']);
	} else {
		$budget = 'not set';
	}

    if (
      validateLength($name, 40)
      && validateLength($email, 40)
      && validateEmail($email)
      && validateLength($message, 400)
    ) {
      $subject = 'revstudio.pl - New message from: ' . $name;
      $message = 'Name:<br>' . $name . '<br><br>Message:<br>' . $message .  '<br><br>Email:<br>' . $email . '<br><br>Budget:<br>' . $budget;
      sendMail($subject, $message, $to, $success, $successMsg);
    }

    header('Content-Type: application/json');
    $arr = array('success' => $success, 'message' => $successMsg);
    echo json_encode($arr);
  }
?>
