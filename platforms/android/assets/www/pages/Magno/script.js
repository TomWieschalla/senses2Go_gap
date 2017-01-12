function init() {
    var x,y,z;

    if (window.DeviceOrientationEvent) {
        if ('ondeviceorientationabsolute' in window) {
            alert("absolut");
            window.addEventListener('deviceorientationabsolute', function(event) {
                x = event.beta;
                y = event.gamma;
                z = event.alpha;
            });
        } else if ('ondeviceorientation' in window) {
            window.addEventListener('deviceorientation', function(event) {
                x = event.beta;
                y = event.gamma;
                z = event.alpha;
            });
        }
    } else {
        alert("Magnetometer nicht nutzbar!")
        window.history.back();
    }

    window.setInterval(setData, 500);

    function setData() {
            $('#result1').html(x);
            $('#result2').html(y);
            $('#result3').html(z);
    }
}