


function montaMapa(){
      //MONTANDO DADOS E BUSCANDO NA MEMORIA
      var storage = window.localStorage;
      var mapaAtual = JSON.parse(storage.getItem("ssaude_cacheMapa"));

      //Montando posição dos marcadores
      var dadosMapa = [];
      if (mapaAtual[0] == "UNIDADES") {
          dadosMapa = JSON.parse(storage.getItem("ssaude_unidade"));
          } else{
            if (mapaAtual[0] == "SERVICOS") {
              dadosMapa = JSON.parse(storage.getItem("ssaude_servico"));
            } else {
              if (mapaAtual[0] == "DENTISTA"){
                dadosMapa = JSON.parse(storage.getItem("ssaude_dentista"));
              }
            }
          }
      data = [ ];
      dataN = [ ];
      dataExtra = [ ];
      var auxData;
      var auxData2;


      var menu = document.querySelector("#menuMarcadores");



      var cont = 0;
      menu.innerHTML = "";
      console.log(dadosMapa);
      for(var y = 0; y < dadosMapa.length; y++){
        if(mapaAtual[1] == dadosMapa[y]['tipo']){
          console.log('************************')
          console.log(dadosMapa[y])

          auxData   =  JSON.parse('{ "lat" : '    + dadosMapa[y]['latitude'] + 
                                  ', "lng" : '    + dadosMapa[y]['longitude'] + 
                                  '}' );
          console.log(auxData)
          auxData2 =  JSON.parse('{ "rua" : "'    + dadosMapa[y]['rua'] + 
                                '", "bairro" : "' + dadosMapa[y]['bairro'] + 
                                '", "cep" : "'    + dadosMapa[y]['cep'] + 
                                '"}' );

          console.log(dataExtra)

          data[cont]      = auxData;
          dataExtra[cont] = auxData2;
          dataN[cont]     = dadosMapa[y]['nome'];
          menu.innerHTML  = menu.innerHTML + '<div calss="marcadoresMenu" id="marcador-' + cont+ 
                                                      '" data-mark="'+ cont +
                                                      '" data-lat="'+ dadosMapa[y]['latitude'] +
                                                      '" data-lng="'+ dadosMapa[y]['longitude'] +
                                                      '">' + dadosMapa[y]["nome"] + 
                                             '</div>';

          cont ++;
          }
        }

        console.log(data.length);
        console.log(data);
        console.log(dataN);

        if(latitude == undefined){
          latitude = data[0].lat;
          longitude = data[0].lng;
          }

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: { lat: latitude, lng: longitude }
        });

        

        function atualizaPosicao(){
          if(latitude != data[0].lat){
            var minhaPosicao = new google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: map,
              icon: 'img/myposition.png'
              });
          } else{

            alert("Para utilizar todas as funcionalidades do Saude.com por favor, ative seu GPS.")

          }
        }

        function falhaAtaulizaPosicao(){
          alert("Nao foi possivel capturar sua posição!");
        }

        watchID = navigator.geolocation.watchPosition(atualizaPosicao, falhaAtaulizaPosicao, { enableHighAccuracy: true });


        btnMenu = document.querySelector("#menu-mais");

        info = new google.maps.InfoWindow();
        marker = [ ];
        menuMark = [ ];
        nav = [ ];
        btnNav = [ ];
        markCont = 0;



        for(markCont = 0; markCont < data.length; markCont++){
          marker[markCont] = new google.maps.Marker({
            position: data[markCont],
            map: map,
            title: dataN[markCont]
          });

          marker[markCont].addListener('click', function() {
            indice = dataN.indexOf(this.title);
            info.close(map)
            info = new google.maps.InfoWindow({
              content: "<div style='font-size: 2rem;'><h1 class='text-center' style='font-size: 2.4rem; font-weigth: 700; text-transform = upercase'>"  + this.title+
                       "</h1><br>Rua: "       + dataExtra[indice].rua+
                       "<br>Bairro: "         + dataExtra[indice].bairro+
                       "<br>CEP: "            + dataExtra[indice].cep+
                       "<br><br><a class='text-center' style='font-weigth: 700; text-transform = upercase;' onClick='chamaNav("                     + indice+
                       ")'>Ajuda para chegar!</a><div>"
                      });
            info.open(map, this);
            });
        }

        for(markCont = 0; markCont < data.length; markCont++){
          menuMark[markCont] = document.querySelector('#marcador-' + markCont)
          menuMark[markCont].addEventListener('click', function() {
            info.close(map)
            var indice = this.getAttribute('data-mark');
            info = new google.maps.InfoWindow({ 
              content: "<div style='font-size: 2rem;'><h1 class='text-center' style='font-size: 2.4rem; font-weigth: 700; text-transform = upercase'>"  + marker[indice].title+
                       "</h1><br>Rua: "       + dataExtra[indice].rua+
                       "<br>Bairro: "         + dataExtra[indice].bairro+
                       "<br>CEP: "            + dataExtra[indice].cep+
                       "<br><br><a class='text-center' style='font-weigth: 700; text-transform = upercase;' onClick='chamaNav("                     + indice+
                       ")'>Ajuda para chegar!</a><div>"
                      });


              info.open(map, marker[this.getAttribute('data-mark')]);
              menu.style.display = 'none';
              btnMenu.textContent = 'Mais';
            });
        }




      bottomMap = document.querySelector("#bottom-map")

      var menuMarcadores = document.querySelector("#menuMarcadores");
      menuMarcadores.style.transform = 'translateY(-'+(height*0.08)+'px)';

      bottomMap.addEventListener("click", function(e){
        console.log("click");
        e.preventDefault();
        if(menuMarcadores.style.display == "none"){
            menuMarcadores.style.display = 'block';
            btnMenu.textContent = 'Fechar';
            } else{
                menuMarcadores.style.display = 'none';
                btnMenu.textContent = 'Mais';
            }
      })

      bottomMap.style.height = (height*0.08)+"px";


      function titleize(text) {
          var words = text.toLowerCase().split(" ");
          for (var a = 0; a < words.length; a++) {
              var w = words[a];
              words[a] = w[0].toUpperCase() + w.slice(1);
          }
          return words.join(" ");
      }

      nomeSessao.textContent = titleize(mapaAtual[1]);
    }


function chamaNav(ind){
  console.log(dataN);
  local = trocaEspacoPorMais(dataN[ind]);
  label = encodeURI(local);
  if(device.platform == 'Android'){
    console.log(local);
    console.log('geo:'+ data[ind].lat + ',' + data[ind].lng + '?q='+ data[ind].lat + ',' + data[ind].lng + ',(' + label + ')');
    navApp = window.open('geo:'+ data[ind].lat + ',' + data[ind].lng + '?q='+ data[ind].lat + ',' + data[ind].lng + ',(' + label + ')', '_system');
  } else {
    navApp = window.open('maps://?q='+ local + "," + data[ind].lat + ',' + data[ind].lng, '_system');
    
  }
} 

function trocaEspacoPorMais(vlr) {
  while(vlr.indexOf(" ") != -1)
    vlr = vlr.replace(" ", "+");
}
