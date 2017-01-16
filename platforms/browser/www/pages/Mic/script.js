function init() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        document.getElementById("record").disabled = false;
    }
}

var path;

function play() {
    var my_media = new Media(path,
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}

function record() {
    document.getElementById("play").disabled = true;
    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
        document.getElementById("play").disabled = false;
    };

// capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };

    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
}