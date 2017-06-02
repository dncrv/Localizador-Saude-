var btnBusca = document.querySelector("#btn-busca");
painelBusca = document.querySelector("#alert-busca");
btnBusca.addEventListener("click", function(e){
	e.preventDefault();

	var selectCidade = document.querySelector("#selectCidade");
	var cidade = selectCidade.options[selectCidade.selectedIndex].textContent;

	var linkBuscaCidades = new XMLHttpRequest();
	linkBuscaCidades.open("GET", _servidor+"busca.php?cidade="+cidade);
	linkBuscaCidades.addEventListener("load", function(){
		if (linkBuscaCidades.status != 200) {
			painelBusca.classList.remove("invisible");
			var resposta = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelBusca.textContent = resposta;	
		} else {
			var resposta = JSON.parse(linkBuscaCidades.responseText);
			tabela = document.querySelector("#tabela-busca");
			tabela.innerHTML = `<tr style="height: 40px; font-weight: 700; background-color: #222; color: #FFF">
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
				    			`
			for(var j = 0; j < resposta.length; j++){
				tabela.innerHTML = tabela.innerHTML+
				`
					<tr class="linha-marcacao" id=linhaID`+resposta[j]['id']+`>
						<td  class="celula-cadastradoPor" style="display: none;" id="colCadastradoPorID`+resposta[j]['id']+`">
							`+resposta[j]['cadastradoPor']+`
						</td>
						<td class="celula-nome" id="colNomeID`+resposta[j]['id']+`">
							`+resposta[j]['nome']+`
						</td>
						<td class="celula-sessao" style="display: none;" id="colSessaoID`+resposta[j]['id']+`">
							`+resposta[j]['sessao']+`
						</td>
						<td class="celula-tipo" id=colTipoID`+resposta[j]['id']+`">
							`+resposta[j]['tipo']+`
						</td>
						<td  class="celula-rua" style="display: none;" id="colRuaID`+resposta[j]['id']+`">
							`+resposta[j]['rua']+`
						</td>
						<td  class="celula-bairro" style="display: none;" id="colBairroID`+resposta[j]['id']+`">
							`+resposta[j]['bairro']+`
						</td>
						<td  class="celula-cidade" style="display: none;" id="colCidadeID`+resposta[j]['id']+`">
							`+resposta[j]['cidade']+`
						</td>
						<td  class="celula-estado" style="display: none;" id="colEstadoID`+resposta[j]['id']+`">
							`+resposta[j]['estado']+`
						</td>
						<td class="celula-cep" id="colCepID`+resposta[j]['id']+`">
							`+resposta[j]['cep']+`
						</td>
						<td  class="celula-latitude" style="display: none;" id="colLatitudeID`+resposta[j]['id']+`"">
							`+resposta[j]['latitude']+`
						</td>
						<td  class="celula-longitude" style="display: none;" id="colLongitudeID`+resposta[j]['id']+`">
							`+resposta[j]['longitude']+`
						</td>
						<td class="celula-ativar" id="colAtivarID`+resposta[j]['id']+`">
							<input id ="`+resposta[j]['id']+`" type="checkbox" name="active" value="`+resposta[j]['id']+`">
						</td>
						<td class="celula-editar" id="colEditarID`+resposta[j]['id']+`">
							<button id="modal`+resposta[j]['id']+`" data-ID=`+resposta[j]['id']+`" class="btn btn-default btn-editar">Editar</button>
						</td>
					<tr>
				`

				}
			}				
		});	
//ENVIA DADOS
	linkBuscaCidades.send();
});
