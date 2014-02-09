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
    new google.maps.LatLng(51.83662957051642, 14.59098174653367),
    new google.maps.LatLng(51.87822635441591, 14.65938709047333),
    new google.maps.LatLng(51.90626713538838, 14.6943470437911),
    new google.maps.LatLng(51.94194216167352, 14.72002177099404),
    new google.maps.LatLng(51.95485474884336,  14.7178419108321),
    new google.maps.LatLng(51.9786799636036, 14.70119161138666),
    new google.maps.LatLng(51.99995473051294, 14.71851488204783),
    new google.maps.LatLng(52.03131255750569, 14.60421938300341),
    new google.maps.LatLng(52.00387830991857, 14.55971050109589),
    new google.maps.LatLng(52.00511940390729, 14.49347235528922),
    new google.maps.LatLng(52.04981094848103, 14.48083132161402),
    new google.maps.LatLng(52.01475143789945, 14.44493635490903),
    new google.maps.LatLng(52.0015056571716, 14.3748586072995),
    new google.maps.LatLng(51.93530553333733, 14.3948507186493),
    new google.maps.LatLng(51.93273419963769, 14.3286829148316),
    new google.maps.LatLng(51.90397474766309, 14.24887273699707),
    new google.maps.LatLng(51.85642504061686, 14.16701426774951),
    new google.maps.LatLng(51.89593840733691, 13.98001695671835),
    new google.maps.LatLng(51.89237940504906, 13.86423932236367),
    new google.maps.LatLng(51.8366324700008, 13.85218577580758),
    new google.maps.LatLng(51.77675316621109, 13.81224091833378),
    new google.maps.LatLng(51.73445495142661, 13.79614791920306),
    new google.maps.LatLng(51.75410607143829, 13.72160384747001),
    new google.maps.LatLng(51.72308467586558, 13.69701859466751),
    new google.maps.LatLng(51.74307675005927, 13.54758323528439),
    new google.maps.LatLng(51.6831859380221, 13.47351714815012),
    new google.maps.LatLng(51.65702275888963, 13.32953155438248),
    new google.maps.LatLng(51.59346066929162, 13.3571532644789),
    new google.maps.LatLng(51.54113720079981, 13.50021056739004),
    new google.maps.LatLng(51.53292008427075, 13.55964107767668),
    new google.maps.LatLng(51.50207777629138, 13.64548460382805),
    new google.maps.LatLng(51.54786873054444, 13.82429001987841),
    new google.maps.LatLng(51.57974478618618, 13.8738838868353),
    new google.maps.LatLng(51.63001902081961, 13.89017636966532),
    new google.maps.LatLng(51.61128282272015, 13.97534503091519),
    new google.maps.LatLng(51.61826880353179, 14.06203349963824),
    new google.maps.LatLng(51.58855378358275, 14.15989012564506),
    new google.maps.LatLng(51.53822632005522, 14.16825962777241),
    new google.maps.LatLng(51.51860049781687, 14.32541805341569),
    new google.maps.LatLng(51.50187975443839, 14.33620032951095),
    new google.maps.LatLng(51.53923688336777, 14.40520854415633),
    new google.maps.LatLng(51.54087334840842, 14.45351001229789),
    new google.maps.LatLng(51.55867608234369, 14.54015966520491),
    new google.maps.LatLng(51.5764595309055, 14.57781191418658),
    new google.maps.LatLng(51.54815978758799, 14.61401171905486),
    new google.maps.LatLng(51.55380350035077, 14.67727622076871),
    new google.maps.LatLng(51.59533625470457, 14.70027917461105),
    new google.maps.LatLng(51.57889901481704, 14.72742991858199),
    new google.maps.LatLng(51.60330763342877, 14.76109701575559),
    new google.maps.LatLng(51.62591595086706, 14.75412237451416),
    new google.maps.LatLng(51.65229325611202, 14.74640952355093),
    new google.maps.LatLng(51.67436774504447, 14.74026879705771),
    new google.maps.LatLng(51.71037850786158, 14.69218116134959),
    new google.maps.LatLng(51.73175362539291, 14.65827570212054),
    new google.maps.LatLng(51.76352564331747, 14.65151732645869),
    new google.maps.LatLng(51.79862363296285, 14.6370434208254),
    new google.maps.LatLng(51.81957338861125, 14.58823766348166),
    new google.maps.LatLng(51.83662957051642, 14.59098174653367)
    ];
    region_03.push(region_03_1);
    region_borders['region_03'] = region_03;
    region_center['region_03'] = '';
    
    //******************************************************************************    
    //PLZ Region 04
    //******************************************************************************  
    region_04 = [];
    var region_04_1 = [
    new google.maps.LatLng(51.7424719243938, 13.54934086131511),
    new google.maps.LatLng(51.7894212296717, 13.50202012853299),
    new google.maps.LatLng(51.82641784289249, 13.30785046685453),
    new google.maps.LatLng(51.87192669498965, 13.22572995542707),
    new google.maps.LatLng(51.85918989746293, 13.14347381053798),
    new google.maps.LatLng(51.85279660527829, 13.12430006970969),
    new google.maps.LatLng(51.75470417810811, 13.15467396995217),
    new google.maps.LatLng(51.68770328360451, 13.15547084521669),
    new google.maps.LatLng(51.64479532109533, 13.04735722439479),
    new google.maps.LatLng(51.63528585205529, 12.94163493273032),
    new google.maps.LatLng(51.68435339430064, 12.83412605820092),
    new google.maps.LatLng(51.64573504582139, 12.76773038769461),
    new google.maps.LatLng(51.6567915007374, 12.686738530391),
    new google.maps.LatLng(51.61603972030799, 12.61451130131863),
    new google.maps.LatLng(51.60116357365798, 12.52995350255842),
    new google.maps.LatLng(51.58384178359712, 12.41576413070853),
    new google.maps.LatLng(51.57640425026813, 12.32769597303285),
    new google.maps.LatLng(51.5621853500926, 12.24052951282002),
    new google.maps.LatLng(51.53035024343872, 12.20316703396421),
    new google.maps.LatLng(51.48400986060987, 12.2018183816243),
    new google.maps.LatLng(51.45844917859998, 12.14778332805085),
    new google.maps.LatLng(51.42181692397016, 12.18579308768378),
    new google.maps.LatLng(51.33868057164833, 12.19695525144501),
    new google.maps.LatLng(51.30582655451429, 12.15736949561193),
    new google.maps.LatLng(51.24266604049033, 12.2028087441438),
    new google.maps.LatLng(51.18637554286761, 12.18665579727466),
    new google.maps.LatLng(51.13526596201601, 12.24406631519669),
    new google.maps.LatLng(51.08938673022081, 12.29353583172579),
    new google.maps.LatLng(51.0443671429725, 12.25761272421822),
    new google.maps.LatLng(51.02652220805539, 12.30488196327726),
    new google.maps.LatLng(50.95881244328806, 12.24762708001179),
    new google.maps.LatLng(50.92586620529656, 12.24359743207238),
    new google.maps.LatLng(50.85961892484727, 12.23018238010335),
    new google.maps.LatLng(50.81127251018673, 12.26378510145793),
    new google.maps.LatLng(50.82267949812982, 12.34906050782871),
    new google.maps.LatLng(50.85206969960869, 12.4139296587046),
    new google.maps.LatLng(50.83740481699247, 12.4258338291888),
    new google.maps.LatLng(50.89035682312301, 12.49198005162915),
    new google.maps.LatLng(50.90483421755664, 12.53158676095576),
    new google.maps.LatLng(50.90387174098223, 12.53549567037251),
    new google.maps.LatLng(50.89997412910522, 12.64544891933915),
    new google.maps.LatLng(50.97758706144807, 12.62522390906349),
    new google.maps.LatLng(50.99776173111886, 12.73304814098136),
    new google.maps.LatLng(51.02410610040992, 12.71246144606904),
    new google.maps.LatLng(51.09251750455579, 12.73841776398786),
    new google.maps.LatLng(51.1063123548097, 12.74690756522182),
    new google.maps.LatLng(51.08800558987839, 12.88087661209568),
    new google.maps.LatLng(51.09697129994807, 12.94729199558963),
    new google.maps.LatLng(51.06650786513548, 12.9474113090827),
    new google.maps.LatLng(51.04495737130369, 12.99442404165746),
    new google.maps.LatLng(51.05487566776626, 13.12753057224353),
    new google.maps.LatLng(51.06220978158109, 13.24597891850796),
    new google.maps.LatLng(51.15625145792202, 13.25202455268377),
    new google.maps.LatLng(51.18532718769853, 13.21279719323793),
    new google.maps.LatLng(51.24162874433052, 13.20542103103477),
    new google.maps.LatLng(51.33463065554339, 13.20671836584324),
    new google.maps.LatLng(51.37598963283678, 13.18547745270218),
    new google.maps.LatLng(51.40650972999869, 13.20759945317605),
    new google.maps.LatLng(51.38923139904148, 13.26280657793134),
    new google.maps.LatLng(51.42803956721476, 13.3355713657783),
    new google.maps.LatLng(51.44909781573068, 13.40126116727843),
    new google.maps.LatLng(51.3788045519204, 13.53265608110101),
    new google.maps.LatLng(51.37182903781747, 13.67866116640936),
    new google.maps.LatLng(51.41946862557834, 13.71744109185734),
    new google.maps.LatLng(51.4614574716057, 13.69897418693929),
    new google.maps.LatLng(51.50160429373474, 13.64554947312508),
    new google.maps.LatLng(51.53344086138609, 13.55786175971092),
    new google.maps.LatLng(51.5410219059919, 13.49930421107803),
    new google.maps.LatLng(51.59239593492888, 13.35645366032208),
    new google.maps.LatLng(51.65545794096992, 13.33452570924172),
    new google.maps.LatLng(51.6817352571569, 13.47359678548874),
    new google.maps.LatLng(51.7424719243938, 13.54934086131511)
    ];
    region_04.push(region_04_1);
    region_borders['region_04'] = region_04;
    region_center['region_04'] = '';
    
    //******************************************************************************    
    //PLZ Region 06
    //******************************************************************************  
    region_06 = [];
    var region_06_1 = [
    new google.maps.LatLng(52.04149573307596, 12.37657501752396),
    new google.maps.LatLng(51.98661513509715, 12.25572973944298),
    new google.maps.LatLng(51.96750061770761, 12.2814009569697),
    new google.maps.LatLng(51.92024603191088, 12.15933399940126),
    new google.maps.LatLng(51.8756056055911, 12.18418595549547),
    new google.maps.LatLng(51.85401748000357, 12.05151864395332),
    new google.maps.LatLng(51.87350304745357, 12.00935328055698),
    new google.maps.LatLng(51.86574541391746, 11.96148604305113),
    new google.maps.LatLng(51.87755688744187, 11.92257022739725),
    new google.maps.LatLng(51.83702523359475, 11.85270377567277),
    new google.maps.LatLng(51.87112895302488, 11.71220441125153),
    new google.maps.LatLng(51.82375047527297, 11.64974272156662),
    new google.maps.LatLng(51.76538479840569, 11.65512464073217),
    new google.maps.LatLng(51.74919000269524, 11.60822394181052),
    new google.maps.LatLng(51.79470465135363, 11.53478727525659),
    new google.maps.LatLng(51.83942088328502, 11.46988196224283),
    new google.maps.LatLng(51.84311488278419, 11.38658277590159),
    new google.maps.LatLng(51.87604635564914, 11.3411701338068),
    new google.maps.LatLng(51.90057102833619, 11.33167786627952),
    new google.maps.LatLng(51.89171001474213, 11.26581845613442),
    new google.maps.LatLng(51.85659844140864, 11.23675823102399),
    new google.maps.LatLng(51.82766509870177, 11.08991059034973),
    new google.maps.LatLng(51.83189350432411, 11.04516902289933),
    new google.maps.LatLng(51.77452129715115, 10.99970095295389),
    new google.maps.LatLng(51.73208103869458, 10.89574792001861),
    new google.maps.LatLng(51.65884877401486, 10.95363935664192),
    new google.maps.LatLng(51.61007154426213, 10.89338520351403),
    new google.maps.LatLng(51.55090223931984, 10.90557435175799),
    new google.maps.LatLng(51.49515104706693, 10.94777228015738),
    new google.maps.LatLng(51.43353999712733, 10.97838424938539),
    new google.maps.LatLng(51.41949775904627, 11.00643465661862),
    new google.maps.LatLng(51.36224891690473, 11.02102629067036),
    new google.maps.LatLng(51.33729245785069, 10.99443279032864),
    new google.maps.LatLng(51.29492099175629, 11.04191457585382),
    new google.maps.LatLng(51.26461962332338, 11.14921222810165),
    new google.maps.LatLng(51.245824050934, 11.2714411554391),
    new google.maps.LatLng(51.27153210989783, 11.32283616243217),
    new google.maps.LatLng(51.29551289310812, 11.33935636007237),
    new google.maps.LatLng(51.25116812997614, 11.39304893009489),
    new google.maps.LatLng(51.23149181269297, 11.37187811574255),
    new google.maps.LatLng(51.1787244514926, 11.48320345726273),
    new google.maps.LatLng(51.11049513864016, 11.47886069980466),
    new google.maps.LatLng(51.10787037127223, 11.54684281097535),
    new google.maps.LatLng(51.11908374602589, 11.60337610293673),
    new google.maps.LatLng(51.10916557848004, 11.67483010059714),
    new google.maps.LatLng(51.07423729873755, 11.71938171014703),
    new google.maps.LatLng(51.04493510211241, 11.76815119690859),
    new google.maps.LatLng(51.05744560437784, 11.88486643497952),
    new google.maps.LatLng(51.03419631539875, 11.91745089885153),
    new google.maps.LatLng(50.99422852726306, 11.99606135734132),
    new google.maps.LatLng(50.97056814008627, 12.02650470471855),
    new google.maps.LatLng(50.96413030710574, 12.16068574488055),
    new google.maps.LatLng(50.93753646131087, 12.24549462940202),
    new google.maps.LatLng(50.9570639914126, 12.24685155627345),
    new google.maps.LatLng(51.02662964288902, 12.30650054446424),
    new google.maps.LatLng(51.04397062811837, 12.25862567264612),
    new google.maps.LatLng(51.09050225987439, 12.29499668931854),
    new google.maps.LatLng(51.18674925740216, 12.18524166520294),
    new google.maps.LatLng(51.24223890412186, 12.20328150703479),
    new google.maps.LatLng(51.30587357680689, 12.16010816396889),
    new google.maps.LatLng(51.33806785370372, 12.20029583105988),
    new google.maps.LatLng(51.42269414296645, 12.18893311948675),
    new google.maps.LatLng(51.45929712647603, 12.15236242397023),
    new google.maps.LatLng(51.48241763013872, 12.19971541462201),
    new google.maps.LatLng(51.53038570558066, 12.20685358490047),
    new google.maps.LatLng(51.56272513780426, 12.24352040785104),
    new google.maps.LatLng(51.57840786311305, 12.32403755991398),
    new google.maps.LatLng(51.58512337944053, 12.42701889020706),
    new google.maps.LatLng(51.60640932828806, 12.55806049431287),
    new google.maps.LatLng(51.61723371684912, 12.61550606356356),
    new google.maps.LatLng(51.65673972799851, 12.68808686595999),
    new google.maps.LatLng(51.64308979346177, 12.76448773053846),
    new google.maps.LatLng(51.68360809208218, 12.83675346614697),
    new google.maps.LatLng(51.63490965349064, 12.94574861524731),
    new google.maps.LatLng(51.64396012016241, 13.04900394826635),
    new google.maps.LatLng(51.68891353032361, 13.16036424887822),
    new google.maps.LatLng(51.75752317417304, 13.15408633587439),
    new google.maps.LatLng(51.85196554219788, 13.12413004144834),
    new google.maps.LatLng(51.8596458332889, 13.14311823819409),
    new google.maps.LatLng(51.89882899873077, 13.00897704364947),
    new google.maps.LatLng(51.93379025764564, 12.92141434029581),
    new google.maps.LatLng(51.9386841518742, 12.84279377243999),
    new google.maps.LatLng(51.96349790965442, 12.82847594866914),
    new google.maps.LatLng(51.96820584521829, 12.77293898273177),
    new google.maps.LatLng(52.01550482031566, 12.66388217107981),
    new google.maps.LatLng(51.98007301180542, 12.59735681746047),
    new google.maps.LatLng(52.04149573307596, 12.37657501752396)
    ];
    region_06.push(region_06_1);
    region_borders['region_06'] = region_06;
    region_center['region_06'] = '';
    
    //******************************************************************************    
    //PLZ Region 07
    //******************************************************************************  
    region_07 = [];
    var region_07_1 = [
    new google.maps.LatLng(51.09076848733957, 11.69629215762226),
    new google.maps.LatLng(51.04152442451638, 11.67921508138204),
    new google.maps.LatLng(50.99251044436989, 11.55184054021544),
    new google.maps.LatLng(50.9660360879875, 11.5082207705837),
    new google.maps.LatLng(50.90803566581153, 11.50614506969691),
    new google.maps.LatLng(50.88047440483889, 11.46411139683728),
    new google.maps.LatLng(50.8368631154687, 11.46043423338103),
    new google.maps.LatLng(50.80965490724041, 11.42657985287745),
    new google.maps.LatLng(50.80743210699033, 11.32100706210049),
    new google.maps.LatLng(50.83544242830575, 11.25481139973367),
    new google.maps.LatLng(50.80486217470876, 11.2199555075712),
    new google.maps.LatLng(50.77082897693365, 11.18419922112366),
    new google.maps.LatLng(50.73328027068473, 11.1917415962029),
    new google.maps.LatLng(50.70682945217801, 11.05189318544504),
    new google.maps.LatLng(50.69155065787876, 11.05365822336666),
    new google.maps.LatLng(50.67994195480597, 11.0247695814112),
    new google.maps.LatLng(50.66831619277387, 11.05829758792792),
    new google.maps.LatLng(50.62673223332715, 11.06532995247998),
    new google.maps.LatLng(50.60496067564178, 11.13025598446064),
    new google.maps.LatLng(50.62910824627446, 11.16109865045612),
    new google.maps.LatLng(50.62072847601289, 11.19159311839729),
    new google.maps.LatLng(50.5938890238385, 11.19286175274814),
    new google.maps.LatLng(50.57699826898051, 11.23784742009295),
    new google.maps.LatLng(50.57644749354743, 11.29150654898602),
    new google.maps.LatLng(50.51965337312016, 11.33587725076639),
    new google.maps.LatLng(50.51470660019124, 11.41923655899468),
    new google.maps.LatLng(50.49935882066072, 11.44057521278199),
    new google.maps.LatLng(50.44483214885688, 11.42366176146638),
    new google.maps.LatLng(50.42591057468142, 11.45333834587107),
    new google.maps.LatLng(50.43380520661427, 11.47763820683187),
    new google.maps.LatLng(50.39301985288929, 11.49615119659885),
    new google.maps.LatLng(50.38327718330252, 11.55901762271347),
    new google.maps.LatLng(50.38843902215034, 11.61120217157783),
    new google.maps.LatLng(50.40889171117258, 11.75675195455062),
    new google.maps.LatLng(50.41687545682889, 11.79664525956714),
    new google.maps.LatLng(50.39510058963768, 11.82656479259891),
    new google.maps.LatLng(50.41072785423449, 11.87608991053031),
    new google.maps.LatLng(50.42464781603218, 11.91761938593496),
    new google.maps.LatLng(50.44367546288166, 11.89489976505986),
    new google.maps.LatLng(50.45548885016469, 11.94758820487034),
    new google.maps.LatLng(50.50187374011036, 11.94050592251804),
    new google.maps.LatLng(50.54139389757468, 11.95782785332025),
    new google.maps.LatLng(50.56894307192965, 12.01167080188565),
    new google.maps.LatLng(50.54587625686632, 12.04994157321264),
    new google.maps.LatLng(50.58132060422534, 12.08291714050701),
    new google.maps.LatLng(50.57270428806711, 12.13046718255517),
    new google.maps.LatLng(50.58542673205047, 12.20591964243754),
    new google.maps.LatLng(50.63174358394834, 12.22834285537816),
    new google.maps.LatLng(50.63800612684024, 12.26861479182686),
    new google.maps.LatLng(50.68147803100702, 12.31832886069052),
    new google.maps.LatLng(50.75305894865696, 12.22835450061683),
    new google.maps.LatLng(50.78456123666012, 12.29398597393504),
    new google.maps.LatLng(50.81273652047922, 12.26460507604963),
    new google.maps.LatLng(50.86058254625704, 12.23112799369008),
    new google.maps.LatLng(50.93768393284902, 12.24890140402325),
    new google.maps.LatLng(50.96273733422301, 12.16016780625406),
    new google.maps.LatLng(50.96941869254682, 12.02807111887765),
    new google.maps.LatLng(50.99450333591557, 11.99933218653421),
    new google.maps.LatLng(51.05729287033768, 11.88509626547452),
    new google.maps.LatLng(51.04452224103057, 11.77031870395004),
    new google.maps.LatLng(51.09076848733957, 11.69629215762226)
    ];
    region_07.push(region_07_1);
    region_borders['region_07'] = region_07;
    region_center['region_07'] = '';
    
    //******************************************************************************    
    //PLZ Region 08
    //******************************************************************************  
    region_08 = [];
    var region_08_1 = [
    new google.maps.LatLng(50.81351691466674, 12.26087796881883),
    new google.maps.LatLng(50.78508528947179, 12.29574907234119),
    new google.maps.LatLng(50.75324408293033, 12.22685029873298),
    new google.maps.LatLng(50.72628868631162, 12.26755601801654),
    new google.maps.LatLng(50.68164843855503, 12.31858492274046),
    new google.maps.LatLng(50.63725482613278, 12.26647941604195),
    new google.maps.LatLng(50.63097930872011, 12.22522434090838),
    new google.maps.LatLng(50.58574219046894, 12.20578958058975),
    new google.maps.LatLng(50.57294793701362, 12.13007011308928),
    new google.maps.LatLng(50.58264928784515, 12.08263585060207),
    new google.maps.LatLng(50.54412534729478, 12.04806627319742),
    new google.maps.LatLng(50.56924281890202, 12.01045997488255),
    new google.maps.LatLng(50.54370965842956, 11.9610332319609),
    new google.maps.LatLng(50.50258298439149, 11.93925251942331),
    new google.maps.LatLng(50.45661132732521, 11.94411210370563),
    new google.maps.LatLng(50.44314273179957, 11.89297987397031),
    new google.maps.LatLng(50.38490297905119, 11.97344922425899),
    new google.maps.LatLng(50.35018683590258, 11.97378947061082),
    new google.maps.LatLng(50.3272441983808, 12.0886011094857),
    new google.maps.LatLng(50.31675362150703, 12.10766523042521),
    new google.maps.LatLng(50.32168735349767, 12.17887427142016),
    new google.maps.LatLng(50.30587347983327, 12.20000078433301),
    new google.maps.LatLng(50.27004599561217, 12.20505189641477),
    new google.maps.LatLng(50.26601087718079, 12.25404166369372),
    new google.maps.LatLng(50.24679387161351, 12.26754060930335),
    new google.maps.LatLng(50.24443679079765, 12.23780716153886),
    new google.maps.LatLng(50.22605698625634, 12.27761674884703),
    new google.maps.LatLng(50.2027523499096, 12.2834076964176),
    new google.maps.LatLng(50.17566227740898, 12.28976689461143),
    new google.maps.LatLng(50.17179242201404, 12.33137730485577),
    new google.maps.LatLng(50.19265881092861, 12.33774812015879),
    new google.maps.LatLng(50.22272760334474, 12.3349012666786),
    new google.maps.LatLng(50.23550418043694, 12.3473053274949),
    new google.maps.LatLng(50.25530587551889, 12.35521402063868),
    new google.maps.LatLng(50.28415581317894, 12.37608209705568),
    new google.maps.LatLng(50.29353160746818, 12.39724423203582),
    new google.maps.LatLng(50.32055520281359, 12.40651078640631),
    new google.maps.LatLng(50.3225547958804, 12.42793394225257),
    new google.maps.LatLng(50.35069353521281, 12.47141061554753),
    new google.maps.LatLng(50.36585625707978, 12.48952265347808),
    new google.maps.LatLng(50.39740100685478, 12.51774102418308),
    new google.maps.LatLng(50.40698210443793, 12.58078081419852),
    new google.maps.LatLng(50.41657183911328, 12.62762488415143),
    new google.maps.LatLng(50.41367711602637, 12.6691915645044),
    new google.maps.LatLng(50.39962270559506, 12.70114548225388),
    new google.maps.LatLng(50.42911085588201, 12.73826011570483),
    new google.maps.LatLng(50.44808940461598, 12.79319171243474),
    new google.maps.LatLng(50.43416690671773, 12.80569758474898),
    new google.maps.LatLng(50.45829433234799, 12.82904093949688),
    new google.maps.LatLng(50.4356535455879, 12.87417284013329),
    new google.maps.LatLng(50.45464171106565, 12.86366510532891),
    new google.maps.LatLng(50.46309310825354, 12.8829708957179),
    new google.maps.LatLng(50.51452455833815, 12.90706540604359),
    new google.maps.LatLng(50.55858652492269, 12.84466522857979),
    new google.maps.LatLng(50.59153404952998, 12.83288952119358),
    new google.maps.LatLng(50.66582197879784, 12.90918185645443),
    new google.maps.LatLng(50.68764585973975, 12.88602966798993),
    new google.maps.LatLng(50.69967508163955, 12.82699423220926),
    new google.maps.LatLng(50.66049762833764, 12.78635525529124),
    new google.maps.LatLng(50.64213173248792, 12.72061428935872),
    new google.maps.LatLng(50.682102909816, 12.70850927438266),
    new google.maps.LatLng(50.71705387697725, 12.63926778220124),
    new google.maps.LatLng(50.76277640173639, 12.60200800052555),
    new google.maps.LatLng(50.82190829871703, 12.60781793214463),
    new google.maps.LatLng(50.89941589850081, 12.64385115616388),
    new google.maps.LatLng(50.90381110021689, 12.53372996452684),
    new google.maps.LatLng(50.89076476316631, 12.49263020253046),
    new google.maps.LatLng(50.83683162124481, 12.42428548665593),
    new google.maps.LatLng(50.85193553836109, 12.41284431743626),
    new google.maps.LatLng(50.82370373979909, 12.34823769036651),
    new google.maps.LatLng(50.81351691466674, 12.26087796881883)
    ];
    region_08.push(region_08_1);
    region_borders['region_08'] = region_08;
    region_center['region_08'] = '';
    
    //******************************************************************************    
    //PLZ Region 09
    //******************************************************************************  
    region_09 = [];
    var region_09_1 = [
    new google.maps.LatLng(50.89830378718897, 12.64580863412339),
    new google.maps.LatLng(50.82239889609233, 12.60601632476753),
    new google.maps.LatLng(50.76339768370568, 12.60237912665719),
    new google.maps.LatLng(50.71692386397127, 12.64099256314818),
    new google.maps.LatLng(50.68214201050474, 12.71005207459449),
    new google.maps.LatLng(50.64127444296989, 12.72111305780862),
    new google.maps.LatLng(50.66096484607205, 12.78526095679652),
    new google.maps.LatLng(50.70176602211254, 12.82773790316469),
    new google.maps.LatLng(50.68839282831434, 12.884907182722),
    new google.maps.LatLng(50.66550341097668, 12.90958542891183),
    new google.maps.LatLng(50.62677897506963, 12.8661673381124),
    new google.maps.LatLng(50.59238008380542, 12.83324550379),
    new google.maps.LatLng(50.55791085485019, 12.8449357006957),
    new google.maps.LatLng(50.51538327753351, 12.90613382591077),
    new google.maps.LatLng(50.46360668455531, 12.88191750740069),
    new google.maps.LatLng(50.45502457862658, 12.86264383684942),
    new google.maps.LatLng(50.43767618837429, 12.87402367599783),
    new google.maps.LatLng(50.4088343518011, 12.9352732509961),
    new google.maps.LatLng(50.41306565663972, 12.95209353440508),
    new google.maps.LatLng(50.42683593113387, 12.99393096080285),
    new google.maps.LatLng(50.44872951531882, 13.02030470911588),
    new google.maps.LatLng(50.48314226406491, 13.02652649284966),
    new google.maps.LatLng(50.50622033765693, 13.03744954422145),
    new google.maps.LatLng(50.50299314471647, 13.05618215590742),
    new google.maps.LatLng(50.49750763195552, 13.09532354233104),
    new google.maps.LatLng(50.513391153787, 13.13300069572986),
    new google.maps.LatLng(50.50301457263821, 13.14692771494961),
    new google.maps.LatLng(50.50404591138111, 13.19557073592427),
    new google.maps.LatLng(50.55286151917009, 13.23544811368316),
    new google.maps.LatLng(50.55547184242667, 13.23568799728714),
    new google.maps.LatLng(50.59056039248158, 13.25127991387903),
    new google.maps.LatLng(50.58902751974843, 13.27918711545813),
    new google.maps.LatLng(50.57481319584361, 13.2945311388993),
    new google.maps.LatLng(50.57935331500834, 13.3280353180598),
    new google.maps.LatLng(50.60141334151164, 13.32767744730287),
    new google.maps.LatLng(50.62468680887461, 13.38051475877585),
    new google.maps.LatLng(50.64288723998522, 13.37345699469912),
    new google.maps.LatLng(50.61815869873787, 13.41492887567672),
    new google.maps.LatLng(50.59888887725359, 13.46526879124644),
    new google.maps.LatLng(50.63064071640967, 13.49985234660122),
    new google.maps.LatLng(50.64374931399494, 13.52759290609315),
    new google.maps.LatLng(50.65051745477152, 13.51484976166848),
    new google.maps.LatLng(50.66669814513487, 13.53039563118932),
    new google.maps.LatLng(50.68042657499396, 13.54264001731909),
    new google.maps.LatLng(50.69882724026544, 13.53068159695517),
    new google.maps.LatLng(50.71223326148915, 13.55204027089761),
    new google.maps.LatLng(50.70930520700777, 13.59981399407279),
    new google.maps.LatLng(50.71843591188315, 13.62240203044359),
    new google.maps.LatLng(50.72913672841317, 13.6565000519565),
    new google.maps.LatLng(50.76772895977918, 13.59952367176268),
    new google.maps.LatLng(50.77593068572832, 13.56377352097076),
    new google.maps.LatLng(50.81011796066222, 13.56295506402033),
    new google.maps.LatLng(50.84665194384385, 13.51333208740855),
    new google.maps.LatLng(50.94541842121037, 13.42334575077342),
    new google.maps.LatLng(50.9785958679868, 13.46666575769888),
    new google.maps.LatLng(51.027805376855, 13.4369777287733),
    new google.maps.LatLng(51.04807534849936, 13.3767381985633),
    new google.maps.LatLng(51.00964681603662, 13.22719813440818),
    new google.maps.LatLng(51.06288049236755, 13.24859120331616),
    new google.maps.LatLng(51.04522682065361, 12.99727832472386),
    new google.maps.LatLng(51.06591784170381, 12.94846561573138),
    new google.maps.LatLng(51.09613356560923, 12.94671614192162),
    new google.maps.LatLng(51.08694412915363, 12.88169762983947),
    new google.maps.LatLng(51.10410176443171, 12.74654500542792),
    new google.maps.LatLng(51.08802935331546, 12.73603044401245),
    new google.maps.LatLng(51.02259267516041, 12.71337550875814),
    new google.maps.LatLng(50.99717106469631, 12.73157764769421),
    new google.maps.LatLng(50.9772492509541, 12.62497924177755),
    new google.maps.LatLng(50.89830378718897, 12.64580863412339) 
    ];
    region_09.push(region_09_1);
    region_borders['region_09'] = region_09;
    region_center['region_09'] = '';
    
    //******************************************************************************    
    //PLZ Region 10
    //******************************************************************************  
    region_10 = [];
    var region_10_1 = [
        new google.maps.LatLng(52.49116724641776, 13.27996983465079),
        new google.maps.LatLng(52.4627727043322, 13.40220327888711),
        new google.maps.LatLng(52.47339741485443, 13.48575788427699),
        new google.maps.LatLng(52.49696994508037, 13.5103828451039),
        new google.maps.LatLng(52.54781522594878, 13.51326995128009),
        new google.maps.LatLng(52.56744287672738, 13.47029919136991),
        new google.maps.LatLng(52.57265442188455, 13.43819967020322),
        new google.maps.LatLng(52.54663206325345, 13.32395932438496),
        new google.maps.LatLng(52.49116724641776, 13.27996983465079) 
    ];
    region_10.push(region_10_1);
    region_borders['region_10'] = region_10;
    region_center['region_10'] = '';
    
    //******************************************************************************    
    //PLZ Region 11
    //******************************************************************************  
    region_11 = [];
    var region_11_1 = [
    ];
    region_11.push(region_11_1);
    region_borders['region_11'] = region_11;
    region_center['region_11'] = '';
    
    //******************************************************************************    
    //PLZ Region 12
    //******************************************************************************  
    region_12 = [];
    var region_12_1 = [
        new google.maps.LatLng(52.5582966909695, 13.61049789393975),
        new google.maps.LatLng(52.6001565145673, 13.53308446147584),
        new google.maps.LatLng(52.57315895679982, 13.44243035083722),
        new google.maps.LatLng(52.56692910739677, 13.4702961377739),
        new google.maps.LatLng(52.54729706419155, 13.51495590431824),
        new google.maps.LatLng(52.49697417528441, 13.50869516236396),
        new google.maps.LatLng(52.47288170843181, 13.48659801903463),
        new google.maps.LatLng(52.4627699876787, 13.40388991150944),
        new google.maps.LatLng(52.48962735211655, 13.27743504653073),
        new google.maps.LatLng(52.45469490091215, 13.26134031825936),
        new google.maps.LatLng(52.41818454859477, 13.30848564607519),
        new google.maps.LatLng(52.42431558479102, 13.34557932211757),
        new google.maps.LatLng(52.39444962971011, 13.39179104722888),
        new google.maps.LatLng(52.38256274622202, 13.43214862773575),
        new google.maps.LatLng(52.3572613900422, 13.48922893854682),
        new google.maps.LatLng(52.33868463557635, 13.51938578650254),
        new google.maps.LatLng(52.33074341073549, 13.59669055957151),
        new google.maps.LatLng(52.36990646994378, 13.56757504300808),
        new google.maps.LatLng(52.39497350876745, 13.60313963957315),
        new google.maps.LatLng(52.40406869497762, 13.64700924366773),
        new google.maps.LatLng(52.42380634068481, 13.72051585165247),
        new google.maps.LatLng(52.45550853280112, 13.75543815742521),
        new google.maps.LatLng(52.48822571670788, 13.67315252125671),
        new google.maps.LatLng(52.48895239610535, 13.61494436797184),
        new google.maps.LatLng(52.54015971806795, 13.65848010555252),
        new google.maps.LatLng(52.5582966909695, 13.61049789393975) 
    ];
    region_12.push(region_12_1);
    region_borders['region_12'] = region_12;
    region_center['region_12'] = '';
    
    //******************************************************************************    
    //PLZ Region 13
    //******************************************************************************  
    region_13 = [];
    var region_13_1 = [
        new google.maps.LatLng(52.49168268491135, 13.27743512473425),
        new google.maps.LatLng(52.54817435032051, 13.32396099504038),
        new google.maps.LatLng(52.57112365837419, 13.43311871461785),
        new google.maps.LatLng(52.60066308570977, 13.53562548384012),
        new google.maps.LatLng(52.65311560560029, 13.52161698085184),
        new google.maps.LatLng(52.67587893721374, 13.47092526181802),
        new google.maps.LatLng(52.64870968902502, 13.44365678252636),
        new google.maps.LatLng(52.65343210815981, 13.40215572081008),
        new google.maps.LatLng(52.64169316054181, 13.35719506548492),
        new google.maps.LatLng(52.65306417014946, 13.30553638781348),
        new google.maps.LatLng(52.62687484811793, 13.27075735880072),
        new google.maps.LatLng(52.62484926628319, 13.22668484839405),
        new google.maps.LatLng(52.58578410434291, 13.21650701019718),
        new google.maps.LatLng(52.59659511195618, 13.15971683366858),
        new google.maps.LatLng(52.58373842892842, 13.13684034585499),
        new google.maps.LatLng(52.51430261384467, 13.1209258017516),
        new google.maps.LatLng(52.49119101112675, 13.18523217347289),
        new google.maps.LatLng(52.49168268491135, 13.27743512473425) 
    ];
    region_13.push(region_13_1);
    region_borders['region_13'] = region_13;
    region_center['region_13'] = '';
    
    //******************************************************************************    
    //PLZ Region 14
    //******************************************************************************  
    region_14 = [];
    var region_14_1 = [
        new google.maps.LatLng(52.59676707906971, 13.15898838763778),
        new google.maps.LatLng(52.58469649452644, 13.13502484807969),
        new google.maps.LatLng(52.55081517778173, 13.13200710834397),
        new google.maps.LatLng(52.51410550662594, 13.12113873517631),
        new google.maps.LatLng(52.49341458372035, 13.18607856381601),
        new google.maps.LatLng(52.49181362109132, 13.2780623428986),
        new google.maps.LatLng(52.45480817172723, 13.26197697754979),
        new google.maps.LatLng(52.42036730382593, 13.3060462117832),
        new google.maps.LatLng(52.42520537900329, 13.34446794486047),
        new google.maps.LatLng(52.39588468591463, 13.38810601335391),
        new google.maps.LatLng(52.35722921423464, 13.37517699769525),
        new google.maps.LatLng(52.33378100009758, 13.33928222946559),
        new google.maps.LatLng(52.30149003241463, 13.39351016771874),
        new google.maps.LatLng(52.22715474740507, 13.2957310931397),
        new google.maps.LatLng(52.17504726639153, 13.32175160700589),
        new google.maps.LatLng(52.1128715668571, 13.30236423120739),
        new google.maps.LatLng(52.08401278775208, 13.37256002696513),
        new google.maps.LatLng(52.00815617202076, 13.39474094894084),
        new google.maps.LatLng(51.97439427977674, 13.2821099346061),
        new google.maps.LatLng(51.89631340544206, 13.33940395636871),
        new google.maps.LatLng(51.82750730816403, 13.3018744772985),
        new google.maps.LatLng(51.87326890695507, 13.22542509119637),
        new google.maps.LatLng(51.85937205298306, 13.14394655393906),
        new google.maps.LatLng(51.90079163643931, 13.0007389216552),
        new google.maps.LatLng(51.93502038020043, 12.92058932862763),
        new google.maps.LatLng(51.93941607267709, 12.84139406871701),
        new google.maps.LatLng(51.96505066124318, 12.82703069305102),
        new google.maps.LatLng(51.96896562435593, 12.77195540352331),
        new google.maps.LatLng(52.01730629036174, 12.66292044700451),
        new google.maps.LatLng(51.97846922946873, 12.59898952086436),
        new google.maps.LatLng(52.00716223861522, 12.50525150026924),
        new google.maps.LatLng(52.04327900212219, 12.37361204526871),
        new google.maps.LatLng(52.10473138366504, 12.27448233305971),
        new google.maps.LatLng(52.17116593982454, 12.21332817777687),
        new google.maps.LatLng(52.21756705958713, 12.24417432957959),
        new google.maps.LatLng(52.25255630807111, 12.25009205486856),
        new google.maps.LatLng(52.25980573514939, 12.25665226472099),
        new google.maps.LatLng(52.34553460785629, 12.30698747159684),
        new google.maps.LatLng(52.34809782865179, 12.30609279616695),
        new google.maps.LatLng(52.41573641419912, 12.27768155758782),
        new google.maps.LatLng(52.49250812450716, 12.32027512911289),
        new google.maps.LatLng(52.49907016506813, 12.1838236069985),
        new google.maps.LatLng(52.53160884086883, 12.14066189142141),
        new google.maps.LatLng(52.63054889178902, 12.15702602846691),
        new google.maps.LatLng(52.70642147746725, 12.12896772603668),
        new google.maps.LatLng(52.70748524989117, 12.13320136586949),
        new google.maps.LatLng(52.75971793283097, 12.21326116209099),
        new google.maps.LatLng(52.78983781727501, 12.24749035576757),
        new google.maps.LatLng(52.75226445284617, 12.40500785973254),
        new google.maps.LatLng(52.75202621155591, 12.54013117377026),
        new google.maps.LatLng(52.80922504682981, 12.55281538992286),
        new google.maps.LatLng(52.79525086184937, 12.64147509336669),
        new google.maps.LatLng(52.69900159064294, 12.74621269992168),
        new google.maps.LatLng(52.6844057313668, 12.83199689166918),
        new google.maps.LatLng(52.71967511600456, 12.94203388037186),
        new google.maps.LatLng(52.66844868010578, 13.0322193746593),
        new google.maps.LatLng(52.6736738673178, 13.08989855499499),
        new google.maps.LatLng(52.59676707906971, 13.15898838763778)
    ];
    region_14.push(region_14_1);
    region_borders['region_14'] = region_14;
    region_center['region_14'] = '';
    
    //******************************************************************************    
    //PLZ Region 15
    //******************************************************************************  
    region_15 = [];
    var region_15_1 = [
        new google.maps.LatLng(52.70534069882708, 14.42900280622791),
        new google.maps.LatLng(52.70588919371211, 14.42562308886642),
        new google.maps.LatLng(52.76496108256033, 14.32870155122639),
        new google.maps.LatLng(52.71555654993667, 14.27650374102118),
        new google.maps.LatLng(52.7206301998151, 14.22398748199185),
        new google.maps.LatLng(52.65063735670054, 14.16220481470119),
        new google.maps.LatLng(52.67231385777444, 14.07796256150959),
        new google.maps.LatLng(52.7185357939065, 13.99332166775875),
        new google.maps.LatLng(52.67678345089743, 13.85863281996245),
        new google.maps.LatLng(52.6322883182374, 13.82406892834109),
        new google.maps.LatLng(52.5592186743423, 13.61200816190344),
        new google.maps.LatLng(52.53745003558603, 13.65918547450235),
        new google.maps.LatLng(52.48923273699296, 13.61620513404183),
        new google.maps.LatLng(52.48596484646498, 13.67123990753899),
        new google.maps.LatLng(52.45375989331025, 13.75462032272954),
        new google.maps.LatLng(52.42095539731643, 13.72117862688492),
        new google.maps.LatLng(52.39454870073986, 13.60502801351531),
        new google.maps.LatLng(52.36938655098761, 13.56921363308691),
        new google.maps.LatLng(52.33119454842266, 13.59413429153078),
        new google.maps.LatLng(52.33891670938599, 13.5176001259975),
        new google.maps.LatLng(52.38388541418762, 13.43187693527228),
        new google.maps.LatLng(52.39581372188906, 13.38804941690105),
        new google.maps.LatLng(52.35622543280262, 13.37445204094177),
        new google.maps.LatLng(52.33262273407128, 13.34317385833499),
        new google.maps.LatLng(52.30116748747697, 13.39363593045083),
        new google.maps.LatLng(52.22569677327341, 13.29578952789433),
        new google.maps.LatLng(52.17424494551226, 13.3242397007609),
        new google.maps.LatLng(52.11150883742175, 13.30140671562996),
        new google.maps.LatLng(52.08268659998959, 13.37516782088482),
        new google.maps.LatLng(52.00768681481826, 13.39425200123088),
        new google.maps.LatLng(51.97416491940438, 13.28178766356147),
        new google.maps.LatLng(51.89548512021306, 13.34011020325786),
        new google.maps.LatLng(51.82717056660818, 13.30648529650404),
        new google.maps.LatLng(51.79095756052264, 13.50270560101174),
        new google.maps.LatLng(51.74307028453241, 13.55047528156914),
        new google.maps.LatLng(51.72299164551696, 13.70034176504217),
        new google.maps.LatLng(51.75471135142562, 13.72557741721787),
        new google.maps.LatLng(51.73487136077339, 13.79666707773139),
        new google.maps.LatLng(51.78150388191155, 13.81389075582051),
        new google.maps.LatLng(51.83831319897488, 13.8528917365499),
        new google.maps.LatLng(51.89216293812689, 13.86699050595655),
        new google.maps.LatLng(51.89712372824889, 13.98034228923817),
        new google.maps.LatLng(51.85616617970424, 14.16703110388619),
        new google.maps.LatLng(51.90429564375017, 14.25063878267223),
        new google.maps.LatLng(51.93340168815563, 14.32974379164546),
        new google.maps.LatLng(51.93533045812618, 14.394793274958),
        new google.maps.LatLng(52.00130493548877, 14.37151075176015),
        new google.maps.LatLng(52.01440702902006, 14.44530453774413),
        new google.maps.LatLng(52.05255868154562, 14.47893353962545),
        new google.maps.LatLng(52.00620207851143, 14.4917974721347),
        new google.maps.LatLng(52.00492626358552, 14.56016415939964),
        new google.maps.LatLng(52.03318439859927, 14.60359418457467),
        new google.maps.LatLng(52.03104114403964, 14.61103951283946),
        new google.maps.LatLng(51.9989053563497, 14.7201965513053),
        new google.maps.LatLng(52.05405843351706, 14.75056260811167),
        new google.maps.LatLng(52.06629526528595, 14.75937018248405),
        new google.maps.LatLng(52.09566714676369, 14.71437654783498),
        new google.maps.LatLng(52.11671072766622, 14.68080596915205),
        new google.maps.LatLng(52.14456318630492, 14.67710124115659),
        new google.maps.LatLng(52.16992848776794, 14.70557604706268),
        new google.maps.LatLng(52.19016286361359, 14.69115593931734),
        new google.maps.LatLng(52.21613553857382, 14.71129689948945),
        new google.maps.LatLng(52.25709875311228, 14.724395054638),
        new google.maps.LatLng(52.27648036871242, 14.69564272181685),
        new google.maps.LatLng(52.29100709086306, 14.59952581541956),
        new google.maps.LatLng(52.31642666658438, 14.57929873331539),
        new google.maps.LatLng(52.35265128827938, 14.55684445298312),
        new google.maps.LatLng(52.39277969305655, 14.55386678871534),
        new google.maps.LatLng(52.41198130919283, 14.53675350496918),
        new google.maps.LatLng(52.45337403176433, 14.56333204300347),
        new google.maps.LatLng(52.48472703124054, 14.61074576466477),
        new google.maps.LatLng(52.51478298665302, 14.63451385368391),
        new google.maps.LatLng(52.52453561538309, 14.6113873615414),
        new google.maps.LatLng(52.5711232818318, 14.62725801597323),
        new google.maps.LatLng(52.58381836941864, 14.64034303029644),
        new google.maps.LatLng(52.61410896001198, 14.59984137494719),
        new google.maps.LatLng(52.66642322597838, 14.47182611428816),
        new google.maps.LatLng(52.70534069882708, 14.42900280622791)
    ];
    region_15.push(region_15_1);
    region_borders['region_15'] = region_15;
    region_center['region_15'] = '';
    
    //******************************************************************************    
    //PLZ Region 16
    //******************************************************************************  
    region_16 = [];
    var region_16_1 = [
       new google.maps.LatLng(53.26816576814068, 14.43752516893366),
       new google.maps.LatLng(53.30518641103575, 14.40468643962572),
       new google.maps.LatLng(53.32440053161387, 14.41291760299474),
       new google.maps.LatLng(53.3069010502964, 14.31843666796203),
       new google.maps.LatLng(53.25309951869657, 14.25843066463106),
       new google.maps.LatLng(53.25659726856601, 14.09669775704067),
       new google.maps.LatLng(53.15105755408987, 14.00004167040919),
       new google.maps.LatLng(53.13738944032265, 13.91055290919153),
       new google.maps.LatLng(53.05855000153541, 13.81818741337795),
       new google.maps.LatLng(53.0376075721561, 13.68843692901377),
       new google.maps.LatLng(53.00324825030572, 13.67569483843375),
       new google.maps.LatLng(52.98665366934976, 13.51092715121694),
       new google.maps.LatLng(53.05464337152408, 13.41106387708339),
       new google.maps.LatLng(53.10258027443172, 13.32456942910646),
       new google.maps.LatLng(53.17896070600264, 13.29720074163498),
       new google.maps.LatLng(53.23980165285757, 13.17930348029224),
       new google.maps.LatLng(53.23353053513296, 13.10829430825849),
       new google.maps.LatLng(53.19718558267311, 13.07371726952752),
       new google.maps.LatLng(53.16169121543287, 12.98724709264363),
       new google.maps.LatLng(53.18686395892509, 12.95558279443875),
       new google.maps.LatLng(53.19232729919283, 12.85311609305164),
       new google.maps.LatLng(53.18880901636113, 12.76234694848462),
       new google.maps.LatLng(53.2451143522981, 12.66375125670891),
       new google.maps.LatLng(53.24282472493039, 12.60675538264439),
       new google.maps.LatLng(53.24957959150564, 12.44622025882172),
       new google.maps.LatLng(53.31201292534361, 12.34060138758014),
       new google.maps.LatLng(53.32156058365518, 12.25706233746485),
       new google.maps.LatLng(53.36663107284318, 12.06103040486276),
       new google.maps.LatLng(53.33163668255918, 12.02142071892733),
       new google.maps.LatLng(53.29405690826028, 12.00852634960811),
       new google.maps.LatLng(53.26841007116455, 11.91238279649077),
       new google.maps.LatLng(53.22544273306336, 11.93062641462641),
       new google.maps.LatLng(53.15655193091192, 12.07487388084129),
       new google.maps.LatLng(53.08173916644272, 12.05235286290705),
       new google.maps.LatLng(53.01842410296552, 12.10277431875068),
       new google.maps.LatLng(53.02443807282487, 12.06419469981748),
       new google.maps.LatLng(52.97128154462051, 12.09964559070772),
       new google.maps.LatLng(52.94647743689203, 12.17252688480749),
       new google.maps.LatLng(52.90430380130794, 12.18969274603751),
       new google.maps.LatLng(52.87530560381082, 12.13079855722863),
       new google.maps.LatLng(52.8537183359472, 12.11897754321674),
       new google.maps.LatLng(52.86548712153443, 12.22776004861513),
       new google.maps.LatLng(52.7892571754787, 12.24573181718088),
       new google.maps.LatLng(52.75382663024922, 12.40483492149619),
       new google.maps.LatLng(52.75325359659143, 12.54027345983182),
       new google.maps.LatLng(52.7563700642941, 12.5405108042233),
       new google.maps.LatLng(52.81114359058892, 12.55048869306326),
       new google.maps.LatLng(52.79768360923256, 12.63986654794541),
       new google.maps.LatLng(52.69975022586377, 12.74434109289556),
       new google.maps.LatLng(52.68415992176412, 12.83398433895844),
       new google.maps.LatLng(52.72069174004693, 12.94155095104647),
       new google.maps.LatLng(52.69986519538718, 12.98239393995589),
       new google.maps.LatLng(52.66883570115427, 13.03246273060889),
       new google.maps.LatLng(52.67393711071875, 13.09223819963605),
       new google.maps.LatLng(52.5938615891811, 13.163600671455),
       new google.maps.LatLng(52.58579044892768, 13.21816786776371),
       new google.maps.LatLng(52.62616943267311, 13.22573634825478),
       new google.maps.LatLng(52.62700545413046, 13.27020404361293),
       new google.maps.LatLng(52.6539359295921, 13.30488513214127),
       new google.maps.LatLng(52.64270308711538, 13.3585466844337),
       new google.maps.LatLng(52.65528016735519, 13.40093671244299),
       new google.maps.LatLng(52.64750964979747, 13.44396416723345),
       new google.maps.LatLng(52.67706665372068, 13.46934344796106),
       new google.maps.LatLng(52.65372385626583, 13.52115872375671),
       new google.maps.LatLng(52.60164299371066, 13.53538332631841),
       new google.maps.LatLng(52.57732150441587, 13.58059433354781),
       new google.maps.LatLng(52.55904937791371, 13.60965260770149),
       new google.maps.LatLng(52.5765833889421, 13.67336097385573),
       new google.maps.LatLng(52.63331064080297, 13.82386879410888),
       new google.maps.LatLng(52.67801870654996, 13.85884176834471),
       new google.maps.LatLng(52.72041481237547, 13.99166982374334),
       new google.maps.LatLng(52.67368954021952, 14.07790571133645),
       new google.maps.LatLng(52.65051002873372, 14.16122197229405),
       new google.maps.LatLng(52.72105726969599, 14.22285331042479),
       new google.maps.LatLng(52.71608244124134, 14.27591045648644),
       new google.maps.LatLng(52.71836389994749, 14.27746771029386),
       new google.maps.LatLng(52.76456507084512, 14.33128868076609),
       new google.maps.LatLng(52.79704022384869, 14.24772233259703),
       new google.maps.LatLng(52.81705544156571, 14.21833348083433),
       new google.maps.LatLng(52.82688667143351, 14.13339027247292),
       new google.maps.LatLng(52.84997582848526, 14.12304133745801),
       new google.maps.LatLng(52.88520087232419, 14.1649627346041),
       new google.maps.LatLng(52.96054504279662, 14.13979037415103),
       new google.maps.LatLng(52.98659136631462, 14.20965518060029),
       new google.maps.LatLng(53.03097744761078, 14.31619313501342),
       new google.maps.LatLng(53.07857649713124, 14.36548199394562),
       new google.maps.LatLng(53.13277066238143, 14.38963115801188),
       new google.maps.LatLng(53.19819621313923, 14.36944226515565),
       new google.maps.LatLng(53.20762004655441, 14.40522323837837),
       new google.maps.LatLng(53.23903874079523, 14.42916318585535),
       new google.maps.LatLng(53.26816576814068, 14.43752516893366)
    ];
    region_16.push(region_16_1);
    region_borders['region_16'] = region_16;
    region_center['region_16'] = '';
    
    //******************************************************************************    
    //PLZ Region 17
    //******************************************************************************  
    region_17 = [];
    var region_17_1 = [
        new google.maps.LatLng(54.17090808778498, 13.33699509118581),
        new google.maps.LatLng(54.11520121790964, 13.22001446512799),
        new google.maps.LatLng(54.08383122353668, 13.25402771296962),
        new google.maps.LatLng(54.04754530018303, 13.23292620898506),
        new google.maps.LatLng(54.032908947126, 13.10868725196776),
        new google.maps.LatLng(54.00680198408432, 12.97820101036522),
        new google.maps.LatLng(53.97527243352347, 12.87345871982323),
        new google.maps.LatLng(54.02934087705996, 12.7366644510245),
        new google.maps.LatLng(54.04414663316083, 12.65959735778082),
        new google.maps.LatLng(54.00435707949014, 12.51788886551246),
        new google.maps.LatLng(53.94619713119518, 12.50262307588076),
        new google.maps.LatLng(53.89589793301991, 12.4451749497223),
        new google.maps.LatLng(53.81534662996383, 12.4381718150936),
        new google.maps.LatLng(53.69136860855463, 12.47935999181693),
        new google.maps.LatLng(53.657430347725, 12.39740703091687),
        new google.maps.LatLng(53.56408409108755, 12.39795707588311),
        new google.maps.LatLng(53.57040997000357, 12.30765779674375),
        new google.maps.LatLng(53.50545965539013, 12.290251029287),
        new google.maps.LatLng(53.47324959980113, 12.3669199214886),
        new google.maps.LatLng(53.4421218820347, 12.31762021718111),
        new google.maps.LatLng(53.37502285543043, 12.28189479296856),
        new google.maps.LatLng(53.35251257629807, 12.31735625495923),
        new google.maps.LatLng(53.31004493852638, 12.34155459032458),
        new google.maps.LatLng(53.25015063204849, 12.44397947695522),
        new google.maps.LatLng(53.2425048907209, 12.60895932039555),
        new google.maps.LatLng(53.24449945610028, 12.66553861275108),
        new google.maps.LatLng(53.18766685013678, 12.76243015055505),
        new google.maps.LatLng(53.19299353987506, 12.8523696273665),
        new google.maps.LatLng(53.1876125357024, 12.95416985654126),
        new google.maps.LatLng(53.16232798624348, 12.98559136296965),
        new google.maps.LatLng(53.19774566948282, 13.07587071947157),
        new google.maps.LatLng(53.23490103056894, 13.1100397366623),
        new google.maps.LatLng(53.24118173069421, 13.17982321403173),
        new google.maps.LatLng(53.21441769511951, 13.22625314560879),
        new google.maps.LatLng(53.1789598833398, 13.29904575217276),
        new google.maps.LatLng(53.1032781810401, 13.32410888162196),
        new google.maps.LatLng(53.0513366453283, 13.41661816879713),
        new google.maps.LatLng(52.98720949277448, 13.51071129018231),
        new google.maps.LatLng(53.00317018472342, 13.67771862861169),
        new google.maps.LatLng(53.03887574860767, 13.68663903933472),
        new google.maps.LatLng(53.0594982419775, 13.82007824251364),
        new google.maps.LatLng(53.13859098465824, 13.91011330893983),
        new google.maps.LatLng(53.15133228000269, 13.99970558786144),
        new google.maps.LatLng(53.20437222629451, 14.04004747496083),
        new google.maps.LatLng(53.25745081000028, 14.09875119035765),
        new google.maps.LatLng(53.25355834519498, 14.25817457458857),
        new google.maps.LatLng(53.3087942261983, 14.31748995774321),
        new google.maps.LatLng(53.31383001114388, 14.33696041947832),
        new google.maps.LatLng(53.32407385226929, 14.41374349065284),
        new google.maps.LatLng(53.35293707977188, 14.3848280529694),
        new google.maps.LatLng(53.35665364895711, 14.38225394388549),
        new google.maps.LatLng(53.43248645476771, 14.35962002397726),
        new google.maps.LatLng(53.49177695314851, 14.34400871623658),
        new google.maps.LatLng(53.49995045338417, 14.32147987667117),
        new google.maps.LatLng(53.56419196576626, 14.30637708400186),
        new google.maps.LatLng(53.61702899332921, 14.31647105929981),
        new google.maps.LatLng(53.6653011678223, 14.26581369956308),
        new google.maps.LatLng(53.69005134503688, 14.26370719282384),
        new google.maps.LatLng(53.6971227697139, 14.21272044334848),
        new google.maps.LatLng(53.70010985855727, 14.21688234149977),
        new google.maps.LatLng(53.7355597849964, 14.26530239538364),
        new google.maps.LatLng(53.75553026575852, 14.22950530198341),
        new google.maps.LatLng(53.73266676708602, 14.17114018166733),
        new google.maps.LatLng(53.73323964783642, 14.16815621644421),
        new google.maps.LatLng(53.73454599768158, 14.12483446271429),
        new google.maps.LatLng(53.7661731972772, 13.98803170402424),
        new google.maps.LatLng(53.78719627903831, 13.93537041926037),
        new google.maps.LatLng(53.81899470391779, 13.87232514240679),
        new google.maps.LatLng(53.83996223398693, 13.83501167187671),
        new google.maps.LatLng(53.84566302310958, 13.80348802504324),
        new google.maps.LatLng(53.84692516087376, 13.80592040721513),
        new google.maps.LatLng(53.87644077527671, 13.81294010079984),
        new google.maps.LatLng(53.87860496216723, 13.83921799537399),
        new google.maps.LatLng(53.91496833884773, 13.90296665399935),
        new google.maps.LatLng(53.92335693753753, 13.9077270315549),
        new google.maps.LatLng(54.02269137744295, 13.7519399284071),
        new google.maps.LatLng(54.02129276222004, 13.80171579561497),
        new google.maps.LatLng(54.04755698628162, 13.85988558257626),
        new google.maps.LatLng(54.00556743969361, 13.84763550053314),
        new google.maps.LatLng(54.01649011958407, 13.90416041357159),
        new google.maps.LatLng(54.03565697086862, 13.92241491621708),
        new google.maps.LatLng(54.06765521332395, 13.91286747999017),
        new google.maps.LatLng(54.06753639415784, 13.91593249821925),
        new google.maps.LatLng(54.05720353779454, 13.96094407506735),
        new google.maps.LatLng(53.98940340811761, 14.04243626192835),
        new google.maps.LatLng(53.93820000079665, 14.0358537357619),
        new google.maps.LatLng(53.95624012976507, 14.01336258265721),
        new google.maps.LatLng(53.95342536316418, 13.95859468228347),
        new google.maps.LatLng(53.97424960824597, 13.95707791724982),
        new google.maps.LatLng(53.99288559896077, 13.94226453505517),
        new google.maps.LatLng(53.96576348522607, 13.88478053102838),
        new google.maps.LatLng(53.92582060037328, 13.92563549404253),
        new google.maps.LatLng(53.88349103570378, 13.90025839260113),
        new google.maps.LatLng(53.86592299994678, 13.85238392022881),
        new google.maps.LatLng(53.84286343892188, 13.85369168764047),
        new google.maps.LatLng(53.83911229940927, 13.93972822482463),
        new google.maps.LatLng(53.87098385436638, 14.03586688862776),
        new google.maps.LatLng(53.86605225661556, 14.2143186477713),
        new google.maps.LatLng(53.92953148036538, 14.22872387005942),
        new google.maps.LatLng(53.98400947145156, 14.13237368172826),
        new google.maps.LatLng(54.05483665041168, 14.00989792507119),
        new google.maps.LatLng(54.10142660237836, 13.86811199808735),
        new google.maps.LatLng(54.18220350591686, 13.80831604139594),
        new google.maps.LatLng(54.16968635841278, 13.75679886415492),
        new google.maps.LatLng(54.14826876725305, 13.74992711271664),
        new google.maps.LatLng(54.1376235592544, 13.73262414925849),
        new google.maps.LatLng(54.14853706468863, 13.69363761412506),
        new google.maps.LatLng(54.16267068374211, 13.71440835622143),
        new google.maps.LatLng(54.17342022191461, 13.69234345298552),
        new google.maps.LatLng(54.14362132024846, 13.63049401762519),
        new google.maps.LatLng(54.13249595795757, 13.52275693671063),
        new google.maps.LatLng(54.11794272539008, 13.47431094661951),
        new google.maps.LatLng(54.08490454546562, 13.50409784184882),
        new google.maps.LatLng(54.09130174576357, 13.46242878305708),
        new google.maps.LatLng(54.13269250202717, 13.43882322703894),
        new google.maps.LatLng(54.17239948984535, 13.41195061340456),
        new google.maps.LatLng(54.17949574681668, 13.37561671142168),
        new google.maps.LatLng(54.17090808778498, 13.33699509118581)
    ];
    region_17.push(region_17_1);
    region_borders['region_17'] = region_17;
    region_center['region_17'] = '';
    
    //******************************************************************************    
    //PLZ Region 18
    //******************************************************************************  
    region_18 = [];
    var region_18_1 = [
       new google.maps.LatLng(53.5685327175168, 12.30627952903908),
       new google.maps.LatLng(53.56895889841109, 12.3263514163731),
       new google.maps.LatLng(53.56480447039253, 12.39883446536629),
       new google.maps.LatLng(53.66003891542822, 12.39678471170239),
       new google.maps.LatLng(53.6914162533129, 12.47868217939229),
       new google.maps.LatLng(53.8182275850064, 12.43651300857248),
       new google.maps.LatLng(53.89738995037244, 12.44386981059425),
       new google.maps.LatLng(53.94737091746018, 12.50447133480347),
       new google.maps.LatLng(54.00568506259174, 12.51993124615935),
       new google.maps.LatLng(54.0446695834578, 12.65945373927947),
       new google.maps.LatLng(54.02988234151994, 12.7376854082319),
       new google.maps.LatLng(53.9757366418647, 12.87047484180428),
       new google.maps.LatLng(53.97560795479264, 12.87681962844909),
       new google.maps.LatLng(54.00713769853501, 12.97798201691791),
       new google.maps.LatLng(54.03417327884713, 13.11232547957558),
       new google.maps.LatLng(54.04947040740782, 13.23223650911555),
       new google.maps.LatLng(54.08422531845004, 13.2540408207532),
       new google.maps.LatLng(54.11500628081761, 13.22045801613066),
       new google.maps.LatLng(54.17181167116219, 13.33663343399683),
       new google.maps.LatLng(54.23178210951825, 13.28069944193634),
       new google.maps.LatLng(54.24991876449666, 13.20300195836218),
       new google.maps.LatLng(54.2723862695299, 13.16865715150387),
       new google.maps.LatLng(54.26423829746541, 13.13214423973601),
       new google.maps.LatLng(54.28194562582073, 13.10900109546093),
       new google.maps.LatLng(54.30141300983869, 13.10777844677076),
       new google.maps.LatLng(54.31364260241303, 13.09578014542212),
       new google.maps.LatLng(54.34408196294094, 13.07217116654289),
       new google.maps.LatLng(54.364599758562, 13.09286286310638),
       new google.maps.LatLng(54.38055190423275, 13.08237802817963),
       new google.maps.LatLng(54.37752062843423, 13.04871927389088),
       new google.maps.LatLng(54.40338154215004, 13.02986166303073),
       new google.maps.LatLng(54.42064820740645, 13.02844020701809),
       new google.maps.LatLng(54.43565023857595, 13.02815682338609),
       new google.maps.LatLng(54.43235451134939, 13.00603489760983),
       new google.maps.LatLng(54.42250302599644, 12.97448796693632),
       new google.maps.LatLng(54.41262542267542, 12.94426175796141),
       new google.maps.LatLng(54.39699404121561, 12.90214238618172),
       new google.maps.LatLng(54.37567282257594, 12.88284470178192),
       new google.maps.LatLng(54.35379564944494, 12.85457214028453),
       new google.maps.LatLng(54.34927232660024, 12.81840872883044),
       new google.maps.LatLng(54.37453541379002, 12.78783482814271),
       new google.maps.LatLng(54.39024888118188, 12.78746177256556),
       new google.maps.LatLng(54.39875037670272, 12.81234443388382),
       new google.maps.LatLng(54.41874061068094, 12.82379988023694),
       new google.maps.LatLng(54.41278500218748, 12.86070802432161),
       new google.maps.LatLng(54.40552495162919, 12.88725043804675),
       new google.maps.LatLng(54.41915049032843, 12.91766541647139),
       new google.maps.LatLng(54.41904824906108, 12.92280337319281),
       new google.maps.LatLng(54.42872529772124, 12.9633063726014),
       new google.maps.LatLng(54.43638742219039, 12.99213228996045),
       new google.maps.LatLng(54.43703115407547, 12.99732698735453),
       new google.maps.LatLng(54.44110405625008, 13.01821139724162),
       new google.maps.LatLng(54.44557850831273, 13.05589756242238),
       new google.maps.LatLng(54.45668463740406, 13.0631034235851),
       new google.maps.LatLng(54.46535437734678, 13.04304898150501),
       new google.maps.LatLng(54.44974209336076, 12.96208702386),
       new google.maps.LatLng(54.43886945901803, 12.86743548266951),
       new google.maps.LatLng(54.43872808310795, 12.75685540816054),
       new google.maps.LatLng(54.43885662527679, 12.6682196192239),
       new google.maps.LatLng(54.44516507446884, 12.60819127676059),
       new google.maps.LatLng(54.45289572093067, 12.55079192739215),
       new google.maps.LatLng(54.46675592639587, 12.52834669884691),
       new google.maps.LatLng(54.48518124852279, 12.54595356914204),
       new google.maps.LatLng(54.48189619582902, 12.51879433166384),
       new google.maps.LatLng(54.46575422044329, 12.49875492573936),
       new google.maps.LatLng(54.41020112665645, 12.46536253746933),
       new google.maps.LatLng(54.37449605969177, 12.40995172862609),
       new google.maps.LatLng(54.3133243354963, 12.36252585159995),
       new google.maps.LatLng(54.28411288907594, 12.32427589721751),
       new google.maps.LatLng(54.24060579253877, 12.19761758283766),
       new google.maps.LatLng(54.18284332534089, 12.12668881718128),
       new google.maps.LatLng(54.18259764783903, 12.09105926996469),
       new google.maps.LatLng(54.17509832710552, 12.0118128473239),
       new google.maps.LatLng(54.16256024109249, 11.94647458859579),
       new google.maps.LatLng(54.14154815926835, 11.84154493295224),
       new google.maps.LatLng(54.14233383128694, 11.77555103523169),
       new google.maps.LatLng(54.1559912072349, 11.75054253378186),
       new google.maps.LatLng(54.15450055535799, 11.68317870340096),
       new google.maps.LatLng(54.10479912563601, 11.59933527960589),
       new google.maps.LatLng(54.09400093042268, 11.5635590188837),
       new google.maps.LatLng(54.06983305496557, 11.52622048711034),
       new google.maps.LatLng(54.05640782239243, 11.53224429436926),
       new google.maps.LatLng(54.07620974136721, 11.55932517438023),
       new google.maps.LatLng(54.08936089722253, 11.58246620203727),
       new google.maps.LatLng(54.10021885883598, 11.61190201687848),
       new google.maps.LatLng(54.07930798935723, 11.6227917358206),
       new google.maps.LatLng(54.06191800071887, 11.57798714799755),
       new google.maps.LatLng(54.03887902272397, 11.57995748470442),
       new google.maps.LatLng(54.02430095461575, 11.55175903419923),
       new google.maps.LatLng(53.98786974846031, 11.58280998058198),
       new google.maps.LatLng(53.97970859615836, 11.64869547006329),
       new google.maps.LatLng(53.93540932850372, 11.66794058034674),
       new google.maps.LatLng(53.97618338370691, 11.76416043880359),
       new google.maps.LatLng(53.9385022117048, 11.79225784734803),
       new google.maps.LatLng(53.85742499001418, 11.7697087785197),
       new google.maps.LatLng(53.84058491012146, 11.74270390478017),
       new google.maps.LatLng(53.78618510538652, 11.81039353577302),
       new google.maps.LatLng(53.78958226412256, 11.83818334413403),
       new google.maps.LatLng(53.77175454476472, 11.95481663416467),
       new google.maps.LatLng(53.67003430094935, 12.04926284394051),
       new google.maps.LatLng(53.64241752140766, 12.10846375159443),
       new google.maps.LatLng(53.63664192633648, 12.1973764161498),
       new google.maps.LatLng(53.59469729755241, 12.21691586333922),
       new google.maps.LatLng(53.5685327175168, 12.30627952903908)
    ];
    region_18.push(region_18_1);
    var region_18_2 = [
       new google.maps.LatLng(54.32945382367407, 13.11827763592134),
       new google.maps.LatLng(54.30360568667358, 13.18795701945097),
       new google.maps.LatLng(54.27230438185756, 13.22209979605942),
       new google.maps.LatLng(54.2462504751829, 13.29603309223381),
       new google.maps.LatLng(54.22481381970705, 13.40623896460362),
       new google.maps.LatLng(54.22708883557551, 13.41657646675571),
       new google.maps.LatLng(54.23968057414913, 13.43244890746443),
       new google.maps.LatLng(54.27454689316889, 13.3921332081236),
       new google.maps.LatLng(54.31238677247358, 13.437565218505),
       new google.maps.LatLng(54.34313486744097, 13.51610939328003),
       new google.maps.LatLng(54.34698584827753, 13.55591618754059),
       new google.maps.LatLng(54.33939684495292, 13.62155206665184),
       new google.maps.LatLng(54.30748870423567, 13.6508156330429),
       new google.maps.LatLng(54.27025240478265, 13.66373343642953),
       new google.maps.LatLng(54.26718183083537, 13.71175043458015),
       new google.maps.LatLng(54.29166504621104, 13.72450450021976),
       new google.maps.LatLng(54.3198268727952, 13.72641707969835),
       new google.maps.LatLng(54.32428066117486, 13.73027514511731),
       new google.maps.LatLng(54.34340214276951, 13.74585756047065),
       new google.maps.LatLng(54.38436667731902, 13.70295664187317),
       new google.maps.LatLng(54.40409902171513, 13.64756450574922),
       new google.maps.LatLng(54.3972190607353, 13.61977182850272),
       new google.maps.LatLng(54.45341669776991, 13.57152935642569),
       new google.maps.LatLng(54.4879381194925, 13.59774447635811),
       new google.maps.LatLng(54.48978013353846, 13.60132854524237),
       new google.maps.LatLng(54.51957229670209, 13.66781986114238),
       new google.maps.LatLng(54.53417346346454, 13.68183087921635),
       new google.maps.LatLng(54.56182166462567, 13.68028521149295),
       new google.maps.LatLng(54.57469111373952, 13.66920740544328),
       new google.maps.LatLng(54.58271912797019, 13.64513191805894),
       new google.maps.LatLng(54.57726996573707, 13.54148100364354),
       new google.maps.LatLng(54.56707677282336, 13.47587076347337),
       new google.maps.LatLng(54.57451976778048, 13.43132676460787),
       new google.maps.LatLng(54.60076246635125, 13.39428669525597),
       new google.maps.LatLng(54.63488220815733, 13.37615014689002),
       new google.maps.LatLng(54.65127062242901, 13.39707432790525),
       new google.maps.LatLng(54.66292204108789, 13.44138251031737),
       new google.maps.LatLng(54.68152832808057, 13.43532462973148),
       new google.maps.LatLng(54.68315256021349, 13.38776269033979),
       new google.maps.LatLng(54.67063992688927, 13.29105814559844),
       new google.maps.LatLng(54.64415627491418, 13.2373692779313),
       new google.maps.LatLng(54.60825146853327, 13.22942103341729),
       new google.maps.LatLng(54.57231662020551, 13.18290793205842),
       new google.maps.LatLng(54.57173513228872, 13.18058487225812),
       new google.maps.LatLng(54.56690261872865, 13.14724502933114),
       new google.maps.LatLng(54.55376096996306, 13.16755889270317),
       new google.maps.LatLng(54.57143061795381, 13.21004046650474),
       new google.maps.LatLng(54.59627420458061, 13.23394842166454),
       new google.maps.LatLng(54.63390990740061, 13.24888856707366),
       new google.maps.LatLng(54.64472365575506, 13.27946245387885),
       new google.maps.LatLng(54.61272602055337, 13.27297122466925),
       new google.maps.LatLng(54.57536893906202, 13.25010026256312),
       new google.maps.LatLng(54.55776128152089, 13.24614491379685),
       new google.maps.LatLng(54.57207066294559, 13.30984888782371),
       new google.maps.LatLng(54.57526948476001, 13.31242734112575),
       new google.maps.LatLng(54.5929970893884, 13.3323032143962),
       new google.maps.LatLng(54.60845139089835, 13.3610452370824),
       new google.maps.LatLng(54.58693279067224, 13.37590626225861),
       new google.maps.LatLng(54.56250838911648, 13.41765295584188),
       new google.maps.LatLng(54.55095533246247, 13.44818730437826),
       new google.maps.LatLng(54.55014737643906, 13.45263325410393),
       new google.maps.LatLng(54.53856641428492, 13.50238047762069),
       new google.maps.LatLng(54.49830614377883, 13.50841068495509),
       new google.maps.LatLng(54.47049462621776, 13.47731735184243),
       new google.maps.LatLng(54.48540297358263, 13.42572864022582),
       new google.maps.LatLng(54.53348118058697, 13.40228589664235),
       new google.maps.LatLng(54.55715538315984, 13.36275655591173),
       new google.maps.LatLng(54.57698988641719, 13.35905318039384),
       new google.maps.LatLng(54.55628092514478, 13.31057458438466),
       new google.maps.LatLng(54.54337435541321, 13.30365552838288),
       new google.maps.LatLng(54.53097344767342, 13.30131609847456),
       new google.maps.LatLng(54.54825725412481, 13.25543118227035),
       new google.maps.LatLng(54.55137495981109, 13.22060496846392),
       new google.maps.LatLng(54.54241002182314, 13.15289550856106),
       new google.maps.LatLng(54.52723676917338, 13.15487725486529),
       new google.maps.LatLng(54.50293541566175, 13.17524552310267),
       new google.maps.LatLng(54.47496416037512, 13.14658972882384),
       new google.maps.LatLng(54.44698793545165, 13.11796592845874),
       new google.maps.LatLng(54.44987774117108, 13.17137356794268),
       new google.maps.LatLng(54.42565165160585, 13.14874557926951),
       new google.maps.LatLng(54.42306954359243, 13.14737314469296),
       new google.maps.LatLng(54.42085617389319, 13.21606618622965),
       new google.maps.LatLng(54.38449422476004, 13.24417424874824),
       new google.maps.LatLng(54.37137577892939, 13.22374025131838),
       new google.maps.LatLng(54.37426527416575, 13.13375720681717),
       new google.maps.LatLng(54.35301962718169, 13.12048270504098),
       new google.maps.LatLng(54.32945382367407, 13.11827763592134)
    ];
    region_18.push(region_18_2);
    region_borders['region_18'] = region_18;
    region_center['region_18'] = '';
    
    //******************************************************************************    
    //PLZ Region 19
    //******************************************************************************  
    region_19 = [];
    var region_19_1 = [
        new google.maps.LatLng(53.03456235890071, 11.59722705651195),
        new google.maps.LatLng(53.03909550525962, 11.63740824846171),
        new google.maps.LatLng(52.95593373526575, 11.83695465256336),
        new google.maps.LatLng(52.89328612409131, 11.92429020676292),
        new google.maps.LatLng(52.88599554678032, 12.04021631287951),
        new google.maps.LatLng(52.87901978765186, 12.12796687951201),
        new google.maps.LatLng(52.90484375638221, 12.19135944419913),
        new google.maps.LatLng(52.94761067023701, 12.17206590765574),
        new google.maps.LatLng(52.97214189939813, 12.09652880524608),
        new google.maps.LatLng(53.02656220004999, 12.06211974814454),
        new google.maps.LatLng(53.01954743755868, 12.10436118650291),
        new google.maps.LatLng(53.08143656313327, 12.05360699670852),
        new google.maps.LatLng(53.15746683918565, 12.07555138945139),
        new google.maps.LatLng(53.18327044658707, 12.02182325448366),
        new google.maps.LatLng(53.22673752588963, 11.93164297348714),
        new google.maps.LatLng(53.26791577002969, 11.91266512127008),
        new google.maps.LatLng(53.29403788357227, 12.00795740624215),
        new google.maps.LatLng(53.33207470946814, 12.0225090433216),
        new google.maps.LatLng(53.3677206667209, 12.06105221709435),
        new google.maps.LatLng(53.35413308321991, 12.14079152723633),
        new google.maps.LatLng(53.32253832804033, 12.25707349848042),
        new google.maps.LatLng(53.31192072161841, 12.34097220827229),
        new google.maps.LatLng(53.35200265759583, 12.31806919636026),
        new google.maps.LatLng(53.37675143394571, 12.28118023842021),
        new google.maps.LatLng(53.4437564337134, 12.31803254015569),
        new google.maps.LatLng(53.47361613759693, 12.36749768750089),
        new google.maps.LatLng(53.50559750776956, 12.29121193266306),
        new google.maps.LatLng(53.57055557276338, 12.30775010313412),
        new google.maps.LatLng(53.59709477608748, 12.2126498325715),
        new google.maps.LatLng(53.63759694775442, 12.1976334516738),
        new google.maps.LatLng(53.64181755874037, 12.10610727498135),
        new google.maps.LatLng(53.67148673771184, 12.04449952754016),
        new google.maps.LatLng(53.73370741691167, 11.98744935866789),
        new google.maps.LatLng(53.77285938091944, 11.9553301441062),
        new google.maps.LatLng(53.79075963299771, 11.83789606640277),
        new google.maps.LatLng(53.78753961368978, 11.8089342828589),
        new google.maps.LatLng(53.81574117512092, 11.77482493591735),
        new google.maps.LatLng(53.84180805902748, 11.74294838644898),
        new google.maps.LatLng(53.81526394977266, 11.69281872651634),
        new google.maps.LatLng(53.81122203399953, 11.53371180063063),
        new google.maps.LatLng(53.7657163602913, 11.52470533120496),
        new google.maps.LatLng(53.76552451572352, 11.39243123995244),
        new google.maps.LatLng(53.74864193588493, 11.28528133071264),
        new google.maps.LatLng(53.78221558494218, 11.1837825044197),
        new google.maps.LatLng(53.83225631206392, 11.06997284359761),
        new google.maps.LatLng(53.7927504396534, 10.96944529038332),
        new google.maps.LatLng(53.78714034226706, 10.77915753896251),
        new google.maps.LatLng(53.7480263204619, 10.75992743360034),
        new google.maps.LatLng(53.71432274055119, 10.83433546903039),
        new google.maps.LatLng(53.69547511041174, 10.91941873381211),
        new google.maps.LatLng(53.6400745862849, 10.93818466052626),
        new google.maps.LatLng(53.56879093373122, 10.91136921080281),
        new google.maps.LatLng(53.57341529797153, 10.82677719159198),
        new google.maps.LatLng(53.51419169984324, 10.82299581285787),
        new google.maps.LatLng(53.50095706167492, 10.78610808710654),
        new google.maps.LatLng(53.45413069120314, 10.6934753716943),
        new google.maps.LatLng(53.44094808580019, 10.63066468538671),
        new google.maps.LatLng(53.36186618073616, 10.58834563826139),
        new google.maps.LatLng(53.35796487026709, 10.71481362455721),
        new google.maps.LatLng(53.29452059630674, 10.73540646850871),
        new google.maps.LatLng(53.28219039285695, 10.8043644376724),
        new google.maps.LatLng(53.24571365356147, 10.87069350232034),
        new google.maps.LatLng(53.21598860425835, 10.86354146501159),
        new google.maps.LatLng(53.17338564362128, 10.90486885706273),
        new google.maps.LatLng(53.09926531665624, 10.91740425432381),
        new google.maps.LatLng(53.12453827225596, 11.04355111412909),
        new google.maps.LatLng(53.10480243950757, 11.14111228019785),
        new google.maps.LatLng(53.10730224014623, 11.27563262762857),
        new google.maps.LatLng(53.05506298404777, 11.35574771510074),
        new google.maps.LatLng(53.07392572277864, 11.44474669342718),
        new google.maps.LatLng(53.04779133333621, 11.51474501913426),
        new google.maps.LatLng(53.03456235890071, 11.59722705651195)
    ];
    region_19.push(region_19_1);
    region_borders['region_19'] = region_19;
    region_center['region_19'] = '';
    
    //******************************************************************************    
    //PLZ Region 20
    //******************************************************************************  
    region_20 = [];
    var region_20_1 = [
    ];
    region_20.push(region_20_1);
    region_borders['region_20'] = region_20;
    region_center['region_20'] = '';
    
    //******************************************************************************    
    //PLZ Region 21
    //******************************************************************************  
    region_21 = [];
    var region_21_1 = [
    ];
    region_21.push(region_21_1);
    region_borders['region_21'] = region_21;
    region_center['region_21'] = '';
    
    //******************************************************************************    
    //PLZ Region 22
    //******************************************************************************  
    region_22 = [];
    var region_22_1 = [
    ];
    region_22.push(region_22_1);
    region_borders['region_22'] = region_22;
    region_center['region_22'] = '';
    
    //******************************************************************************    
    //PLZ Region 23
    //******************************************************************************  
    region_23 = [];
    var region_23_1 = [
    ];
    region_23.push(region_23_1);
    region_borders['region_23'] = region_23;
    region_center['region_23'] = '';
    
    //******************************************************************************    
    //PLZ Region 24
    //******************************************************************************  
    region_24 = [];
    var region_24_1 = [
    ];
    region_24.push(region_24_1);
    region_borders['region_24'] = region_24;
    region_center['region_24'] = '';
    
    //******************************************************************************    
    //PLZ Region 25
    //******************************************************************************  
    region_25 = [];
    var region_25_1 = [
    ];
    region_25.push(region_25_1);
    region_borders['region_25'] = region_25;
    region_center['region_25'] = '';
    
    //******************************************************************************    
    //PLZ Region 26
    //******************************************************************************  
    region_26 = [];
    var region_26_1 = [
    ];
    region_26.push(region_26_1);
    region_borders['region_26'] = region_26;
    region_center['region_26'] = '';
    
    //******************************************************************************    
    //PLZ Region 27
    //******************************************************************************  
    region_27 = [];
    var region_27_1 = [
    ];
    region_27.push(region_27_1);
    region_borders['region_27'] = region_27;
    region_center['region_27'] = '';
    
    //******************************************************************************    
    //PLZ Region 28
    //******************************************************************************  
    region_28 = [];
    var region_28_1 = [
    ];
    region_28.push(region_28_1);
    region_borders['region_28'] = region_28;
    region_center['region_28'] = '';
    
    //******************************************************************************    
    //PLZ Region 29
    //******************************************************************************  
    region_29 = [];
    var region_29_1 = [
    ];
    region_29.push(region_29_1);
    region_borders['region_29'] = region_29;
    region_center['region_29'] = '';
    
    //******************************************************************************    
    //PLZ Region 30
    //******************************************************************************  
    region_30 = [];
    var region_30_1 = [
    ];
    region_30.push(region_30_1);
    region_borders['region_30'] = region_30;
    region_center['region_30'] = '';
    
    //******************************************************************************    
    //PLZ Region 31
    //******************************************************************************  
    region_31 = [];
    var region_31_1 = [
    ];
    region_31.push(region_31_1);
    region_borders['region_31'] = region_31;
    region_center['region_31'] = '';
    
    //******************************************************************************    
    //PLZ Region 32
    //******************************************************************************  
    region_32 = [];
    var region_32_1 = [
    ];
    region_32.push(region_32_1);
    region_borders['region_32'] = region_32;
    region_center['region_32'] = '';
    
    //******************************************************************************    
    //PLZ Region 33
    //******************************************************************************  
    region_33 = [];
    var region_33_1 = [
    ];
    region_33.push(region_33_1);
    region_borders['region_33'] = region_33;
    region_center['region_33'] = '';
    
    //******************************************************************************    
    //PLZ Region 34
    //******************************************************************************  
    region_34 = [];
    var region_34_1 = [
    ];
    region_34.push(region_34_1);
    region_borders['region_34'] = region_34;
    region_center['region_34'] = '';
    
    //******************************************************************************    
    //PLZ Region 35
    //******************************************************************************  
    region_35 = [];
    var region_35_1 = [
    ];
    region_35.push(region_35_1);
    region_borders['region_35'] = region_35;
    region_center['region_35'] = '';
    
    //******************************************************************************    
    //PLZ Region 36
    //******************************************************************************  
    region_36 = [];
    var region_36_1 = [
    ];
    region_36.push(region_36_1);
    region_borders['region_36'] = region_36;
    region_center['region_36'] = '';
    
    //******************************************************************************    
    //PLZ Region 37
    //******************************************************************************  
    region_37 = [];
    var region_37_1 = [
    ];
    region_37.push(region_37_1);
    region_borders['region_37'] = region_37;
    region_center['region_37'] = '';
    
    //******************************************************************************    
    //PLZ Region 38
    //******************************************************************************  
    region_38 = [];
    var region_38_1 = [
    ];
    region_38.push(region_38_1);
    region_borders['region_38'] = region_38;
    region_center['region_38'] = '';
    
    //******************************************************************************    
    //PLZ Region 39
    //******************************************************************************  
    region_39 = [];
    var region_39_1 = [
    ];
    region_39.push(region_39_1);
    region_borders['region_39'] = region_39;
    region_center['region_39'] = '';
}