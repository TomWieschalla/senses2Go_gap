function init() {
    var x,y,z;

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function(event) {
            x = event.acceleration.x;
            y = event.acceleration.y;
            z = event.acceleration.z;
        });
    } else {
        alert("Beschleunigungssensor nicht nutzbar!")
        window.history.back();
    }

    window.setInterval(setData, 500);

    function setData() {
        $('#result1').html(x);
        $('#result2').html(y);
        $('#result3').html(z);
    }
}