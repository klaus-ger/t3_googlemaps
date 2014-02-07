var region_borders = {};
var region_center = {};
var countrypolys = [];
var activeregion = [];

function renderRegions(regionsWithItems){  
    //console.log(countriesWithProjects);
    loadRegionPolgons();
    $.each(region_borders, function(key, value) {
      
        // set the country polgon
        var singlecountry = value;
        singlecountry = new google.maps.Polygon({
            paths: singlecountry,
            strokeColor: '#928e88',
            strokeWeight: 1,
            fillColor: '#ffffff',
            fillOpacity: 0
        });
        singlecountry.setMap(map);
        
        countrypolys.push(singlecountry);
        
    //        //Check if the countr has Projekt an add handler
    //        var countryID = key.split('_');
    //        var counID = parseInt(countryID[1]);
    //
    //        if ($.inArray(counID, regionsWithItems)> -1){
    //            google.maps.event.addListener(singlecountry, 'mouseover', function(event) {
    //                //console.log('continent');
    //                this.setOptions({
    //                    strokeColor: "#928e88"
    //                });
    //                this.setOptions({
    //                    fillColor: "#e1dacd"
    //                });
    //                this.setOptions({
    //                    fillOpacity: 0.7
    //                });
    //            }); 
    //      
    //      
    //            google.maps.event.addListener(singlecountry, 'mouseout', function(event) {
    //                this.setOptions({
    //                    strokeColor: "#928e88"
    //                });
    //                this.setOptions({
    //                    fillColor: "#ff791f"
    //                });
    //                this.setOptions({
    //                    fillOpacity: 0
    //                });
    //            });
    //            
    //            //Klick Function
    //            google.maps.event.addListener(singlecountry, 'click', function(event) {
    //                searchCountry = counID;
    //                map.setZoom(4);
    //                zoom4();
    //                
    //            });
    //
    //        }
        

       
    //console.log(val);
    }); //End each - loop through the country array
//remove region polys
//  for (i = 0; i<countrypolys.length; i++){
//     countrypolys[i].setVisible(false);
// }
} 



  
//******************************************************************************    
//Writes the Region Polygons to the Region Array
//****************************************************************************** 
function loadRegionPolgons(){ 

    //******************************************************************************    
    //PLZ Region 01
    //******************************************************************************  
    region_01 = [];
    var region_01_1 = [
    new google.maps.LatLng(51.06276657014205,13.25017152287256),
    new google.maps.LatLng(51.00833660522417,13.22617148623217),
    new google.maps.LatLng(51.04900551314473, 13.37627904360518),
    new google.maps.LatLng(51.02808866384087, 13.43475234119456),
    new google.maps.LatLng(50.97605684628088, 13.46757401172621),
    new google.maps.LatLng(50.94579029077256, 13.42302713174472),
    new google.maps.LatLng(50.84901729935095, 13.50993159993053),
    new google.maps.LatLng(50.81230599991549, 13.55898025919872),
    new google.maps.LatLng(50.77644691981009, 13.56123679491395),
    new google.maps.LatLng(50.76837341374872, 13.60025619747065),
    new google.maps.LatLng(50.73012625013162, 13.65527849072751),
    new google.maps.LatLng(50.71390162803467, 13.71093050020623),
    new google.maps.LatLng(50.72716265280866, 13.75551052835967),
    new google.maps.LatLng(50.72848953505708, 13.81639402762751),
    new google.maps.LatLng(50.72513667107175, 13.85592366519875),
    new google.maps.LatLng(50.74890900555757, 13.90100709679901),
    new google.maps.LatLng(50.76728641281296, 13.89423255047151),
    new google.maps.LatLng(50.79136926032458, 13.9004007505016),
    new google.maps.LatLng(50.78702092671289, 13.9374553290281),
    new google.maps.LatLng(50.80522112326711, 13.96404717362866),
    new google.maps.LatLng(50.81344765855074, 14.00407075830143),
    new google.maps.LatLng(50.80383033589665, 14.03642550431529),    
    new google.maps.LatLng(50.82486146056962, 14.09885519628256),
    new google.maps.LatLng(50.85700624082287, 14.22851998897045),
    new google.maps.LatLng(50.88338885051974, 14.24695234594191),
    new google.maps.LatLng(50.88843411256736, 14.28191611025325),
    new google.maps.LatLng(50.88056275909259, 14.30300321918542),
    new google.maps.LatLng(50.89817516311268, 14.38750072783994),
    new google.maps.LatLng(50.93083473190674, 14.4040865567856),
    new google.maps.LatLng(50.93898286054971, 14.38912801277424),
    new google.maps.LatLng(50.95096516706003, 14.31824584589346),
    new google.maps.LatLng(50.96197311565544, 14.30146664319871),
    new google.maps.LatLng(50.97194199895567, 14.3301299094076),
    new google.maps.LatLng(50.98372380998391, 14.32115806939809),
    new google.maps.LatLng(50.97423453984613, 14.28675508902841),
    new google.maps.LatLng(50.98688260208761, 14.26122812868946),
    new google.maps.LatLng(51.0353650785181, 14.28243414982195),
    new google.maps.LatLng(51.05295378013736, 14.30837338956468),
    new google.maps.LatLng(51.0369194059476, 14.33935023056202),
    new google.maps.LatLng(51.04342731216305, 14.36455186941868),
    new google.maps.LatLng(51.06977101277676, 14.39194367776459),
    new google.maps.LatLng(51.10338235455561, 14.35847373543324),
    new google.maps.LatLng(51.10584041848452, 14.29199028485028),
    new google.maps.LatLng(51.17738218284701, 14.25294150614569),
    new google.maps.LatLng(51.22813932649697, 14.27874909267452),
    new google.maps.LatLng(51.33558883021591, 14.25829686779421),
    new google.maps.LatLng(51.37119040724378, 14.20779178438418),
    new google.maps.LatLng(51.3621700874636, 14.09421569021669),
    new google.maps.LatLng(51.38086180579084, 13.99999426255477),
    new google.maps.LatLng(51.41620846423236, 14.03745085511895),
    new google.maps.LatLng(51.47400546595463, 14.03271306551152),
    new google.maps.LatLng(51.54026946268589, 14.1659079627681),
    new google.maps.LatLng(51.58712648408488, 14.16027983891234),
    new google.maps.LatLng(51.61631342429811, 14.06068813681863),
    new google.maps.LatLng(51.6100714472401, 13.9756280435856),
    new google.maps.LatLng(51.62908762422099, 13.89024444524657),
    new google.maps.LatLng(51.57958786416918, 13.87499888467112),
    new google.maps.LatLng(51.5465180121732, 13.82157924015118),
    new google.maps.LatLng(51.50084792714051, 13.64391284585593),
    new google.maps.LatLng(51.46138531495372, 13.6979068089186),
    new google.maps.LatLng(51.41979431909692, 13.71627274025845),
    new google.maps.LatLng(51.37168781817039, 13.67893650770448),
    new google.maps.LatLng(51.3774544652943, 13.53251855926447),
    new google.maps.LatLng(51.44702365539271, 13.40032098744356),
    new google.maps.LatLng(51.42631062181155, 13.33786854368414),
    new google.maps.LatLng(51.38973177527031, 13.26304808865074),
    new google.maps.LatLng(51.40596413461177, 13.20789610407705),
    new google.maps.LatLng(51.37439654848154, 13.18669194108894),
    new google.maps.LatLng(51.3350844032295, 13.20563834701235),
    new google.maps.LatLng(51.25881859850116, 13.20646191497897),
    new google.maps.LatLng(51.18306825296582, 13.21257464675386),
    new google.maps.LatLng(51.15603267451853, 13.24927027598672),
    new google.maps.LatLng(51.07817469808752, 13.24512289089922),
    new google.maps.LatLng(51.06276657014205, 13.25017152287256)
    ];
    region_01.push(region_01_1);
    region_borders['region_01'] = region_01;
    region_center['region_01'] = '';
    
    //******************************************************************************    
    //PLZ Region 02
    //******************************************************************************  
    region_02 = [];
    var region_02_1 = [
    new google.maps.LatLng(51.53978578042042, 14.16497216904023),
    new google.maps.LatLng(51.47382966900064, 14.03116271067237),
    new google.maps.LatLng(51.4147523925639, 14.0378957319776),
    new google.maps.LatLng(51.38019913176735, 13.99857614069085),
    new google.maps.LatLng(51.36274536311324, 14.0950314104205),
    new google.maps.LatLng(51.3718679577077, 14.20897316981347),
    new google.maps.LatLng(51.33529026710733, 14.25750516740382),
    new google.maps.LatLng(51.22736325569243, 14.27761694111202),
    new google.maps.LatLng(51.17677499800766, 14.25198247788281),
    new google.maps.LatLng(51.10573119362076, 14.29114055415579),
    new google.maps.LatLng(51.10381471151003, 14.35926711457454),
    new google.maps.LatLng(51.06874900149373, 14.39134484348716),
    new google.maps.LatLng(51.04243411499448, 14.36206286849715),
    new google.maps.LatLng(51.01756176847062, 14.40914965942914),
    new google.maps.LatLng(51.03172268712305, 14.46342868756131),
    new google.maps.LatLng(51.00828838908544, 14.533671212587),
    new google.maps.LatLng(50.98337005600703, 14.59957280875658),
    new google.maps.LatLng(50.92151318492946, 14.56359166756766),
    new google.maps.LatLng(50.91408186960935, 14.58310390246453),
    new google.maps.LatLng(50.9275388448348, 14.65298054836109),
    new google.maps.LatLng(50.85375507059108, 14.62144106295312),
    new google.maps.LatLng(50.83217123938173, 14.71882370069691),
    new google.maps.LatLng(50.82003154784314, 14.73036754900591),
    new google.maps.LatLng(50.81901715724589, 14.80560547439661),
    new google.maps.LatLng(50.86344136042182, 14.83303555229478),
    new google.maps.LatLng(50.87980690694294, 14.82346735096893),
    new google.maps.LatLng(50.93623178281987, 14.89812196746541),
    new google.maps.LatLng(50.96604286219584, 14.90275636033603),
    new google.maps.LatLng(50.97560546902196, 14.92110716493042),
    new google.maps.LatLng(50.99261571078836, 14.92300598821227),
    new google.maps.LatLng(51.07261436751244, 14.97695167382591),
    new google.maps.LatLng(51.1297857995342, 14.99831519686294),
    new google.maps.LatLng(51.20354400863423, 15.00926968656866),
    new google.maps.LatLng(51.25283815029435, 15.03743496120297),
    new google.maps.LatLng(51.29155293893016, 15.03717173712131),
    new google.maps.LatLng(51.33524395876121, 14.98549472863888),
    new google.maps.LatLng(51.3945616137967, 14.96643900903793),
    new google.maps.LatLng(51.43142061332492, 14.9623912006717),
    new google.maps.LatLng(51.44494821896541, 14.97146592405499),
    new google.maps.LatLng(51.47068490756266, 14.9505483351809),
    new google.maps.LatLng(51.48610496331644, 14.88105330582442),
    new google.maps.LatLng(51.50243217421815, 14.8261925124358),
    new google.maps.LatLng(51.522919200932, 14.7415417073529),
    new google.maps.LatLng(51.5393959685827, 14.72928152798058),
    new google.maps.LatLng(51.56121904864259, 14.71474775015898),
    new google.maps.LatLng(51.5789105639171, 14.72816022367123),
    new google.maps.LatLng(51.59521606532833, 14.6999807493539),
    new google.maps.LatLng(51.55222696034443, 14.67783769450311),
    new google.maps.LatLng(51.54920004403732, 14.61370801472865),
    new google.maps.LatLng(51.5746652590985, 14.57845914282582),
    new google.maps.LatLng(51.55877367563049, 14.54138246237169),
    new google.maps.LatLng(51.53890756248567, 14.45283381163381),
    new google.maps.LatLng(51.53787901243997, 14.40636524903631),
    new google.maps.LatLng(51.50213980348867, 14.33645652461225),
    new google.maps.LatLng(51.51931927918031, 14.32529474346733),
    new google.maps.LatLng(51.53978578042042, 14.16497216904023),
    ];
    region_02.push(region_02_1);
    region_borders['region_02'] = region_02;
    region_center['region_02'] = '';
    
    //******************************************************************************    
    //PLZ Region 03
    //******************************************************************************  
    region_03 = [];
    var region_03_1 = [
    new google.maps.LatLng()
    ];
    region_03.push(region_03_1);
    region_borders['region_03'] = region_03;
    region_center['region_03'] = '';
    
    //******************************************************************************    
    //PLZ Region 04
    //******************************************************************************  
    region_04 = [];
    var region_04_1 = [
    new google.maps.LatLng()
    ];
    region_04.push(region_04_1);
    region_borders['region_04'] = region_04;
    region_center['region_04'] = '';
    
    //******************************************************************************    
    //PLZ Region 06
    //******************************************************************************  
    region_06 = [];
    var region_06_1 = [
    new google.maps.LatLng()
    ];
    region_06.push(region_06_1);
    region_borders['region_06'] = region_06;
    region_center['region_06'] = '';
    
    //******************************************************************************    
    //PLZ Region 07
    //******************************************************************************  
    region_07 = [];
    var region_07_1 = [
    new google.maps.LatLng()
    ];
    region_07.push(region_07_1);
    region_borders['region_07'] = region_07;
    region_center['region_07'] = '';
    
    //******************************************************************************    
    //PLZ Region 08
    //******************************************************************************  
    region_08 = [];
    var region_08_1 = [
    new google.maps.LatLng()
    ];
    region_08.push(region_08_1);
    region_borders['region_08'] = region_08;
    region_center['region_08'] = '';
    
    //******************************************************************************    
    //PLZ Region 09
    //******************************************************************************  
    region_09 = [];
    var region_09_1 = [
    new google.maps.LatLng()
    ];
    region_09.push(region_09_1);
    region_borders['region_09'] = region_09;
    region_center['region_09'] = '';
    
    
}