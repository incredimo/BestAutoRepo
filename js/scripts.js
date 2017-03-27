var map;


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 24.440540,
            lng: 54.444341
        },
        zoom: 11,
        scrollwheel: false,
    });

    loc = {
        lat: 24.440540,
        lng: 54.444341,
        Name: "Branch1",
        Address: "abu dhabi, 2345632, opposit to dalma mall"
    };
    addMarker(loc);

    loc = {
        lat: 24.440566,
        lng: 54.444333,
        Name: "Branch2",
        Address: "abu dhabi, 2345632, opposit to dalma mall"
    };
    addMarker(loc);
}


// Adds a marker to the map.
function addMarker(location) {


    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">' + location.Name + '</h1>' +
        '<div id="bodyContent">' +
        '<p>' + location.Address + '</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        // maxWidth: 200
    });



    var marker = new google.maps.Marker({
        position: {
            lat: location.lat,
            lng: location.lng
        },
        map: map
    });

    marker.addListener('click', function() {
        map.setCenter(marker.getPosition());
        infowindow.open(map, marker);
    });

}
