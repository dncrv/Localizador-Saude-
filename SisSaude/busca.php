<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";


//Captura as Variáveis
if(isset($_GET['cidade'])) {
	$cidade = $_GET['cidade'];
	} else {
		$cidade = "";
		}

$marcacaoDB = new DataBase('marcacoes', $conexao);
$buscaCidade = $marcacaoDB->select('cidade', $cidade);
$dadosArray = array();
$x = 0;
while($linha = mysqli_fetch_array($buscaCidade)) {
		$dadosArray[$x]=	array( 	'id'				=>	$linha['id'],
		  			'cadastradoPor'		=>	$linha['cadastradoPor'],
		  			'nome'				=>	$linha['nome'],
		  			'tipo'				=>	$linha['tipo'],
		  			'sessao'			=>	$linha['sessao'],
		  			'rua'				=>	$linha['rua'],
		  			'bairro'			=>	$linha['bairro'],
		  			'cidade'			=>	$linha['cidade'],
		  			'estado'			=>	$linha['estado'],
		  			'cep'				=>	$linha['cep'],
		  			'latitude'			=>	$linha['latitude'],
		  			'longitude'			=>	$linha['longitude']
		  		);
		$x++;
		};

echo json_encode($dadosArray);




















