<?php 
session_start();
 
if(!isset($_SESSION['login'])){
	header("Location: index.php");
}

require_once 'header.php';
?>


<style type="text/css">
	.msgs{
		border-radius: 20px;
		background-color: #fff;
		border: 1px #cdcdcd solid;
	}
	textarea{
		height: 300px !important;
		margin-bottom: 50px;
	}

	#tabela-busca td{
		width: 20%;

	}

	#tabela-cidade .local,
	#tabela-estado .local,
	#tabela-sessao .local,
	#tabela-tipo .local{
		width: 80%;
	}
	#tabela-cidade .remove,
	#tabela-estado .remove,
	#tabela-sessao .remove,
	#tabela-tipo .remove{
		width: 20%;
	}

	#tabela-cidade thead,
	#tabela-estado thead,
	#tabela-sessao thead,
	#tabela-tipo thead{
		height: 40px; 
		font-weight: 700; 
		background-color: #222; 
		color: #FFF
	}

</style>
<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#cadastro" aria-controls="cadastro" role="tab" data-toggle="tab">Cadastro</a></li>
    <li role="presentation"><a href="#administrativo" aria-controls="administrativo" role="tab" data-toggle="tab">Administrativo</a></li>
    <li role="presentation"><a href="#marcacao" aria-controls="marcacao" role="tab" data-toggle="tab">Marcação</a></li>
    <li role="presentation"><a href="#busca" class="btn-busca-nav" aria-controls="busca" role="tab" data-toggle="tab">Busca</a></li>
    <li style="position: absolute; right:0;"><a href="sair.php">Sair</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="home">


    	<h2 class="jumbotron text-center"> Sistema de Gestão Saude.com v0.72 </h2>

    	<p class="text-center">
    		Para mais informações entre em contato com um administrador.
    	</p>

    </div>
    <div role="tabpanel" class="tab-pane fade" id="cadastro">


		<h2 class="jumbotron text-center"> Cadastro de Equipe: </h2>


    	<div class="container">
    		
	    	<form>
	    		<div class="form-group">
	    			<label for="newUser">Usuário:</label>
	    			<input required id="newUser" class="form-control" type="text" name="newUser">
	    		</div>
	    		<div class="form-group">
	    			<label for="newPass">Senha:</label>
	    			<input required id="newPass" class="form-control" type="text" name="newPass">
	    		</div>
	    		<div class="form-group">
	    			<label for="newPassConf">Confirmação de Senha:</label>
	    			<input required id="newPassConf" class="form-control" type="text" name="newPassConf">
	    		</div>
	    		<div class="form-group">
	    			<label for="email">Email:</label>
	    			<input required id="email" class="form-control" type="text" name="email">
	    		</div>

	    		<div class="form-group">
	    			<label for="userType">Tipo de conta:</label>
	    			<select id="userType" class="form-control" name="userType">
	    				<option value = '1'>Administrador</option>	
	    				<option value = '2'>Gerente</option>	
	    			</select>
	    		</div>


	    		<hr>
	    		<div class="form-group">
	    			<label for="admUser">Usuário ADM:</label>
	    			<input required id="admUser" class="form-control" type="text" name="admUser">
	    		</div>
	    		<div class="form-group">
	    			<label for="admPass">Senha ADM:</label>
	    			<input required id="admPass" class="form-control" type="text" name="admPass">
	    		</div>

				<div id="alert-cadastro" class="alert invisible alert-danger text-center text-center" role="alert">

	    		</div>

	    		<button id="btn-cadastro" class="btn btn-lg btn-primary center-block" style="margin-top: 50px; margin-bottom: 50px">Cadastrar</button>
	    	</form>
    	</div>



    </div>
    <div role="tabpanel" class="tab-pane fade" id="administrativo">

    <h2 class="jumbotron text-center"> Administrativo: </h2>

    	<p class="text-center">

    	Adicionar ou remover CIDADES, ESTADOS, SESSÃO ou TIPO para as marcações.<br>
    	OBS: Somente usuários com privilégios de ADMINISTRADOR poderão fazer alterações nesta sessão.

    	</p>

    	<div id="alert-ADM" class="alert invisible alert-danger text-center text-center" role="alert">

	    		</div>
    	<div class="container" style="max-width: 800px;">


	    	<div class="form-group">
	    		<label for="addCidade">Cidade:</label>
	    		<input id="addCidade" class="form-control" type="text" name="addCidade">
	    		<button id="btnAddCidade" class="btn btn-primary btn-block center-block" style="margin-top: 20px; margin-bottom: 50px">Adicionar Cidade</button>
	    	</div>
	    	<div class="form-group">
	    		<label for="addEstado">Estado:</label>
	    		<input id="addEstado" class="form-control" type="text" name="addEstado">
	    		<button id="btnAddEstado" class="btn btn-primary btn-block center-block" style="margin-top: 20px; margin-bottom: 50px">Adicionar Estado</button>
	    	</div>
	    	<div class="form-group">
	    		<label for="addSessao">Sessão:</label>
	    		<input id="addSessao" class="form-control" type="text" name="addSessao">
	    		<button id="btnAddSessao" class="btn btn-primary btn-block center-block" style="margin-top: 20px; margin-bottom: 50px">Adicionar Sessão</button>
	    	</div>
	    	<div class="form-group">
	    		<label for="addTipo">Tipo:</label>
	    		<input id="addTipo" class="form-control" type="text" name="addTipo">
	    		<button id="btnAddTipo" class="btn btn-primary btn-block center-block" style="margin-top: 20px; margin-bottom: 50px">Adicionar Tipo</button>
	    	</div>


    	<table id="tabela-cidade" class="table table-striped text-center">
    		<thead>
    			<td class="local"> Cidade: </td>
    			<td class="remove"> Remover: </td>
    		</thead>
    	</table>

    	<table id="tabela-estado" class="table table-striped text-center">
    		<thead>
    			<td class="local"> Estados: </td>
    			<td class="remove"> Remover: </td>
    		</thead>
    	</table>
    	<table id="tabela-sessao" class="table table-striped text-center">
    		<thead>
    			<td class="local"> Sessao: </td>
    			<td class="remove"> Remover: </td>
    		</thead>
    	</table>
    	<table id="tabela-tipo" class="table table-striped text-center">
    		<thead>
    			<td class="local"> Tipo: </td>
    			<td class="remove"> Remover: </td>
    		</thead>
    	</table>

    	</div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="marcacao">

		<h2 class="jumbotron text-center"> Marcação de Local: </h2>

    	<div class="container">

	    	<form>
	    		<div class="form-group center-block text-center" style="max-width: 200px">
	    			<label for="cadastradoPor">Cadastrado por:</label>
	    			<input disabled id="cadastradoPor" class="form-control" type="text" name="cadastradoPor" value=<?="'".$_SESSION['login']."'"?>>
	    		</div>
	    		<div class="form-group">
	    			<label for="nome">Nome:</label>
	    			<input required id="nome" class="form-control" type="text" name="nome">
	    		</div>
	    		<div class="form-group">
	    			<label for="sessao">Sessao:</label>
	    			<select id="selectSessaoM" class="form-control" name="sessao"></select>
	    		</div>
	    		<div class="form-group">
	    			<label for="tipo">Tipo:</label>
	    			<select id="selectTipoM" class="form-control" name="tipo"></select>
	    		</div>
	    		<div class="form-group">
	    			<label for="rua">Rua:</label>
	    			<input required id="rua" class="form-control" type="text" name="rua">
	    		</div>
	    		<div class="form-group">
	    			<label for="bairro">Bairro:</label>
	    			<input required id="bairro" class="form-control" type="text" name="bairro">
	    		</div>
	    		<div class="form-group">
	    			<label for="cidade">Cidade:</label>
	    			<select id="selectCidadeM" class="form-control" name="cidade"></select>
	    		</div>
	    		<div class="form-group">
	    			<label for="estado">Estado:</label>
	    			<select id="selectEstadoM" class="form-control" name="estado"></select>
	    		</div>
				<div class="form-group">
	    			<label for="cep">CEP:</label>
	    			<input id="cep" class="form-control" type="text" name="cep">
	    		</div>
	    		<div class="form-group">
	    			<label for="latitude">Latitude:</label>
	    			<input id="latitude" class="form-control" type="text" name="latitude">
	    		</div>
	    		<div class="form-group">
	    			<label for="longitude">Longitude:</label>
	    			<input id="longitude" class="form-control" type="text" name="longitude">
	    		</div>
	    		<div id="alert-marcacao" class="alert invisible alert-danger text-center text-center" role="alert">
    			</div>
	    		<button id="btn-marcacao" class="btn btn-primary center-block" style="margin-top: 50px; margin-bottom: 50px">Cadastrar</button>
	    	</form>
    	</div>



    </div>

    <div role="tabpanel" class="tab-pane fade" id="busca">


    <h2 class="jumbotron text-center"> Busca Marcação: </h2>


    	<div class="container">
    		<div id="alert-busca" class="alert alert-danger text-center text-center" role="alert">
    				Tabela para edição de marcações. <br />AVISO: As edições feitas aqui são IRREVERSÍVEIS. Altere os dados com o máximo de antenção.
    		</div>
    		<div class="form-group">
	    	<select id="selectCidade" class="form-control center-block" style="max-width: 600px;">
	    	</select>
	    	</div>
	    	<div>
	    		<button id="btn-busca" class="btn btn-primary center-block">Carregar Tabela</button>
	    	</div>
	    	<hr>


	    	<table id="tabela-busca" class="table table-striped text-center">
	    		<tr style="height: 40px; font-weight: 700; background-color: #222; color: #FFF">
	    				<td>
	    					Nome
	    				</td>
	    				<td>
	    					Tipo
	    				</td>
	    				<td>
	    					CEP
	    				</td>
	    				<td>
	    					Ativar/Desativar
	    				</td>
	    				<td>
	    					Editar
	    				</td>
	    		</tr>
	    	</table>
    	</div>



    </div>
  </div>

</div>

<div class="modal">
	<div class="modal-corpo">
		<div class="modal-conteudo">
			
		</div>
	</div>
</div>

<script src="js/md5.js"></script>
<script src="js/config.js"></script>
<script src="js/montaCadastro.js"></script>
<script src="js/ADMAdd.js"></script>
<script src="js/buscaCidades.js"></script>
<script src="js/busca.js"></script>
<script src="js/cadastro.js"></script>
<script src="js/marcacao.js"></script>

<?php

require_once 'footer.php';
