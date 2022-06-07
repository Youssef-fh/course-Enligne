<?php
    require_once ('assets/php/connection.php');
    $user=$_POST['user'];
    $comment=$_POST['comment'];
    $sql="INSERT INTO users (email_user, comment) VALUES ('$user', '$comment')";
    $db->exec($sql);
    if ($db->exec($sql)) {
        header('Location: index.html');
    }
?>