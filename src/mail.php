<?php

use PHPMailer\PHPMailer\PHPMailer;

require 'PHPMailer/PHPMailer.php';

$mail = new PHPMailer(true);

$mail->setLanguage('ru', '/');

try {

	//Recipients
	$mail->setFrom('info@welovesleep.ru', 'Sealy Матрасы');
	$mail->addAddress('79198889134@ya.ru');
//	$mail->addAddress('info@raiton.ru');
//	$mail->addAddress('andreykorchunov@gmail.com');

	//Content
	$html  = '<h4>'.$_POST['subject'].'</h4>';

	if($_POST['name']){
		$html  .= '<b>Представьтесь:</b> ' . $_POST['name'];
	}

	if($_POST['email']){
		$html .= '<br><b>Почта:</b> ' . $_POST['email'];
	}

	$html .= '<br><b>Контактный телефон:</b> ' . $_POST['phone'];

	if($_POST['mess']){
		$html .= '<br><b>Дополнительное сообщение:</b> ' . $_POST['mess'];
	}

	$mail->CharSet  = 'UTF-8';
	$mail->Subject = $_POST['subject'] . (stripos($_POST['mess'], 'http') ? ' - [СПАМ]' : '');
	$mail->msgHTML($html);

	$mail->send();

	echo 'Message has been sent';

}
catch (Exception $e) {
	echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}