
	var btnCadastro = document.querySelector("#btn-cadastro");
	painelCadastro = document.querySelector("#alert-cadastro");
	btnCadastro.addEventListener("click", function(e){
		e.preventDefault();

		//Busca Campos
		var newUser 		= document.querySelector("#newUser");
		var newPass 		= document.querySelector("#newPass");
		var newPassConf 	= document.querySelector("#newPassConf");
		var email 			= document.querySelector("#email");
		var userType 		= document.querySelector("#userType");
		var admUser 		= document.querySelector("#admUser");
		var admPass 		= document.querySelector("#admPass");

		var usuario 	= newUser.value;
		var senha 		= md5(newPass.value);
		var email	 	= email.value;
		var tipo 	 	= userType.value;
		var admUser 	= admUser.value;
		var admPass 	= md5(admPass.value);

		if(newPass.value == newPassConf.value){
			//Cria LINK
			console.log("linkando");
			var linkCadstro = new XMLHttpRequest();
			linkCadstro.open("GET", _servidor+"cadastro.php?newUser="+usuario+"&newPass="+senha+"&email="+email+"&userType="+tipo+"&admUser="+admUser+"&admPass="+admPass);
			linkCadstro.addEventListener("load", function(){
				console.log("resposta");
				if (linkCadstro.status != 200) {
					painelCadastro.classList.remove("invisible");
					var resposta = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
					painelCadastro.textContent = resposta;	
				} else {
					var resposta = JSON.parse(linkCadstro.responseText);
					var msg = resposta.msg;
					console.log("msg");
					if(	(msg == "Conta de ADM inválida") || 
						(msg == "Email ja utilizado em outro cadastro!") ||
						(msg == "Usuário ja utilizado em outro cadastro!") ||
						(msg == "Conta sem privilegios para cadastro de novos usuários") ||
						(msg == "Conta de ADM inválida)")){
							painelCadastro.classList.remove("invisible");
							painelCadastro.textContent = msg;
						} else{
							painelCadastro.classList.remove("invisible");
							painelCadastro.classList.remove("alert-danger");
							painelCadastro.classList.add("alert-success");
							painelCadastro.textContent = msg;
						}			
				}
			});
			

			//ENVIA DADOS
			linkCadstro.send();
		} else{
			var msg = 'Os campos "Senha" e "Confirmação de Senha" precisam ser iguais!';
			painelCadastro.classList.remove("invisible");
			painelCadastro.textContent = msg;
			}
		});	
