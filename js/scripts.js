var map;

// Bname = document.getElementById("carbrand");
// Cname = document.getElementById("carname");

// Bname.addEventListener("change", UpdateCarNames);

// function UpdateCarNames() {
//   Cname.value = "Accord";

//   var option = document.createElement("option");
//   option.value = "City";
//   Cname.list.appendChild(option);
// }

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 24.37233657558235,
      lng: 54.51312616467476
    },
    zoom: 14,
    scrollwheel: false
  });

  loc = {
    lat: 24.3779197,
    lng: 54.5121906,
    Name: "Main Branch",
    Address: "Mussafah Industrial Area, Sector M7, Opp. LLH Hospital"
  };
  addMarker({
    lat: 24.3779197,
    lng: 54.5121906,
    Name: "Main Branch",
    Address: "Mussafah Industrial Area, Sector M7, Opp. LLH Hospital"
  });
  addMarker({
    lat: 24.37184,
    lng: 54.5150654,
    Name: "Branch B",
    Address: "Mussafah Industrial Area, Sector M6"
  });
  addMarker({
    lat: 24.3736336,
    lng: 54.5089248,
    Name: "Branch C",
    Address: "Mussafah Industrial Area, Sector M9"
  });
  addMarker({
    lat: 24.3805014,
    lng: 54.5117814,
    Name: "Branch D",
    Address: "Mussafah Industrial Area, Sector M8"
  });
  addMarker({
    lat: 24.3663073,
    lng: 54.5151801,
    Name: "Branch F",
    Address: "Mussafah Industrial Area, Sector M5"
  });
  addMarker({
    lat: 24.37233657558235,
    lng: 54.51312616467476,
    Name: "Branch K",
    Address: "Mussafah Industrial Area, Sector M6"
  });
  addMarker({
    lat: 24.360588005616993,
    lng: 54.51239425688982,
    Name: "Branch L",
    Address: "Mussafah Industrial Area, Sector M23"
  });
}

// Adds a marker to the map.
function addMarker(location) {
  var contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">' +
    location.Name +
    "</h1>" +
    '<div id="bodyContent">' +
    "<p>" +
    location.Address +
    "</p>" +
    "</div>" +
    "</div>";

  var infowindow = new google.maps.InfoWindow({
    content: contentString
    // maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: {
      lat: location.lat,
      lng: location.lng
    },
    map: map
  });

  marker.addListener("click", function() {
    map.setCenter(marker.getPosition());
    infowindow.open(map, marker);
  });
}
