//Banco de Dados


CREATE TABLE `usuarios` (	`id` int(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`usuario` varchar(255) NOT NULL,
							`senha` varchar(255) NOT NULL,
							`email` varchar(255), 
							`tipo` varchar(2) NOT NULL,
							`reg_date` TIMESTAMP);
				


CREATE TABLE `marcacoes` (	`id` int(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`cadastradoPor` varchar(255) NOT NULL,
							`nome` varchar(255) NOT NULL,
							`sessao` varchar(255) NOT NULL,
							`tipo` varchar(255) NOT NULL,
							`rua` varchar(255) NOT NULL,
							`bairro` varchar(255) NOT NULL,
							`cidade` varchar(255) NOT NULL,
							`estado` varchar(255) NOT NULL,
							`cep` varchar(15),
							`latitude` varchar(255),
							`longitude` varchar(255));


CREATE TABLE `cidade` 	(	`id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`cidade` varchar(255) NOT NULL);

CREATE TABLE `estado` 	(	`id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`estado` varchar(255) NOT NULL);

CREATE TABLE `tipo` 	(	`id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`tipo` varchar(255) NOT NULL);

CREATE TABLE `sessao` 	(	`id` int(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
							`sessao` varchar(255) NOT NULL);

