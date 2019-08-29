$(document).on("click", "mapa", function(){
      var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
})
function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.WIFI]     = 'Conexão Wi-fi';
    states[Connection.CELL_3G]  = 'Conexão 3G';
    states[Connection.CELL_4G]  = 'Conexão 4G';
    states[Connection.NONE]     = 'Sem conexão';

    alert('Tipo de conexão: ' + states[networkState]);
}

checkConnection();
