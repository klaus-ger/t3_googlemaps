var map;

var styles = [{
    "stylers": [
    {
        "visibility": "on"
    },
    {
        "color": "#ffffff"
    }
    ]
},{
    "featureType": "administrative.city",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "visibility": "on"
    },
    {
        "color": "#000000"
    }
    
    ]
},{
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
    {
        "visibility": "off"
    },
    {
        "color": "#000000"
    }
    
    ]
}
];

function initialize() {
    mapOptions = {
        disableDoubleClickZoom: true,
        
        center: new google.maps.LatLng(51.645294,10.369262),
        zoom: 2,
        maxZoom: 12,
        minZoom: 6,
        mapTypeId: google.maps.MapTypeId.Road,
        styles: styles,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
    };
 

    map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    renderMainRegions();
    //renderRegions();

}


function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http:///maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false&callback=initialize";
    document.body.appendChild(script);
}


window.onload = loadScript;

