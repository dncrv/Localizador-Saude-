<?php 
 
class DataBase extends MySqli{
	private $tabela;
	private $conexao;

	function __construct($table, $conexao){
		$this->tabela = $table;
		$this->conexao = $conexao;
	}	


	// INSERE DADOS EM UMA TABELA. OBS: SEMPRE PRECISARÁ receber os dados via ARRAY e
	public function insert($dados){
		$colunas = "";
		$valores = "";

		if(sizeof($dados) == "1"){
			$colunas = "`".key($dados)."`";
			$valores = "'".$dados[key($dados)]."'";
			
		}else{
			for($x = 0; $x < sizeof($dados) ; ++ $x){
				if($x == (sizeof($dados) - 1)){
					$colunas = $colunas."`".key($dados)."`";
					$valores = $valores."'".$dados[key($dados)]."'";
				} else{
					$colunas = $colunas."`".key($dados)."`, ";
					$valores = $valores."'".$dados[key($dados)]."', ";

					next($dados);
				}
			}
		}
		
		//GERA QUERY PARA INSERÇÃO;
		$query = "INSERT INTO `".$this->tabela."` (".$colunas.") VALUES(".$valores.");";
		
		try{
			$resultado = mysqli_query($this->conexao, $query);	
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
		}
	}

	public function delete($colunaSelecao, $valorSelecao){

		//GERA QUERY PARA Delete;
		$query = "DELETE FROM `".$this->tabela."` WHERE ".$colunaSelecao."='".$valorSelecao."';";

		try{
			$resultado = mysqli_query($this->conexao, $query);	
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
			}

		return $resultado;
	}

	public function update($dados, $colunaSelecao, $valorSelecao){
		$itens = "";
		if(sizeof($dados) == 1){
			$itens = key($dados)."='".$dados[key($dados)]."'";
		}else{
			for($x = 0; $x < sizeof($dados) ; $x++){
				if($x == (sizeof($dados) -1)){
					$itens = $itens.key($dados)."='".$dados[key($dados)]."'";
				} else{
					$itens = $itens.key($dados)."='".$dados[key($dados)]."', ";
					next($dados);
				}
			}

		//GERA QUERY PARA INSERÇÃO;
		$query = "UPDATE `".$this->tabela."` set ".$itens." WHERE ".$colunaSelecao."=`".$valorSelecao."`;";

		try{
			$resultado = mysqli_query($this->conexao, $query);	
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
			}
		}

		return $resultado;
	}

	public function select($colunaSelecao, $valorSelecao, $colunaRetorno = "*"){

		//GERA QUERY PARA Delete;
		$query = "SELECT ".$colunaRetorno." FROM `".$this->tabela."` WHERE ".$colunaSelecao."='".$valorSelecao."';";
		try{
			$resultado = mysqli_query($this->conexao, $query);
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
			}
		return $resultado;
	}


	public function login($usuario, $senha){

		//GERA QUERY PARA Delete;
		$query = "SELECT * FROM `".$this->tabela."` WHERE usuario='".$usuario."' AND senha='".$senha."';";

		try{
			$dadosDB = mysqli_query($this->conexao, $query);
			if($dadosDB){
				$resultado = mysqli_fetch_array($dadosDB);
				} else {
					$resultado = $dadosDB;
				}
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
			}
		return $resultado;
	}

	public function especial($queryS){

		try{
			$resultado = mysqli_query($this->conexao, $queryS);
			
			}
		catch(Exception $e){
				echo "Um erro ocorreu! <br>";
				echo $e;
			}
		return $resultado;
	}



}