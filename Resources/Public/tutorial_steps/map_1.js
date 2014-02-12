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
        "visibility": "off"
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
        zoom: 6,
        maxZoom: 8,
        minZoom: 6,
        mapTypeId: google.maps.MapTypeId.Road,
        styles: styles,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
    };
 

    map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    
    renderCities();
    renderOneDigitMarkers();
    renderTwoDigitMarkers();
    renderMainRegions();
    renderRegions();
    
    
   
   
 
    // var marker = new MarkerWithLabel({
    //   position: new google.maps.LatLng(51.073,12.719),
    //   map: map,
    //   draggable: true,
    //   raiseOnDrag: true,
    //   labelContent: "A",
    //   labelAnchor: new google.maps.Point(3, 30),
    //   labelClass: "labels", // the CSS class for the label
    //   labelInBackground: false
    // });
   
    
    //******************************************************************************
    // Change Zoom Level Function
    //******************************************************************************
    google.maps.event.addListener(map, 'zoom_changed', function() {
        zoomLevel = map.getZoom();
        
        // ZOOM LEVEL 6: show one digit PLZ area ********************************
        if (zoomLevel == 6) {
            //remove two digit polys
            for (i = 0; i<regionpolys.length; i++){
                regionpolys[i].setVisible(false);
            }
            //set one digti polys
            for (i = 0; i<mainregionpolys.length; i++){
                mainregionpolys[i].setVisible(true);
            }
            //set one-digit-areas labels
            for (i = 0; i<one_digit_label.length; i++){
                one_digit_label[i].setVisible(true);
            }
            //remove two-digit-areas labels
            for (i = 0; i<two_digit_label.length; i++){
                two_digit_label[i].setVisible(false);
            }
        }
        
        // ZOOM LEVEL 7: show two digit PLZ area ********************************
        if (zoomLevel == 7) {
            //remove two digit polys
            for (i = 0; i<regionpolys.length; i++){
                regionpolys[i].setVisible(true);
            }
            //set one digti polys
            for (i = 0; i<mainregionpolys.length; i++){
                mainregionpolys[i].setVisible(false);
            }
            //remove one-digit-areas labels
            for (i = 0; i<one_digit_label.length; i++){
                one_digit_label[i].setVisible(false);
            }
            //set two-digit-areas labels
            for (i = 0; i<two_digit_label.length; i++){
                two_digit_label[i].setVisible(true);
            }
        }

    });
    
};


function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false&callback=initialize";
    document.body.appendChild(script);
    
      
}


//window.onload = loadScript;

window.onload = initialize;  
  
   



