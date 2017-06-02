unidade 	= [ ];
servico 	= [ ];
dentista 	= [ ];
noticia 	= [ ];

function buscaDados(){
console.log(cidade);

var linkPrincipal = new XMLHttpRequest();
	linkPrincipal.open('GET', servidor+'comunicacao.php?request=cidade&val='+cidade);
	linkPrincipal.addEventListener("load", function() {
	    if (linkPrincipal.status =! 200) {
	    	alert("Houve um problema de conexão.\nTente novamente mais tarde.");
			navigator.app.exitApp();
			} else {
		        var resposta = linkPrincipal.responseText;
		        dadosPrincipais = JSON.parse(resposta);

		        console.log(dadosPrincipais);
		        var u = 0;
		        var s = 0;
		        var d = 0; 
		        var n = 0;
		        for(var l = 0; l < dadosPrincipais.length; l++){
		        	//Se for UNIDADE
		        	if(dadosPrincipais[l]['sessao'] == 'UNIDADES'){
		        		unidade[u] = dadosPrincipais[l];
		        		u++;
		        		} else{
		        		//Se for DENTISTA
			        	if(dadosPrincipais[l]['sessao'] == 'DENTISTA'){
			        		dentista[d] = dadosPrincipais[l];
		        			d++;
			        		} else{
			        		//Se for SERVICOS
					        if(dadosPrincipais[l]['sessao'] == 'SERVICOS'){
					        	servico[s] = dadosPrincipais[l];
		        				s++;
					        	} else{
					        	//Se for NOTICIAS
						        if(dadosPrincipais[l]['sessao'] == 'NOTICIA'){
						        	noticia[n] = dadosPrincipais[l];
		        					n++;
						        	} //END IF NOTICIA
							    } //END ELSE
							} //END ELSE
						} //END ELSE
		    		} // END FOR
/////////////////////////////////////////////////////////////////////////////////
		    			//  MONTAGEM DO APP //

		    	montaAPP(unidade, dentista, servico, noticia);


		    		//  FIM DA MONTAGEM DO APP //
/////////////////////////////////////////////////////////////////////////////////


		    	} //END ELSE OK (STATUS 200)
		    }); //END BUSCA DE DADOS
	linkPrincipal.send();
}









