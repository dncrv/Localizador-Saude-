//Buscar EDITAR

function configuraEdicao(){
    btnEditar = document.querySelectorAll(".btn-editar");

    for(var y = 0; y < btnEditar.length; y++){
        btnEditar[y].addEventListener("click", function(e){
            var ID                  = this.getAttribute("data-ID");
            var cadastradoPor 	= document.querySelector("#colCadastradoPorID"+ID);
            var nome 		= document.querySelector("#colNomeID"+ID);
            var sessao 		= document.querySelector("#colSessaoID"+ID);
            var tipo 		= document.querySelector("#colTipoID"+ID);
            var rua 		= document.querySelector("#colRuaID"+ID);
            var bairro 		= document.querySelector("#colBairroID"+ID);
            var cep 		= document.querySelector("#colCepID"+ID);
            var cidade 		= document.querySelector("#colCidadeID"+ID);
            var estado 		= document.querySelector("#colEstadoID"+ID);
            var latitude 	= document.querySelector("#colLatitudeID"+ID);
            var longitude 	= document.querySelector("#colLongitudeID"+ID);
            var modal  		= document.querySelector("#modal");

  
        });
    }
}