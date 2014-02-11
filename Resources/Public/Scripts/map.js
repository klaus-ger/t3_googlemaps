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
            //console.log(result);
            
            //result small
//            var marker5 = new MarkerWithLabel({
//                position: new google.maps.LatLng(51.073,12.719), 
//                map: map,
//                draggable: false,
//                raiseOnDrag: false, 
//                labelContent: "1112",
//                labelAnchor: new google.maps.Point(14, 28),
//                labelClass: "labels",         // the CSS class for the label
//                labelStyle: {
//                    opacity: 0.75
//                },
//                icon: {
//                    url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/result.png',
//                    size: new google.maps.Size(37, 37),
//                    origin: new google.maps.Point(0, 0)
//                },
//                labelInBackground: false,
//                marker: MarkerWithLabel
//            });
    
//            var marker5 = new MarkerWithLabel({
//                position: new google.maps.LatLng(51.073,12.719), 
//                map: map,
//                draggable: false,
//                raiseOnDrag: false, 
//                labelContent: "1112",
//                labelAnchor: new google.maps.Point(20, 45),
//                labelClass: "labels_big",         // the CSS class for the label
//                labelStyle: {
//                    opacity: 0.75
//                },
//                icon: {
//                    url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/result1.png',
//                    size: new google.maps.Size(67, 67),
//                    origin: new google.maps.Point(0, 0)
//                },
//                labelInBackground: false,
//                marker: MarkerWithLabel
//            });
            
            $.each(result.mainregions, function(key, value) {
                //                marker = new google.maps.Marker({
                //                    icon: {
                //                        url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/'+value[0] + '.gif',
                //                        size: new google.maps.Size(28, 16),
                //                        origin: new google.maps.Point(0,0),
                //                        anchor: new google.maps.Point(8, 16)
                //                    },
                //                    map: map,
                //                    position: new google.maps.LatLng(value[1], value[2]),
                //                    visible: false,
                //                    id: 0,
                //                    name: 0,
                //                    title: 'PLZ Region' + value[0],
                //                    clickable : false
                //                });
                //two_digit_label.push(marker);
                console.log(value);
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
}