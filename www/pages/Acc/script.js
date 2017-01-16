function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        addAccelerometer();
    }

}

function addAccelerometer() {
    function onSuccess(acceleration) {
        $('#result1').html(acceleration.x);
        $('#result2').html(acceleration.y);
        $('#result3').html(acceleration.z);
    }

    function onError() {
        alert('onError!');
    }

    var options = { frequency: 1000 };  // Update every 3 seconds

    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}