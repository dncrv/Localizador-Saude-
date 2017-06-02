
	var btn1 = document.querySelector("#btn1");
	var btn2 = document.querySelector("#btn2");
	var btn3 = document.querySelector("#btn3");
	var btn4 = document.querySelector("#btn4");
	var btn5 = document.querySelector("#btn5");
	var btn6 = document.querySelector("#btn6");
	var btn7 = document.querySelector("#btn7");
	var btn8 = document.querySelector("#btn8");
	var btn9 = document.querySelector("#btn9");
	var modalUnidade = document.querySelector("#modalUnidade");
	var modalMapas = document.querySelector("#modalMapas");
	var modalServicos = document.querySelector("#modalServicos");
	var modalDentista = document.querySelector("#modalDentista");
	var modalAvalie = document.querySelector("#modalAvalie");
	var modalAedes = document.querySelector("#modalAedes");
	var modalMarcacao = document.querySelector("#modalMarcacao");
	var modalNoticia = document.querySelector("#modalNoticia");

	var container = document.querySelector(".container-total");
	var banner = document.querySelector(".banner");

	btn1.addEventListener("click", function(){
		event.preventDefault();
	  	var ref = cordova.InAppBrowser.open('http://www.saogoncalo.rj.gov.br/', '_blank', 'location=no');
	});			

	btn2.addEventListener("click", function(){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Marcação";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar';
		modalMarcacao.style.display = 'block';
		janela = 2;
	});

	btn3.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Unidades";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar';
		console.log(voltaTexto.textContent); 
		janela = 3;
		modalUnidade.style.display = 'block';
	});

	btn4.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Serviços";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		janela = 4;
		modalServicos.style.display = 'block';
	});

	btn5.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Aedes";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		janela = 5;
		modalAedes.style.display = 'block';
	});

	btn6.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Dentista";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		janela = 6;
		modalDentista.style.display = 'block';
	});

	btn7.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Avalie";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		janela = 7;
		modalAvalie.style.display = 'block';
	});

	btn8.addEventListener("click", function(event){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Notícias";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		modalNoticia.style.display = 'block';
		janela = 8;

	});
	 	
	btn9.addEventListener("click", function(event){
		event.preventDefault();
		if(device.platform == "Android"){
			var sus = window.open('https://play.google.com/store/apps/details?id=br.gov.datasus.cnsdigital&hl=pt', '_system', 'location=no');
			} else{
				var sus = window.open('https://itunes.apple.com/br/app/cart%C3%A3o-sus-digital/id1045754608?mt=8', '_system', 'location=no');
			}
	});

	imgInfo.addEventListener("click", function(e){
		event.preventDefault();
		imgInfo.style.display = 'none';
		nomeSessao.textContent = "Informações";
		nomeSessao.style.display = 'block';
		voltaTexto.textContent = 'Voltar'; 
		modalInfo.style.display = 'block';
		janela = 10;
	})

