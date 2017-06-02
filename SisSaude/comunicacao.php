<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";

if(isset($_GET['request'])){
	$request = $_GET['request'];
}else{
	$request = "";
}
if(isset($_GET['val'])){
	$val = $_GET['val'];
}else{
	$val = "";
}


if($request == "versao"){
	echo '{ "versao" : "'.$versao.'"}';
}

if($request == "cidade" && $val == ""){
	$marcacaoDB = new DataBase('marcacoes', $conexao);
	$buscaCidades = $marcacaoDB->especial("SELECT `cidade` FROM `marcacoes` WHERE 1");
	$dadosArray = array();
	$x = 0;
	while($linha = mysqli_fetch_array($buscaCidades)) {
			$dadosArray[$x]= strtoupper($linha['cidade']);
			$x++;
			};
	$arrayUnica = array_unique($dadosArray);
	$saida = array();
	$j = 0;
	foreach ($arrayUnica as $key => $value) {
		if(isset($arrayUnica[$key])){
			$saida[$j] = $arrayUnica[$key];
			$j++;
		}
	}
	echo json_encode($saida);
}

if($request == "cidade" && $val != ""){
	$marcacaoDB = new DataBase('marcacoes', $conexao);
	$buscaCidade = $marcacaoDB->select('cidade', $val);
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
}
