//INTERCEPTADOR BOTAO VOLTAR ANDROID
document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.addEventListener("backbutton", function(){
			console.log('voltar')
			switch (janela){
				case 1: break;
				case 2: modalMarcacao.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 3: modalUnidade.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 4: modalServicos.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 5: modalAedes.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 6: modalDentista.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 7: modalAvalie.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 8: modalNoticia.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 9: break;
				case 10: modalInfo.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
				case 11: modalMapas.style.display 	= 'none'; voltaTexto.textContent = 'Voltar'; nomeSessao.textContent = 'Unidades'; janela = 3; navigator.geolocation.clearWatch(watchID); break;
			}
		}, false );
	}



//BTN VOLTAR APP
btnVoltar.addEventListener("click", function(){
	console.log('voltar')
	switch (janela){
		case 1: break;
		case 2: modalMarcacao.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 3: modalUnidade.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 4: modalServicos.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 5: modalAedes.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 6: modalDentista.style.display = 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 7: modalAvalie.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 8: modalNoticia.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 9: break;
		case 10: modalInfo.style.display 	= 'none'; voltaTexto.textContent = ''; imgInfo.style.display = 'block'; nomeSessao.style.display = 'none'; janela = 0; break;
		case 11: modalMapas.style.display 	= 'none'; voltaTexto.textContent = 'Voltar'; nomeSessao.textContent = 'Unidades'; janela = 3; navigator.geolocation.clearWatch(watchID); break;
	}
});

