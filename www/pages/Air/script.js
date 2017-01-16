function init() {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        addBarometer();
    }
}

function addBarometer() {
    function failureCallback(error) {
        console.log("Error: "+error);
    }
    function successCallback(available) {
        if (available) {
            var onError = function (error) {
                alert("Error: "+error);
            }
            var successHandler = function (altimeterData) {
                // altimeterData.pressure; -> in kilopascals
                // altimeterData.relativeAltitude; -> starts at 0 and then reports delta on successive updates
                $('#result1').html(altimeterData.pressure);
                $('#result2').html(altimeterData.relativeAltitude);
            };
            altimeter.startAltimeterUpdates(successHandler, onError);
        } else {
            alert('onError!');
        }
    }
    altimeter.isAltimeterAvailable(successCallback, failureCallback);
}
