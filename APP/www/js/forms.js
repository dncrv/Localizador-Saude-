formAvalie.addEventListener("submit", function(e){
	e.preventDefault();
	var nome 		= document.querySelector("#avalie-nome");
	var email 		= document.querySelector("#avalie-email");
	var assunto 	= document.querySelector("#avalie-assunto");
	var mensagem 	= document.querySelector("#avalie-mensagem");
	var foto 		= document.querySelector("#avalie-foto");

	var dados = { 	nome 		: nome,
					email 		: email,
					assunto 	: assunto,
					mensagem	: mensagem,
					foto		: foto
				}
}) 

enviaForm(dados){
	var linkForm = new XMLHttpRequest();
		linkForm.open('POST', servidor+'email.php');
		linkForm.addEventListener("load", function() {
		    if (linkForm.status =! 200) {
		    	alert("Houve um problema de conexão.\nTente novamente mais tarde.");
				navigator.app.exitApp();
				} else {
				}
			});
		dad0s
	linkForm.send(dados);
}


var fd = new FormData();
fd.append('file', $('#inputFile'));

$.ajax({
    url: 'http://dominio/pagina.php',
    data: fd,
    processData: false,
    contentType: false,
    type: 'POST',
    success: function(data) {
        alert(data);
    }
});