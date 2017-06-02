<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";



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



















