
	var selectCidadeM 	= document.querySelector("#selectCidadeM");
	var selectEstadoM 	= document.querySelector("#selectEstadoM");
	var selectSessaoM 	= document.querySelector("#selectSessaoM");
	var selectTipoM 	= document.querySelector("#selectTipoM");
	var tabelaCidadeA 	= document.querySelector("#tabela-cidade");
	var tabelaEstadoA 	= document.querySelector("#tabela-estado");
	var tabelaSessaoA 	= document.querySelector("#tabela-sessao");
	var tabelaTipoA 	= document.querySelector("#tabela-tipo");
	var painelMarcacaoM	= document.querySelector("#alert-marcacao");


function montaCidade(){
	var linkSelectCidade = new XMLHttpRequest();
	linkSelectCidade.open("GET", _servidor+"montaCadastro.php?request=cidade");
	linkSelectCidade.addEventListener("load", function(){
		if (linkSelectCidade.status != 200) {
			painelMarcacaoM.classList.remove("invisible");
			var cidadesM = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelMarcacaoM.textContent = cidadesM;	
		} else {
			var cidadesM 			= JSON.parse(linkSelectCidade.responseText);
			selectCidadeM.innerHTML 	= "";
			tabelaCidadeA.innerHTML		= `<thead>
								    			<td class="local"> Cidade: </td>
								    			<td class="remove"> Remover: </td>
								    		</thead>`;
			for(var j = 0; j < cidadesM.length; j++){
				selectCidadeM.innerHTML = selectCidadeM.innerHTML+`<option>`+cidadesM[j]+`</option>`;
				tabelaCidadeA.innerHTML = tabelaCidadeA.innerHTML+`<tr>
																		<td>`+cidadesM[j]+`</td>
																		<td><button class="btn btn-sm btn-danger">Remover</button></td>
																	</tr>
																	`;
				}
			}				
		});	
	//ENVIA DADOS
	linkSelectCidade.send();
	}




function montaEstado(){
	var linkSelectEstado = new XMLHttpRequest();
	linkSelectEstado.open("GET", _servidor+"montaCadastro.php?request=estado");
	linkSelectEstado.addEventListener("load", function(){
		if (linkSelectEstado.status != 200) {
			painelMarcacaoM.classList.remove("invisible");
			var estadosM = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelMarcacaoM.textContent = estadosM;	
		} else {
			var estadosM 			= JSON.parse(linkSelectEstado.responseText);
			selectEstadoM.innerHTML 	= "";
			tabelaEstadoA.innerHTML		= `<thead>
								    			<td class="local"> Estado: </td>
								    			<td class="remove"> Remover: </td>
								    		</thead>`;
			for(var j = 0; j < estadosM.length; j++){
				selectEstadoM.innerHTML = selectEstadoM.innerHTML+`<option>`+estadosM[j]+`</option>`
				tabelaEstadoA.innerHTML = tabelaEstadoA.innerHTML+`<tr>
																		<td>`+estadosM[j]+`</td>
																		<td><button class="btn btn-sm btn-danger">Remover</button></td>
																	</tr>
																	`;
				}
			}				
		});	
	//ENVIA DADOS
	linkSelectEstado.send();
	}




function montaSessao(){
	var linkSelectSessao = new XMLHttpRequest();
	linkSelectSessao.open("GET", _servidor+"montaCadastro.php?request=sessao");
	linkSelectSessao.addEventListener("load", function(){
		if (linkSelectSessao.status != 200) {
			painelMarcacaoM.classList.remove("invisible");
			var sessaoM = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelMarcacaoM.textContent = sessaoM;	
		} else {
			var sessaoM 			= JSON.parse(linkSelectSessao.responseText);
			selectSessaoM.innerHTML 	= "";
			tabelaSessaoA.innerHTML		= `<thead>
								    			<td class="local"> Sessao: </td>
								    			<td class="remove"> Remover: </td>
								    		</thead>`;
			for(var j = 0; j < sessaoM.length; j++){
				selectSessaoM.innerHTML = selectSessaoM.innerHTML+`<option>`+sessaoM[j]+`</option>`;
				tabelaSessaoA.innerHTML = tabelaSessaoA.innerHTML+`<tr>
																		<td>`+sessaoM[j]+`</td>
																		<td><button class="btn btn-sm btn-danger">Remover</button></td>
																	</tr>
																	`;
				}
			}				
		});	
	//ENVIA DADOS
	linkSelectSessao.send();
	}



function montaTipo(){
	var linkSelectTipo = new XMLHttpRequest();
	linkSelectTipo.open("GET", _servidor+"montaCadastro.php?request=tipo");
	linkSelectTipo.addEventListener("load", function(){
		if (linkSelectTipo.status != 200) {
			painelMarcacaoM.classList.remove("invisible");
			var tipoM = "Falha de conexão com o Banco de Dados. Contacte um ADMINISTRADOR."
			painelMarcacaoM.textContent = tipoM;	
		} else {
			var tipoM 			= JSON.parse(linkSelectTipo.responseText);
			selectTipoM.innerHTML 	= "";
			tabelaTipoA.innerHTML		= `<thead>
								    			<td class="local"> Tipo: </td>
								    			<td class="remove"> Remover: </td>
								    		</thead>`;
			for(var j = 0; j < tipoM.length; j++){
				selectTipoM.innerHTML = selectTipoM.innerHTML+`<option>`+tipoM[j]+`</option>`;
				tabelaTipoA.innerHTML = tabelaTipoA.innerHTML+`<tr>
																		<td>`+tipoM[j]+`</td>
																		<td><button class="btn btn-sm btn-danger">Remover</button></td>
																	</tr>
																	`;
				}
			}				
		});	
	//ENVIA DADOS
	linkSelectTipo.send();
}

montaCidade();
montaEstado();
montaSessao();
montaTipo();

