<?php
    $first = $_POST['first'];
    $last = $_POST['last'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = "From: $email";
    $to = 'ros.skinner@gmail.com';
    $subject = 'Hello';

    $body = "From: $first $last\n E-Mail: $email\n Message:\n $message";

    if ($_POST['submit']) {
      if (mail ($to, $subject, $body, $from)) {
          echo '<p>Your message has been sent!</p>';
      } else {
          echo '<p>Something went wrong, go back and try again!</p>';
      }
    }
?>