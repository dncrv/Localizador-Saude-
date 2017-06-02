<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contato extends CI_Controller {

	public function index() {
		$this->load->view('contato');
	}
	public function enviar() {
						$dados = array(		'nome'			=>	$this->input->post('nome'),
                        					'email'			=>	$this->input->post('email'),
                        					'telefone'		=>	$this->input->post('telefone'),
                        					'assunto'   	=>	$this->input->post('assunto'),
                        					'mensagem'  	=>	$this->input->post('mensagem'),
								);


						//verifica Dados

						$this->load->library('form_validation');
						$this->form_validation->set_rules('nome', 'Nome da Instituição', 'required|min_length[3]');
						$this->form_validation->set_rules('email', 'e-mail', 'required|valid_email');
						$this->form_validation->set_rules('telefone', 'Telefone', 'required|numeric');
						$this->form_validation->set_rules('assunto', 'Assunto', 'required|min_length[4]');
						$this->form_validation->set_rules('mensagem', 'Mensagem', 'required|min_length[20]');
								
						if ($this->form_validation->run() == FALSE) {
							$erros = array('mensagens' => validation_errors());
							$this->load->view("contato", array_merge($erros, $dados));
							}
						//Senão volta para a view somente informando que o e-mail ja existe
						else {

							$de 			= 'BrHappy@behappy.com';
							$assunto 		= 'Mensagem de Contato: ' .$this->input->post('nome');
							$mensagem 		= '<h1>Mensagem enviada via SITE</h1>
												<br>Nome:'			.$dados['nome'].'
												<br>Email:'			.$dados['email'].'
												<br>Telefone:'		.$dados['telefone'].'
												<br>Assunto:'	    .$dados['assunto'].'
												<br>Mensagem:'  	.$dados['mensagem'].'
												<br><br>Data da Solicitação: '.date('l jS \of F Y h:i:s A');

													
							$para 			= 'suporte@brhappy.com';
							$email_servidor = 'suporte@brhappy.com';
							$headers 		= "From: $email_servidor\r\n" .
											"Reply-To: $de\r\n" .
											"X-Mailer: PHP/" . phpversion() . "\r\n";
							$headers .= "MIME-Version: 1.0\r\n";
							$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
							mail($para, $assunto, nl2br($mensagem), $headers);
							$erros = array('mensagens' => 'Dados Enviados com sucesso! Após avaliarmos as informações estaremos entrando em contato.');
							$this->load->view("contato", $erros);
						}
	}
}
