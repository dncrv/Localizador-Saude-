window.onload  = function(){
	var btnEntrar = document.querySelector("#btn-entrar");
	painel = document.querySelector(".alert");
	btnEntrar.addEventListener("click", function(e){
		e.preventDefault();
		var inputUser = document.querySelector("#usuario");
		var inputPass = document.querySelector("#senha");
		var xhr = new XMLHttpRequest();
		xhr.open("POST", _servidor+"login.php");
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.addEventListener("load", function(){
			if (xhr.status != 200) {
				painel.classList.remove("invisible");
				var resposta = "Falha de Conexao com o Servidor. Contacte um ADMINISTRADOR."
				painel.textContent = resposta;	
			} else {
				
				var resposta = JSON.parse(xhr.responseText);
				var msg = resposta.msg;

				if(msg == "login"){
						window.location.replace("sistema.php");
				}else{
					painel.classList.remove("invisible");
					painel.textContent = msg;
				}
				
				
			}
		});	
		var usuario = inputUser.value;
		var senha = md5(inputPass.value);
		xhr.send("usuario="+usuario+"&senha="+senha);
	});
}
