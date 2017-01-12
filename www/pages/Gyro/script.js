function init() {
    var x,y,z;

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', function(event) {
           x = event.rotationRate.beta;
           y = event.rotationRate.gamma;
           z = event.rotationRate.alpha;
        });
    } else {
        alert("Gyroskop nicht nutzbar!")
        window.history.back();
    }

    window.setInterval(setData, 500);

    function setData() {
        $('#result1').html(x/57.2958);
        $('#result2').html(y/57.2958);
        $('#result3').html(z/57.2958);
    }
}