function montaMenus(modal, dados, tipoDado){

	//Separa os TIPOS UNIDADES
	var tipos = [ ];
	var subTipos = [ ];
	var aux;
	var f = 0;
	if((tipoDado == "DENTISTA") || (tipoDado == "SERVICOS")){
		montaSubGrupos();
	} else{
		montaGrupos();
	}




	
	for(var u = 0; u < dados.length; u++){
		aux = false;
		for (var t = 0; t < tipos.length ; t++){
			if (tipos[t] == dados[u]['tipo']){
				aux = true;
				}
			}
		if (aux == false){
			if(subTipos[f] != "")
				tipos[f] = dados[u]['tipo'];
			else{
				tipos[f] = dados[u]['tipo'];
			}
			f++;
			}
		}

	var modalMapas = document.querySelector("#modalMapas");
	console.log(tipos);
	modal.innerHTML = "";
	for(var u = 0; u < tipos.length; u++){
		modal.innerHTML = modal.innerHTML + '<div class="item-menu-u" id='+tipoDado+u+'>'+tipos[u]+'</div>';
		}
	for(var u = 0; u < tipos.length; u++){
		var tipoSelecionado = $$('#'+tipoDado+u)
		tipoSelecionado.addEventListener("click", function(e){
			var cacheMapa = [ ];
			cacheMapa[0] = tipoDado;
			cacheMapa[1] = e.target.textContent;

			storage.removeItem("ssaude_cacheMapa");
			storage.setItem("ssaude_cacheMapa", JSON.stringify(cacheMapa));
			console.log(storage.getItem("ssaude_cacheMapa"));
			modalMapas.style.display = 'block';
			montaMapa();
			
			janela = 11;
			});
		}
	}

function montaAPP(unidade, dentista, servico){

	var cacheUnidades 	= JSON.stringify(unidade);
	storage.removeItem("ssaude_unidade");
	storage.setItem("ssaude_unidade", cacheUnidades);

	var cacheDentista 	= JSON.stringify(dentista);
	storage.removeItem("ssaude_dentista");
	storage.setItem("ssaude_dentista", cacheDentista);

	var cacheServico 	= JSON.stringify(servico);
	storage.removeItem("ssaude_servico");
	storage.setItem("ssaude_servico", cacheServico);

	var cacheNoticia 	= JSON.stringify(noticia);
	storage.removeItem("ssaude_noticia");
	storage.setItem("ssaude_noticia", cacheNoticia);

	

	var unidadeModal = $$('#modalUnidadeItens');
	//SERVIÇOS
	var servicoModal = $$('#modalServicoItensEspecialista');
	var servicoModal = $$('#modalServicoItensExames');
	//DENTISTAS
	var dentistaModal = $$('#modalDentistaItensConsultorios');
	var dentistaModal = $$('#modalDentistaItensEmergencia');
	var dentistaModal = $$('#modalDentistaItensEspecializados');


	montaMenus(unidadeModal, unidade, "UNIDADES")
	montaMenus(dentistaModal, dentista, "DENTISTA")
	montaMenus(servicoModal, servico, "SERVICOS")

}


