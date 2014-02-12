var map;
var one_digit_marker = [];
var two_digit_marker = [];
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
    loadMarker();
    
   
   
 
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
            //set one-digit-marker 
            for (i = 0; i<one_digit_marker.length; i++){
                one_digit_marker[i].setVisible(true);
            }
            //remove two-digit-marker 
            for (i = 0; i<two_digit_marker.length; i++){
                two_digit_marker[i].setVisible(false);
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
            //remove one-digit-marker 
            for (i = 0; i<one_digit_marker.length; i++){
                one_digit_marker[i].setVisible(false);
            }
            //set two-digit-marker 
            for (i = 0; i<two_digit_marker.length; i++){
                two_digit_marker[i].setVisible(true);
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
  
   



function loadMarker() {
    var storagePid = $('.jQueryStoragePid').html();
    
    $.ajax({
        async: 'true',
        url: 'index.php',
        type: 'POST',
 
        data: {
            eID: "ajaxDispatcher",
            request: {
                pluginName: 'googlefun',
                controller: 'Map',
                action: 'findMarkerByAjax',
                arguments: {
                    'uid': '1',
                    'storagePid': storagePid
                }
            }
        },
        dataType: "json",
 
        success: function(result) {
            console.log(result);
            
            //result small

    
            
            //one-digit-marker
            var markerImage = new google.maps.MarkerImage('typo3conf/ext/googlefun/Resources/Public/Images/static_marker/result1.png',
                new google.maps.Size(67, 67),
                new google.maps.Point(0, 0),
                new google.maps.Point(33, 33));
                
            $.each(result.mainregions, function(key, value) {
                var marker = new MarkerWithLabel({
                    position: new google.maps.LatLng(value.long,value.lat), 
                    map: map,
                    draggable: false,
                    raiseOnDrag: false, 
                    labelContent: value.items,
                    labelAnchor: new google.maps.Point(18, 10),
                    labelClass: "labels_big",         // the CSS class for the label
                    labelStyle: {
                        opacity: 1
                    },
                    icon: markerImage,
                    labelInBackground: false,
                    marker: MarkerWithLabel
                });
                one_digit_marker.push(marker);
            });
            
            //two-digit-marker
            var markerImageSmall = new google.maps.MarkerImage('typo3conf/ext/googlefun/Resources/Public/Images/static_marker/result.png',
                new google.maps.Size(37, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(18, 18));
                
            $.each(result.regions, function(key, res) {
                var marker = new MarkerWithLabel({
                    position: new google.maps.LatLng(res.long,res.lat), 
                    map: map,
                    visible: false,
                    draggable: false,
                    raiseOnDrag: false, 
                    labelContent: res.items,
                    labelAnchor: new google.maps.Point(7, 10),
                    labelClass: "labels",         // the CSS class for the label
                    labelStyle: {
                        opacity: 1
                    },
                    icon: markerImageSmall,
                    labelInBackground: false,
                    marker: MarkerWithLabel
                });
                two_digit_marker.push(marker);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
}