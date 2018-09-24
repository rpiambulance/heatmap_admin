function initMap() {

    getPoints(function(points) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: {lat: 42.730588, lng: -73.674646},
            mapTypeId: google.maps.MapTypeId.MAP
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
            data: points,
            map: map,
            radius: 50
        });
    });

}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? 20 : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

function getPoints(callback) {

    $.getJSON("js/points.json", function(data) {
        var arrpoints = [];
        for (var x = 0; x < data.points.length; x++) {
            currentpoint = data.points[x];
            arrpoints.push(new google.maps.LatLng(currentpoint.lat, currentpoint.lng));
        }
        callback(arrpoints);
    });

}
