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
        
        var plz_16= ['16', 52.85473182084674, 13.11265354093991];
        twoDigitKabelArray.push(plz_16);
        
        var plz_17= ['17', 53.5326436805605, 13.31132945641236];
        twoDigitKabelArray.push(plz_17);
        
        var plz_18= ['18', 54.01129902309889, 12.25528092693103];
        twoDigitKabelArray.push(plz_18);
        
        var plz_19= ['19', 53.38671298635528, 11.47368468494442];
        twoDigitKabelArray.push(plz_19);
        
        var plz_21= ['21', 53.29680208333117, 10.09547871225564 ];
        twoDigitKabelArray.push(plz_21);
        
        var plz_22= ['22', 53.6461099745135, 10.12589588942185];
        twoDigitKabelArray.push(plz_22);
        
        var plz_23= ['23', 53.88201065038763, 10.56717156897981];
        twoDigitKabelArray.push(plz_23);
        
        var plz_24= ['24', 54.2365951613542, 9.864405471389077];
        twoDigitKabelArray.push(plz_24);
        
        var plz_25= ['25', 54.03024537065502, 9.252070335749206];
        twoDigitKabelArray.push(plz_25);
        
        var plz_26= ['26', 53.19516185206174, 7.735900980671763];
        twoDigitKabelArray.push(plz_26);
        
        var plz_27= ['27', 53.19023461166477, 9.299412040737957];
        twoDigitKabelArray.push(plz_27);
        
        var plz_28= ['28', 53.05993514863503, 8.835388504580433];
        twoDigitKabelArray.push(plz_28);
        
        var plz_29= ['29', 52.79477969581732, 10.34734758114718];
        twoDigitKabelArray.push(plz_29);
        
        var plz_30= ['30', 52.28989365534157, 9.744846141825112];
        twoDigitKabelArray.push(plz_30);
        
        var plz_31= ['31', 52.11450237297176, 9.367468294070756];
        twoDigitKabelArray.push(plz_31);
        
        var plz_32= ['32', 52.10964467358964, 8.779260616464368];
        twoDigitKabelArray.push(plz_32);
        
        var plz_33= ['33', 51.688499132167, 8.720199353144425];
        twoDigitKabelArray.push(plz_33);
        
        var plz_34= ['34', 51.19900896859464, 9.115297969084569];
        twoDigitKabelArray.push(plz_34);
        
        var plz_35= ['35', 50.65512859677889, 8.62993417795137];
        twoDigitKabelArray.push(plz_35);
        
        var plz_36= ['36', 50.62298888129416, 9.671046664443057];
        twoDigitKabelArray.push(plz_36);
        
        var plz_37= ['37', 51.50496527746701, 10.04509279232646];
        twoDigitKabelArray.push(plz_37);
        
        var plz_38= ['38', 52.00316300500378, 10.62770032512688];
        twoDigitKabelArray.push(plz_38);
        
        var plz_39= ['39', 52.33689541347066, 11.61270408424434];
        twoDigitKabelArray.push(plz_39);

        var plz_41= ['41', 51.10877348516722, 6.373804571265516];
        twoDigitKabelArray.push(plz_41);
        
        var plz_42= ['42', 51.16647077002577, 7.14111600792021];
        twoDigitKabelArray.push(plz_42);
        
        var plz_44= ['44', 51.52377574771042, 7.351268231843213];
        twoDigitKabelArray.push(plz_44);
        
        var plz_45= ['45', 51.42233490956506, 6.985001363414498];
        twoDigitKabelArray.push(plz_45);
        
        var plz_46= ['46', 51.73284758934576, 6.724308534002851];
        twoDigitKabelArray.push(plz_46);
        
        var plz_47= ['47', 51.42836094794233, 6.459054813851486];
        twoDigitKabelArray.push(plz_47);
        
        var plz_48= ['48', 52.09515777115659, 7.247872977568608];
        twoDigitKabelArray.push(plz_48);
        
        var plz_49= ['49', 52.64338221572255, 7.564323278961074];
        twoDigitKabelArray.push(plz_49);
        
        var plz_50= ['50', 50.8420391045828, 6.758211560442473];
        twoDigitKabelArray.push(plz_50);
        
        var plz_51= ['51', 51.01455235542986, 7.412514650695716];
        twoDigitKabelArray.push(plz_51);
        
        var plz_52= ['52', 50.80160635559781, 6.316715850424329];
        twoDigitKabelArray.push(plz_52);
        
        var plz_53= ['53', 50.52765980681512, 6.961385615760422];
        twoDigitKabelArray.push(plz_53);
        
        var plz_54= ['54', 49.94555694680572, 6.655556887535578];
        twoDigitKabelArray.push(plz_54);
        
        var plz_55= ['55', 49.82536594944776, 7.620250886372717];
        twoDigitKabelArray.push(plz_55);
        
        var plz_56= ['56', 50.24161968818784, 7.463719674303981];
        twoDigitKabelArray.push(plz_56);
        
        var plz_57= ['57', 50.95208383234333, 8.088592984371175];
        twoDigitKabelArray.push(plz_57);
        
        var plz_58= ['58', 51.23781550936987, 7.634652921589846];
        twoDigitKabelArray.push(plz_58);
        
        var plz_59= ['59', 51.53712185647304, 8.133595801640666];
        twoDigitKabelArray.push(plz_59);
        
//        var plz_60= ['60', ];
//        twoDigitKabelArray.push(plz_60);

    };