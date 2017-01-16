function initGeolocation() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        window.setInterval(checkPosition, 1000);
    }
}

var watch;

function checkPosition() {
    function onSuccess(position) {

        document.getElementById('result1').innerHTML = position.coords.latitude;
        document.getElementById('result2').innerHTML = position.coords.longitude;
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}