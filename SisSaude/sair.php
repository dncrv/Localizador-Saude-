<?php 

if(!isset($_SESSION)){
	session_start();
	session_unset('login');
	session_destroy();
} else{
	session_unset('login');
	session_destroy();
}

header("Location: index.php");
