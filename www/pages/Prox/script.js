function init() {
    var max,min,value,prox;

    if (window.DeviceProximityEvent) {
        if ('ondeviceproximity' in window || 'onuserproximity' in window) {
            window.addEventListener('deviceproximity', function (event) {
                // The maximum distance the sensor covers (in cm).
                max = event.max;

                // The minimum distance the sensor covers (in cm).
                min = event.min;

                // The device proximity (in cm).
                value = event.value;
            });

            // An event listener for a UserProximityEvent.
            window.addEventListener('userproximity', function (event) {
                if (event.near) {
                    prox = "near";
                } else {
                    prox = "far";
                }
            });
        }
    } else {
        alert("Proximity Sensor nicht Abrufbar");
        window.history.back();
    }



    window.setInterval(setData, 500);

    function setData() {
        $('#result1').html(max);
        $('#result2').html(min);
        $('#result3').html(value);
        $('#result4').html(prox);
    }
}