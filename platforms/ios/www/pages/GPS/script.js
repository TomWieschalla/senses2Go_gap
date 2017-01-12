function initGeolocation() {
    if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
        alert("GPS-Sensor nicht nutzbar!")
        window.history.back();
    }
}

function errorCallback(error) {
    alert(error.message);
}

function successCallback(position) {
    var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var map_options = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
    map_container = document.getElementById('map');
    var map = new google.maps.Map(map_container, map_options);
    var infoWindow = new google.maps.InfoWindow({map: map});
    infoWindow.setPosition(pos);
    infoWindow.setContent('Your Position');
    document.getElementById('result1').innerHTML = position.coords.latitude;
    document.getElementById('result2').innerHTML = position.coords.longitude;
}