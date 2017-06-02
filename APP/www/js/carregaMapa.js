function carregaMapa(){
  var map;
  document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  var widthDiv = screen.width;
  var heightDiv = screen.height * 0.80;
  div.style.width = widthDiv+'px';
  div.style.height = heightDiv+'px';


  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
  }, false);


  function onMapReady() { 

    console.log('MapaON');

    var storage = window.localStorage;
    var mapaAtual = JSON.parse(storage.getItem("ssaude_cacheMapa"));
    console.log("mapaAtual = "+mapaAtual);
    console.log(JSON.parse(storage.getItem("ssaude_unidade")));
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
    console.log("DADOS MAPA =====================");
    console.log(dadosMapa);
    var data = [ ]
    var auxData;
    for(var y = 0; y < dadosMapa.length; y++){
      auxData =  JSON.parse('{ "title" : "'+dadosMapa[y]['nome']+'", "position" : { "lat" : '+dadosMapa[y]['latitude']+' , "lng" : '+dadosMapa[y]['longitude']+'}}');

      data[y] = auxData;
      }
      console.log("DATA =====================");
      console.log(data);
    map.animateCamera({
      target: {lat: dadosMapa[0]['latitude'], lng: dadosMapa[0]['longitude']},
      zoom: 11
      }, function() {
        var icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAPYSURBVHjarJRbTF1FFIb/mX07d9hAwQpCOViqWBMrGLEYajWKsW1Iqib1xcSYVk2qidoESprGW2KMvhifjG8+VDQYE2OsDYlJ1VA11kaQIphGDgUOHOAcLvvsy+w9Mz7sUrDY8qD/y0pmMt/8a9aaRaSU+L+lXm/D9wNjZLhwz/DQcutM1kszT0QSSWWhrj52cVez+UN1TfJPgPzrWXKtUyk5Tn818cTnvbmepUXsKjENJBLh3XaRo5Bn8DxmN90Z+fLZ52tfb9yx5Y8bQi3LiZzsHvzwwi/+03fdXYbbmuIoLVVBKAFjAsVigMW8j+wUw8hFC/NzK9bRV7Yceebwzk8AZWP6jHn0pSPnezN/KZ3tD1SgLh1DPK5ACMArctg2h13kcB0BqgCVVRqslWji2IuXT81k58nxk3tOcU4ByDWn77z164kvPiu+2dZehppbIjAMCsYEbFvAXgcNY4CVFY6FOYbZWR/5xYLV+fh3Lelb9VHfJyF0bDRXf6hzcHDH7Waiti4KVSXwPPEPkGOH0XUEHCeMq+uuq0GPDfS1P/j9k5oWCdPv6x0/6DpKggcSM1kvdFhchXA4joDrcjBPgDGBwJfwAwnOJQSXoJTBte7Y57nDNeUVclIFgP5vZvcyP4GpSReUhi49l8P1OJgnEfgSQSBCiACkkJASWCuxBJCMZsajraATfSoAXBqzahmLggccAMADCT8Q4DwECAFIGYKuJwIKxylpCLhhqABgFR0KIeH7/OrFm0GulQSgaQZNpVKEAoCqLU8KQSGuvJEQmwAl1ud+RQKEzmVse8GlAGCWZ89yTjZ1QwhAKaCqBKpOoGoEikJAKUGApWDfge0/PXXoYNhSu1sONA6ePzykqYYOiA0gVSXQDYpYTEE0qkDTKSAlPCbg2AKFgkBdutB/7sKjjxhGKmyp2m18bOrywAf5XMerqupehWkaRTyhoLxCx9abDVTdFEFJiQoQYHk5wGzWw/SkB8taEm+83fSaYaTWvmk8Xo6W1pGe01+b9/Kg+f6YHkA3KEpNDdU1EaS3x9DQEEflVgOqSrCY95EZt5GbYVhYcPFyV2X3/s6dAwjHllQB4KGHO6BphLXuzu3/+KPsp2OXzI6qRBSpEhVmmYZkSgOhwFLBh2UFmJ70MDpiI5NZlM8dNbu6TjS/u66EG0dfPj9P339v6IW+3uLx4opebZZFYJo6NJ2CeQKFAoO1YqO+QZ491lPf3fFY448AvfE8XdVcrpD8tn9678/nCnsmMk6dbQeRRFIpbEtrv9/XljzT1l79WzKZkroeBSEEhJDNof9Ffw8AflQT5tKmWNAAAAAASUVORK5CYII="

      addMarkers(data, function(markers) {
        markers[markers.length -2].showInfoWindow();
      });

      function addMarkers(data, callback) {
        var markers = [];
        function onMarkerAdded(marker) {
          markers.push(marker);
          if (markers.length === data.length) {
            callback(markers);
            }
          }
        data.forEach(function(markerOptions) {
          map.addMarker(markerOptions, onMarkerAdded);
          });
        };

      console.log('MapaFIM');

    });
  }
}