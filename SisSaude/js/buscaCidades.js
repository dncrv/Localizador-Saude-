busca = document.querySelector(".btn-busca-nav");
busca.addEventListener("click", function () {
	

	var linkBuscaCidades = new XMLHttpRequest();
	linkBuscaCidades.open("GET", _servidor+"buscaCidades.php");
	linkBuscaCidades.addEventListener("load", function(){
		if (linkBuscaCidades.status != 200) {
			painelBusca.classList.remove("invisible");
			var resposta = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelBusca.textContent = resposta;	
		} else {
			
			var resposta = JSON.parse(linkBuscaCidades.responseText);
			var selectCidade = document.querySelector("#selectCidade");
			selectCidade.innerHTML = "";
			for(var j = 0; j < resposta.length; j++){

				selectCidade.innerHTML = selectCidade.innerHTML+`<option>`+resposta[j]+`</option>`
				}
			}				
		});	
//ENVIA DADOS
	linkBuscaCidades.send();
});

