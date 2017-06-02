<?php

$para 			= 'danielcrv92@gmail.com';
$email_servidor = 'danielcrv92@gmail.com';

if(isset($_GET['local'])){
	$local = $_GET['local'];
}else{
	$local = "";
}

if(isset($_GET['nome'])){
	$nome = $_GET['nome'];
}else{
	$nome = "";
}
if(isset($_FILES['foto'])){
	$foto = $_FILES['foto'];
}else{
	$foto = "";
}
if(isset($_GET['email'])){
	$email = $_GET['email'];
}else{
	$email = "";
}
if(isset($_GET['assunto'])){
	$assunto = $_GET['assunto'];
}else{
	$assunto = "";
}
if(isset($_GET['mensagem'])){
	$mensagem = $_GET['mensagem'];
}else{
	$mensagem = "";
}

$uploaddir = 'img/forms/';
$ext = pathinfo($foto, PATHINFO_EXTENSION);
$uploadfile = $uploaddir . "img" . date('l jS \of F Y h:i:s A') . $ext;

move_uploaded_file($foto['tmp_name'], $uploadfile);



if($local == "aedes"){
	$de 			= $email;
	$assunto 		= '[FORMULARIO AEDES] Mensagem de '.$nome;
	$mensagem 		= '	<h1>Mensagem enviada via FORMULÁRIO</h1>
						<br>Nome:'						.$nome.'
						<br>Email:'						.$email.'
						<br>Assunto:'					.$assunto.'
						<br>Imagem:<img src="'			.$uploadfile.'">
						<br><br><p>Conteúdo:'			.$mensagem.'</p>
						<br><br><br><br>Data de Envio (Data e hora baseada no Servidor): '.date('l jS \of F Y h:i:s A');
					
	
	$headers 		= 	"From: $email_servidor\r\n" .
						"Reply-To: $de\r\n" .
						"X-Mailer: PHP/" . phpversion() . "\r\n";
	$headers 		.= "MIME-Version: 1.0\r\n";
	$headers 		.= "Content-Type: text/html; charset=UTF-8\r\n";

	if(mail($para, $assunto, nl2br($mensagem), $headers, "-f$email_servidor")){
		echo '{ "msg" : "Mensagem enviada com Sucesso!" }';
	}else{
		echo '{ "msg" : "Um problema insperado aconteceu, tente novamente mais tarde." }';
	}
}
if($local == "avalie"){
	$de 			= $email;
	$assunto 		= '[FORMULARIO AVALIE] Mensagem de '.$nome;
	$mensagem 		= '	<h1>Mensagem enviada via FORMULÁRIO</h1>
						<br>Nome:'						.$nome.'
						<br>Email:'						.$email.'
						<br>Assunto:'					.$assunto.'
						<br>Imagem:<img src="'			.$uploadfile.'">
						<br><br><p>Conteúdo:'			.$mensagem.'</p>
						<br><br><br><br>Data de Envio (Data e hora baseada no Servidor): '.date('l jS \of F Y h:i:s A');
					
	
	$headers 		= 	"From: $email_servidor\r\n" .
						"Reply-To: $de\r\n" .
						"X-Mailer: PHP/" . phpversion() . "\r\n";
	$headers 		.= "MIME-Version: 1.0\r\n";
	$headers 		.= "Content-Type: text/html; charset=UTF-8\r\n";

	if(mail($para, $assunto, nl2br($mensagem), $headers, "-f$email_servidor")){
		echo '{ "msg" : "Mensagem enviada com Sucesso!" }';
	}else{
		echo '{ "msg" : "Um problema insperado aconteceu, tente novamente mais tarde." }';
	}
} 

