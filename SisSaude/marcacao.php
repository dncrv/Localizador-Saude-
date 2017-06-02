<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";

//Captura as Variáveis
if(isset($_GET['cadastradoPor'])) {
	$cadastradoPor = $_GET['cadastradoPor'];
	} else {
		$cadastradoPor = "";
		}
if(isset($_GET['nome'])) {
	$nome = $_GET['nome'];
	} else {
		$nome = "";
		}
if(isset($_GET['sessao'])) {
	$sessao = $_GET['sessao'];
	} else {
		$sessao = "";
		}
if(isset($_GET['tipo'])) {
	$tipo = $_GET['tipo'];
	} else {
		$tipo = "";
		}
if(isset($_GET['rua'])) {
	$rua = $_GET['rua'];
	} else {
		$rua = "";
		}
if(isset($_GET['bairro'])) {
	$bairro = $_GET['bairro'];
	} else {
		$bairro = "";
		}
if(isset($_GET['cidade'])) {
	$cidade = $_GET['cidade'];
	} else {
		$cidade = "";
		}
if(isset($_GET['estado'])) {
	$estado = $_GET['estado'];
	} else {
		$estado = "";
			}
if(isset($_GET['cep'])) {
	$cep = $_GET['cep'];
	} else {
		$cep = "";
			}
if(isset($_GET['latitude'])) {
	$latitude = $_GET['latitude'];
	} else {
		$latitude = "";
			}
if(isset($_GET['longitude'])) {
	$longitude = $_GET['longitude'];
	} else {
		$longitude = "";
			}	



//Verifica Privilegios
$marcacaoDB 	= new DataBase('marcacoes', $conexao);

$dados = new ArrayObject();
$dados = [	'cadastradoPor'	=>	$cadastradoPor,
			'nome'			=>	$nome,
			'sessao'		=>	$sessao,
			'tipo'			=>	$tipo,
			'rua'			=>	$rua,
			'bairro'		=>	$bairro,
			'cidade'		=>	$cidade,
			'estado'		=>	$estado,
			'cep'			=>	$cep,
			'latitude'		=>	$latitude,
			'longitude'		=>	$longitude
			];


try {
	$resultado = $marcacaoDB->insert($dados);
	echo 	'{ "msg" : "Marcação criada com sucesso!" }';
			
	} 
catch (Exception $e){
	echo '{ "msg" : "Houve um erro de comunicação com o banco de dados. Aguarde alguns instantes e tente novamente. Detalhes: '.$e.'" }';
	}

return null;




















