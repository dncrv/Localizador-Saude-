 //SELECIONA PAINEIS //
var $$ = document.querySelector.bind(document);
var painelPrincipal = document.querySelector("#painel-principal");
var painelInicial = document.querySelector("#corpo-app");
var painelMapa = document.querySelector("#map_canvas");





function trocaPaineis(painelSome, painelAparece){
	painelSome.style.opacity = '0';
	setTimeout(function(){
		painelSome.style.display = 'none';
		painelSome.classList.remove('ativo');
		painelSome.classList.add('ultimo');
		}, 300);
	painelAparece.style.display = 'block';
	setTimeout(function(){
		painelAparece.style.opacity = '1';
		painelAparece.classList.add('ativo');
		}, 400);
    }


var storage = window.localStorage;
var cidade = storage.getItem("ssaude_cidade"); // Pass a key name to get its value.
if(cidade == null) {cidade = ""} else{
if(cidade.length <= 2){cidade = ""}}


dados = [];
var x = 0;
function startApp(){
	var linkVer = new XMLHttpRequest();
	linkVer.open('GET', servidor+'comunicacao.php?request=versao');
	linkVer.addEventListener("load", function() {
	    if (linkVer.status =! 200) {
	    	alert("Houve um problema de conexão.\nTente novamente mais tarde.");
			navigator.app.exitApp();
			} else {
		        var resposta = linkVer.responseText;
		        dados[x] = JSON.parse(resposta);
		        x++;
		        ////////////////////////////////////////////




				var linkCidade = new XMLHttpRequest();
				linkCidade.open('GET', servidor+'comunicacao.php?request=cidade&val='+cidade);
				linkCidade.addEventListener("load", function() {
				    if (linkCidade.status != 200) {
				    	alert("Houve um problema de conexão.\nTente novamente mais tarde.");
		        		navigator.app.exitApp();
		        		} else{
		        			var resposta = linkCidade.responseText;
					        dados[x] = dadosRetorno = JSON.parse(resposta);
					        if(dados[0]['versao'] != versao){
					        	alert("Uma nova versão do APP foi lançada. Atualizer agora mesmo para poder continuar aproveitando o sistema!")
					        	corpo = document.querySelector("body");
			        			
			        			if(device.platform == "Android"){
									corpo = cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.app.p8190CA&hl=pt_BR', '_system', 'location=no'); 
									} else{
										corpo = cordova.InAppBrowser.open('https://itunes.apple.com/br/app/saude.com-sg/id1037012198?mt=8', '_system', 'location=no');
									}
			        			navigator.app.exitApp();
			        			} else{

							        if(cidade == ""){
							        	modal 	= document.querySelector(".modal-cidade");
							        	selectCidades 	= document.querySelector("#select-cidades");
							        	btnSelectCidade = document.querySelector("#btn-select-cidade");
							        	for(var y = 0; y < dados[1].length; y++){
							        		selectCidades.innerHTML = selectCidades.innerHTML + "<option>"+dados[1][y]+"</oprion>";
							        		}
							        	modal.style.display = 'block';
							        	modal.style.opacity = '100';
							        	btnSelectCidade.addEventListener("click", function(e){
							        		e.preventDefault();
							        		cidade = selectCidades.options[selectCidades.selectedIndex].textContent;
							        		storage.setItem("ssaude_cidade", cidade);
							        		trocaPaineis(painelInicial, painelPrincipal);
							        		buscaDados();
							        		
							        		});
							        	} else{

									        if(cidade.length > 2){
									        	trocaPaineis(painelInicial, painelPrincipal);
									        	buscaDados();
									        	}								        
							       	 		}		
									}
							}
					      	       
						});
				linkCidade.send();
			///////////////////////////////////
			}
		});
	linkVer.send();
}

app.initialize();
startApp();












