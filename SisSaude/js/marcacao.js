
	var btnMarcacao = document.querySelector("#btn-marcacao");
	painel = document.querySelector("#alert-marcacao");
	btnMarcacao.addEventListener("click", function(e){
		e.preventDefault();

		//Busca Campos
		var cadastradoPor 		= document.querySelector("#cadastradoPor");
		var nome 				= document.querySelector("#nome");
		var tipo 				= document.querySelector("#selectTipoM");
		var sessao 				= document.querySelector("#selectSessaoM");
		var rua 				= document.querySelector("#rua");
		var bairro 				= document.querySelector("#bairro");
		var cidade 				= document.querySelector("#selectCidadeM");
		var estado 				= document.querySelector("#selectEstadoM");
		var cep 				= document.querySelector("#cep");
		var latitude 			= document.querySelector("#latitude");
		var longitude 			= document.querySelector("#longitude");

		var VcadastradoPor 		= cadastradoPor.value;
		var Vnome 				= nome.value;
		var Vsessao 			= sessao.options[sessao.selectedIndex].textContent;
		var Vtipo 				= tipo.options[tipo.selectedIndex].textContent;
		var Vrua 				= rua.value;
		var Vbairro 			= bairro.value;
		var Vcidade 			= cidade.options[cidade.selectedIndex].textContent;
		var Vestado 			= estado.options[estado.selectedIndex].textContent;
		var Vcep 				= cep.value;
		var Vlatitude 			= latitude.value;
		var Vlongitude 			= longitude.value;

			//Cria LINK
		var linkMarcacao = new XMLHttpRequest();
		linkMarcacao.open("GET", _servidor+"marcacao.php?cadastradoPor="+VcadastradoPor+"&nome="+Vnome+"&tipo="+Vtipo+"&sessao="+Vsessao+"&rua="+Vrua+"&bairro="+Vbairro+"&cidade="+Vcidade+"&estado="+Vestado+"&cep="+Vcep+"&latitude="+Vlatitude+"&longitude="+Vlongitude);
		linkMarcacao.addEventListener("load", function(){
			if (linkMarcacao.status != 200) {
				painel.classList.remove("invisible");
				var resposta = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
				painel.textContent = resposta;	
			} else {
				var resposta = JSON.parse(linkMarcacao.responseText);
				var msg = resposta.msg;
				painel.classList.remove("invisible");
				painel.classList.remove("alert-danger");
				painel.classList.add("alert-success");
				painel.textContent = msg;
				}				
			});	

		console.log

		

	//ENVIA DADOS
		linkMarcacao.send();
	});
