var one_digit_label = [];
var two_digit_label = [];

//******************************************************************************    
//Writes static Marker for one-digit PLZ regions
//****************************************************************************** 
function renderOneDigitMarkers(){ 
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/0.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(51.073,12.719),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/1.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(53.23388232422666, 13.05583878171186),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/2.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(53.14580514820239, 9.753652442184803),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/3.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(51.81664918223654, 10.09517955349016),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/4.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(52.04791286887819, 7.398669146113324),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/5.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(50.40198050166594, 7.391776982028356),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/6.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(49.68792755893104,8.699130236239128),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/7.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(48.24094397017384, 8.847198643896357),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/8.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(48.01391473144322, 11.01076090976968),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);
    
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/9.gif',
            size: new google.maps.Size(32,37),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(32, 15)
        },
        map: map,
        position: new google.maps.LatLng(50.00999098330939, 10.95165125026799),
        visible: true,
        id: 0,
        name: 0,
        title: 'PLZ Region 0',
        clickable : false
    });
                
    one_digit_label.push(marker);

};

//******************************************************************************    
//Writes static Marker for two-digit PLZ regions
//****************************************************************************** 


function renderTwoDigitMarkers(){ 
    
    loadTwoDigitLabelsData();
    
    $.each(twoDigitKabelArray, function(key, value) {
        marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/'+value[0] + '.gif',
            size: new google.maps.Size(28, 16),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(8, 16)
        },
        map: map,
        position: new google.maps.LatLng(value[1], value[2]),
        visible: false,
        id: 0,
        name: 0,
        title: 'PLZ Region' + value[0],
        clickable : false
    });
    two_digit_label.push(marker);
        
    });

   
    
};

//******************************************************************************    
//Writes static Marker : City names
//****************************************************************************** 
function renderCities(){ 
    //Berlin
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Berlin.gif',
            size: new google.maps.Size(58,11),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(29, 11)
        },
        map: map,
        position: new google.maps.LatLng(52.575, 13.508),
        visible: true,
        clickable : false
    });
    //Hamburg
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Hamburg.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(53.47130630316909, 10.55196063085254),
        visible: true,
        clickable : false
    });
    //Hannover
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Hannover.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(52.44986436050556, 9.773951193208815),
        visible: true,
        clickable : false
    });
    //Düsseldorf
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Duesseldorf.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(51.23621721742275, 6.831271111424138),
        visible: true,
        clickable : false
    });
    //Köln
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Koeln.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(50.94018765140015, 6.96449020305189),
        visible: true,
        clickable : false
    });
    //Leipzig
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Leipzig.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(51.35427864457046, 12.37289765191869),
        visible: true,
        clickable : false
    });
    //Frankfurt
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Frankfurt.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(50.13289417118913, 8.704901849377883),
        visible: true,
        clickable : false
    });
    //Nürnberg
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Nuernberg.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(49.47904448533621, 11.10250145891232),
        visible: true,
        clickable : false
    });
    //Stuttgart
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Stuttgart.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(48.79295993351371, 9.205583273427608),
        visible: true,
        clickable : false
    });
    //München
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Muenchen.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(48.14578702775564, 11.58223751603274),
        visible: true,
        clickable : false
    });
    //kassel
    marker = new google.maps.Marker({
        icon: {
            url: 'typo3conf/ext/googlefun/Resources/Public/Images/static_marker/Kassel.gif',
            size: new google.maps.Size(71,14),
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(35, 14)
        },
        map: map,
        position: new google.maps.LatLng(51.33316889495554, 9.500444792973539),
        visible: true,
        clickable : false
    });
                
    

};

//******************************************************************************    
    //The Array of the two-digit-label data
    //****************************************************************************** 
    var twoDigitKabelArray = [];
    function loadTwoDigitLabelsData(){ 
        var plz_01 = ['01', 51.17404615433057, 13.73423936465612];
        twoDigitKabelArray.push(plz_01);
        
        var plz_02 = ['02', 51.22118262794607, 14.61493869108088];
        twoDigitKabelArray.push(plz_02);
        
        var plz_03 = ['03', 51.68754501802827, 14.12261200001194];
        twoDigitKabelArray.push(plz_03);
        
        var plz_04 = ['04', 51.32370320615813, 12.76765136859457];
        twoDigitKabelArray.push(plz_04);
        
        
        var plz_06 = ['06', 51.4902229712312, 11.62717621467826];
        twoDigitKabelArray.push(plz_06);
        
        var plz_07 = ['07', 50.64664791364279, 11.72899717311885];
        twoDigitKabelArray.push(plz_07);
        
        var plz_08 = ['08', 50.50728026276691, 12.45583236128484];
        twoDigitKabelArray.push(plz_08);
        
        var plz_09 = ['09', 50.74870858964259, 13.09910543283511];
        twoDigitKabelArray.push(plz_09);
        
        var plz_15= ['15', 52.17096602091073, 13.93718030841418];
        twoDigitKabelArray.push(plz_15);
        
//        var plz_16= ['16', ];
//        twoDigitKabelArray.push(plz_16);
//        
//        var plz_17= ['17', ];
//        twoDigitKabelArray.push(plz_17);
//        
//        var plz_18= ['18', ];
//        twoDigitKabelArray.push(plz_18);
//        
//        var plz_19= ['19', ];
//        twoDigitKabelArray.push(plz_19);
//        
//        var plz_20= ['20', ];
//        twoDigitKabelArray.push(plz_20);
//        
//        var plz_20= ['20', ];
//        twoDigitKabelArray.push(plz_20);

    };