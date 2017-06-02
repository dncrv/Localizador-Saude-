var longitude;
var latitude;
var latLong;


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
        if (window.cordova && StatusBar)
            {
                StatusBar.backgroundColorByHexString("#234A8F");
            }
    },
    
    onSuccess: function(position){
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        latLong = new google.maps.LatLng(latitude, longitude);

    },
    
    onError: function(error){
        alert("cod erro " + error.code + ". \n" + 
            "mensagem: " + error.message);
    }
};
