<?php
include('../inc/pdo.php');
include('../inc/functions.php');

$bdd = $dbh->prepare("SELECT * FROM user ORDER BY RAND() LIMIT 1;");
$bdd->execute();
$row = $bdd->fetch();
$pseudo =  $row['pseudo'];

showJson($pseudo);

