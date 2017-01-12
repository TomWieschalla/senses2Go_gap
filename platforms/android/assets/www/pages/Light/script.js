function init() {
    var x;

    if (window.DeviceLightEvent) {
        window.addEventListener('devicelight', function (event) {
            x = event.value
            $('#result1').html(x);
        });
    } else {
        alert("Lichtsensor nicht nutzbar!")
        window.history.back();
    }
}