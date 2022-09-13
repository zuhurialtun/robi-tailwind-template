console.log('Start Map Loading...')

function initMap() {
    var lat = Math.floor(Math.random() * (41.015137 - 36.200001)) + 36.200001;
    var lng = Math.floor(Math.random() * (28.979530 - 26.583481)) + 26.583481;
    console.log('lat = ',lat,' lng = ',lng)
    var uluru = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

console.log('Map Load Complete...')