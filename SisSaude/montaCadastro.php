
<?php 

//Incluir a Classe doBanco
include "DataBase.php";
include "conexao.php";

if(isset($_GET['request'])){
	$request = $_GET['request'];
}else{
	$request = "";
}


if(($request == "cidade") || ($request == "estado") || ($request == "sessao") || ($request == "tipo")){
	$dataBase = new DataBase($request, $conexao);
	$query = "SELECT `".$request."` FROM `".$request."` WHERE 1";
	$busca = $dataBase->especial($query);
	$dadosArray = array();
	$x = 0;
	while($linha = mysqli_fetch_array($busca)) {
			$dadosArray[$x] = strtoupper((utf8_encode($linha[$request])));
			$x++;
			}
}

echo json_encode($dadosArray);





















