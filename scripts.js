``




let mapOptions = {
    center:[50.5635, 22.065],
    zoom:15
}

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = null;
map.on('click', (event) => {
    if (marker !== null) {
        map.removeLayer(marker);
    }
    marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);

    marker.on('click', function(e) {
        let popup = L.popup().setLatLng(e.latlng).setContent(`<a href="#">Zgłoś<a>`).openOn(map);

    });
    
});

    map.on('click', function(e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;

        console.log("Test: " + lat + ", " + lng);
    });


    var markers = [
        { coords: [50.56328243662297, 22.055080533027652],
         popupText: "Kamera pierwsza<br><a href='cameras/camera_one.html'><img src='images/img1.png' width='100' height='100'</br></a><br>Brak<br> zagrożenia"},
        { coords: [50.56613452454486, 22.06055223941803],
         popupText: "Kamera druga<br><a href='cameras/camera_two.html'><img src='images/img2.png' width='100' height='100'</br></a><br>Widoczne<br> zagrożenie"},
        { coords: [50.56391284128713, 22.067477703094486],
         popupText: "Kamera trzecia<br><a href='cameras/camera_three.html'><img src='images/img.png' width='100' height='100'</br></a><br>Widoczne <br>zagrożenie"}
    ];

    markers.forEach(function(marker) {

        var markerObj = L.marker(marker.coords).addTo(map);

        markerObj.bindPopup(marker.popupText)
    });