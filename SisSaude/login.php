<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";

$usuario 	= "";
$senha 		= "";

//Pega os dados recebidos do formulário
if(isset($_POST['usuario'])) 	
	$usuario 	= 	$_POST['usuario'];
if(isset($_POST['senha'])) 		
	$senha		=	$_POST['senha'];

//Cria uma conexao com o banco de dados
$userDB = new DataBase('usuarios', $conexao);

//Busca no servidor
	if($userDB->login($usuario, $senha)){
			echo 	'{ "msg" : "login" }';
			if(!isset($_SESSION)){
				session_start();
				$_SESSION['login'] = $usuario;
			}else{
				$_SESSION['login'] = $usuario;
			}
		} else{
			echo 	'{ "msg" : "Os dados inseridos são inválidos. Tente novamente ou contate um administrador." }';
		}