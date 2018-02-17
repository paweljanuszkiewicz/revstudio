<?php
  $to = 'pawel17j@gmail.com';
  require 'vendor/autoload.php';
  use PHPMailer\PHPMailer\PHPMailer;

  $success = false;
  $successMsg = "Something went wrong, try again";

  function sendMail ($subject, $body, $to, &$success, &$successMsg) {
    $mail = new PHPMailer;

	$mail->IsSMTP();
	$mail->Port = 587;
	$mail->Host = 'smtp.gmail.com';    							// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                                     // Enable SMTP authentication
    $mail->Username = '9qjzo4zrzuzgw11ay7yb2bxw@gmail.com';     // SMTP username
    $mail->Password = '';         								// SMTP password
    $mail->SMTPSecure = 'tls';                               // Enable encryption, 'ssl' also accepted

	$mail->SMTPDebug = 1;
	$mail->SetFrom('9qjzo4zrzuzgw11ay7yb2bxw@gmail.com', 'revstudio.pl - No-Reply');
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
