var map;
var one_digit_marker = [];
var two_digit_marker = [];
var one_digit_active;
var two_digit_active;
var no_results = 'Zur Anzeige von Einzelergebnissen bitte Region auf der Karte wählen!'
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
    //renderRegions();
    loadMarker();
    
    //CLEAR RESULT STAGE
    $('.resultpages').html(no_results);
    $('.paginator').html(' ');
   
 
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
            //CLEAR RESULT STAGE
            $('.resultpages').html(no_results);
            $('.paginator').html(' ');
        }
        
        // ZOOM LEVEL 7: show two digit PLZ area ********************************
        if (zoomLevel == 7) {
            
            //set the new active area
            //remove all two-digit borders
            for (var i = 0; i < regionpolys.length; i++ ) {
                regionpolys[i].setMap(null);
            }
            //now write the new poly with active color
            renderRegions();
             
            //remove one digti polys
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
            
            loadItems(one_digit_active,0);
        }
        
        if (zoomLevel == 8) {
            
            
            //set the new active area
            //remove all two-digit borders
            for (var i = 0; i < regionpolys.length; i++ ) {
                regionpolys[i].setMap(null);
            }
            //now write the new poly with active color
            renderRegions();
            
            loadItems(0, two_digit_active);
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

function loadItems(oneDigit, twoDigit) {
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
                action: 'findItemsByAjax',
                arguments: {
                    'one_digit_active': oneDigit,
                    'two_digit_active': twoDigit,
                    'storagePid': storagePid
                }
            }
        },
        dataType: "json",
 
        success: function(result) {
            console.log(result)
            var li = 1;
            var page = 1;
            var pagecounter = 1;
            html='';
            pagination='';
            
            //headline
            html+= '<h3>' + result.summary.items + ' Ergebnisse in PLZ ' + result.summary.plz + '</h3>';
            
            //resultpage
            $.each(result.items, function(key, value) {
                
                //warp in pages - start div
                if(pagecounter == 1){
                    if(page == 1){
                        html+= '<div class="page" data-id="' + page + '">';
                    } else {
                        html+= '<div class="page hidden" data-id="' + page + '">'; 
                    }
                }
                 
                //ietm
                html+= '<div class="result-item">';
                html+= '<div class="result_title">' + value.gfunTitle + '</div>';
                html+= '<div class="result_text">' + value.gfunText + '</div>';
                html+= '</div>';
                
                //warp in pages - end div 
                if(pagecounter == 15){
                    
                    //close page div
                    html+= '</div>';
                    //write page navigatiton
                    if(page < 11){
                        pagination+= '<div class="jqPagination" data-id="' + page + '">' + page + '</div>';
                    } else {
                        pagination+= '<div class="jqPagination hidden" data-id="' + page + '">' + page + '</div>';
                    }
                    page++;
                    pagecounter = 0;
                    
                }
                 
                pagecounter++;
                 
            })
            
            //set result to stage
            $('.resultpages').html(html);
            $('.paginator').html(pagination);
        
            
            
        },
        error: function(error) {
            console.log(error);
        }
    });
}

//Result navigation
jQuery("document").ready(function(){
    $(".jqPagination").live('click',function(){
        var page = $(this).attr("data-id");
        
        $('.page').hide();
        $(".page[data-id='" + page +"']").show();
        
        
        //count total pages
        var numberOfPages = $('.paginator .jqPagination').length;
        //hide all
        $('.paginator').children("*").hide();
        if(numberOfPages > 10 && page > 5){
            
            $(".jqPagination[data-id='" + page +"']").show();
            
            var actualpage = parseInt(page);
            var total = parseInt(numberOfPages);
            var dif = total - actualpage;
            
     
            if(dif < 4) {
                var mod = actualpage-5;
                $(".jqPagination[data-id='" + mod +"']").show();
            }
            if(dif < 3) {
                var mod = actualpage-6;
                $(".jqPagination[data-id='" + mod +"']").show();
            }
            if(dif < 2) {
                var mod = actualpage-7;
                $(".jqPagination[data-id='" + mod +"']").show();
            }
            if(dif < 1){
                var mod = actualpage-8;
                $(".jqPagination[data-id='" + mod +"']").show();
                    
            };
            
            
            ++actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            ++actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            ++actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            ++actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            
            var actualpage = parseInt(page);
            --actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            --actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            --actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            --actualpage;
            $(".jqPagination[data-id='" + actualpage +"']").show();
            
        //console.log('pages :' + page);
        } else {
            
            var showpage = 1;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
            ++showpage;
            $(".jqPagination[data-id='" + showpage +"']").show();
        }
    });
});