

	var btnAddCidade 	= document.querySelector("#btnAddCidade");
	var btnAddEstado 	= document.querySelector("#btnAddEstado");
	var btnAddSessao 	= document.querySelector("#btnAddSessao");
	var btnAddTipo 	= document.querySelector("#btnAddTipo");
	var addCidade 	= document.querySelector("#addCidade");
	var addEstado 	= document.querySelector("#addEstado");
	var addSessao 	= document.querySelector("#addSessao");
	var addTipo 	= document.querySelector("#addTipo");
	var painelADM	= document.querySelector("#alert-ADM");


	btnAddCidade.addEventListener("click", function(e){
		e.preventDefault();
		var linkADM = new XMLHttpRequest();
		linkADM.open("GET", _servidor+"addCadastro.php?request=cidade&dado="+addCidade.value);
		linkADM.addEventListener("load", function(){
			if (linkADM.status != 200) {
				painelADM.classList.remove("invisible");
				var respostaADD = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
				painelADM.textContent = respostaADD;	
			} else {
				var respostaADD = JSON.parse(linkADM.responseText);
				painelADM.textContent = respostaADD.msg;
				painelADM.classList.remove("invisible");
				if(respostaADD.msg == "Dados Inseridos com Sucesso!"){
					painelADM.classList.remove("alert-danger");
					painelADM.classList.add("alert-success");
					montaCidade();
					}
				
				}
			});					
		//ENVIA DADOS
		linkADM.send();
	});


	btnAddEstado.addEventListener("click", function(e){
		e.preventDefault();
		var linkADM = new XMLHttpRequest();
		linkADM.open("GET", _servidor+"addCadastro.php?request=estado&dado="+addEstado.value);
		linkADM.addEventListener("load", function(){
			if (linkADM.status != 200) {
				painelADM.classList.remove("invisible");
				var respostaADD = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
				painelADM.textContent = respostaADD;	
			} else {
				var respostaADD = JSON.parse(linkADM.responseText);
				painelADM.textContent = respostaADD.msg;
				painelADM.classList.remove("invisible");
				if(respostaADD.msg == "Dados Inseridos com Sucesso!"){
					painelADM.classList.remove("alert-danger");
					painelADM.classList.add("alert-success");
					montaEstado();
					}
				}
			});						
		//ENVIA DADOS
		linkADM.send();
	});


	btnAddSessao.addEventListener("click", function(e){
		e.preventDefault();
		var linkADM = new XMLHttpRequest();
		linkADM.open("GET", _servidor+"addCadastro.php?request=sessao&dado="+addSessao.value);
		linkADM.addEventListener("load", function(){
			if (linkADM.status != 200) {
				painelADM.classList.remove("invisible");
				var respostaADD = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
				painelADM.textContent = respostaADD;	
			} else {
				var respostaADD = JSON.parse(linkADM.responseText);
				painelADM.textContent = respostaADD.msg;
				painelADM.classList.remove("invisible");
				if(respostaADD.msg == "Dados Inseridos com Sucesso!"){
					painelADM.classList.remove("alert-danger");
					painelADM.classList.add("alert-success");
					montaSessao();
					}
				}
			});						
		//ENVIA DADOS
		linkADM.send();
	});



	btnAddTipo.addEventListener("click", function(e){
		e.preventDefault();
		var linkADM = new XMLHttpRequest();
		linkADM.open("GET", _servidor+"addCadastro.php?request=tipo&dado="+addTipo.value);
		linkADM.addEventListener("load", function(){
			if (linkADM.status != 200) {
				painelADM.classList.remove("invisible");
				var respostaADD = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
				painelADM.textContent = respostaADD;	
			} else {
				var respostaADD = JSON.parse(linkADM.responseText);
				painelADM.textContent = respostaADD.msg;
				painelADM.classList.remove("invisible");
				if(respostaADD.msg == "Dados Inseridos com Sucesso!"){
					painelADM.classList.remove("alert-danger");
					painelADM.classList.add("alert-success");
					montaTipo();
					}
				}
			});					
		//ENVIA DADOS
		linkADM.send();
	});


