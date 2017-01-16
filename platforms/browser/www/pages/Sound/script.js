function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.getElementById("play").disabled = false;
    }
}

var my_media;

function play() {
    var audioElement = document.getElementById("guitar");
    var url = audioElement.getAttribute('src');
    my_media = new Media(url,
        // success callback
        function () {
            alert("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            alert("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}

function stopMedia() {
    my_media.stop();
    my_media.release();
}