<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";

if(isset($_GET['request'])){
	$request = $_GET['request'];
}	else{
	$request = "";
}

if(isset($_GET['dado'])){
	$dado = $_GET['dado'];
}	else{
	$dado = "";
}

if(!isset($_SESSION)){
	session_start();
}

$usuarios = new DataBase('usuarios', $conexao);
$tipoConta = $usuarios->select('usuario', $_SESSION['login'], 'tipo');
if($tipoConta['tipo'] == "1"){
	$dados = array($request => $dado);

	if(($request == "cidade") || ($request == "estado") || ($request == "sessao") || ($request == "tipo")){

		$dataBase = new DataBase($request, $conexao);
		$dataBase->insert($dados);
		echo '{ "msg" : "Dados Inseridos com Sucesso!"}';
	} else{

		echo '{ "msg" : "Dados inválidos."}';
	}
} else{
	echo '{ "msg" : "O você não é um ADMINISTRADOR!"}';
}




















