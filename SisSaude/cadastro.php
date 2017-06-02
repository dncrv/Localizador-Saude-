<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";


//Captura as Variáveis
if(isset($_GET['newUser'])) {
	$newUser = $_GET['newUser'];
	} else {
		$newUser = "";
		}
if(isset($_GET['newPass'])) {
	$newPass = $_GET['newPass'];
	} else {
		$newUser = "";
		}
if(isset($_GET['newPassConf'])) {
	$newPassConf = $_GET['newPassConf'];
	} else {
		$newPassConf = "";
		}
if(isset($_GET['email'])) {
	$email = $_GET['email'];
	} else {
		$email = "";
		}
if(isset($_GET['userType'])) {
	$userType = $_GET['userType'];
	} else {
		$userType = "";
		}
if(isset($_GET['admUser'])) {
	$admUser = $_GET['admUser'];
	} else {
		$admUser = "";
		}
if(isset($_GET['admPass'])) {
	$admPass = $_GET['admPass'];
	} else {
		$admPass = "";
			}	


//Verifica Privilegios
$userDB = new DataBase('usuarios', $conexao);
$usuario = $userDB->login($admUser, $admPass);
$tipoConta = $usuario['tipo'];

if($usuario){
	if($tipoConta == "1"){
		$dados = array(	'usuario' 	=> $newUser,
				'senha'		=> $newPass,
				'email'		=> $email,
				'tipo'		=> $userType
				);

		$buscaUsuario = $userDB->select('usuario', $newUser);
		$buscaEmail = $userDB->select('email', $email);

		if($buscaUsuario['usuario'] != $newUser) {
			if($buscaEmail['email'] != $email){
				$userDB->insert($dados);
				echo '{ "msg" : "Cadastro Efetuado com Sucesso!" }';
				}else{
					echo '{ "msg" : "Email ja utilizado em outro cadastro!" }';
				} 
			} else{
				echo '{ "msg" : "Usuário ja utilizado em outro cadastro!" }';
				}
		} else{
			echo '{ "msg" : "Conta sem privilegios para cadastro de novos usuários" }';
		}
	} else{
		echo '{ "msg" : "Conta de ADM inválida" }';
	}




















