<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('en', 'phpmailer/language');
    $mail->IsHTML(true);

    // From

    $mail->setFrom('aysalinfo@ukr.net', 'Aysal Info');

    // Where 

    $mail->addAddress('tatyana.kharlamova@aysal.com.ua');

    // Topic letter

    $mail->Subject = 'Order parquet!!!'

    //  letter's body
    $body = '<h1>Super letter</h1>';
    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
    }

    if (!$mail->send()) {
        $message = "Error";
    } else {
        $message = "Data sent";
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>