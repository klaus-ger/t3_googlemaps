var region_borders = {};
var region_center = {};
var regionpolys = [];
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
            fillColor: '#e1dacd',
            fillOpacity: 0.2
        });
        singlecountry.setMap(map);
        
        regionpolys.push(singlecountry);
        
        google.maps.event.addListener(singlecountry, 'mouseover', function(event) {
            //console.log('continent');
            this.setOptions({
                strokeColor: "#928e88"
            });
            this.setOptions({
                fillColor: "#e1dacd"
            });
            this.setOptions({
                fillOpacity: 0.7
            });
        }); 
          
          
        google.maps.event.addListener(singlecountry, 'mouseout', function(event) {
            this.setOptions({
                strokeColor: "#928e88"
            });
            this.setOptions({
                fillColor: "#e1dacd"
            });
            this.setOptions({
                fillOpacity: 0.2
            });
        });
                
        //Klick Function
        google.maps.event.addListener(singlecountry, 'click', function(event) {
            
            map.setZoom(8);
        //zoom4();
                    
        });
        

       
    //console.log(val);
    }); //End each - loop through the country array
//remove region polys
//  for (i = 0; i<reginpolys.length; i++){
//     reginpolys[i].setVisible(false);
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
    new google.maps.LatLng(53.5328909501092, 9.932500628206927),
    new google.maps.LatLng(53.51887897822572, 9.960962085022311),
    new google.maps.LatLng(53.51945700304969, 10.00576649333026),
    new google.maps.LatLng(53.50571825913904, 10.0549996535492),
    new google.maps.LatLng(53.52973286412021, 10.08039817887758),
    new google.maps.LatLng(53.55586130336118, 10.08187381125049),
    new google.maps.LatLng(53.57893863592407, 10.05284537541993),
    new google.maps.LatLng(53.59501019703228, 10.0099809814418),
    new google.maps.LatLng(53.60340028929006, 9.973324222137345),
    new google.maps.LatLng(53.58556506271944, 9.944091087917027),
    new google.maps.LatLng(53.57775135453651, 9.909492034181246),
    new google.maps.LatLng(53.55641976970781, 9.901043935030909),
    new google.maps.LatLng(53.54305065052689, 9.909531766199022),
    new google.maps.LatLng(53.53496401101456, 9.910925648773725),
    new google.maps.LatLng(53.5328909501092, 9.932500628206927)
    ];
    region_20.push(region_20_1);
    region_borders['region_20'] = region_20;
    region_center['region_20'] = '';
    
    //******************************************************************************    
    //PLZ Region 21
    //******************************************************************************  
    region_21 = [];
    var region_21_1 = [
    new google.maps.LatLng(53.21491325243947, 9.694287728592311),
    new google.maps.LatLng(53.18149062769326, 9.797831287644833),
    new google.maps.LatLng(53.20224339117848, 9.849085754823436),
    new google.maps.LatLng(53.17420424989081, 9.941565928633754),
    new google.maps.LatLng(53.17744836195747, 10.000416322054),
    new google.maps.LatLng(53.06545020792549, 10.04869579374416),
    new google.maps.LatLng(53.04959774753709, 10.15498641297406),
    new google.maps.LatLng(53.0972623045637, 10.26909112332819),
    new google.maps.LatLng(53.08943578313261, 10.31477203338175),
    new google.maps.LatLng(53.18769722473441, 10.37381879927048),
    new google.maps.LatLng(53.16946226237436, 10.44393943213321),
    new google.maps.LatLng(53.20028732602159, 10.5011916495685),
    new google.maps.LatLng(53.1704316582672, 10.58296855226391),
    new google.maps.LatLng(53.18990031162609, 10.61319952291205),
    new google.maps.LatLng(53.17936938303254, 10.67012385917815),
    new google.maps.LatLng(53.0789233469953, 10.69030659175527),
    new google.maps.LatLng(53.07613835409493, 10.76392932535104),
    new google.maps.LatLng(53.08158752173776, 10.83696408564338),
    new google.maps.LatLng(53.10336308376777, 10.91516090027095),
    new google.maps.LatLng(53.17435839022638, 10.90322330995605),
    new google.maps.LatLng(53.21604584574569, 10.86396262403167),
    new google.maps.LatLng(53.24660849212345, 10.87276272482984),
    new google.maps.LatLng(53.2824984473125, 10.79870416834371),
    new google.maps.LatLng(53.29484515065963, 10.73170165388693),
    new google.maps.LatLng(53.36059276895286, 10.71790136033616),
    new google.maps.LatLng(53.36329265864626, 10.64374212341252),
    new google.maps.LatLng(53.36175178532404, 10.58694492272279),
    new google.maps.LatLng(53.44176849098785, 10.63066350913481),
    new google.maps.LatLng(53.45583021854642, 10.69739340536106),
    new google.maps.LatLng(53.50235479650089, 10.78700232798323),
    new google.maps.LatLng(53.51355315196091, 10.70434507848063),
    new google.maps.LatLng(53.5600686857155, 10.68005526955354),
    new google.maps.LatLng(53.55266176853906, 10.58580242590704),
    new google.maps.LatLng(53.58213163943217, 10.58037860413937),
    new google.maps.LatLng(53.60053244053502, 10.50189964741351),
    new google.maps.LatLng(53.60257756532375, 10.44633092644366),
    new google.maps.LatLng(53.55442644661439, 10.3241758980717),
    new google.maps.LatLng(53.57342309713296, 10.31532570790326),
    new google.maps.LatLng(53.55639447648522, 10.204272489788),
    new google.maps.LatLng(53.56065113474624, 10.11604776559173),
    new google.maps.LatLng(53.55692999460671, 10.08042263057077),
    new google.maps.LatLng(53.53065680672467, 10.07885843353457),
    new google.maps.LatLng(53.50713203355768, 10.05473864880588),
    new google.maps.LatLng(53.52019482275761, 10.00502495629803),
    new google.maps.LatLng(53.52039440682621, 9.959577160667854),
    new google.maps.LatLng(53.53295798036929, 9.933741739587976),
    new google.maps.LatLng(53.54019498806615, 9.873482228574824),
    new google.maps.LatLng(53.55251884979278, 9.783070828703204),
    new google.maps.LatLng(53.55645304383088, 9.695939627080588),
    new google.maps.LatLng(53.5731801690185, 9.646083032578757),
    new google.maps.LatLng(53.5697302073153, 9.629443536961212),
    new google.maps.LatLng(53.5872158405358, 9.579486921553562),
    new google.maps.LatLng(53.61359746000721, 9.538005906185916),
    new google.maps.LatLng(53.65308672600587, 9.509508569244062),
    new google.maps.LatLng(53.7089908963418, 9.441139219666875),
    new google.maps.LatLng(53.76098684322394, 9.382510676304037),
    new google.maps.LatLng(53.80590012465917, 9.345007699170971),
    new google.maps.LatLng(53.8449951334464, 9.296942720737782),
    new google.maps.LatLng(53.85742661133776, 9.270685486785473),
    new google.maps.LatLng(53.8634490882522, 9.219946655143119),
    new google.maps.LatLng(53.8634251351845, 9.117924873066247),
    new google.maps.LatLng(53.84141709293776, 9.022784202083283),
    new google.maps.LatLng(53.83971148589032, 8.981886766024253),
    new google.maps.LatLng(53.83076252966079, 8.906770594647803),
    new google.maps.LatLng(53.83014331250496, 8.832855423360373),
    new google.maps.LatLng(53.77409331714513, 8.86817888019462),
    new google.maps.LatLng(53.78399583249408, 8.792108799274153),
    new google.maps.LatLng(53.75704006434636, 8.715021536420167),
    new google.maps.LatLng(53.72689421447193, 8.72316945551783),
    new google.maps.LatLng(53.6835435373923, 8.77285406391808),
    new google.maps.LatLng(53.62642353462019, 8.972669217521563),
    new google.maps.LatLng(53.55340125002992, 8.99423668118542),
    new google.maps.LatLng(53.56603692749992, 9.061646067425366),
    new google.maps.LatLng(53.55414568257359, 9.110431217625976),
    new google.maps.LatLng(53.58969573100909, 9.143332300519248),
    new google.maps.LatLng(53.53032090797726, 9.206692056410738),
    new google.maps.LatLng(53.54446786933027, 9.265301140971724),
    new google.maps.LatLng(53.52386342578677, 9.289668331917291),
    new google.maps.LatLng(53.53362884516412, 9.338011790635292),
    new google.maps.LatLng(53.47327735993833, 9.409729338446606),
    new google.maps.LatLng(53.44881007503505, 9.344423801897719),
    new google.maps.LatLng(53.38175725060804, 9.365396374162653),
    new google.maps.LatLng(53.34293455691506, 9.447829874692044),
    new google.maps.LatLng(53.38528960507866, 9.516403521485138),
    new google.maps.LatLng(53.25387426768043, 9.605512153314573),
    new google.maps.LatLng(53.21491325243947, 9.694287728592311)
    ];
    region_21.push(region_21_1);
    region_borders['region_21'] = region_21;
    region_center['region_21'] = '';
    
    //******************************************************************************    
    //PLZ Region 22
    //******************************************************************************  
    region_22 = [];
    var region_22_1 = [
    new google.maps.LatLng(53.59406136141784, 10.52737432345345),
    new google.maps.LatLng(53.63259815525567, 10.49598141826641),
    new google.maps.LatLng(53.6460131342838, 10.50300161533387),
    new google.maps.LatLng(53.66679576682838, 10.46085731000099),
    new google.maps.LatLng(53.69751827844242, 10.44542725378653),
    new google.maps.LatLng(53.7260959584419, 10.44190514637169),
    new google.maps.LatLng(53.73220979864369, 10.38532079442074),
    new google.maps.LatLng(53.7175023121727, 10.35069389229646),
    new google.maps.LatLng(53.75321605590828, 10.34639294958191),
    new google.maps.LatLng(53.76188445946159, 10.32494933035398),
    new google.maps.LatLng(53.7453613196509, 10.29126815283815),
    new google.maps.LatLng(53.76546202868074, 10.23855284621305),
    new google.maps.LatLng(53.73929432545188, 10.17061639931011),
    new google.maps.LatLng(53.76364660767663, 10.1148909949659),
    new google.maps.LatLng(53.76281536190468, 10.03918487301504),
    new google.maps.LatLng(53.74518471775377, 10.01616680202129),
    new google.maps.LatLng(53.75976518237891, 9.983108744972959),
    new google.maps.LatLng(53.71358900113772, 9.9543253162523),
    new google.maps.LatLng(53.68727678046521, 9.940745377946715),
    new google.maps.LatLng(53.65327925219989, 9.941536694608352),
    new google.maps.LatLng(53.62406609624516, 9.905321198592805),
    new google.maps.LatLng(53.60665011380232, 9.869458954267076),
    new google.maps.LatLng(53.60876376695482, 9.800694375862362),
    new google.maps.LatLng(53.61756943712392, 9.759979785727236),
    new google.maps.LatLng(53.60476009552407, 9.665058457899748),
    new google.maps.LatLng(53.57299000094909, 9.645859023841917),
    new google.maps.LatLng(53.5561155492563, 9.69750516773642),
    new google.maps.LatLng(53.55245763245676, 9.776140728456625),
    new google.maps.LatLng(53.53459486714059, 9.91191039270878),
    new google.maps.LatLng(53.54201582517515, 9.910124195862908),
    new google.maps.LatLng(53.55652429567178, 9.901555502578653),
    new google.maps.LatLng(53.57677864967722, 9.911167454917674),
    new google.maps.LatLng(53.58373924336428, 9.941688154727439),
    new google.maps.LatLng(53.60320522949129, 9.974902813121036),
    new google.maps.LatLng(53.57788987682543, 10.05381285096539),
    new google.maps.LatLng(53.55610517165862, 10.08300747615189),
    new google.maps.LatLng(53.56000600323962, 10.11942463938948),
    new google.maps.LatLng(53.55608601649241, 10.20553795389536),
    new google.maps.LatLng(53.57234509970306, 10.31419807726899),
    new google.maps.LatLng(53.5538594709415, 10.325295327183),
    new google.maps.LatLng(53.60165879990503, 10.44725103616419),
    new google.maps.LatLng(53.60041591318482, 10.50024709260926),
    new google.maps.LatLng(53.59406136141784, 10.52737432345345)
    ];
    region_22.push(region_22_1);
    region_borders['region_22'] = region_22;
    region_center['region_22'] = '';
    
    //******************************************************************************    
    //PLZ Region 23
    //******************************************************************************  
    region_23 = [];
    var region_23_1 = [
    new google.maps.LatLng(53.50122461196573, 10.78458606990911),
    new google.maps.LatLng(53.51769825715566, 10.82326541452628),
    new google.maps.LatLng(53.57557174533281, 10.82304776307036),
    new google.maps.LatLng(53.56948652095965, 10.90944827095192),
    new google.maps.LatLng(53.64044979093034, 10.93855013102655),
    new google.maps.LatLng(53.69679428744238, 10.91688334636734),
    new google.maps.LatLng(53.71306935959227, 10.83421022336871),
    new google.maps.LatLng(53.74819385413659, 10.75913151705321),
    new google.maps.LatLng(53.75561720490808, 10.76326189958311),
    new google.maps.LatLng(53.78814529642739, 10.77982411238099),
    new google.maps.LatLng(53.78812189493225, 10.78554999045137),
    new google.maps.LatLng(53.79373374950036, 10.95965416786887),
    new google.maps.LatLng(53.79368516981498, 10.97219603264216),
    new google.maps.LatLng(53.82222724055066, 11.03564281097954),
    new google.maps.LatLng(53.83379193280111, 11.06989748085914),
    new google.maps.LatLng(53.78252545171416, 11.18301370890753),
    new google.maps.LatLng(53.74938621142813, 11.28591713185621),
    new google.maps.LatLng(53.76628783649334, 11.39558298772305),
    new google.maps.LatLng(53.76623270070976, 11.40355296594615),
    new google.maps.LatLng(53.76736737769217, 11.52674312853422),
    new google.maps.LatLng(53.81245066042829, 11.53400960283063),
    new google.maps.LatLng(53.81597672512692, 11.69424529003388),
    new google.maps.LatLng(53.85613495959301, 11.76702779884625),
    new google.maps.LatLng(53.9388537331457, 11.79233060611056),
    new google.maps.LatLng(53.97691333032919, 11.76295409836665),
    new google.maps.LatLng(53.93500825840712, 11.66661078702167),
    new google.maps.LatLng(53.98148633273391, 11.64904131269998),
    new google.maps.LatLng(53.98702764868226, 11.58227701083153),
    new google.maps.LatLng(54.02623737078579, 11.55412955362346),
    new google.maps.LatLng(53.99705441424828, 11.48624096883743),
    new google.maps.LatLng(53.9620184006592, 11.47736188261622),
    new google.maps.LatLng(53.93433426802806, 11.47713233042269),
    new google.maps.LatLng(53.9126177134613, 11.45040149514126),
    new google.maps.LatLng(53.8993771435139, 11.43000994327141),
    new google.maps.LatLng(53.93642537883863, 11.36394301154171),
    new google.maps.LatLng(53.9550688835192, 11.33067042132922),
    new google.maps.LatLng(53.93055358172296, 11.26351166614472),
    new google.maps.LatLng(53.95629075723875, 11.23131484164601),
    new google.maps.LatLng(53.97757357425866, 11.25392880635221),
    new google.maps.LatLng(53.9841529849746, 11.22354106168056),
    new google.maps.LatLng(53.99363897367979, 11.18373756853797),
    new google.maps.LatLng(54.00802276907609, 11.18151174636175),
    new google.maps.LatLng(54.01195164249205, 11.09208562960489),
    new google.maps.LatLng(53.98298771914774, 10.9715199174989),
    new google.maps.LatLng(53.95470769485933, 10.8986518767959),
    new google.maps.LatLng(53.99401733300971, 10.86687559000111),
    new google.maps.LatLng(53.9913223468069, 10.78726690999083),
    new google.maps.LatLng(54.04899465495426, 10.75144919965234),
    new google.maps.LatLng(54.0887037668265, 10.79960575355472),
    new google.maps.LatLng(54.08036065519841, 10.87884601339652),
    new google.maps.LatLng(54.13543602814407, 10.94783041897885),
    new google.maps.LatLng(54.19799538700324, 11.08889150183185),
    new google.maps.LatLng(54.27202341605056, 11.07980415192419),
    new google.maps.LatLng(54.33798332905277, 11.07644021861352),
    new google.maps.LatLng(54.36258150414452, 11.09200909000156),
    new google.maps.LatLng(54.37555215072379, 11.12673733046867),
    new google.maps.LatLng(54.38944315909778, 11.12447628399917),
    new google.maps.LatLng(54.39248452155064, 11.09694167639999),
    new google.maps.LatLng(54.37214815236041, 11.06218935028244),
    new google.maps.LatLng(54.36857495604361, 11.03950833971224),
    new google.maps.LatLng(54.3671654633688, 11.02161565388695),
    new google.maps.LatLng(54.38029702860118, 11.01795435790454),
    new google.maps.LatLng(54.38418309703439, 10.93422099021496),
    new google.maps.LatLng(54.36530310119107, 10.89880084337323),
    new google.maps.LatLng(54.3573809037007, 10.87040467584013),
    new google.maps.LatLng(54.32999731897527, 10.82608017020757),
    new google.maps.LatLng(54.30709860476271, 10.7795599950566),
    new google.maps.LatLng(54.30571057418398, 10.73002533989919),
    new google.maps.LatLng(54.30433144644658, 10.70997719332507),
    new google.maps.LatLng(54.28924295971248, 10.7120147815184),
    new google.maps.LatLng(54.26917778903892, 10.73314264973188),
    new google.maps.LatLng(54.22185608818545, 10.70169665716655),
    new google.maps.LatLng(54.23461481103817, 10.67402096329492),
    new google.maps.LatLng(54.21854510522013, 10.65149213421375),
    new google.maps.LatLng(54.23619618504256, 10.6000730338023),
    new google.maps.LatLng(54.21306981255187, 10.53746347348983),
    new google.maps.LatLng(54.1768651942711, 10.48558245610709),
    new google.maps.LatLng(54.12649531373817, 10.53359201305834),
    new google.maps.LatLng(54.11832158134681, 10.4419755827489),
    new google.maps.LatLng(54.08627565136442, 10.40354576613695),
    new google.maps.LatLng(54.07598181117335, 10.30157194098655),
    new google.maps.LatLng(54.03004697470425, 10.28483076255753),
    new google.maps.LatLng(53.99406959734645, 10.29410106348162),
    new google.maps.LatLng(54.00544773608678, 10.23315991997575),
    new google.maps.LatLng(53.96953974153257, 10.19155984167877),
    new google.maps.LatLng(53.97005641507447, 10.13811852366655),
    new google.maps.LatLng(53.93086860109407, 10.03409402700343),
    new google.maps.LatLng(53.91098901521722, 10.0513468831592),
    new google.maps.LatLng(53.90520491943974, 10.10243767349466),
    new google.maps.LatLng(53.88278423064346, 10.11274881163684),
    new google.maps.LatLng(53.8671272399168, 10.15404311198108),
    new google.maps.LatLng(53.82001289520806, 10.11434558377513),
    new google.maps.LatLng(53.76391566411967, 10.11770875912804),
    new google.maps.LatLng(53.73916367264324, 10.17311752646008),
    new google.maps.LatLng(53.76359354425461, 10.23809474163696),
    new google.maps.LatLng(53.7451485993683, 10.29392795960512),
    new google.maps.LatLng(53.75922988532786, 10.32539379408773),
    new google.maps.LatLng(53.75158899728689, 10.34878886383624),
    new google.maps.LatLng(53.71786872399543, 10.35191361648461),
    new google.maps.LatLng(53.72932350372626, 10.3823776236012),
    new google.maps.LatLng(53.72491554668909, 10.44069542934042),
    new google.maps.LatLng(53.69690719382569, 10.44683709352632),
    new google.maps.LatLng(53.66475252386736, 10.46178297226887),
    new google.maps.LatLng(53.64543100169184, 10.50121624179418),
    new google.maps.LatLng(53.63083090119706, 10.49677685144253),
    new google.maps.LatLng(53.59455398761958, 10.52585642993755),
    new google.maps.LatLng(53.58206610303843, 10.57812726727078),
    new google.maps.LatLng(53.55267547608673, 10.58786650991206),
    new google.maps.LatLng(53.55905078255783, 10.6789902950373),
    new google.maps.LatLng(53.51165394941533, 10.70770833224204),
    new google.maps.LatLng(53.50122461196573, 10.78458606990911)
    ];
    region_23.push(region_23_1);
    region_borders['region_23'] = region_23;
    region_center['region_23'] = '';
    
    //******************************************************************************    
    //PLZ Region 24
    //******************************************************************************  
    region_24 = [];
    var region_24_1 = [
    new google.maps.LatLng(53.76287695901837, 10.1150244339306),
    new google.maps.LatLng(53.81981424260186, 10.1162625920897),
    new google.maps.LatLng(53.86953472937052, 10.15301378459513),
    new google.maps.LatLng(53.88425065178512, 10.11270446369841),
    new google.maps.LatLng(53.90586757845961, 10.10453707013581),
    new google.maps.LatLng(53.91234493058639, 10.05062291681618),
    new google.maps.LatLng(53.93300309061666, 10.03740208336731),
    new google.maps.LatLng(53.97104601743539, 10.1384293464739),
    new google.maps.LatLng(53.97032380767277, 10.19458762068533),
    new google.maps.LatLng(54.00713346433282, 10.2337244407958),
    new google.maps.LatLng(53.99736737880706, 10.29219602194875),
    new google.maps.LatLng(54.02836239451697, 10.28581961195366),
    new google.maps.LatLng(54.07735889152795, 10.303122242822),
    new google.maps.LatLng(54.08730585353361, 10.40256378920914),
    new google.maps.LatLng(54.12086798275007, 10.44187111112521),
    new google.maps.LatLng(54.12764710530555, 10.53572797405829),
    new google.maps.LatLng(54.17573536465021, 10.48584701828066),
    new google.maps.LatLng(54.21563013181949, 10.53838706074445),
    new google.maps.LatLng(54.23599589501269, 10.59996794630464),
    new google.maps.LatLng(54.23550483734716, 10.60313356254924),
    new google.maps.LatLng(54.21864904084647, 10.6506407840792),
    new google.maps.LatLng(54.23697672816777, 10.675690630899),
    new google.maps.LatLng(54.2215033618679, 10.70290927039535),
    new google.maps.LatLng(54.27043577805217, 10.72981177276212),
    new google.maps.LatLng(54.2890051193768, 10.71086274101609),
    new google.maps.LatLng(54.30572623190099, 10.71036076868475),
    new google.maps.LatLng(54.31309589527125, 10.68411651138613),
    new google.maps.LatLng(54.32150000474736, 10.68217740417037),
    new google.maps.LatLng(54.33748007164952, 10.65290586900912),
    new google.maps.LatLng(54.35123288335469, 10.64279621008146),
    new google.maps.LatLng(54.38187376344126, 10.54119741698409),
    new google.maps.LatLng(54.39346589306814, 10.48303381395105),
    new google.maps.LatLng(54.42640229169904, 10.39966127924196),
    new google.maps.LatLng(54.43521551210275, 10.33524400074957),
    new google.maps.LatLng(54.43211041127024, 10.30609446163283),
    new google.maps.LatLng(54.419494319457, 10.26979825874663),
    new google.maps.LatLng(54.41090376744833, 10.22734891661495),
    new google.maps.LatLng(54.3911853057076, 10.20384627772122),
    new google.maps.LatLng(54.37079479912272, 10.19175719532526),
    new google.maps.LatLng(54.36162979626317, 10.17865278227261),
    new google.maps.LatLng(54.33598029071676, 10.17803210191418),
    new google.maps.LatLng(54.32467977458003, 10.15899114376404),
    new google.maps.LatLng(54.32933861896395, 10.15177253355034),
    new google.maps.LatLng(54.34017779939849, 10.15909639659577),
    new google.maps.LatLng(54.35245720783044, 10.14756703903154),
    new google.maps.LatLng(54.36202847595999, 10.15341572478446),
    new google.maps.LatLng(54.37455889440005, 10.16314007123411),
    new google.maps.LatLng(54.38918502473823, 10.18400748345131),
    new google.maps.LatLng(54.39508322771803, 10.19735842547268),
    new google.maps.LatLng(54.40540089573823, 10.19945013021689),
    new google.maps.LatLng(54.43506855025259, 10.17113082749858),
    new google.maps.LatLng(54.45389530297147, 10.20048756179333),
    new google.maps.LatLng(54.48589792251963, 10.13301338637922),
    new google.maps.LatLng(54.47551978548661, 10.02303524237216),
    new google.maps.LatLng(54.46710408496829, 9.983780352562581),
    new google.maps.LatLng(54.46338581006406, 9.95725295702397),
    new google.maps.LatLng(54.45914906262307, 9.930048830024329),
    new google.maps.LatLng(54.45192326235772, 9.910613205409064),
    new google.maps.LatLng(54.45006759857682, 9.86630876464098),
    new google.maps.LatLng(54.47037486665287, 9.837974183485496),
    new google.maps.LatLng(54.47555347734009, 9.847865071374855),
    new google.maps.LatLng(54.47312850326739, 9.869473335170724),
    new google.maps.LatLng(54.48791220600154, 9.924120327532563),
    new google.maps.LatLng(54.5229338550394, 10.00390155531003),
    new google.maps.LatLng(54.54930411737997, 10.01780227389483),
    new google.maps.LatLng(54.55244696231853, 10.02888312737158),
    new google.maps.LatLng(54.65877521332098, 10.03936466955825),
    new google.maps.LatLng(54.6913618374404, 10.03705117155828),
    new google.maps.LatLng(54.71752093807618, 9.992650648041097),
    new google.maps.LatLng(54.76391329270514, 9.971974463373467),
    new google.maps.LatLng(54.7963882510365, 9.909418039585315),
    new google.maps.LatLng(54.77369533512121, 9.900192637513989),
    new google.maps.LatLng(54.75525491368879, 9.872564973380864),
    new google.maps.LatLng(54.7636621478244, 9.836882754312457),
    new google.maps.LatLng(54.79619535430254, 9.792696588675602),
    new google.maps.LatLng(54.80564632661424, 9.732149604449276),
    new google.maps.LatLng(54.82052915441365, 9.67329940247879),
    new google.maps.LatLng(54.82272041176752, 9.64073936023388),
    new google.maps.LatLng(54.83091926279646, 9.608499925255028),
    new google.maps.LatLng(54.84525592656946, 9.587039402759093),
    new google.maps.LatLng(54.8755343348564, 9.611878073811834),
    new google.maps.LatLng(54.86865183169175, 9.588464039963398),
    new google.maps.LatLng(54.86657873901556, 9.586159643107703),
    new google.maps.LatLng(54.84692317182419, 9.54928621087247),
    new google.maps.LatLng(54.82797750432768, 9.511248221130188),
    new google.maps.LatLng(54.81920909974753, 9.48061532977219),
    new google.maps.LatLng(54.81309545774922, 9.460293818926832),
    new google.maps.LatLng(54.80607723543697, 9.446634818925599),
    new google.maps.LatLng(54.81570174851436, 9.425204795460644),
    new google.maps.LatLng(54.8186654954787, 9.424805805483427),
    new google.maps.LatLng(54.83901524454296, 9.408092567735959),
    new google.maps.LatLng(54.83371056610889, 9.379527666374667),
    new google.maps.LatLng(54.81258114176379, 9.35686701142026),
    new google.maps.LatLng(54.7991898023983, 9.342038010664186),
    new google.maps.LatLng(54.80761865092101, 9.253350585964167),
    new google.maps.LatLng(54.83222791579555, 9.233869611877722),
    new google.maps.LatLng(54.8473556359233, 9.238211942443984),
    new google.maps.LatLng(54.8707705273377, 9.143421566411146),
    new google.maps.LatLng(54.82408545456043, 9.105396232217633),
    new google.maps.LatLng(54.76745629123608, 9.120082536789319),
    new google.maps.LatLng(54.74008390896734, 9.084313905205867),
    new google.maps.LatLng(54.69854782481251, 9.073542990151228),
    new google.maps.LatLng(54.70066024553506, 9.172807277955179),
    new google.maps.LatLng(54.5789212570722, 9.261455045313289),
    new google.maps.LatLng(54.55439589270712, 9.316730072874535),
    new google.maps.LatLng(54.50717616506903, 9.284766854645953),
    new google.maps.LatLng(54.47531417155592, 9.322798996849242),
    new google.maps.LatLng(54.45245562254456, 9.332795782025421),
    new google.maps.LatLng(54.40974165520381, 9.280154218035886),
    new google.maps.LatLng(54.36461137431883, 9.201452532321522),
    new google.maps.LatLng(54.33619781887197, 9.301037061959082),
    new google.maps.LatLng(54.28730216857376, 9.283624495640844),
    new google.maps.LatLng(54.28760685793481, 9.400853569334323),
    new google.maps.LatLng(54.23704566150184, 9.448519160862105),
    new google.maps.LatLng(54.18049905775829, 9.460190463967962),
    new google.maps.LatLng(54.17980451429479, 9.525334006047391),
    new google.maps.LatLng(54.12088069319412, 9.515405931966585),
    new google.maps.LatLng(54.08511341186261, 9.585659530351355),
    new google.maps.LatLng(54.04605363629129, 9.609881677567834),
    new google.maps.LatLng(54.04560135421155, 9.741182848955203),
    new google.maps.LatLng(54.02753317958163, 9.768952652273949),
    new google.maps.LatLng(53.98037126242747, 9.755756390221315),
    new google.maps.LatLng(53.95709188979648, 9.818586453497456),
    new google.maps.LatLng(53.92145006091201, 9.827035761989579),
    new google.maps.LatLng(53.89485940966389, 9.748697606364647),
    new google.maps.LatLng(53.86006284193709, 9.794840246382785),
    new google.maps.LatLng(53.8191031591772, 9.869748860642023),
    new google.maps.LatLng(53.80167421642753, 9.937556583442186),
    new google.maps.LatLng(53.77429830135232, 9.952747404943025),
    new google.maps.LatLng(53.74676041336843, 10.01670184210398),
    new google.maps.LatLng(53.76182119044264, 10.03816000638146),
    new google.maps.LatLng(53.76287695901837, 10.1150244339306) 
    ];
    region_24.push(region_24_1);
    region_borders['region_24'] = region_24;
    region_center['region_24'] = '';
    
    //******************************************************************************    
    //PLZ Region 25
    //******************************************************************************  
    region_25 = [];
    var region_25_1 = [
    new google.maps.LatLng(54.87210762898854, 9.143143198859496),
    new google.maps.LatLng(54.87580858029219, 9.036341171036625),
    new google.maps.LatLng(54.90173575356413, 8.917365855439368),
    new google.maps.LatLng(54.89568692527919, 8.851197602390201),
    new google.maps.LatLng(54.90511138005044, 8.827391967584044),
    new google.maps.LatLng(54.89305234194197, 8.775603921301201),
    new google.maps.LatLng(54.89134535437424, 8.729649365464912),
    new google.maps.LatLng(54.90959415576085, 8.643805574321997),
    new google.maps.LatLng(54.88609503216963, 8.587840845951487),
    new google.maps.LatLng(54.87562223322714, 8.601054237247745),
    new google.maps.LatLng(54.8405883624676, 8.605245208116671),
    new google.maps.LatLng(54.79137598998258, 8.672831816714945),
    new google.maps.LatLng(54.74004855079719, 8.712919696988186),
    new google.maps.LatLng(54.72966692094186, 8.699404753975891),
    new google.maps.LatLng(54.71290473744161, 8.744110725919644),
    new google.maps.LatLng(54.68505282447322, 8.754905374829821),
    new google.maps.LatLng(54.64725948012841, 8.831957327004769),
    new google.maps.LatLng(54.61629866167419, 8.841607645222824),
    new google.maps.LatLng(54.59899818829945, 8.819840890174074),
    new google.maps.LatLng(54.60365348679964, 8.881752751242328),
    new google.maps.LatLng(54.58562061120467, 8.887427237640352),
    new google.maps.LatLng(54.55768683801745, 8.876163583669586),
    new google.maps.LatLng(54.56026563605221, 8.93606547391412),
    new google.maps.LatLng(54.55092566980605, 8.937166881223735),
    new google.maps.LatLng(54.51868481125742, 8.997303999847784),
    new google.maps.LatLng(54.48611035273845, 9.017772598439564),
    new google.maps.LatLng(54.46252739532297, 9.000495431500873),
    new google.maps.LatLng(54.45890185950918, 8.971334078792129),
    new google.maps.LatLng(54.41608164603319, 8.908629893038514),
    new google.maps.LatLng(54.40707717715518, 8.873954124919107),
    new google.maps.LatLng(54.41156997823839, 8.810586334924235),
    new google.maps.LatLng(54.39841085361958, 8.706117751897153),
    new google.maps.LatLng(54.39841773851317, 8.677137918841257),
    new google.maps.LatLng(54.38010318495994, 8.638619003366099),
    new google.maps.LatLng(54.36840415548885, 8.648104447838158),
    new google.maps.LatLng(54.37048301072091, 8.669538710916953),
    new google.maps.LatLng(54.36413911878245, 8.682983798312678),
    new google.maps.LatLng(54.35762845021996, 8.683629591946406),
    new google.maps.LatLng(54.34785142869153, 8.666249401566937),
    new google.maps.LatLng(54.34291658616565, 8.653135070191624),
    new google.maps.LatLng(54.33793745174899, 8.636365855105613),
    new google.maps.LatLng(54.35688641738464, 8.611521785964014),
    new google.maps.LatLng(54.30425144486081, 8.583669141955578),
    new google.maps.LatLng(54.28332911948086, 8.60441303306612),
    new google.maps.LatLng(54.28173397510498, 8.626964257618248),
    new google.maps.LatLng(54.26953090405487, 8.658022150616008),
    new google.maps.LatLng(54.2680450379563, 8.68675914255045),
    new google.maps.LatLng(54.28752330540944, 8.711561263044395),
    new google.maps.LatLng(54.2911314665994, 8.752706286228145),
    new google.maps.LatLng(54.27952080649756, 8.796793434749352),
    new google.maps.LatLng(54.28939528864089, 8.832708498624875),
    new google.maps.LatLng(54.26186575223559, 8.852798719050895),
    new google.maps.LatLng(54.22355991766041, 8.848174828082943),
    new google.maps.LatLng(54.19048937453118, 8.822545351645063),
    new google.maps.LatLng(54.15624160254799, 8.824330890001233),
    new google.maps.LatLng(54.1245971458849, 8.862875152673093),
    new google.maps.LatLng(54.1267142270415, 8.887641658071143),
    new google.maps.LatLng(54.12987249847509, 8.923733531001563),
    new google.maps.LatLng(54.0921811342035, 8.957287841516928),
    new google.maps.LatLng(54.05537953632783, 8.988502261643585),
    new google.maps.LatLng(54.03210202931002, 8.97067271588263),
    new google.maps.LatLng(54.04194553031117, 8.925043469480391),
    new google.maps.LatLng(54.03932164914841, 8.854213589611108),
    new google.maps.LatLng(54.02333484332804, 8.84072922194057),
    new google.maps.LatLng(53.97811690231028, 8.880244609115584),
    new google.maps.LatLng(53.93031406117001, 8.920081152578661),
    new google.maps.LatLng(53.89369194245541, 8.981018182175408),
    new google.maps.LatLng(53.90001971170453, 9.028999034780014),
    new google.maps.LatLng(53.89365574667745, 9.088868276750922),
    new google.maps.LatLng(53.8914644087722, 9.141836559226723),
    new google.maps.LatLng(53.89146298820034, 9.221639565728754),
    new google.maps.LatLng(53.87525627591631, 9.286071128712063),
    new google.maps.LatLng(53.86179197320995, 9.332834127138426),
    new google.maps.LatLng(53.84313961236614, 9.357197530073986),
    new google.maps.LatLng(53.82215474811831, 9.397197430902738),
    new google.maps.LatLng(53.78353209583572, 9.418030696910362),
    new google.maps.LatLng(53.75534700122088, 9.438283927934144),
    new google.maps.LatLng(53.73025469494282, 9.461815593917073),
    new google.maps.LatLng(53.71793157716029, 9.506267577463852),
    new google.maps.LatLng(53.69105283149888, 9.542579011932562),
    new google.maps.LatLng(53.66661688813038, 9.557378139459004),
    new google.maps.LatLng(53.63732729502316, 9.566893403578815),
    new google.maps.LatLng(53.61748604941818, 9.570233660512663),
    new google.maps.LatLng(53.58397418864514, 9.653645804987116),
    new google.maps.LatLng(53.60348376955957, 9.665856326413367),
    new google.maps.LatLng(53.61619129718809, 9.760746361641601),
    new google.maps.LatLng(53.60840821269015, 9.800353417403436),
    new google.maps.LatLng(53.60436299610347, 9.867820743303193),
    new google.maps.LatLng(53.62427065279539, 9.906347126091958),
    new google.maps.LatLng(53.65265495565794, 9.941340178423548),
    new google.maps.LatLng(53.68791611787228, 9.943110223662067),
    new google.maps.LatLng(53.75869964177088, 9.983039523571488),
    new google.maps.LatLng(53.77481914024335, 9.951829822417004),
    new google.maps.LatLng(53.80277576405258, 9.936546259074818),
    new google.maps.LatLng(53.81957815319042, 9.866062728585952),
    new google.maps.LatLng(53.86407979648531, 9.790837274029215),
    new google.maps.LatLng(53.89657300118753, 9.747198780062835),
    new google.maps.LatLng(53.92144063948659, 9.825956579177745),
    new google.maps.LatLng(53.95744470540114, 9.818418387962966),
    new google.maps.LatLng(53.97949022263207, 9.755851721097448),
    new google.maps.LatLng(54.02877901654525, 9.76813538715483),
    new google.maps.LatLng(54.04642243296573, 9.741378302395336),
    new google.maps.LatLng(54.04662012826753, 9.609846576686813),
    new google.maps.LatLng(54.08613218495199, 9.585885891194826),
    new google.maps.LatLng(54.12161989068092, 9.517302568969257),
    new google.maps.LatLng(54.18139917652178, 9.523647431484502),
    new google.maps.LatLng(54.18128320825883, 9.459129855536162),
    new google.maps.LatLng(54.23774580883277, 9.445148567675787),
    new google.maps.LatLng(54.28883992545113, 9.400321184944911),
    new google.maps.LatLng(54.28734267986705, 9.281860081681884),
    new google.maps.LatLng(54.33714589624316, 9.298756154105511),
    new google.maps.LatLng(54.36534264676327, 9.199575879480955),
    new google.maps.LatLng(54.41409466457876, 9.285315538424765),
    new google.maps.LatLng(54.45406705646653, 9.330223988987949),
    new google.maps.LatLng(54.47511854161856, 9.320958307190308),
    new google.maps.LatLng(54.50933153493607, 9.283226554838194),
    new google.maps.LatLng(54.55530105085823, 9.316326359935816),
    new google.maps.LatLng(54.57944464221888, 9.261338591340685),
    new google.maps.LatLng(54.62697631158767, 9.223375749435736),
    new google.maps.LatLng(54.65861217877467, 9.198954889655774),
    new google.maps.LatLng(54.70175465496419, 9.172114123808079),
    new google.maps.LatLng(54.70011976689535, 9.074243662805166),
    new google.maps.LatLng(54.74007672307283, 9.086579830104583),
    new google.maps.LatLng(54.7693800047325, 9.117674458208837),
    new google.maps.LatLng(54.82511399270652, 9.103808121539549),
    new google.maps.LatLng(54.87210762898854, 9.143143198859496)
    ];
    region_25.push(region_25_1);
    region_borders['region_25'] = region_25;
    region_center['region_25'] = '';
    
    //******************************************************************************    
    //PLZ Region 26
    //******************************************************************************  
    region_26 = [];
    var region_26_1 = [
    new google.maps.LatLng(52.88153573081134, 8.329622605349584),
    new google.maps.LatLng(52.99737840893348, 8.319630870177681),
    new google.maps.LatLng(53.01872360031008, 8.434578721346762),
    new google.maps.LatLng(53.15750708726112, 8.377603955609928),
    new google.maps.LatLng(53.34920226600196, 8.511686917564671),
    new google.maps.LatLng(53.44991712088395, 8.480467770496116),
    new google.maps.LatLng(53.50002314773163, 8.506367712791285),
    new google.maps.LatLng(53.53026388955664, 8.557085447139087),
    new google.maps.LatLng(53.54934201637677, 8.512506354156852),
    new google.maps.LatLng(53.55016850813407, 8.445221961141975),
    new google.maps.LatLng(53.57195144117789, 8.383209111729336),
    new google.maps.LatLng(53.61280734179159, 8.338994156664839),
    new google.maps.LatLng(53.59921646244426, 8.274905666082017),
    new google.maps.LatLng(53.5665892534793, 8.237463465361435),
    new google.maps.LatLng(53.51797439521683, 8.239965281728288),
    new google.maps.LatLng(53.51716668407863, 8.311586115240173),
    new google.maps.LatLng(53.45732653145222, 8.325347406846593),
    new google.maps.LatLng(53.40943941782318, 8.297408512450266),
    new google.maps.LatLng(53.39480790407021, 8.256079192756822),
    new google.maps.LatLng(53.40401821520218, 8.203292083943474),
    new google.maps.LatLng(53.44930850809966, 8.152950893326027),
    new google.maps.LatLng(53.43986107486838, 8.110271726565481),
    new google.maps.LatLng(53.47017858232645, 8.068090888549005),
    new google.maps.LatLng(53.49935475178076, 8.069946076899885),
    new google.maps.LatLng(53.5119046504782, 8.16978565958401),
    new google.maps.LatLng(53.53022044745247, 8.168735908311302),
    new google.maps.LatLng(53.54869075184072, 8.16935501649712),
    new google.maps.LatLng(53.57575516944512, 8.149967248799403),
    new google.maps.LatLng(53.62862699027875, 8.105163901396875),
    new google.maps.LatLng(53.62661674410077, 8.067434127338908),
    new google.maps.LatLng(53.6473790707789, 8.05033759890515),
    new google.maps.LatLng(53.67583264992698, 8.024356650572305),
    new google.maps.LatLng(53.69801328359339, 8.038205988075717),
    new google.maps.LatLng(53.7121052962487, 8.006655014721693),
    new google.maps.LatLng(53.70415278116072, 7.798761305005584),
    new google.maps.LatLng(53.69722142690657, 7.739890581548567),
    new google.maps.LatLng(53.6963840374858, 7.69634778113399),
    new google.maps.LatLng(53.67184755780587, 7.535576967577818),
    new google.maps.LatLng(53.67967393659374, 7.482385241604693),
    new google.maps.LatLng(53.68437704123268, 7.361520805977985),
    new google.maps.LatLng(53.68240785654515, 7.297415193419587),
    new google.maps.LatLng(53.66325947474986, 7.226545164381655),
    new google.maps.LatLng(53.61305210585789, 7.14299411803204),
    new google.maps.LatLng(53.57196721377583, 7.095043932358389),
    new google.maps.LatLng(53.54376436894173, 7.140867227869949),
    new google.maps.LatLng(53.52213434977827, 7.109241008141714),
    new google.maps.LatLng(53.50514247758574, 7.098473094311204),
    new google.maps.LatLng(53.52009602766083, 7.069564109613689),
    new google.maps.LatLng(53.44857752448085, 7.022438474906743),
    new google.maps.LatLng(53.38895982282753, 7.016238731724109),
    new google.maps.LatLng(53.35722376361164, 7.001097623993131),
    new google.maps.LatLng(53.33615644260271, 7.031077497928873),
    new google.maps.LatLng(53.33458528926412, 7.136616084382956),
    new google.maps.LatLng(53.32455323252977, 7.262778214803031),
    new google.maps.LatLng(53.30514931746739, 7.238605502141122),
    new google.maps.LatLng(53.25866411876133, 7.233413960820545),
    new google.maps.LatLng(53.23893859282532, 7.206921613856836),
    new google.maps.LatLng(53.18528917802179, 7.210343117232099),
    new google.maps.LatLng(53.14639392384655, 7.18632773017849),
    new google.maps.LatLng(53.11647521793363, 7.189163001933885),
    new google.maps.LatLng(53.09612159665901, 7.203089118172707),
    new google.maps.LatLng(53.00830344732228, 7.214175858822722),
    new google.maps.LatLng(52.9156225046959, 7.144973526656308),
    new google.maps.LatLng(52.9087565585117, 7.392905923979538),
    new google.maps.LatLng(52.92601221651375, 7.431870489067769),
    new google.maps.LatLng(52.89220457827632, 7.54692381701698),
    new google.maps.LatLng(52.90386079822677, 7.647367587771279),
    new google.maps.LatLng(52.9380202303924, 7.759167543865953),
    new google.maps.LatLng(52.8983809332193, 7.821125976337699),
    new google.maps.LatLng(52.92725318482199, 7.933297667315909),
    new google.maps.LatLng(53.01303562230743, 8.101032117291121),
    new google.maps.LatLng(52.92617709236595, 8.12203400559671),
    new google.maps.LatLng(52.86776489662644, 8.256327662935195),
    new google.maps.LatLng(52.88153573081134, 8.329622605349584),
    new google.maps.LatLng(52.86796209284455, 8.256660305408721),
    new google.maps.LatLng(52.88153573081134, 8.329622605349584)
    ];
    region_26.push(region_26_1);
    region_borders['region_26'] = region_26;
    region_center['region_26'] = '';
    
    //******************************************************************************    
    //PLZ Region 27
    //******************************************************************************  
    region_27 = [];
    var region_27_1 = [
    new google.maps.LatLng(53.831150132462, 8.837336338420034),
    new google.maps.LatLng(53.84796991668725, 8.746807639308914),
    new google.maps.LatLng(53.8919451774152, 8.681346780201151),
    new google.maps.LatLng(53.87726291438993, 8.614344934194904),
    new google.maps.LatLng(53.80723847192561, 8.544775346087192),
    new google.maps.LatLng(53.79031952033087, 8.547657457034951),
    new google.maps.LatLng(53.69407630919117, 8.490690786146528),
    new google.maps.LatLng(53.6059160979988, 8.51773778371834),
    new google.maps.LatLng(53.55153550460322, 8.568491948924953),
    new google.maps.LatLng(53.5311295555785, 8.583356826995445),
    new google.maps.LatLng(53.52673233906563, 8.553789448744633),
    new google.maps.LatLng(53.49412802403063, 8.503279116883196),
    new google.maps.LatLng(53.44722551815417, 8.479101001184969),
    new google.maps.LatLng(53.34897917365009, 8.514492598405187),
    new google.maps.LatLng(53.28573458303802, 8.46748858663946),
    new google.maps.LatLng(53.28217433288901, 8.660575311394563),
    new google.maps.LatLng(53.25285479392134, 8.701980641986422),
    new google.maps.LatLng(53.21857759647092, 8.708878217927474),
    new google.maps.LatLng(53.20651286731953, 8.674168996585397),
    new google.maps.LatLng(53.17590607532027, 8.673019638793056),
    new google.maps.LatLng(53.15951568802746, 8.787135634582157),
    new google.maps.LatLng(53.19205717915028, 8.814048689419744),
    new google.maps.LatLng(53.19033496083445, 8.884270895538569),
    new google.maps.LatLng(53.20662118172493, 8.973941592305037),
    new google.maps.LatLng(53.23099793014348, 9.027863221613394),
    new google.maps.LatLng(53.12408250763944, 9.124018070270822),
    new google.maps.LatLng(53.07798105954833, 9.155848157998358),
    new google.maps.LatLng(53.04727179906211, 9.189533743044469),
    new google.maps.LatLng(53.02823608594083, 9.123808813907065),
    new google.maps.LatLng(52.98743047748848, 9.078230269605662),
    new google.maps.LatLng(53.00947767414499, 8.937191869582477),
    new google.maps.LatLng(52.95992571648701, 8.90191647391292),
    new google.maps.LatLng(52.88855854771506, 8.953184405102569),
    new google.maps.LatLng(52.83942508927969, 8.880088636778838),
    new google.maps.LatLng(52.87957523684451, 8.808453867923113),
    new google.maps.LatLng(52.92840344051628, 8.732864883070333),
    new google.maps.LatLng(52.95149050558405, 8.688826808831722),
    new google.maps.LatLng(52.97328323909083, 8.644358534861713),
    new google.maps.LatLng(53.0313538170379, 8.678454663869191),
    new google.maps.LatLng(53.07135829194826, 8.653468483830661),
    new google.maps.LatLng(53.11036216883846, 8.585517248466346),
    new google.maps.LatLng(53.05829859082398, 8.420992354596402),
    new google.maps.LatLng(53.01846203781384, 8.434374466293031),
    new google.maps.LatLng(52.99508383857907, 8.320478293129172),
    new google.maps.LatLng(52.88024208117796, 8.328699803013819),
    new google.maps.LatLng(52.8274212377493, 8.400080117533602),
    new google.maps.LatLng(52.81509598845625, 8.467067147757987),
    new google.maps.LatLng(52.75331128786704, 8.472969789922473),
    new google.maps.LatLng(52.75697123627612, 8.574050318239211),
    new google.maps.LatLng(52.68456790140744, 8.671041642882173),
    new google.maps.LatLng(52.63292671168606, 8.613557620424785),
    new google.maps.LatLng(52.58817337196472, 8.614329561952845),
    new google.maps.LatLng(52.5221255155331, 8.766629487385272),
    new google.maps.LatLng(52.53321325854336, 8.860116334322406),
    new google.maps.LatLng(52.58005259781135, 8.910644882974498),
    new google.maps.LatLng(52.62960828759023, 8.881808344496386),
    new google.maps.LatLng(52.64677335736894, 8.975322176955437),
    new google.maps.LatLng(52.6595281749646, 9.023053485488257),
    new google.maps.LatLng(52.69072301838708, 9.03350166136881),
    new google.maps.LatLng(52.71640225850868, 9.034410167224436),
    new google.maps.LatLng(52.72878495111381, 9.140066645699385),
    new google.maps.LatLng(52.74113121374742, 9.207100767213658),
    new google.maps.LatLng(52.75900299774762, 9.327401455520398),
    new google.maps.LatLng(52.71247229992811, 9.343294295833219),
    new google.maps.LatLng(52.72592118107675, 9.462981105035372),
    new google.maps.LatLng(52.76000706518782, 9.482229044321397),
    new google.maps.LatLng(52.78349478085513, 9.408546093581657),
    new google.maps.LatLng(52.80817318921521, 9.414964615684692),
    new google.maps.LatLng(52.83135850312036, 9.385544549041011),
    new google.maps.LatLng(52.92071323752408, 9.459834964119443),
    new google.maps.LatLng(52.95046799599319, 9.542875315786175),
    new google.maps.LatLng(52.92417209011723, 9.597029445238929),
    new google.maps.LatLng(52.97160174679156, 9.666117697218986),
    new google.maps.LatLng(53.06211864676916, 9.617902927752001),
    new google.maps.LatLng(53.12343118638979, 9.694121257445843),
    new google.maps.LatLng(53.16748367789209, 9.753626953592088),
    new google.maps.LatLng(53.21358465145021, 9.69762804863058),
    new google.maps.LatLng(53.25484090609307, 9.601394403218293),
    new google.maps.LatLng(53.34330452070657, 9.551640254723379),
    new google.maps.LatLng(53.38800427477911, 9.517490601737093),
    new google.maps.LatLng(53.34264054575814, 9.44730529517498),
    new google.maps.LatLng(53.38084565533356, 9.362742648173999),
    new google.maps.LatLng(53.44905815955811, 9.341884498135297),
    new google.maps.LatLng(53.47512571941892, 9.409405615923818),
    new google.maps.LatLng(53.5354322936907, 9.336617504085496),
    new google.maps.LatLng(53.5252156593176, 9.287390615537966),
    new google.maps.LatLng(53.54641935696586, 9.263545347227408),
    new google.maps.LatLng(53.5307251258203, 9.204443428065792),
    new google.maps.LatLng(53.59263997064277, 9.141759068523371),
    new google.maps.LatLng(53.55404779912841, 9.110325011847724),
    new google.maps.LatLng(53.56786856539703, 9.058843644978985),
    new google.maps.LatLng(53.55449104802705, 8.991361756916492),
    new google.maps.LatLng(53.62808905451444, 8.970751123277427),
    new google.maps.LatLng(53.6712404545198, 8.83295602091502),
    new google.maps.LatLng(53.68519306127771, 8.771798371455892),
    new google.maps.LatLng(53.72637618430934, 8.722819709871786),
    new google.maps.LatLng(53.75967694371422, 8.715949798729007),
    new google.maps.LatLng(53.78581421034637, 8.791792295411335),
    new google.maps.LatLng(53.77537890737662, 8.867789764777271),
    new google.maps.LatLng(53.831150132462, 8.837336338420034)
    ];
    region_27.push(region_27_1);
    region_borders['region_27'] = region_27;
    region_center['region_27'] = '';
    
    //******************************************************************************    
    //PLZ Region 28
    //******************************************************************************  
    region_28 = [];
    var region_28_1 = [
    new google.maps.LatLng(53.28513746524609, 8.468101196903596),
    new google.maps.LatLng(53.1573931008591, 8.374685612988406),
    new google.maps.LatLng(53.05755140922481, 8.421650678773414),
    new google.maps.LatLng(53.10848099056579, 8.586871425172236),
    new google.maps.LatLng(53.07158417236432, 8.64867463000472),
    new google.maps.LatLng(53.02952530336075, 8.678127381990512),
    new google.maps.LatLng(52.97166561161556, 8.64486523651383),
    new google.maps.LatLng(52.83759174977524, 8.882175530408363),
    new google.maps.LatLng(52.88806499482151, 8.954933376788205),
    new google.maps.LatLng(52.95952338375169, 8.903411527133983),
    new google.maps.LatLng(53.00912181369602, 8.94092667992477),
    new google.maps.LatLng(52.98816216289371, 9.079326416445978),
    new google.maps.LatLng(53.02670851894382, 9.118633121815996),
    new google.maps.LatLng(53.04950461452395, 9.188013694702033),
    new google.maps.LatLng(53.07759944919134, 9.158015530628287),
    new google.maps.LatLng(53.2291409221414, 9.02802875973055),
    new google.maps.LatLng(53.20619810004681, 8.968090619341428),
    new google.maps.LatLng(53.18830164050171, 8.880589273917924),
    new google.maps.LatLng(53.18931643333529, 8.812800221150498),
    new google.maps.LatLng(53.15865499189304, 8.78739298164194),
    new google.maps.LatLng(53.17562481504506, 8.674859844870594),
    new google.maps.LatLng(53.20424385471686, 8.675771263699863),
    new google.maps.LatLng(53.2169861965052, 8.707125015728197),
    new google.maps.LatLng(53.24994554873349, 8.70301488591624),
    new google.maps.LatLng(53.28147314075396, 8.661283163345937),
    new google.maps.LatLng(53.28513746524609, 8.468101196903596) 
    ];
    region_28.push(region_28_1);
    region_borders['region_28'] = region_28;
    region_center['region_28'] = '';
    
    //******************************************************************************    
    //PLZ Region 29
    //******************************************************************************  
    region_29 = [];
    var region_29_1 = [
    new google.maps.LatLng(53.10157575819481, 10.91647312547387),
    new google.maps.LatLng(53.10156365349658, 10.92008277984501),
    new google.maps.LatLng(53.12435567680677, 11.04054438673296),
    new google.maps.LatLng(53.10796262463281, 11.13630023825427),
    new google.maps.LatLng(53.10772705817892, 11.27320377751287),
    new google.maps.LatLng(53.08110736585849, 11.30813582806795),
    new google.maps.LatLng(53.07833158639583, 11.31341921655586),
    new google.maps.LatLng(53.05731223462762, 11.34747740409909),
    new google.maps.LatLng(53.05722592792031, 11.36011513750607),
    new google.maps.LatLng(53.07633626250535, 11.44561547306545),
    new google.maps.LatLng(53.04681711578069, 11.5103023059965),
    new google.maps.LatLng(53.04950884166512, 11.51505806564165),
    new google.maps.LatLng(53.0373382091901, 11.59905106298311),
    new google.maps.LatLng(53.00079444058715, 11.56133413428506),
    new google.maps.LatLng(53.00080232811352, 11.56043392488905),
    new google.maps.LatLng(53.00661114167286, 11.51322048286405),
    new google.maps.LatLng(52.9552591238448, 11.49105297425832),
    new google.maps.LatLng(52.9391365675625, 11.50754400022643),
    new google.maps.LatLng(52.91867467009098, 11.42336119721205),
    new google.maps.LatLng(52.87495827469504, 11.309350190232),
    new google.maps.LatLng(52.84314664812981, 11.31725389559657),
    new google.maps.LatLng(52.8139774052397, 11.34440302244797),
    new google.maps.LatLng(52.7679699357601, 11.3355812485074),
    new google.maps.LatLng(52.76561067542697, 11.2499196773091),
    new google.maps.LatLng(52.78359944729684, 11.15590727826813),
    new google.maps.LatLng(52.75699192964181, 11.14412456597974),
    new google.maps.LatLng(52.72228256910415, 11.06647303520408),
    new google.maps.LatLng(52.71942154184722, 10.98578851727046),
    new google.maps.LatLng(52.70133603914032, 10.95637276524267),
    new google.maps.LatLng(52.70123450773415, 10.83913607841674),
    new google.maps.LatLng(52.63061000441369, 10.89790772217335),
    new google.maps.LatLng(52.5993235577141, 10.71548325764431),
    new google.maps.LatLng(52.58430739201922, 10.68807892697175),
    new google.maps.LatLng(52.55861949197112, 10.59209610857277),
    new google.maps.LatLng(52.55462118298487, 10.44656201956264),
    new google.maps.LatLng(52.55461952123397, 10.44224126760058),
    new google.maps.LatLng(52.56231674484744, 10.35968622290144),
    new google.maps.LatLng(52.5211772858286, 10.31178859982746),
    new google.maps.LatLng(52.48976352375895, 10.26034416838814),
    new google.maps.LatLng(52.5086841383943, 10.17515975951439),
    new google.maps.LatLng(52.49886246362545, 10.13726653632078),
    new google.maps.LatLng(52.50090407161127, 10.13036856544324),
    new google.maps.LatLng(52.52086781085641, 10.08363665846444),
    new google.maps.LatLng(52.53677101691521, 10.04105377445402),
    new google.maps.LatLng(52.53302333424809, 9.997917193459127),
    new google.maps.LatLng(52.57505550590263, 9.978618529304415),
    new google.maps.LatLng(52.59717008612648, 9.878641244178482),
    new google.maps.LatLng(52.59735476158519, 9.809751244800539),
    new google.maps.LatLng(52.6354712089227, 9.739434425823328),
    new google.maps.LatLng(52.5988350864522, 9.69984991072355),
    new google.maps.LatLng(52.59880310885834, 9.694623769740858),
    new google.maps.LatLng(52.59796424286934, 9.645852218787477),
    new google.maps.LatLng(52.67441209447651, 9.587066186131633),
    new google.maps.LatLng(52.65800545802026, 9.534794241036728),
    new google.maps.LatLng(52.7256993680873, 9.464551569469869),
    new google.maps.LatLng(52.75924698569058, 9.48226671222875),
    new google.maps.LatLng(52.78343856023864, 9.410381251901486),
    new google.maps.LatLng(52.80787325695609, 9.413855592047288),
    new google.maps.LatLng(52.83057761228526, 9.386520818888535),
    new google.maps.LatLng(52.91989768394173, 9.462092836702203),
    new google.maps.LatLng(52.94851061881992, 9.542988468768598),
    new google.maps.LatLng(52.92475204390011, 9.596328122384939),
    new google.maps.LatLng(52.97146084902473, 9.666333005509042),
    new google.maps.LatLng(53.06080792450022, 9.618049506553657),
    new google.maps.LatLng(53.16745251808052, 9.753732748720864),
    new google.maps.LatLng(53.21422099806464, 9.695355262899943),
    new google.maps.LatLng(53.18118138501107, 9.798712970004274),
    new google.maps.LatLng(53.20048587997825, 9.849378648216895),
    new google.maps.LatLng(53.17430347372071, 9.940063664467029),
    new google.maps.LatLng(53.17564348825416, 9.999694069981945),
    new google.maps.LatLng(53.06522362790344, 10.04774648189053),
    new google.maps.LatLng(53.04813814120442, 10.15409772261336),
    new google.maps.LatLng(53.09498561687487, 10.27059569487187),
    new google.maps.LatLng(53.08822821656381, 10.31667549942633),
    new google.maps.LatLng(53.18637594617858, 10.37514777125028),
    new google.maps.LatLng(53.16945781992369, 10.44374297427663),
    new google.maps.LatLng(53.19958569047684, 10.50536590065985),
    new google.maps.LatLng(53.1690042526067, 10.58377736317068),
    new google.maps.LatLng(53.18954010373886, 10.61650223693442),
    new google.maps.LatLng(53.1779661698146, 10.67111941277297),
    new google.maps.LatLng(53.07947346018936, 10.69233846730119),
    new google.maps.LatLng(53.07689574793107, 10.75544963396997),
    new google.maps.LatLng(53.08055791546782, 10.83803909828421),
    new google.maps.LatLng(53.10157575819481, 10.91647312547387)
    ];
    region_29.push(region_29_1);
    region_borders['region_29'] = region_29;
    region_center['region_29'] = '';
    
    //******************************************************************************    
    //PLZ Region 30
    //******************************************************************************  
    region_30 = [];
    var region_30_1 = [
    new google.maps.LatLng(52.5041168049454, 9.618504674087539),
    new google.maps.LatLng(52.49367100338134, 9.59137797652706),
    new google.maps.LatLng(52.48337959223895, 9.521139439598691),
    new google.maps.LatLng(52.43848768077249, 9.485496507068207),
    new google.maps.LatLng(52.41807371464402, 9.508370109789055),
    new google.maps.LatLng(52.32800974958435, 9.400254881649117),
    new google.maps.LatLng(52.29077923002695, 9.416777096960276),
    new google.maps.LatLng(52.25449819922117, 9.480030892179689),
    new google.maps.LatLng(52.22643398273868, 9.625136569968779),
    new google.maps.LatLng(52.25220579845696, 9.655584857528989),
    new google.maps.LatLng(52.25896268616899, 9.697692043511374),
    new google.maps.LatLng(52.20456128728981, 9.750271841060307),
    new google.maps.LatLng(52.18529075169073, 9.695818989799223),
    new google.maps.LatLng(52.16145449859795, 9.76745786580021),
    new google.maps.LatLng(52.20728451924229, 9.821709916118561),
    new google.maps.LatLng(52.23448118518401, 9.78194428992648),
    new google.maps.LatLng(52.25720234185219, 9.903613280406967),
    new google.maps.LatLng(52.27350548771774, 9.919210640413725),
    new google.maps.LatLng(52.30898909505314, 9.872519517239054),
    new google.maps.LatLng(52.35690454778253, 9.898910669562895),
    new google.maps.LatLng(52.38361429969277, 9.887177118630426),
    new google.maps.LatLng(52.42204904022538, 9.925668919555939),
    new google.maps.LatLng(52.46316449768954, 9.939245237082986),
    new google.maps.LatLng(52.53352060647406, 9.998373633197312),
    new google.maps.LatLng(52.5751203907097, 9.98053849179257),
    new google.maps.LatLng(52.59691926854816, 9.879228640787334),
    new google.maps.LatLng(52.59695075698389, 9.812884375561755),
    new google.maps.LatLng(52.63493966828664, 9.741218821830401),
    new google.maps.LatLng(52.59912574520539, 9.70081237114761),
    new google.maps.LatLng(52.59705218992965, 9.645340197949288),
    new google.maps.LatLng(52.57145670807638, 9.591565024878967),
    new google.maps.LatLng(52.5041168049454, 9.618504674087539)
    ];
    region_30.push(region_30_1);
    region_borders['region_30'] = region_30;
    region_center['region_30'] = '';
    
    //******************************************************************************    
    //PLZ Region 31
    //******************************************************************************  
    region_31 = [];
    var region_31_1 = [
    new google.maps.LatLng(52.53255151012137, 9.996067563382766),
    new google.maps.LatLng(52.46253504930584, 9.936971893483618),
    new google.maps.LatLng(52.420874888169, 9.925488463944745),
    new google.maps.LatLng(52.38443533540931, 9.886591148373329),
    new google.maps.LatLng(52.35641301045158, 9.901083846235231),
    new google.maps.LatLng(52.30971676915244, 9.87344384914423),
    new google.maps.LatLng(52.27319040207676, 9.919269571975835),
    new google.maps.LatLng(52.25804728848162, 9.905388121554717),
    new google.maps.LatLng(52.23456777126848, 9.779539856099539),
    new google.maps.LatLng(52.20786089604956, 9.820580614790352),
    new google.maps.LatLng(52.16101136921801, 9.766041302241717),
    new google.maps.LatLng(52.18603780000479, 9.693676769000092),
    new google.maps.LatLng(52.20424730942551, 9.750697416729313),
    new google.maps.LatLng(52.25931618956793, 9.697510726913158),
    new google.maps.LatLng(52.25291522353832, 9.654878278198225),
    new google.maps.LatLng(52.22624207837604, 9.626075080613658),
    new google.maps.LatLng(52.25512275844778, 9.476463399769106),
    new google.maps.LatLng(52.26805384463854, 9.449865277297045),
    new google.maps.LatLng(52.29179414476969, 9.414543399308432),
    new google.maps.LatLng(52.32815386538153, 9.402202700414378),
    new google.maps.LatLng(52.39254583770439, 9.486820096020388),
    new google.maps.LatLng(52.41862211009029, 9.511403619170544),
    new google.maps.LatLng(52.43900421412678, 9.487191886189979),
    new google.maps.LatLng(52.48335140854191, 9.519686842148488),
    new google.maps.LatLng(52.4947085964053, 9.590711844821225),
    new google.maps.LatLng(52.50440006152429, 9.617041538621896),
    new google.maps.LatLng(52.57164287919623, 9.59033496130303),
    new google.maps.LatLng(52.59754914553863, 9.646181474761002),
    new google.maps.LatLng(52.67337096579876, 9.587835259745125),
    new google.maps.LatLng(52.65828161574176, 9.536193438077978),
    new google.maps.LatLng(52.72490639932383, 9.46343044706002),
    new google.maps.LatLng(52.71320128519682, 9.34407517514941),
    new google.maps.LatLng(52.75824708851231, 9.329309030771478),
    new google.maps.LatLng(52.71553681642007, 9.03613446534774),
    new google.maps.LatLng(52.68976994908996, 9.033831020057193),
    new google.maps.LatLng(52.65854313387014, 9.021872726025533),
    new google.maps.LatLng(52.64429563835701, 8.969093465609157),
    new google.maps.LatLng(52.62776449823636, 8.882188121362283),
    new google.maps.LatLng(52.57950892244258, 8.908821286117918),
    new google.maps.LatLng(52.53184698718107, 8.859073929683099),
    new google.maps.LatLng(52.52150820769495, 8.76901324227509),
    new google.maps.LatLng(52.49553217371384, 8.706602381494765),
    new google.maps.LatLng(52.3917056461426, 8.707067148074827),
    new google.maps.LatLng(52.39304040034416, 8.780266976051912),
    new google.maps.LatLng(52.39809937196842, 8.93005938750888),
    new google.maps.LatLng(52.44609127462002, 8.991182041951483),
    new google.maps.LatLng(52.49443968065204, 9.054255323707398),
    new google.maps.LatLng(52.4926523239742, 9.106148913670818),
    new google.maps.LatLng(52.47304387198442, 9.135944571864199),
    new google.maps.LatLng(52.40878752930283, 9.129286665185143),
    new google.maps.LatLng(52.37104039077281, 9.098400311217645),
    new google.maps.LatLng(52.34273177952419, 9.078805203584448),
    new google.maps.LatLng(52.31980015561842, 8.995721230932432),
    new google.maps.LatLng(52.26206582117893, 8.973364339832955),
    new google.maps.LatLng(52.22770039971846, 9.07486523850028),
    new google.maps.LatLng(52.18702233762583, 8.992933847266071),
    new google.maps.LatLng(52.1332343585679, 9.025954507900771),
    new google.maps.LatLng(52.13088072381306, 9.14704777229823),
    new google.maps.LatLng(52.09384594791666, 9.155590761931379),
    new google.maps.LatLng(51.99796365176422, 9.196126645552937),
    new google.maps.LatLng(51.96370925429355, 9.193870150462457),
    new google.maps.LatLng(51.97252420500809, 9.270532884100465),
    new google.maps.LatLng(51.92144591145391, 9.282074667146302),
    new google.maps.LatLng(51.92216288258539, 9.288532993034025),
    new google.maps.LatLng(51.92250683325835, 9.313186033905961),
    new google.maps.LatLng(51.93371827538105, 9.355938748078547),
    new google.maps.LatLng(51.92052541445504, 9.43686354507815),
    new google.maps.LatLng(51.92697926409106, 9.463364963154641),
    new google.maps.LatLng(51.97844742473298, 9.416069390183514),
    new google.maps.LatLng(52.01971592331675, 9.503635505616955),
    new google.maps.LatLng(52.02173857207338, 9.537777039783485),
    new google.maps.LatLng(52.04357646149044, 9.566718763992563),
    new google.maps.LatLng(51.97752553177232, 9.633859857715647),
    new google.maps.LatLng(51.95791537805637, 9.68759551331919),
    new google.maps.LatLng(51.92088281642869, 9.718847096502579),
    new google.maps.LatLng(51.89073965693739, 9.807805633931626),
    new google.maps.LatLng(51.90792922393867, 9.89559062883022),
    new google.maps.LatLng(51.89731567652828, 9.96720042384309),
    new google.maps.LatLng(51.93290977239242, 9.998956494182229),
    new google.maps.LatLng(51.9287528731064, 10.06699240865137),
    new google.maps.LatLng(51.95576789126896, 10.08104843374235),
    new google.maps.LatLng(51.95014646300709, 10.18771243222444),
    new google.maps.LatLng(52.04978682638144, 10.19429235199823),
    new google.maps.LatLng(52.09892563235788, 10.20098605081713),
    new google.maps.LatLng(52.17072882064785, 10.19739137967295),
    new google.maps.LatLng(52.18032684078814, 10.26208894630742),
    new google.maps.LatLng(52.21159558212173, 10.2581687798889),
    new google.maps.LatLng(52.30764543823301, 10.35332244257032),
    new google.maps.LatLng(52.35650130729685, 10.29406626289858),
    new google.maps.LatLng(52.3690120537505, 10.38656945234923),
    new google.maps.LatLng(52.44822305207973, 10.28964188312825),
    new google.maps.LatLng(52.49021801770628, 10.26334675604483),
    new google.maps.LatLng(52.50807214809901, 10.1755441131163),
    new google.maps.LatLng(52.49786107749653, 10.13834203398159),
    new google.maps.LatLng(52.53641660917097, 10.04134612569048),
    new google.maps.LatLng(52.53255151012137, 9.996067563382766)
    ];
    region_31.push(region_31_1);
    region_borders['region_31'] = region_31;
    region_center['region_31'] = '';
    
    //******************************************************************************    
    //PLZ Region 32
    //******************************************************************************  
    region_32 = [];
    var region_32_1 = [
    new google.maps.LatLng(52.11382496274693, 8.371383443874855),
    new google.maps.LatLng(52.07396011413789, 8.457002983895158),
    new google.maps.LatLng(52.07221172824885, 8.565593436758569),
    new google.maps.LatLng(52.05867727706652, 8.675365176000776),
    new google.maps.LatLng(52.0457438591158, 8.663131625674719),
    new google.maps.LatLng(52.03018907490431, 8.730874491778568),
    new google.maps.LatLng(51.93898131726365, 8.706210785297996),
    new google.maps.LatLng(51.91057559358163, 8.680799589162792),
    new google.maps.LatLng(51.86923309646212, 8.741933672921506),
    new google.maps.LatLng(51.87732420867192, 8.818719769509769),
    new google.maps.LatLng(51.85305865367457, 8.890583885865304),
    new google.maps.LatLng(51.80518504441694, 8.923127067553423),
    new google.maps.LatLng(51.7918352547329, 8.960003498732929),
    new google.maps.LatLng(51.86363155184062, 9.013267251663313),
    new google.maps.LatLng(51.894128138743, 9.095901176433527),
    new google.maps.LatLng(51.85549063249144, 9.212592986912611),
    new google.maps.LatLng(51.86251682660938, 9.240932859287998),
    new google.maps.LatLng(51.84842332578627, 9.309929356130567),
    new google.maps.LatLng(51.85309915432251, 9.345567017344148),
    new google.maps.LatLng(51.92217119843239, 9.312464260475577),
    new google.maps.LatLng(51.92209435056675, 9.283667666861621),
    new google.maps.LatLng(51.97115896357818, 9.268748697802121),
    new google.maps.LatLng(51.96397286221033, 9.195962453808757),
    new google.maps.LatLng(51.99845757062099, 9.196849437670856),
    new google.maps.LatLng(52.04946291506705, 9.176663857018978),
    new google.maps.LatLng(52.09205519030038, 9.157907079831864),
    new google.maps.LatLng(52.13028693716392, 9.146065946060398),
    new google.maps.LatLng(52.13354075292486, 9.026015378682846),
    new google.maps.LatLng(52.18654132103964, 8.993621725817192),
    new google.maps.LatLng(52.22697214815667, 9.074938841685967),
    new google.maps.LatLng(52.26107107534405, 8.973409872792198),
    new google.maps.LatLng(52.32027556536698, 8.998253469908198),
    new google.maps.LatLng(52.34247297065024, 9.078680449204782),
    new google.maps.LatLng(52.40855854546991, 9.129058468532069),
    new google.maps.LatLng(52.47202238880874, 9.137349018794811),
    new google.maps.LatLng(52.4919792240537, 9.105729381245018),
    new google.maps.LatLng(52.49371285368155, 9.054752301004815),
    new google.maps.LatLng(52.39728535617866, 8.930488953431832),
    new google.maps.LatLng(52.39093006361554, 8.706955850011402),
    new google.maps.LatLng(52.49533372786168, 8.705233977427527),
    new google.maps.LatLng(52.52400767105628, 8.652180243368576),
    new google.maps.LatLng(52.49543576671976, 8.561134073983485),
    new google.maps.LatLng(52.50514848471685, 8.50646138710713),
    new google.maps.LatLng(52.44326771869857, 8.404720281472587),
    new google.maps.LatLng(52.45182540358496, 8.299691926203945),
    new google.maps.LatLng(52.39886898487628, 8.322432085948844),
    new google.maps.LatLng(52.3530172094997, 8.446523378463105),
    new google.maps.LatLng(52.26052234358505, 8.469896075193473),
    new google.maps.LatLng(52.20951948826699, 8.453062888346071),
    new google.maps.LatLng(52.18892879138054, 8.526573192705261),
    new google.maps.LatLng(52.15714119186325, 8.447520731220266),
    new google.maps.LatLng(52.11382496274693, 8.371383443874855)
    ];
    region_32.push(region_32_1);
    region_borders['region_32'] = region_32;
    region_center['region_32'] = '';
    
    //******************************************************************************    
    //PLZ Region 33
    //******************************************************************************  
    region_33 = [];
    var region_33_1 = [
    new google.maps.LatLng(51.89128274919367, 8.128256887514112),
    new google.maps.LatLng(51.8398302175719, 8.217615805098388),
    new google.maps.LatLng(51.78962091567585, 8.2578004464971),
    new google.maps.LatLng(51.77556780632672, 8.253270925720448),
    new google.maps.LatLng(51.72503561302529, 8.320033438677756),
    new google.maps.LatLng(51.71871631711319, 8.469264312027931),
    new google.maps.LatLng(51.6835381258727, 8.477338323458428),
    new google.maps.LatLng(51.6560814650687, 8.572144675833115),
    new google.maps.LatLng(51.62397192125158, 8.580725453194171),
    new google.maps.LatLng(51.5669222677959, 8.477361068447699),
    new google.maps.LatLng(51.4680379346803, 8.545519519192631),
    new google.maps.LatLng(51.4772301926027, 8.628176027525864),
    new google.maps.LatLng(51.45036483250782, 8.764758349316363),
    new google.maps.LatLng(51.49540849232697, 8.83345211100073),
    new google.maps.LatLng(51.53078731036488, 8.811014464824726),
    new google.maps.LatLng(51.54698144569215, 8.855741770184673),
    new google.maps.LatLng(51.53105857677582, 8.902484813013841),
    new google.maps.LatLng(51.57608240511362, 9.02295666015053),
    new google.maps.LatLng(51.64802870904776, 8.994048018962914),
    new google.maps.LatLng(51.65978699216073, 9.059298026124893),
    new google.maps.LatLng(51.63357616543443, 9.102374802808345),
    new google.maps.LatLng(51.63409694951947, 9.190454039806307),
    new google.maps.LatLng(51.67210633456804, 9.266883548233448),
    new google.maps.LatLng(51.732220390702, 9.291617936972507),
    new google.maps.LatLng(51.7809385953769, 9.258890289129777),
    new google.maps.LatLng(51.78140021612004, 9.171927001571474),
    new google.maps.LatLng(51.83050226828915, 9.187734282103214),
    new google.maps.LatLng(51.8564044179306, 9.213739797772966),
    new google.maps.LatLng(51.89381940596671, 9.096858273418933),
    new google.maps.LatLng(51.86314299841895, 9.011868293154377),
    new google.maps.LatLng(51.79298551094267, 8.960218212360008),
    new google.maps.LatLng(51.80434373795354, 8.924531162265021),
    new google.maps.LatLng(51.85370560080538, 8.888799630111759),
    new google.maps.LatLng(51.87685095511316, 8.819099196379012),
    new google.maps.LatLng(51.86951311690647, 8.743752589884576),
    new google.maps.LatLng(51.91168734230371, 8.681489230110639),
    new google.maps.LatLng(51.93750381047242, 8.707398409503874),
    new google.maps.LatLng(52.03057969321377, 8.730352778114058),
    new google.maps.LatLng(52.04685758072086, 8.664673786064208),
    new google.maps.LatLng(52.05920360580919, 8.674186901225767),
    new google.maps.LatLng(52.07147066778981, 8.568332411335913),
    new google.maps.LatLng(52.07339191606995, 8.460001704959002),
    new google.maps.LatLng(52.11277640696952, 8.372073824792249),
    new google.maps.LatLng(52.12980758185325, 8.266508348407385),
    new google.maps.LatLng(52.07540263038563, 8.188642364403094),
    new google.maps.LatLng(52.0588534052233, 8.092208119240695),
    new google.maps.LatLng(52.00860492567433, 8.078875805863454),
    new google.maps.LatLng(51.95199798341142, 8.114691096730041),
    new google.maps.LatLng(51.92442754364679, 8.166345181330559),
    new google.maps.LatLng(51.89128274919367, 8.128256887514112)
    ];
    region_33.push(region_33_1);
    region_borders['region_33'] = region_33;
    region_center['region_33'] = '';
    
    //******************************************************************************    
    //PLZ Region 34
    //******************************************************************************  
    region_34 = [];
    var region_34_1 = [
    new google.maps.LatLng(51.44969805636702, 8.764015328726769),
    new google.maps.LatLng(51.39086716211136, 8.701619557178567),
    new google.maps.LatLng(51.36832814307062, 8.686392303734866),
    new google.maps.LatLng(51.2801017359544, 8.556745360974718),
    new google.maps.LatLng(51.24527448014535, 8.597539282775982),
    new google.maps.LatLng(51.26830255623251, 8.726231204207251),
    new google.maps.LatLng(51.20983388068719, 8.763344661758268),
    new google.maps.LatLng(51.17271895486454, 8.750332496999402),
    new google.maps.LatLng(51.13042453535753, 8.690042539092923),
    new google.maps.LatLng(51.1111517461128, 8.71268953668517),
    new google.maps.LatLng(51.09105962369799, 8.653299421917353),
    new google.maps.LatLng(51.10015082759648, 8.544993180664168),
    new google.maps.LatLng(51.07654632881321, 8.50306903444511),
    new google.maps.LatLng(51.02217737742316, 8.529643455005777),
    new google.maps.LatLng(50.96866549068482, 8.478693421011755),
    new google.maps.LatLng(50.94987972590889, 8.575656846175551),
    new google.maps.LatLng(50.96038428509779, 8.639627574006763),
    new google.maps.LatLng(50.99471740598332, 8.673445316045962),
    new google.maps.LatLng(50.96695507648556, 8.735417603688539),
    new google.maps.LatLng(50.95880391214868, 8.85668417029594),
    new google.maps.LatLng(50.95220421342599, 8.910471535386534),
    new google.maps.LatLng(50.96760749746694, 8.911781923757767),
    new google.maps.LatLng(50.93063164043949, 8.980118874885871),
    new google.maps.LatLng(50.91954807198479, 9.051661686839482),
    new google.maps.LatLng(50.91942003238806, 9.110660365724613),
    new google.maps.LatLng(50.89706407561731, 9.12782603003915),
    new google.maps.LatLng(50.88755714054842, 9.107691161609395),
    new google.maps.LatLng(50.83834936937438, 9.155886277698375),
    new google.maps.LatLng(50.82214476677588, 9.238331852550928),
    new google.maps.LatLng(50.80310445469591, 9.316858108832571),
    new google.maps.LatLng(50.77734996336836, 9.394686102165153),
    new google.maps.LatLng(50.79543112509332, 9.438378633137084),
    new google.maps.LatLng(50.80964913992285, 9.488373806410433),
    new google.maps.LatLng(50.85003718004458, 9.407274308762341),
    new google.maps.LatLng(50.88296181863441, 9.429014138346075),
    new google.maps.LatLng(50.88820968273561, 9.498933615106218),
    new google.maps.LatLng(50.91563546269119, 9.496246806663466),
    new google.maps.LatLng(50.95820181666805, 9.573065442661335),
    new google.maps.LatLng(50.97938526748321, 9.552451065764927),
    new google.maps.LatLng(51.02552779840885, 9.583828368529861),
    new google.maps.LatLng(51.08419951905133, 9.700038621901815),
    new google.maps.LatLng(51.07515553685919, 9.75566055423219),
    new google.maps.LatLng(51.08935735945997, 9.780028236318724),
    new google.maps.LatLng(51.1478320463548, 9.772557922228087),
    new google.maps.LatLng(51.18589845500836, 9.69086816828937),
    new google.maps.LatLng(51.19233431618617, 9.626572032631895),
    new google.maps.LatLng(51.219778855043, 9.639009690393705),
    new google.maps.LatLng(51.24525987292006, 9.736797853656116),
    new google.maps.LatLng(51.26745573053059, 9.769357378437114),
    new google.maps.LatLng(51.27445263729003, 9.659217736677977),
    new google.maps.LatLng(51.3160811428531, 9.649479322163344),
    new google.maps.LatLng(51.30161750187784, 9.743027996117103),
    new google.maps.LatLng(51.32818698436063, 9.776317417120604),
    new google.maps.LatLng(51.36298600393312, 9.709195340685085),
    new google.maps.LatLng(51.39093728572619, 9.796621795191383),
    new google.maps.LatLng(51.40847460846153, 9.802031551527577),
    new google.maps.LatLng(51.43865625016203, 9.736771748327858),
    new google.maps.LatLng(51.46998182702841, 9.654779348568457),
    new google.maps.LatLng(51.55653272690149, 9.655137813582328),
    new google.maps.LatLng(51.58298126292581, 9.682427954936008),
    new google.maps.LatLng(51.60808614810588, 9.63490541974968),
    new google.maps.LatLng(51.65165671176968, 9.48737179352343),
    new google.maps.LatLng(51.62636160657647, 9.411401661615312),
    new google.maps.LatLng(51.61296914149531, 9.339075727918907),
    new google.maps.LatLng(51.62249934861939, 9.28533920274365),
    new google.maps.LatLng(51.67302747830921, 9.269016129791193),
    new google.maps.LatLng(51.63432415525111, 9.189679387523027),
    new google.maps.LatLng(51.633858728272, 9.101720086054634),
    new google.maps.LatLng(51.65955021417005, 9.058940706426563),
    new google.maps.LatLng(51.64745202691168, 8.995928218678175),
    new google.maps.LatLng(51.5760298794277, 9.023681942806203),
    new google.maps.LatLng(51.53060866781883, 8.902723034533011),
    new google.maps.LatLng(51.54578504904572, 8.855611670854165),
    new google.maps.LatLng(51.52980723013619, 8.811681206312667),
    new google.maps.LatLng(51.49483561751862, 8.834075608698562),
    new google.maps.LatLng(51.44969805636702, 8.764015328726769)
    ];
    region_34.push(region_34_1);
    region_borders['region_34'] = region_34;
    region_center['region_34'] = '';
    
    //******************************************************************************    
    //PLZ Region 35
    //******************************************************************************  
    region_35 = [];
    var region_35_1 = [
    new google.maps.LatLng(50.53904928384292, 8.119322170730545),
    new google.maps.LatLng(50.48098005142187, 8.192182717995625),
    new google.maps.LatLng(50.43992793387339, 8.240167975033687),
    new google.maps.LatLng(50.38015474471609, 8.303335152828129),
    new google.maps.LatLng(50.37865879673221, 8.36187290248847),
    new google.maps.LatLng(50.41647264224405, 8.466082153143436),
    new google.maps.LatLng(50.39678857649533, 8.505150852900513),
    new google.maps.LatLng(50.41969844829189, 8.54161180406229),
    new google.maps.LatLng(50.44572136045385, 8.579894880455026),
    new google.maps.LatLng(50.48295636080175, 8.676511242848999),
    new google.maps.LatLng(50.46745360656244, 8.774958210896855),
    new google.maps.LatLng(50.43166863540358, 8.858289508817197),
    new google.maps.LatLng(50.43312951415756, 8.949033909643786),
    new google.maps.LatLng(50.49246601713327, 8.979106164710872),
    new google.maps.LatLng(50.49538767669897, 9.074087610715335),
    new google.maps.LatLng(50.55064275638733, 9.139532415362897),
    new google.maps.LatLng(50.5329674939772, 9.244623711691242),
    new google.maps.LatLng(50.61427274591859, 9.252201307408164),
    new google.maps.LatLng(50.61986761650147, 9.149548334041258),
    new google.maps.LatLng(50.64248989308992, 9.1108359182595),
    new google.maps.LatLng(50.67268799025348, 9.13589159262912),
    new google.maps.LatLng(50.71734341428292, 9.142414964615549),
    new google.maps.LatLng(50.77223860474612, 9.047994209298565),
    new google.maps.LatLng(50.81428271311249, 9.083808168372416),
    new google.maps.LatLng(50.83926006997954, 9.158567427955786),
    new google.maps.LatLng(50.8871141697273, 9.108108523661953),
    new google.maps.LatLng(50.89692435520351, 9.128885359484872),
    new google.maps.LatLng(50.92014086763999, 9.110424937678093),
    new google.maps.LatLng(50.91953011609125, 9.0492966259641),
    new google.maps.LatLng(50.93052306774988, 8.980102164742343),
    new google.maps.LatLng(50.9669678591125, 8.913913345987979),
    new google.maps.LatLng(50.95246034925602, 8.911155405799335),
    new google.maps.LatLng(50.96663306942317, 8.736053186596084),
    new google.maps.LatLng(50.99400530285009, 8.672763493467805),
    new google.maps.LatLng(50.96066300671011, 8.639465525906104),
    new google.maps.LatLng(50.9497691986065, 8.575136880033389),
    new google.maps.LatLng(50.96800520373543, 8.482718530461742),
    new google.maps.LatLng(50.91404225745795, 8.432812129312044),
    new google.maps.LatLng(50.86212396309047, 8.357059198660586),
    new google.maps.LatLng(50.86069442832619, 8.311525038274109),
    new google.maps.LatLng(50.88264992380821, 8.280874016922983),
    new google.maps.LatLng(50.78632204071421, 8.131551340247308),
    new google.maps.LatLng(50.73590159126867, 8.161788397043416),
    new google.maps.LatLng(50.68671978054275, 8.127943425587617),
    new google.maps.LatLng(50.65265912246212, 8.112882377685384),
    new google.maps.LatLng(50.59604637099617, 8.156567446113531),
    new google.maps.LatLng(50.53904928384292, 8.119322170730545),
    new google.maps.LatLng(50.53904928384292, 8.119322170730545)
    ];
    region_35.push(region_35_1);
    region_borders['region_35'] = region_35;
    region_center['region_35'] = '';
    
    //******************************************************************************    
    //PLZ Region 36
    //******************************************************************************  
    region_36 = [];
    var region_36_1 = [
    new google.maps.LatLng(50.53272063789392, 9.243402598737889),
    new google.maps.LatLng(50.46138552664274, 9.260807200300793),
    new google.maps.LatLng(50.44809111970735, 9.33834675189744),
    new google.maps.LatLng(50.38709094133863, 9.36124380230326),
    new google.maps.LatLng(50.34896640454437, 9.38764233108177),
    new google.maps.LatLng(50.24720327387204, 9.501279766901579),
    new google.maps.LatLng(50.2263751154177, 9.575569722049535),
    new google.maps.LatLng(50.23332630412733, 9.666232125552614),
    new google.maps.LatLng(50.24797791597906, 9.635981109942799),
    new google.maps.LatLng(50.29333507328819, 9.726565145247568),
    new google.maps.LatLng(50.34339096281234, 9.745481506290831),
    new google.maps.LatLng(50.35755172287865, 9.735729730511245),
    new google.maps.LatLng(50.4257687264532, 9.76133101425914),
    new google.maps.LatLng(50.40000673184512, 9.861141449610397),
    new google.maps.LatLng(50.42141832797333, 9.948736340486928),
    new google.maps.LatLng(50.46321861561029, 10.00443336447394),
    new google.maps.LatLng(50.51708250516443, 10.03997814223745),
    new google.maps.LatLng(50.5600589241118, 10.05239535255886),
    new google.maps.LatLng(50.60976749444818, 10.03671044449433),
    new google.maps.LatLng(50.63659134948896, 10.08324373850509),
    new google.maps.LatLng(50.61895449660408, 10.20314504403434),
    new google.maps.LatLng(50.6412139198067, 10.21917918859215),
    new google.maps.LatLng(50.67760577214206, 10.18250955558249),
    new google.maps.LatLng(50.7196748977713, 10.18300780205183),
    new google.maps.LatLng(50.73722827382618, 10.22178562347569),
    new google.maps.LatLng(50.74522379795698, 10.209767899808),
    new google.maps.LatLng(50.77414158089572, 10.21064942160811),
    new google.maps.LatLng(50.76627733435632, 10.25973092270165),
    new google.maps.LatLng(50.78870008906794, 10.33299669441021),
    new google.maps.LatLng(50.82464779888582, 10.29842786629046),
    new google.maps.LatLng(50.87016797839351, 10.33807997089507),
    new google.maps.LatLng(50.90197011911994, 10.33437580201592),
    new google.maps.LatLng(50.86098786593977, 10.22828615682619),
    new google.maps.LatLng(50.88147410875684, 10.06494979925517),
    new google.maps.LatLng(50.92921402400574, 9.956737142726535),
    new google.maps.LatLng(50.94610149472109, 10.06444378777229),
    new google.maps.LatLng(51.01490055597705, 10.03535404379663),
    new google.maps.LatLng(51.10257844051562, 10.03410712035887),
    new google.maps.LatLng(51.12518155218988, 9.99404383650727),
    new google.maps.LatLng(51.12295648432569, 9.94770934184338),
    new google.maps.LatLng(51.10658934666158, 9.904991233700715),
    new google.maps.LatLng(51.08857946928311, 9.835328922691566),
    new google.maps.LatLng(51.08936133924718, 9.778233824616137),
    new google.maps.LatLng(51.07477138022587, 9.755326677455345),
    new google.maps.LatLng(51.0844361955162, 9.704726564701767),
    new google.maps.LatLng(51.02504457693495, 9.584471130519475),
    new google.maps.LatLng(50.97792008453249, 9.556418800989002),
    new google.maps.LatLng(50.95787350568262, 9.572028196600852),
    new google.maps.LatLng(50.9148368786871, 9.496654238391482),
    new google.maps.LatLng(50.88679946729929, 9.50185513156663),
    new google.maps.LatLng(50.88158160068457, 9.429716232108223),
    new google.maps.LatLng(50.84829065501615, 9.40924875378566),
    new google.maps.LatLng(50.80898999032863, 9.487444664408955),
    new google.maps.LatLng(50.77655736528573, 9.394509631601691),
    new google.maps.LatLng(50.81397980598106, 9.272599277258429),
    new google.maps.LatLng(50.83949726516332, 9.156013895018567),
    new google.maps.LatLng(50.81416712243012, 9.082543383420905),
    new google.maps.LatLng(50.77124307508876, 9.048406178039684),
    new google.maps.LatLng(50.71606039575413, 9.143914799417363),
    new google.maps.LatLng(50.67218991019062, 9.13449374782823),
    new google.maps.LatLng(50.64247948043909, 9.109967400290177),
    new google.maps.LatLng(50.61915605170748, 9.153336830808836),
    new google.maps.LatLng(50.61384828656219, 9.250442342729412),
    new google.maps.LatLng(50.53272063789392, 9.243402598737889)
    ];
    region_36.push(region_36_1);
    region_borders['region_36'] = region_36;
    region_center['region_36'] = '';
    
    //******************************************************************************    
    //PLZ Region 37
    //******************************************************************************  
    region_37 = [];
    var region_37_1 = [
    new google.maps.LatLng(51.67345186929742, 9.26745591142671),
    new google.maps.LatLng(51.62313115679134, 9.284786505345942),
    new google.maps.LatLng(51.61334045536448, 9.339771867134139),
    new google.maps.LatLng(51.62631515227479, 9.407750756318748),
    new google.maps.LatLng(51.65150735321442, 9.487445798296019),
    new google.maps.LatLng(51.60790458842467, 9.634381466570996),
    new google.maps.LatLng(51.58357540057267, 9.682436972311475),
    new google.maps.LatLng(51.55677460973877, 9.655607871426618),
    new google.maps.LatLng(51.47040370908293, 9.654258130924532),
    new google.maps.LatLng(51.43709252302943, 9.740574728203928),
    new google.maps.LatLng(51.408500130615, 9.803131933094363),
    new google.maps.LatLng(51.39111431286289, 9.797672039987573),
    new google.maps.LatLng(51.36319288516787, 9.707750517130368),
    new google.maps.LatLng(51.32789609868967, 9.776470771697461),
    new google.maps.LatLng(51.30199985832531, 9.742039779449447),
    new google.maps.LatLng(51.31698461615025, 9.647922424082566),
    new google.maps.LatLng(51.27476499082434, 9.658110194623827),
    new google.maps.LatLng(51.26736439558687, 9.769564032640602),
    new google.maps.LatLng(51.24606590862943, 9.73697599514194),
    new google.maps.LatLng(51.21912307946112, 9.639073909193483),
    new google.maps.LatLng(51.19220539490404, 9.626679014587429),
    new google.maps.LatLng(51.18644405517907, 9.691111760218938),
    new google.maps.LatLng(51.14821806321773, 9.772704347341181),
    new google.maps.LatLng(51.08946282311671, 9.7792518317865),
    new google.maps.LatLng(51.08987999276974, 9.833641746159543),
    new google.maps.LatLng(51.10639575945496, 9.904406260460508),
    new google.maps.LatLng(51.12165600564096, 9.945068755876555),
    new google.maps.LatLng(51.12538972960611, 9.992491234844753),
    new google.maps.LatLng(51.10221906137065, 10.03383579186054),
    new google.maps.LatLng(51.05795060822342, 10.03501950986294),
    new google.maps.LatLng(51.01788709468242, 10.03408517696855),
    new google.maps.LatLng(51.00126569034426, 10.13164351754927),
    new google.maps.LatLng(50.9991317687455, 10.18613010005451),
    new google.maps.LatLng(51.02713766090505, 10.2195393101283),
    new google.maps.LatLng(51.05766522380714, 10.15005361763102),
    new google.maps.LatLng(51.0993715897353, 10.16235671473176),
    new google.maps.LatLng(51.14313280678074, 10.12260622902478),
    new google.maps.LatLng(51.15122820802151, 10.18056574175709),
    new google.maps.LatLng(51.1204823102353, 10.20720949657187),
    new google.maps.LatLng(51.16834180609872, 10.21261221429869),
    new google.maps.LatLng(51.18755942646531, 10.23951122292652),
    new google.maps.LatLng(51.19631939871303, 10.20889495670024),
    new google.maps.LatLng(51.23553371083742, 10.20377577325061),
    new google.maps.LatLng(51.23843752963709, 10.29373858889783),
    new google.maps.LatLng(51.28626567323069, 10.31118414798936),
    new google.maps.LatLng(51.28821914815238, 10.37146618124846),
    new google.maps.LatLng(51.34029794660592, 10.38467696626033),
    new google.maps.LatLng(51.34968606088235, 10.48802014318321),
    new google.maps.LatLng(51.3533598683294, 10.4989400128575),
    new google.maps.LatLng(51.36954688002934, 10.52947574415257),
    new google.maps.LatLng(51.41665008259285, 10.48536238257149),
    new google.maps.LatLng(51.43747225771591, 10.5242044821899),
    new google.maps.LatLng(51.45785036111672, 10.49891933404256),
    new google.maps.LatLng(51.52258361315699, 10.53728886180594),
    new google.maps.LatLng(51.55142905352335, 10.47639584976681),
    new google.maps.LatLng(51.55396053082518, 10.47646356844394),
    new google.maps.LatLng(51.57322491391662, 10.49618726911367),
    new google.maps.LatLng(51.55659414307816, 10.55374952125275),
    new google.maps.LatLng(51.57507321745806, 10.60273484333379),
    new google.maps.LatLng(51.55673619639567, 10.65137258762824),
    new google.maps.LatLng(51.57631052115487, 10.67374319869167),
    new google.maps.LatLng(51.60123893837362, 10.63914678651913),
    new google.maps.LatLng(51.63680431204829, 10.68044317041887),
    new google.maps.LatLng(51.65107177902252, 10.64973784668831),
    new google.maps.LatLng(51.68212681471742, 10.64723005515651),
    new google.maps.LatLng(51.73583720425171, 10.57362506989355),
    new google.maps.LatLng(51.7595422643494, 10.60202183309802),
    new google.maps.LatLng(51.77693974546767, 10.58685550276759),
    new google.maps.LatLng(51.76296806410625, 10.49580905891979),
    new google.maps.LatLng(51.78604914123494, 10.38498650185862),
    new google.maps.LatLng(51.76624777743883, 10.31842828431524),
    new google.maps.LatLng(51.81747554272454, 10.26066875636787),
    new google.maps.LatLng(51.79434296871942, 10.15697549878522),
    new google.maps.LatLng(51.83447801608607, 10.1036262899203),
    new google.maps.LatLng(51.92821097358291, 10.06835624337087),
    new google.maps.LatLng(51.93177315878006, 9.998896491968573),
    new google.maps.LatLng(51.89811906293097, 9.967496361683683),
    new google.maps.LatLng(51.9077818846352, 9.896107199685851),
    new google.maps.LatLng(51.890909048556, 9.808255597515839),
    new google.maps.LatLng(51.92175445009391, 9.721024216920004),
    new google.maps.LatLng(51.95740339293893, 9.687162714525465),
    new google.maps.LatLng(51.9768123340763, 9.634909111228723),
    new google.maps.LatLng(52.04259255407485, 9.563434062764511),
    new google.maps.LatLng(52.0212535406724, 9.537682580373133),
    new google.maps.LatLng(52.02010126111912, 9.502552155419806),
    new google.maps.LatLng(51.97712151138091, 9.415948676554462),
    new google.maps.LatLng(51.92580323760255, 9.46418795289166),
    new google.maps.LatLng(51.9199619941519, 9.436761054313536),
    new google.maps.LatLng(51.93453378946345, 9.355399071474402),
    new google.maps.LatLng(51.92062182367334, 9.312067867003311),
    new google.maps.LatLng(51.85297860803036, 9.342866321989137),
    new google.maps.LatLng(51.84858235506028, 9.309050368708958),
    new google.maps.LatLng(51.86234168614449, 9.238947857680174),
    new google.maps.LatLng(51.85523499647501, 9.210694678483502),
    new google.maps.LatLng(51.82808292448783, 9.188301057334902),
    new google.maps.LatLng(51.78116102819166, 9.169717385189369),
    new google.maps.LatLng(51.77898919097684, 9.258045892868566),
    new google.maps.LatLng(51.73115606625034, 9.293043301588524),
    new google.maps.LatLng(51.67345186929742, 9.26745591142671)
    ];
    region_37.push(region_37_1);
    region_borders['region_37'] = region_37;
    region_center['region_37'] = '';
    
    //******************************************************************************    
    //PLZ Region 38
    //******************************************************************************  
    region_38 = [];
    var region_38_1 = [
    new google.maps.LatLng(52.49199384784312, 10.2614726448932),
    new google.maps.LatLng(52.44791201350749, 10.2903044315875),
    new google.maps.LatLng(52.36905703383445, 10.38613038925151),
    new google.maps.LatLng(52.35750913416021, 10.29263807965082),
    new google.maps.LatLng(52.30858901493723, 10.35367227586024),
    new google.maps.LatLng(52.26475931449413, 10.30509094777292),
    new google.maps.LatLng(52.2122962577789, 10.25805727910002),
    new google.maps.LatLng(52.17986321624632, 10.26093381379842),
    new google.maps.LatLng(52.17192313931956, 10.19767588257159),
    new google.maps.LatLng(52.09455325604423, 10.19981990769956),
    new google.maps.LatLng(52.04524920311329, 10.19138888724005),
    new google.maps.LatLng(51.95003538340719, 10.18846460499244),
    new google.maps.LatLng(51.95600042656135, 10.07975633572513),
    new google.maps.LatLng(51.9299743740575, 10.06811282237134),
    new google.maps.LatLng(51.83456419234704, 10.103186015533),
    new google.maps.LatLng(51.79450403954078, 10.15575984975983),
    new google.maps.LatLng(51.81852429022591, 10.2600748204264),
    new google.maps.LatLng(51.7661649972348, 10.31672519812483),
    new google.maps.LatLng(51.7875643526304, 10.38402646664846),
    new google.maps.LatLng(51.76167996618129, 10.49360278120934),
    new google.maps.LatLng(51.7788682928058, 10.58496584911366),
    new google.maps.LatLng(51.75928667436045, 10.6018240963097),
    new google.maps.LatLng(51.73690594484884, 10.57301527111048),
    new google.maps.LatLng(51.68215690006117, 10.64693305368104),
    new google.maps.LatLng(51.65084759624104, 10.64786146076001),
    new google.maps.LatLng(51.63628544526967, 10.67925476847329),
    new google.maps.LatLng(51.64694608567175, 10.7629060163067),
    new google.maps.LatLng(51.6240019554929, 10.82787654496114),
    new google.maps.LatLng(51.60998919069684, 10.89525158613939),
    new google.maps.LatLng(51.65982284376447, 10.95444569691204),
    new google.maps.LatLng(51.73164445140807, 10.89615351424735),
    new google.maps.LatLng(51.77364641997746, 10.99897028935507),
    new google.maps.LatLng(51.83226455344169, 11.04405032179742),
    new google.maps.LatLng(51.82753268523774, 11.08897325015491),
    new google.maps.LatLng(51.85576023835604, 11.2375122418864),
    new google.maps.LatLng(51.89178300787138, 11.26672152613368),
    new google.maps.LatLng(51.95811480295799, 11.05481358862565),
    new google.maps.LatLng(52.0057868001407, 11.103222102007),
    new google.maps.LatLng(52.03651379617299, 11.06646993008714),
    new google.maps.LatLng(52.05331858291547, 10.96925174851497),
    new google.maps.LatLng(52.09839343911553, 10.93985363360702),
    new google.maps.LatLng(52.15016080078851, 11.0590729298858),
    new google.maps.LatLng(52.19698876287481, 11.0152479039034),
    new google.maps.LatLng(52.22031608480963, 11.08231276523689),
    new google.maps.LatLng(52.26898813192287, 11.02985247331399),
    new google.maps.LatLng(52.34186823785345, 10.98598242265817),
    new google.maps.LatLng(52.37692651515978, 11.0652118724361),
    new google.maps.LatLng(52.45676652642965, 10.94004300548592),
    new google.maps.LatLng(52.49511009957806, 10.94878669415676),
    new google.maps.LatLng(52.50598117477256, 11.04227554295343),
    new google.maps.LatLng(52.54009256162339, 11.10880852803403),
    new google.maps.LatLng(52.52322936491561, 11.16172977165626),
    new google.maps.LatLng(52.62324541549597, 11.27521363256139),
    new google.maps.LatLng(52.63285392067383, 11.23725741764144),
    new google.maps.LatLng(52.76468251364282, 11.25269011725637),
    new google.maps.LatLng(52.78267994980878, 11.15751145561787),
    new google.maps.LatLng(52.75567255122509, 11.1442578478162),
    new google.maps.LatLng(52.72246275042876, 11.06659850582206),
    new google.maps.LatLng(52.71830186942908, 10.98555741332858),
    new google.maps.LatLng(52.70061062078309, 10.95606478551932),
    new google.maps.LatLng(52.70016618863055, 10.83923751099392),
    new google.maps.LatLng(52.63002449030247, 10.89572161079673),
    new google.maps.LatLng(52.59932593139116, 10.71634956477776),
    new google.maps.LatLng(52.58372477557889, 10.69004457598339),
    new google.maps.LatLng(52.55743304717726, 10.59098908030002),
    new google.maps.LatLng(52.55465888156987, 10.44531317549214),
    new google.maps.LatLng(52.56029977140436, 10.35882893840197),
    new google.maps.LatLng(52.49199384784312, 10.2614726448932)
    ];
    region_38.push(region_38_1);
    region_borders['region_38'] = region_38;
    region_center['region_38'] = '';
    
    //******************************************************************************    
    //PLZ Region 39
    //******************************************************************************  
    region_39 = [];
    var region_39_1 = [
    new google.maps.LatLng(52.76541570760727, 11.25107552815206),
    new google.maps.LatLng(52.63295947571052, 11.23513541299634),
    new google.maps.LatLng(52.62387542804866, 11.27522443422273),
    new google.maps.LatLng(52.55950815306536, 11.20887235328563),
    new google.maps.LatLng(52.52285458231349, 11.16082270800817),
    new google.maps.LatLng(52.54099571262194, 11.10810917298216),
    new google.maps.LatLng(52.50752996611759, 11.04246480172111),
    new google.maps.LatLng(52.49566580583421, 10.94776814851561),
    new google.maps.LatLng(52.45724385202702, 10.94204707998295),
    new google.maps.LatLng(52.37693059141011, 11.06420746162346),
    new google.maps.LatLng(52.34136461187875, 10.9848085579112),
    new google.maps.LatLng(52.26970978274603, 11.02939641944456),
    new google.maps.LatLng(52.22059415115075, 11.0837254977252),
    new google.maps.LatLng(52.19744505102631, 11.01304324767625),
    new google.maps.LatLng(52.14944872038993, 11.06023124296921),
    new google.maps.LatLng(52.09902424186364, 10.93823151089737),
    new google.maps.LatLng(52.05349969583593, 10.96921767274055),
    new google.maps.LatLng(52.03663826264449, 11.06716316480363),
    new google.maps.LatLng(52.00647215908364, 11.10359182361931),
    new google.maps.LatLng(51.95760862150479, 11.05537321255566),
    new google.maps.LatLng(51.91849241879908, 11.17473662711293),
    new google.maps.LatLng(51.89141905419277, 11.26710511246838),
    new google.maps.LatLng(51.90000891197796, 11.33292482115266),
    new google.maps.LatLng(51.87570758839277, 11.34449540685593),
    new google.maps.LatLng(51.84407234811182, 11.38786541175973),
    new google.maps.LatLng(51.83945339635335, 11.47209012565709),
    new google.maps.LatLng(51.75034462616095, 11.61074975040964),
    new google.maps.LatLng(51.76606410672779, 11.65638526422237),
    new google.maps.LatLng(51.82437353300988, 11.65015032752543),
    new google.maps.LatLng(51.87127931060446, 11.71519316677766),
    new google.maps.LatLng(51.83696911329093, 11.85713117441573),
    new google.maps.LatLng(51.8759916841784, 11.92448946660986),
    new google.maps.LatLng(51.86520582728105, 11.96293934838429),
    new google.maps.LatLng(51.87398422359558, 12.00742266064852),
    new google.maps.LatLng(51.85363649117452, 12.05240810765647),
    new google.maps.LatLng(51.87691704465035, 12.18332425120277),
    new google.maps.LatLng(51.91987253167744, 12.16224745494056),
    new google.maps.LatLng(51.96856846988969, 12.27837739634867),
    new google.maps.LatLng(51.98631983887997, 12.2596013437348),
    new google.maps.LatLng(52.04235512020023, 12.37500152580716),
    new google.maps.LatLng(52.10521971855597, 12.27609193209035),
    new google.maps.LatLng(52.17098616454242, 12.21259271219006),
    new google.maps.LatLng(52.21552140582552, 12.24474464880478),
    new google.maps.LatLng(52.25143254650968, 12.2497884429458),
    new google.maps.LatLng(52.34483102554341, 12.30674866139118),
    new google.maps.LatLng(52.41466283567711, 12.27910253216974),
    new google.maps.LatLng(52.49255859560081, 12.31789090869268),
    new google.maps.LatLng(52.49904759879859, 12.18385332601878),
    new google.maps.LatLng(52.53020046142137, 12.14223899653541),
    new google.maps.LatLng(52.63042854268086, 12.15807239602047),
    new google.maps.LatLng(52.70610691205366, 12.12912634507684),
    new google.maps.LatLng(52.78994285476513, 12.24629714201335),
    new google.maps.LatLng(52.86449599001403, 12.22466399198692),
    new google.maps.LatLng(52.85332720711984, 12.12095695863736),
    new google.maps.LatLng(52.87779634312854, 12.12837026286884),
    new google.maps.LatLng(52.89165370695661, 11.92396903045983),
    new google.maps.LatLng(52.95695218274926, 11.83220931293092),
    new google.maps.LatLng(53.03796872859059, 11.63536626487014),
    new google.maps.LatLng(53.03509795257859, 11.59459930909127),
    new google.maps.LatLng(53.00020208094616, 11.5631151200594),
    new google.maps.LatLng(53.00566665632032, 11.51257209476796),
    new google.maps.LatLng(52.95423282334217, 11.4925998251228),
    new google.maps.LatLng(52.9375998817107, 11.50973700104957),
    new google.maps.LatLng(52.91610834242689, 11.42421688313715),
    new google.maps.LatLng(52.87384491800698, 11.30993344800802),
    new google.maps.LatLng(52.83969395552331, 11.3155908159081),
    new google.maps.LatLng(52.81353600457374, 11.34289798428937),
    new google.maps.LatLng(52.76732489714112, 11.33405481505968),
    new google.maps.LatLng(52.76541570760727, 11.25107552815206)
    ];
    region_39.push(region_39_1);
    region_borders['region_39'] = region_39;
    region_center['region_39'] = '';
    
    //******************************************************************************    
    //PLZ Region 40
    //******************************************************************************  
    region_40 = [];
    var region_40_1 = [
    new google.maps.LatLng(51.08126293562482, 6.853716161526173),
    new google.maps.LatLng(51.0631603918399, 6.892056338232287),
    new google.maps.LatLng(51.07002466668555, 6.980801015830869),
    new google.maps.LatLng(51.13940340884697, 6.997277690230126),
    new google.maps.LatLng(51.1461060184909, 6.954874255405763),
    new google.maps.LatLng(51.1619092829424, 6.956596006087629),
    new google.maps.LatLng(51.16998048817564, 6.988272533152243),
    new google.maps.LatLng(51.19400478655696, 6.968858334296124),
    new google.maps.LatLng(51.24747931225316, 7.009931573991741),
    new google.maps.LatLng(51.25431282011616, 7.039200215669315),
    new google.maps.LatLng(51.29929525656015, 6.980855299186),
    new google.maps.LatLng(51.31039280936668, 6.937474670273289),
    new google.maps.LatLng(51.36724403716799, 6.901306543944214),
    new google.maps.LatLng(51.34930189183837, 6.83399305357627),
    new google.maps.LatLng(51.34645409106924, 6.761061819402086),
    new google.maps.LatLng(51.30790826959654, 6.622322924674537),
    new google.maps.LatLng(51.28495522578154, 6.620014126238363),
    new google.maps.LatLng(51.27902964151589, 6.589368959023794),
    new google.maps.LatLng(51.25355181285883, 6.616619165756443),
    new google.maps.LatLng(51.22268605949088, 6.702783920750655),
    new google.maps.LatLng(51.18640894740874, 6.733508410191432),
    new google.maps.LatLng(51.17902400841168, 6.792024050108436),
    new google.maps.LatLng(51.14554001756618, 6.791629380908595),
    new google.maps.LatLng(51.158498596303, 6.84275216277938),
    new google.maps.LatLng(51.11155652927767, 6.877073497639802),
    new google.maps.LatLng(51.08126293562482, 6.853716161526173)
    ];
    region_40.push(region_40_1);
    region_borders['region_40'] = region_40;
    region_center['region_40'] = '';
    
    //******************************************************************************    
    //PLZ Region 41
    //******************************************************************************  
    region_41 = [];
    var region_41_1 = [
    new google.maps.LatLng(51.35583013689605, 6.231794873553531),
    new google.maps.LatLng(51.35343646079907, 6.294826395385629),
    new google.maps.LatLng(51.31206006055063, 6.323045244112673),
    new google.maps.LatLng(51.30504024332826, 6.402912037849317),
    new google.maps.LatLng(51.27538967734734, 6.417772331819571),
    new google.maps.LatLng(51.23424990931934, 6.47881819083114),
    new google.maps.LatLng(51.2270338312974, 6.556399235739272),
    new google.maps.LatLng(51.25487244182852, 6.615335362017687),
    new google.maps.LatLng(51.22332749775652, 6.701402675102177),
    new google.maps.LatLng(51.18703319317462, 6.731008943659964),
    new google.maps.LatLng(51.1803071085449, 6.793014889310422),
    new google.maps.LatLng(51.1443556008979, 6.790958967895911),
    new google.maps.LatLng(51.15952740996006, 6.843185075961182),
    new google.maps.LatLng(51.11218678927416, 6.876059764002749),
    new google.maps.LatLng(51.08371711689257, 6.853814912013041),
    new google.maps.LatLng(51.03717805603265, 6.798683863370563),
    new google.maps.LatLng(51.06041754997177, 6.756581250005242),
    new google.maps.LatLng(51.01412985466608, 6.714734551523847),
    new google.maps.LatLng(51.02070908211811, 6.644908104520962),
    new google.maps.LatLng(51.02380375044871, 6.565750823415543),
    new google.maps.LatLng(51.05799140847181, 6.530326019494654),
    new google.maps.LatLng(51.03394093274281, 6.474501870360296),
    new google.maps.LatLng(51.04240288623168, 6.460171123924625),
    new google.maps.LatLng(51.01733462739743, 6.363369321882535),
    new google.maps.LatLng(51.02270621630311, 6.295596301326169),
    new google.maps.LatLng(50.98894430420536, 6.23069136778355),
    new google.maps.LatLng(51.07430593808792, 6.156686157076239),
    new google.maps.LatLng(51.12008272662506, 6.08403137463482),
    new google.maps.LatLng(51.14717770549417, 6.157114547936084),
    new google.maps.LatLng(51.15680862258085, 6.175041337581463),
    new google.maps.LatLng(51.17269387938789, 6.144602547100537),
    new google.maps.LatLng(51.18543088779378, 6.177735007958236),
    new google.maps.LatLng(51.19434867051153, 6.164701921620441),
    new google.maps.LatLng(51.16994871449151, 6.086229344860725),
    new google.maps.LatLng(51.21948366161688, 6.074401210432681),
    new google.maps.LatLng(51.2207414296033, 6.089196809306314),
    new google.maps.LatLng(51.2415949453894, 6.073040444950566),
    new google.maps.LatLng(51.30941509412757, 6.156259604140926),
    new google.maps.LatLng(51.35583013689605, 6.231794873553531)
    ];
    region_41.push(region_41_1);
    region_borders['region_41'] = region_41;
    region_center['region_41'] = '';
    
    //******************************************************************************    
    //PLZ Region 42
    //******************************************************************************  
    region_42 = [];
    var region_42_1 = [
    new google.maps.LatLng(51.08886117669687, 6.987652719467306),
    new google.maps.LatLng(51.07936007895096, 7.011496068520828),
    new google.maps.LatLng(51.11400315455726, 7.157831428520955),
    new google.maps.LatLng(51.06446386257845, 7.137267790713118),
    new google.maps.LatLng(51.08155520491041, 7.275022801343091),
    new google.maps.LatLng(51.10362601300341, 7.295191368818741),
    new google.maps.LatLng(51.10048063470551, 7.339599011873901),
    new google.maps.LatLng(51.1463969469656, 7.395850737778209),
    new google.maps.LatLng(51.16799649743389, 7.380132188214161),
    new google.maps.LatLng(51.18697177008899, 7.42241802800997),
    new google.maps.LatLng(51.21501789800935, 7.430327809992625),
    new google.maps.LatLng(51.24553561252001, 7.366122757139488),
    new google.maps.LatLng(51.23901656804406, 7.306588166535057),
    new google.maps.LatLng(51.25776689922959, 7.263916345509271),
    new google.maps.LatLng(51.28689224339711, 7.253565867665039),
    new google.maps.LatLng(51.31095323160471, 7.26119222128008),
    new google.maps.LatLng(51.2927240150537, 7.199383404165736),
    new google.maps.LatLng(51.29552514780595, 7.169325996152097),
    new google.maps.LatLng(51.30987628638911, 7.163548189433511),
    new google.maps.LatLng(51.37804339309491, 7.10848845497633),
    new google.maps.LatLng(51.36332571684555, 7.041999150138749),
    new google.maps.LatLng(51.29833563695712, 6.981680953877117),
    new google.maps.LatLng(51.2537186839271, 7.038522637691209),
    new google.maps.LatLng(51.24588480835472, 7.009961094816766),
    new google.maps.LatLng(51.19285513047537, 6.968640297316153),
    new google.maps.LatLng(51.16909428022259, 6.988181302577747),
    new google.maps.LatLng(51.16113757917053, 6.958795197099827),
    new google.maps.LatLng(51.14493788506002, 6.956715672699869),
    new google.maps.LatLng(51.13892506975169, 6.997560644856396),
    new google.maps.LatLng(51.08886117669687, 6.987652719467306)
    ];
    region_42.push(region_42_1);
    region_borders['region_42'] = region_42;
    region_center['region_42'] = '';
    
    //******************************************************************************    
    //PLZ Region 44
    //******************************************************************************  
    region_43 = [];
    var region_43_1 = [
    ];
    region_43.push(region_43_1);
    region_borders['region_43'] = region_43;
    region_center['region_43'] = '';
    
    //******************************************************************************    
    //PLZ Region 44
    //******************************************************************************  
    region_44 = [];
    var region_44_1 = [
    new google.maps.LatLng(51.43715624882647, 7.222323353175706),
    new google.maps.LatLng(51.42435629433619, 7.311616023405081),
    new google.maps.LatLng(51.43883429683898, 7.373781199787699),
    new google.maps.LatLng(51.42519081638714, 7.472384386471123),
    new google.maps.LatLng(51.41757547433723, 7.524706061185229),
    new google.maps.LatLng(51.46687617764135, 7.568806698868784),
    new google.maps.LatLng(51.50412767790016, 7.595635456248298),
    new google.maps.LatLng(51.51928739774311, 7.638402060295335),
    new google.maps.LatLng(51.54441206817721, 7.634814075229819),
    new google.maps.LatLng(51.56731744800023, 7.594515515102316),
    new google.maps.LatLng(51.592462656461, 7.599450732790833),
    new google.maps.LatLng(51.62598886818063, 7.573813271464164),
    new google.maps.LatLng(51.6404498749155, 7.551801267619982),
    new google.maps.LatLng(51.63519165814888, 7.452497149808758),
    new google.maps.LatLng(51.65577761497006, 7.416877926227379),
    new google.maps.LatLng(51.61474908694767, 7.321023440316907),
    new google.maps.LatLng(51.62943352634519, 7.231550132594988),
    new google.maps.LatLng(51.60080447397376, 7.215389115086737),
    new google.maps.LatLng(51.57873426148021, 7.271486694677451),
    new google.maps.LatLng(51.52617836536607, 7.241163000186623),
    new google.maps.LatLng(51.4804494808561, 7.192602756014495),
    new google.maps.LatLng(51.43715624882647, 7.222323353175706)
    ];
    region_44.push(region_44_1);
    region_borders['region_44'] = region_44;
    region_center['region_44'] = '';
    
    //******************************************************************************    
    //PLZ Region 45
    //******************************************************************************  
    region_45 = [];
    var region_45_1 = [
    new google.maps.LatLng(51.34987812268736, 6.836146641039031),
    new google.maps.LatLng(51.36934529578453, 6.901480983107349),
    new google.maps.LatLng(51.31020345553161, 6.937109926095748),
    new google.maps.LatLng(51.29799313173766, 6.980115243760718),
    new google.maps.LatLng(51.32609189009722, 7.003286739708652),
    new google.maps.LatLng(51.36274315885495, 7.042662612416666),
    new google.maps.LatLng(51.37744849837777, 7.107822501736276),
    new google.maps.LatLng(51.30927872942118, 7.164679723752794),
    new google.maps.LatLng(51.29603710255994, 7.170058255109706),
    new google.maps.LatLng(51.29285243476108, 7.198377915636458),
    new google.maps.LatLng(51.30964527208153, 7.260902130523683),
    new google.maps.LatLng(51.31299996949442, 7.301442560214824),
    new google.maps.LatLng(51.34113077470014, 7.306535723581598),
    new google.maps.LatLng(51.36306732212243, 7.300743136909471),
    new google.maps.LatLng(51.38557143645161, 7.254530564622417),
    new google.maps.LatLng(51.43704305801685, 7.222562587153714),
    new google.maps.LatLng(51.48007218856717, 7.192147341348796),
    new google.maps.LatLng(51.52282796212587, 7.239581773789605),
    new google.maps.LatLng(51.57881460861429, 7.272410736226029),
    new google.maps.LatLng(51.60115516338346, 7.215036807793178),
    new google.maps.LatLng(51.62885612193439, 7.23107756226576),
    new google.maps.LatLng(51.61499960779787, 7.321939137212176),
    new google.maps.LatLng(51.65680147900983, 7.41769511749979),
    new google.maps.LatLng(51.7115610613704, 7.305813880272791),
    new google.maps.LatLng(51.73754394256931, 7.324356807517452),
    new google.maps.LatLng(51.77184152264618, 7.263008481764091),
    new google.maps.LatLng(51.80051835279437, 7.254135686037406),
    new google.maps.LatLng(51.8195842035099, 7.179159385417533),
    new google.maps.LatLng(51.772488926153, 7.084847240265811),
    new google.maps.LatLng(51.69560739462333, 7.054686208762961),
    new google.maps.LatLng(51.66847664114715, 7.031527791410415),
    new google.maps.LatLng(51.62751536331253, 7.042422488324935),
    new google.maps.LatLng(51.61740275837253, 6.989161175227188),
    new google.maps.LatLng(51.56350900314219, 6.927229560405701),
    new google.maps.LatLng(51.52750924735176, 7.004460242500472),
    new google.maps.LatLng(51.48122753627879, 6.794280602571144),
    new google.maps.LatLng(51.34987812268736, 6.836146641039031)
    ];
    region_45.push(region_45_1);
    region_borders['region_45'] = region_45;
    region_center['region_45'] = '';
    
    //******************************************************************************    
    //PLZ Region 46
    //******************************************************************************  
    region_46 = [];
    var region_46_1 = [
    new google.maps.LatLng(51.48209660367533, 6.792634333612709),
    new google.maps.LatLng(51.50624549797948, 6.910578286065119),
    new google.maps.LatLng(51.52863175419047, 7.005190226767645),
    new google.maps.LatLng(51.56398462471491, 6.9253276361917),
    new google.maps.LatLng(51.61914229425631, 6.988017694716408),
    new google.maps.LatLng(51.62771397506018, 7.040556291756457),
    new google.maps.LatLng(51.66940033503184, 7.031341766244363),
    new google.maps.LatLng(51.69429121144402, 7.053528679371743),
    new google.maps.LatLng(51.7733515621044, 7.085711863942605),
    new google.maps.LatLng(51.80045208947599, 6.992811850653986),
    new google.maps.LatLng(51.85945224982504, 7.031301454719905),
    new google.maps.LatLng(51.88454740478593, 7.058462993559946),
    new google.maps.LatLng(51.93461370467874, 6.990787880853309),
    new google.maps.LatLng(51.9400883203312, 6.933788087598975),
    new google.maps.LatLng(51.96625407050484, 6.931907808920419),
    new google.maps.LatLng(51.98636563997359, 6.836142756142587),
    new google.maps.LatLng(51.9633107679969, 6.830866128410953),
    new google.maps.LatLng(51.91191934024101, 6.761019711352758),
    new google.maps.LatLng(51.89325148555528, 6.733177922258331),
    new google.maps.LatLng(51.91478356633012, 6.685837907178252),
    new google.maps.LatLng(51.85352237802322, 6.477139247926795),
    new google.maps.LatLng(51.86673170046547, 6.404480333980538),
    new google.maps.LatLng(51.83057971675241, 6.409856663614287),
    new google.maps.LatLng(51.84729467451817, 6.340407431286077),
    new google.maps.LatLng(51.90265857326959, 6.162250846261643),
    new google.maps.LatLng(51.89196391922047, 6.113863714451899),
    new google.maps.LatLng(51.85934488967849, 6.172734329893479),
    new google.maps.LatLng(51.83814463450302, 6.171690739364966),
    new google.maps.LatLng(51.82240361561261, 6.24510200168948),
    new google.maps.LatLng(51.75656269074806, 6.352332544435894),
    new google.maps.LatLng(51.75121264951526, 6.411554061025393),
    new google.maps.LatLng(51.69690487210482, 6.365459396425893),
    new google.maps.LatLng(51.6660824308777, 6.381248851644347),
    new google.maps.LatLng(51.62217078815091, 6.443469609363599),
    new google.maps.LatLng(51.57428886910912, 6.436227435588499),
    new google.maps.LatLng(51.55490347437008, 6.539057453458903),
    new google.maps.LatLng(51.61625024017227, 6.577891051487237),
    new google.maps.LatLng(51.5569167244486, 6.697981224251479),
    new google.maps.LatLng(51.53089273863228, 6.791905548140498),
    new google.maps.LatLng(51.50301348541004, 6.780497577178712),
    new google.maps.LatLng(51.48209660367533, 6.792634333612709)
    ];
    region_46.push(region_46_1);
    region_borders['region_46'] = region_46;
    region_center['region_46'] = '';
    
    //******************************************************************************    
    //PLZ Region 47
    //******************************************************************************  
    region_47 = [];
    var region_47_1 = [
    new google.maps.LatLng(51.43368230432775, 6.213641222081407),
    new google.maps.LatLng(51.35607196598638, 6.230976977293013),
    new google.maps.LatLng(51.35425432410683, 6.295263271586964),
    new google.maps.LatLng(51.3120896663799, 6.323684191873113),
    new google.maps.LatLng(51.30693101647547, 6.401719083270876),
    new google.maps.LatLng(51.27483156159954, 6.41822285167879),
    new google.maps.LatLng(51.23565732788082, 6.475615052737873),
    new google.maps.LatLng(51.22732508117035, 6.555823721063216),
    new google.maps.LatLng(51.25450704558678, 6.617109450579743),
    new google.maps.LatLng(51.28008733212833, 6.586475755080752),
    new google.maps.LatLng(51.28717052102344, 6.61916685302991),
    new google.maps.LatLng(51.30875848894412, 6.622408292340074),
    new google.maps.LatLng(51.33518383690109, 6.70487204891997),
    new google.maps.LatLng(51.34773204470132, 6.763510942096653),
    new google.maps.LatLng(51.34776256877312, 6.765465453706751),
    new google.maps.LatLng(51.34874495000223, 6.8079255096851),
    new google.maps.LatLng(51.35039244063692, 6.835714190869277),
    new google.maps.LatLng(51.44315615080894, 6.812114848510404),
    new google.maps.LatLng(51.50380312839895, 6.781337088330188),
    new google.maps.LatLng(51.53145282579166, 6.791039432429107),
    new google.maps.LatLng(51.55987246497623, 6.692633220627169),
    new google.maps.LatLng(51.617018665783, 6.578038035883291),
    new google.maps.LatLng(51.55396795027913, 6.538131918687839),
    new google.maps.LatLng(51.57460340570676, 6.435729075969587),
    new google.maps.LatLng(51.62380380785577, 6.44271083987306),
    new google.maps.LatLng(51.66666485341273, 6.380617206224199),
    new google.maps.LatLng(51.69708785642351, 6.365727897624447),
    new google.maps.LatLng(51.75190054229138, 6.412576829754581),
    new google.maps.LatLng(51.75657211701345, 6.350691338920664),
    new google.maps.LatLng(51.82349770954232, 6.243871150293215),
    new google.maps.LatLng(51.84023581959568, 6.162242626049633),
    new google.maps.LatLng(51.85830664731368, 6.065566837261114),
    new google.maps.LatLng(51.84079457500992, 6.023498101605571),
    new google.maps.LatLng(51.83374825825021, 5.964616244275172),
    new google.maps.LatLng(51.81504024603447, 5.946944701147614),
    new google.maps.LatLng(51.76444614140846, 5.993097948960675),
    new google.maps.LatLng(51.74285199699074, 5.955411479173378),
    new google.maps.LatLng(51.71153362423718, 6.045936970743027),
    new google.maps.LatLng(51.67148871083623, 6.03750722945408),
    new google.maps.LatLng(51.65137804867615, 6.108367119004123),
    new google.maps.LatLng(51.60292232027141, 6.093694101945967),
    new google.maps.LatLng(51.51637250590932, 6.201304592855694),
    new google.maps.LatLng(51.43368230432775, 6.213641222081407)
    ];
    region_47.push(region_47_1);
    region_borders['region_47'] = region_47;
    region_center['region_47'] = '';
    
    //******************************************************************************    
    //PLZ Region 48
    //******************************************************************************  
    region_48 = [];
    var region_48_1 = [
    new google.maps.LatLng(51.77107701798457, 7.26420443166842),
    new google.maps.LatLng(51.79385194464443, 7.347961912784095),
    new google.maps.LatLng(51.82996429268972, 7.442049403490372),
    new google.maps.LatLng(51.7690778488268, 7.542109987539445),
    new google.maps.LatLng(51.83989392941391, 7.605734784865035),
    new google.maps.LatLng(51.73338297883974, 7.745554011139443),
    new google.maps.LatLng(51.73627665081264, 7.819807266385403),
    new google.maps.LatLng(51.80974989430991, 7.802387754080837),
    new google.maps.LatLng(51.8000106638947, 7.887588286627603),
    new google.maps.LatLng(51.87638837275865, 7.864338566270459),
    new google.maps.LatLng(51.85615114024476, 7.939532950517869),
    new google.maps.LatLng(51.92179681909564, 8.026807747217955),
    new google.maps.LatLng(51.89212359841669, 8.127673424427947),
    new google.maps.LatLng(51.92453423462013, 8.169751435164791),
    new google.maps.LatLng(51.95378844636493, 8.112308375362831),
    new google.maps.LatLng(52.00806729609818, 8.08006909155875),
    new google.maps.LatLng(52.06108274506255, 8.094604833399053),
    new google.maps.LatLng(52.03804736170676, 7.983181048805568),
    new google.maps.LatLng(52.0542129531099, 7.917049483653322),
    new google.maps.LatLng(52.09684691953832, 7.851277583501899),
    new google.maps.LatLng(52.10176714183361, 7.756184088356031),
    new google.maps.LatLng(52.13999152396832, 7.703600316183268),
    new google.maps.LatLng(52.20330524190776, 7.685394538336228),
    new google.maps.LatLng(52.21413683423781, 7.648745855055042),
    new google.maps.LatLng(52.24599481940654, 7.674704311414864),
    new google.maps.LatLng(52.33312393433922, 7.602979069015843),
    new google.maps.LatLng(52.39320403083017, 7.70639794997146),
    new google.maps.LatLng(52.45234421192466, 7.685706635868206),
    new google.maps.LatLng(52.46838771224977, 7.600561858178391),
    new google.maps.LatLng(52.38913320172991, 7.496280983734747),
    new google.maps.LatLng(52.43722926841662, 7.444919285215656),
    new google.maps.LatLng(52.41860036625092, 7.366984319933437),
    new google.maps.LatLng(52.47229935313595, 7.277355794642759),
    new google.maps.LatLng(52.36054317377646, 7.065880229666577),
    new google.maps.LatLng(52.28574559650892, 7.018832811967181),
    new google.maps.LatLng(52.24160812441859, 7.058004646936711),
    new google.maps.LatLng(52.23244672444876, 6.996471294804971),
    new google.maps.LatLng(52.18355553178155, 6.961364503748204),
    new google.maps.LatLng(52.1792217910984, 6.916394457879205),
    new google.maps.LatLng(52.12519687203717, 6.858671492189156),
    new google.maps.LatLng(52.11895321424968, 6.768715645096018),
    new google.maps.LatLng(52.07585681072356, 6.738206840254881),
    new google.maps.LatLng(52.0691139327632, 6.707136929941539),
    new google.maps.LatLng(52.0444844502063, 6.695448495589602),
    new google.maps.LatLng(51.98430269008595, 6.837702369028145),
    new google.maps.LatLng(51.96586502610239, 6.932027824527152),
    new google.maps.LatLng(51.9390955090714, 6.935955765412302),
    new google.maps.LatLng(51.93352973470267, 6.990080147335638),
    new google.maps.LatLng(51.88433986967383, 7.059914625679276),
    new google.maps.LatLng(51.80005209226373, 6.995279148728075),
    new google.maps.LatLng(51.7717195410788, 7.08755227180911),
    new google.maps.LatLng(51.81771616863982, 7.180167725460596),
    new google.maps.LatLng(51.77107701798457, 7.26420443166842)
    ];
    region_48.push(region_48_1);
    region_borders['region_48'] = region_48;
    region_center['region_48'] = '';
    
    //******************************************************************************    
    //PLZ Region 49
    //******************************************************************************  
    region_49 = [];
    var region_49_1 = [
    new google.maps.LatLng(52.91696058707579, 7.141837501692036),
    new google.maps.LatLng(52.9092289109531, 7.391698561969728),
    new google.maps.LatLng(52.9291723982187, 7.431282174868272),
    new google.maps.LatLng(52.89457969653439, 7.546463353625024),
    new google.maps.LatLng(52.90365343174377, 7.646551842798028),
    new google.maps.LatLng(52.93995166249459, 7.75570998498313),
    new google.maps.LatLng(52.9399053994006, 7.760545193008097),
    new google.maps.LatLng(52.89956328448016, 7.821687889822242),
    new google.maps.LatLng(52.93045695095316, 7.933149792092062),
    new google.maps.LatLng(53.01604766212403, 8.102456879919536),
    new google.maps.LatLng(52.92677319201253, 8.120902966613899),
    new google.maps.LatLng(52.86846714326143, 8.254146852152315),
    new google.maps.LatLng(52.8823843765849, 8.329960542033302),
    new google.maps.LatLng(52.82734039932694, 8.400048914487794),
    new google.maps.LatLng(52.81781935518692, 8.466459651146971),
    new google.maps.LatLng(52.75326250592965, 8.472175804114032),
    new google.maps.LatLng(52.75710509593478, 8.575231417796727),
    new google.maps.LatLng(52.68414835519534, 8.669623402606035),
    new google.maps.LatLng(52.63276095262215, 8.617483184391654),
    new google.maps.LatLng(52.58869724532491, 8.613721992679453),
    new google.maps.LatLng(52.52270882448425, 8.769387848153746),
    new google.maps.LatLng(52.49534412491406, 8.705661998354369),
    new google.maps.LatLng(52.52457397645529, 8.653449295042364),
    new google.maps.LatLng(52.49516710710941, 8.561397714668647),
    new google.maps.LatLng(52.50575118296976, 8.506800036248979),
    new google.maps.LatLng(52.44399112037294, 8.403464741476217),
    new google.maps.LatLng(52.45180628101615, 8.300851220625244),
    new google.maps.LatLng(52.39844660071943, 8.320570279711504),
    new google.maps.LatLng(52.35369079656331, 8.446879094853587),
    new google.maps.LatLng(52.26004107176273, 8.470761103618763),
    new google.maps.LatLng(52.21051476375617, 8.452559713606657),
    new google.maps.LatLng(52.18977173178016, 8.52792981007536),
    new google.maps.LatLng(52.15755934088925, 8.446287142841699),
    new google.maps.LatLng(52.11385070611632, 8.373248823159095),
    new google.maps.LatLng(52.13111067749304, 8.268789269142772),
    new google.maps.LatLng(52.0762826904388, 8.188810671169177),
    new google.maps.LatLng(52.05996858224449, 8.092251659300553),
    new google.maps.LatLng(52.03769449302037, 7.985784409428305),
    new google.maps.LatLng(52.05384821037184, 7.916393364053591),
    new google.maps.LatLng(52.09607402685065, 7.849525585761135),
    new google.maps.LatLng(52.10058337610416, 7.754889961532148),
    new google.maps.LatLng(52.1393577294937, 7.704290454101422),
    new google.maps.LatLng(52.20239591478848, 7.686189075625849),
    new google.maps.LatLng(52.21387790109917, 7.647851463569648),
    new google.maps.LatLng(52.24685296268672, 7.674057778025678),
    new google.maps.LatLng(52.33314019694444, 7.605922206819091),
    new google.maps.LatLng(52.39392238618706, 7.707131535425223),
    new google.maps.LatLng(52.45264012119585, 7.683810895477419),
    new google.maps.LatLng(52.4678813014327, 7.602630301308409),
    new google.maps.LatLng(52.39208998299528, 7.495775663243796),
    new google.maps.LatLng(52.436626865917, 7.444280931239218),
    new google.maps.LatLng(52.41851547233864, 7.366681888575359),
    new google.maps.LatLng(52.46990053327977, 7.276696231674757),
    new google.maps.LatLng(52.35862051745274, 7.063309626339136),
    new google.maps.LatLng(52.40030953966413, 7.021098623180595),
    new google.maps.LatLng(52.4666157119624, 6.971544718629248),
    new google.maps.LatLng(52.43092167455203, 6.934058013785698),
    new google.maps.LatLng(52.46182410013716, 6.74128490944881),
    new google.maps.LatLng(52.47735871400643, 6.694501449176451),
    new google.maps.LatLng(52.54172922810492, 6.675455961218606),
    new google.maps.LatLng(52.55518888027181, 6.757015307239658),
    new google.maps.LatLng(52.58595797581046, 6.712888684775975),
    new google.maps.LatLng(52.63093340882003, 6.702060051027052),
    new google.maps.LatLng(52.6471327109823, 6.783596749498169),
    new google.maps.LatLng(52.63029551917294, 7.034871792329945),
    new google.maps.LatLng(52.7978705072055, 7.061740143632377),
    new google.maps.LatLng(52.91696058707579, 7.141837501692036)
    ];
    region_49.push(region_49_1);
    region_borders['region_49'] = region_49;
    region_center['region_49'] = '';
    
    //******************************************************************************    
    //PLZ Region 50
    //******************************************************************************  
    region_50 = [];
    var region_50_1 = [
    new google.maps.LatLng(51.03324578629157, 6.475527446183682),
    new google.maps.LatLng(51.00432597958027, 6.454686286057239),
    new google.maps.LatLng(50.96987729055974, 6.502513145948603),
    new google.maps.LatLng(50.94666391451181, 6.486263407799797),
    new google.maps.LatLng(50.88987318341452, 6.531936549577891),
    new google.maps.LatLng(50.88831449701702, 6.553742782842898),
    new google.maps.LatLng(50.85024674776277, 6.551016881929346),
    new google.maps.LatLng(50.84472744384438, 6.601846280755213),
    new google.maps.LatLng(50.82520463354324, 6.613318359480315),
    new google.maps.LatLng(50.83232876250188, 6.689161700728883),
    new google.maps.LatLng(50.80749882993891, 6.714491106606961),
    new google.maps.LatLng(50.77028928869806, 6.677122636322874),
    new google.maps.LatLng(50.73628274096193, 6.698875041097196),
    new google.maps.LatLng(50.71901242033903, 6.774169726663677),
    new google.maps.LatLng(50.78837974468046, 6.850936995950101),
    new google.maps.LatLng(50.80306107634313, 6.938621693605964),
    new google.maps.LatLng(50.79804712927855, 7.031299166658664),
    new google.maps.LatLng(50.81922971883122, 7.023137423808978),
    new google.maps.LatLng(50.83675169051799, 6.979741542208176),
    new google.maps.LatLng(50.87184841720611, 7.042564169269932),
    new google.maps.LatLng(50.88853183190364, 7.038620545030345),
    new google.maps.LatLng(50.90387804530836, 6.987221843689748),
    new google.maps.LatLng(50.93494774943873, 6.96488816594359),
    new google.maps.LatLng(50.96858724903423, 7.00051353868635),
    new google.maps.LatLng(50.99437563212572, 6.966290073810864),
    new google.maps.LatLng(51.01829270592843, 6.968472229638119),
    new google.maps.LatLng(51.063204798262, 6.89537857280615),
    new google.maps.LatLng(51.08165880207429, 6.850859095279227),
    new google.maps.LatLng(51.03743292309299, 6.798037740666283),
    new google.maps.LatLng(51.05900434222993, 6.759031042472168),
    new google.maps.LatLng(51.01388609150858, 6.714511854691172),
    new google.maps.LatLng(51.02351351034242, 6.56728797041533),
    new google.maps.LatLng(51.05735409353359, 6.529738120137498),
    new google.maps.LatLng(51.03324578629157, 6.475527446183682)
    ];
    region_50.push(region_50_1);
    region_borders['region_50'] = region_50;
    region_center['region_50'] = '';
    
    //******************************************************************************    
    //PLZ Region 51
    //******************************************************************************  
    region_51 = [];
    var region_51_1 = [
    new google.maps.LatLng(51.06198160337058, 6.899011186068325),
    new google.maps.LatLng(51.01895701901809, 6.968344366570185),
    new google.maps.LatLng(50.99516135506041, 6.966316160604928),
    new google.maps.LatLng(50.96806453914213, 7.001091594710777),
    new google.maps.LatLng(50.93644344566179, 6.965884490110239),
    new google.maps.LatLng(50.90445229658401, 6.98407302835903),
    new google.maps.LatLng(50.88956980443153, 7.038098636434524),
    new google.maps.LatLng(50.87117654513393, 7.04203238137657),
    new google.maps.LatLng(50.83577774553127, 6.97877344842122),
    new google.maps.LatLng(50.84504024965296, 7.055697510366461),
    new google.maps.LatLng(50.82876591297421, 7.067878509367467),
    new google.maps.LatLng(50.87430171333134, 7.190338643048984),
    new google.maps.LatLng(50.92651938538583, 7.244876577055877),
    new google.maps.LatLng(50.90434138467479, 7.301027159695781),
    new google.maps.LatLng(50.94775305049181, 7.393414980651334),
    new google.maps.LatLng(50.93102939605303, 7.466037032741164),
    new google.maps.LatLng(50.87968589392298, 7.464729682164029),
    new google.maps.LatLng(50.83322156360471, 7.529743739579886),
    new google.maps.LatLng(50.82231817601433, 7.609440186794503),
    new google.maps.LatLng(50.83458204402153, 7.639088827574081),
    new google.maps.LatLng(50.81775994871442, 7.663591847069995),
    new google.maps.LatLng(50.84641140264539, 7.722608394479624),
    new google.maps.LatLng(50.84225596352226, 7.805308333101024),
    new google.maps.LatLng(50.92465215969227, 7.849225782285609),
    new google.maps.LatLng(50.94266268988216, 7.786049652504696),
    new google.maps.LatLng(51.00001275808613, 7.723355273454371),
    new google.maps.LatLng(51.07117742910776, 7.71338541925754),
    new google.maps.LatLng(51.08263508434963, 7.688270031090553),
    new google.maps.LatLng(51.06873552085478, 7.628305340059929),
    new google.maps.LatLng(51.09708570340079, 7.5952109564309),
    new google.maps.LatLng(51.10561484929017, 7.498395393203778),
    new google.maps.LatLng(51.12555247729622, 7.497835592155242),
    new google.maps.LatLng(51.18713604825385, 7.420001534030332),
    new google.maps.LatLng(51.16696567180839, 7.381985224726096),
    new google.maps.LatLng(51.14540952814675, 7.395669672542624),
    new google.maps.LatLng(51.10018774912537, 7.340834321232026),
    new google.maps.LatLng(51.10309644165242, 7.29632804177442),
    new google.maps.LatLng(51.08152176927932, 7.275441198120117),
    new google.maps.LatLng(51.06420229106777, 7.13788116297424),
    new google.maps.LatLng(51.11309650431691, 7.1572068071622),
    new google.maps.LatLng(51.07883069121021, 7.011805465480201),
    new google.maps.LatLng(51.08804550592873, 6.987054318286798),
    new google.maps.LatLng(51.07065341306988, 6.978881372806109),
    new google.maps.LatLng(51.06198160337058, 6.899011186068325)
    ];
    region_51.push(region_51_1);
    region_borders['region_51'] = region_51;
    region_center['region_51'] = '';
    
    //******************************************************************************    
    //PLZ Region 52
    //******************************************************************************  
    region_52 = [];
    var region_52_1 = [
    new google.maps.LatLng(50.49548050411703, 6.323535747472542),
    new google.maps.LatLng(50.53064926614498, 6.36492620646405),
    new google.maps.LatLng(50.60230132904535, 6.418044893443822),
    new google.maps.LatLng(50.60036620772416, 6.557615180046074),
    new google.maps.LatLng(50.63977834724522, 6.582495363035406),
    new google.maps.LatLng(50.69663847148895, 6.589736097562763),
    new google.maps.LatLng(50.73096088437283, 6.630313251180104),
    new google.maps.LatLng(50.71178152330025, 6.68332740580982),
    new google.maps.LatLng(50.73593004076812, 6.69892090035245),
    new google.maps.LatLng(50.76975669784153, 6.677648039588369),
    new google.maps.LatLng(50.80759441017715, 6.714478878049714),
    new google.maps.LatLng(50.83189388019903, 6.687572393024142),
    new google.maps.LatLng(50.82538318589435, 6.614019635577268),
    new google.maps.LatLng(50.84433942870701, 6.60147423308536),
    new google.maps.LatLng(50.84992009037712, 6.553491874990122),
    new google.maps.LatLng(50.88807421521993, 6.554525242523326),
    new google.maps.LatLng(50.88990538722641, 6.53185288051835),
    new google.maps.LatLng(50.94611374707192, 6.485491153459542),
    new google.maps.LatLng(50.96965327065391, 6.502130436543636),
    new google.maps.LatLng(51.00470375168656, 6.454966215513473),
    new google.maps.LatLng(51.03299874262091, 6.47599638064926),
    new google.maps.LatLng(51.04125556336103, 6.460274967359956),
    new google.maps.LatLng(51.01754842653452, 6.36369998325142),
    new google.maps.LatLng(51.0219734109581, 6.295342135785136),
    new google.maps.LatLng(50.98996044017324, 6.230869838313485),
    new google.maps.LatLng(51.0748392321921, 6.15708280520606),
    new google.maps.LatLng(51.12020438571557, 6.086003660550325),
    new google.maps.LatLng(51.10512873548428, 6.0547806679712),
    new google.maps.LatLng(51.09088037898489, 6.017192542935885),
    new google.maps.LatLng(51.06323479302999, 5.975300579460656),
    new google.maps.LatLng(51.03589601230078, 5.957106308658053),
    new google.maps.LatLng(51.03417195029151, 5.941888481505339),
    new google.maps.LatLng(51.06500787789609, 5.915935138635229),
    new google.maps.LatLng(51.04947258464286, 5.865564755882533),
    new google.maps.LatLng(51.01408420828639, 5.881243493233034),
    new google.maps.LatLng(50.9985581142986, 5.907650422703346),
    new google.maps.LatLng(50.97830229945237, 5.892857712527793),
    new google.maps.LatLng(50.97233193624594, 5.904364828466086),
    new google.maps.LatLng(50.98520453222355, 5.953348077866241),
    new google.maps.LatLng(50.97672558388695, 5.971258047544041),
    new google.maps.LatLng(50.98147474809926, 6.026208937865258),
    new google.maps.LatLng(50.95747384597685, 6.00677966697496),
    new google.maps.LatLng(50.93402056354418, 6.020444355299766),
    new google.maps.LatLng(50.92169629726349, 6.068516982577412),
    new google.maps.LatLng(50.91855176920433, 6.09075411226814),
    new google.maps.LatLng(50.88922346057131, 6.075297780602986),
    new google.maps.LatLng(50.87426381031435, 6.08782625502265),
    new google.maps.LatLng(50.8473624256081, 6.071747950157633),
    new google.maps.LatLng(50.85454659873069, 6.055037143027273),
    new google.maps.LatLng(50.84562134606708, 6.017417629843937),
    new google.maps.LatLng(50.81543325306461, 6.026229003662142),
    new google.maps.LatLng(50.80203882307142, 6.00672584705304),
    new google.maps.LatLng(50.80265973320219, 6.005130278260111),
    new google.maps.LatLng(50.80973371215887, 5.985246213840276),
    new google.maps.LatLng(50.79556668731966, 5.975092523738486),
    new google.maps.LatLng(50.77509037377543, 6.025201045103808),
    new google.maps.LatLng(50.75437992024249, 6.023149055621255),
    new google.maps.LatLng(50.74529278045362, 6.040942144418162),
    new google.maps.LatLng(50.72240393842031, 6.038692389196905),
    new google.maps.LatLng(50.72611491855732, 6.05052661975479),
    new google.maps.LatLng(50.72110905575802, 6.116934521984736),
    new google.maps.LatLng(50.68056293597476, 6.144246542617644),
    new google.maps.LatLng(50.65151210028991, 6.182947958336),
    new google.maps.LatLng(50.64081226416355, 6.175819847269119),
    new google.maps.LatLng(50.62895598388858, 6.187944708275692),
    new google.maps.LatLng(50.63159037757629, 6.214716665018232),
    new google.maps.LatLng(50.62497072122941, 6.237789375239746),
    new google.maps.LatLng(50.62565978265173, 6.266734859770738),
    new google.maps.LatLng(50.60168242960339, 6.252677423716932),
    new google.maps.LatLng(50.58268962361226, 6.241420394779786),
    new google.maps.LatLng(50.55352790412125, 6.219958663143464),
    new google.maps.LatLng(50.53430658220008, 6.197332220409633),
    new google.maps.LatLng(50.49428564907571, 6.224924743267488),
    new google.maps.LatLng(50.50096688498928, 6.284313352962259),
    new google.maps.LatLng(50.49548050411703, 6.323535747472542) 
    ];
    region_52.push(region_52_1);
    region_borders['region_52'] = region_52;
    region_center['region_52'] = '';
    
    //******************************************************************************    
    //PLZ Region 53
    //******************************************************************************  
    region_53 = [];
    var region_53_1 = [
    new google.maps.LatLng(50.4953748707781, 6.321753312010154),
    new google.maps.LatLng(50.45846481777025, 6.352959058988292),
    new google.maps.LatLng(50.42584901322184, 6.377971635942035),
    new google.maps.LatLng(50.3758710143421, 6.354483088429738),
    new google.maps.LatLng(50.3372309599718, 6.405318098945198),
    new google.maps.LatLng(50.34090361169184, 6.469799810942389),
    new google.maps.LatLng(50.38562789545608, 6.593198933427457),
    new google.maps.LatLng(50.34764676482157, 6.646030923084767),
    new google.maps.LatLng(50.34921673461981, 6.650574318273379),
    new google.maps.LatLng(50.36735411080538, 6.67158167096733),
    new google.maps.LatLng(50.33343726970958, 6.709061408158485),
    new google.maps.LatLng(50.35892751112716, 6.803731178976468),
    new google.maps.LatLng(50.29726201486469, 6.817223098971052),
    new google.maps.LatLng(50.2586585476033, 6.916002615703658),
    new google.maps.LatLng(50.30547897093938, 6.978486392741314),
    new google.maps.LatLng(50.32534446573202, 7.01918416802561),
    new google.maps.LatLng(50.35428105544937, 6.987879313542629),
    new google.maps.LatLng(50.38296136104383, 7.024774216231338),
    new google.maps.LatLng(50.40409610150503, 7.052780495500366),
    new google.maps.LatLng(50.45764649836233, 7.121204636073156),
    new google.maps.LatLng(50.48892987063233, 7.216666448670801),
    new google.maps.LatLng(50.46663643360242, 7.254797798690551),
    new google.maps.LatLng(50.49156068798195, 7.333112602678879),
    new google.maps.LatLng(50.52864969474886, 7.393278812183313),
    new google.maps.LatLng(50.54746731429097, 7.469417686994761),
    new google.maps.LatLng(50.56735902399611, 7.509846292022313),
    new google.maps.LatLng(50.57880105060504, 7.479200211412964),
    new google.maps.LatLng(50.59561709852382, 7.482722275697946),
    new google.maps.LatLng(50.61604371511131, 7.461823099836407),
    new google.maps.LatLng(50.66811587667208, 7.482595236506919),
    new google.maps.LatLng(50.71287816851291, 7.43745258405901),
    new google.maps.LatLng(50.74102986011607, 7.586905573009497),
    new google.maps.LatLng(50.81994814554069, 7.664064060600553),
    new google.maps.LatLng(50.83295415435254, 7.637118004558796),
    new google.maps.LatLng(50.82246805446162, 7.612487125205161),
    new google.maps.LatLng(50.83307421572661, 7.532437925305342),
    new google.maps.LatLng(50.87931738264662, 7.463625184096642),
    new google.maps.LatLng(50.93063267941492, 7.466662324054932),
    new google.maps.LatLng(50.94682078184857, 7.393439843976292),
    new google.maps.LatLng(50.90411720865525, 7.299924238984921),
    new google.maps.LatLng(50.92496327488816, 7.243615273923599),
    new google.maps.LatLng(50.87281546528319, 7.191829313140348),
    new google.maps.LatLng(50.82873570932362, 7.069556873584732),
    new google.maps.LatLng(50.84383399661591, 7.055563021973019),
    new google.maps.LatLng(50.83703578003396, 6.97884962535772),
    new google.maps.LatLng(50.8185304687462, 7.023660646770615),
    new google.maps.LatLng(50.79932823802388, 7.029221958971288),
    new google.maps.LatLng(50.80267398210685, 6.941083956922243),
    new google.maps.LatLng(50.78852199600796, 6.85122847183295),
    new google.maps.LatLng(50.71880940752485, 6.773418384044476),
    new google.maps.LatLng(50.7351149931085, 6.698344959302558),
    new google.maps.LatLng(50.71155692624376, 6.682405822666821),
    new google.maps.LatLng(50.73023741080348, 6.629028486632295),
    new google.maps.LatLng(50.69527335391603, 6.588900915485048),
    new google.maps.LatLng(50.63980179308983, 6.580987495180328),
    new google.maps.LatLng(50.59892269866999, 6.558080913861549),
    new google.maps.LatLng(50.6015430342695, 6.419058054043418),
    new google.maps.LatLng(50.52955558373504, 6.36278731953476),
    new google.maps.LatLng(50.4953748707781, 6.321753312010154)
    ];
    region_53.push(region_53_1);
    region_borders['region_53'] = region_53;
    region_center['region_53'] = '';
    
    //******************************************************************************    
    //PLZ Region 54
    //******************************************************************************  
    region_54 = [];
    var region_54_1 = [
       new google.maps.LatLng(49.54963883360119, 6.37559710093787),
       new google.maps.LatLng(49.53904815676407, 6.476128351064356),
       new google.maps.LatLng(49.53617563613938, 6.567492973380773),
       new google.maps.LatLng(49.54630178386516, 6.677037828418715),
       new google.maps.LatLng(49.59291776492375, 6.825619925991968),
       new google.maps.LatLng(49.63034224466185, 6.989284774241391),
       new google.maps.LatLng(49.64121045188218, 7.044562755458617),
       new google.maps.LatLng(49.70811038615143, 7.073623054723608),
       new google.maps.LatLng(49.85388278561073, 7.264217351744689),
       new google.maps.LatLng(49.90648453914231, 7.22020964177238),
       new google.maps.LatLng(49.90710690520029, 7.150131362986548),
       new google.maps.LatLng(49.95522205727276, 7.071530429421847),
       new google.maps.LatLng(49.98756920849793, 7.119894588086064),
       new google.maps.LatLng(50.05846226260443, 7.093971227943713),
       new google.maps.LatLng(50.08080812806148, 7.013671909405574),
       new google.maps.LatLng(50.09015266039914, 6.946749056790216),
       new google.maps.LatLng(50.16197896109151, 6.979486898033469),
       new google.maps.LatLng(50.2575325074807, 6.920247440461411),
       new google.maps.LatLng(50.29826024734704, 6.81821657774546),
       new google.maps.LatLng(50.35787232421869, 6.798425945371585),
       new google.maps.LatLng(50.33231009909815, 6.712370666828598),
       new google.maps.LatLng(50.36507494562425, 6.672221503411078),
       new google.maps.LatLng(50.34893109853407, 6.646100446725891),
       new google.maps.LatLng(50.38398628551472, 6.596660047255558),
       new google.maps.LatLng(50.34174080153982, 6.469398668879263),
       new google.maps.LatLng(50.33393336027301, 6.413226050322606),
       new google.maps.LatLng(50.3114303842606, 6.360389637963133),
       new google.maps.LatLng(50.32020576712096, 6.311988748829629),
       new google.maps.LatLng(50.26701226521015, 6.284451323926312),
       new google.maps.LatLng(50.23128132060817, 6.195908307905307),
       new google.maps.LatLng(50.17740749578377, 6.175867345482422),
       new google.maps.LatLng(50.16245045126011, 6.136487901882665),
       new google.maps.LatLng(50.12701816122964, 6.133307312348119),
       new google.maps.LatLng(50.05912967375449, 6.113522836594059),
       new google.maps.LatLng(49.99207230531954, 6.159754963689926),
       new google.maps.LatLng(49.94171300676841, 6.217645451270332),
       new google.maps.LatLng(49.88197669378867, 6.26442655161402),
       new google.maps.LatLng(49.84552528652483, 6.324993518419458),
       new google.maps.LatLng(49.82115998391547, 6.399431447159634),
       new google.maps.LatLng(49.80687561673238, 6.458753996861488),
       new google.maps.LatLng(49.80602622847876, 6.531370644842617),
       new google.maps.LatLng(49.72057350739633, 6.505301521686128),
       new google.maps.LatLng(49.66217665251155, 6.432452105611359),
       new google.maps.LatLng(49.60927327830709, 6.42006736906342),
       new google.maps.LatLng(49.5794250635355, 6.376771755971113),
       new google.maps.LatLng(49.54963883360119, 6.37559710093787)
    ];
    region_54.push(region_54_1);
    region_borders['region_54'] = region_54;
    region_center['region_54'] = '';
    
    //******************************************************************************    
    //PLZ Region 55
    //******************************************************************************  
    region_55 = [];
    var region_55_1 = [
       new google.maps.LatLng(49.90543860691104, 7.218526005945005),
       new google.maps.LatLng(49.85280080238998, 7.26391885513396),
       new google.maps.LatLng(49.7076733052056, 7.074002686126121),
       new google.maps.LatLng(49.6649561652881, 7.157093661972203),
       new google.maps.LatLng(49.60416804525488, 7.102486397805037),
       new google.maps.LatLng(49.56931496208703, 7.22050429927018),
       new google.maps.LatLng(49.57255878291881, 7.26963457954451),
       new google.maps.LatLng(49.57555562884417, 7.360372793117531),
       new google.maps.LatLng(49.58563032819769, 7.434543824809545),
       new google.maps.LatLng(49.62675210807436, 7.499008144599562),
       new google.maps.LatLng(49.65308495696894, 7.505723276969922),
       new google.maps.LatLng(49.66573089169101, 7.591496907879034),
       new google.maps.LatLng(49.68201835583377, 7.644309977733858),
       new google.maps.LatLng(49.71102253305289, 7.734793805863369),
       new google.maps.LatLng(49.74222166628195, 7.736423739707943),
       new google.maps.LatLng(49.75311676296422, 7.816488892826248),
       new google.maps.LatLng(49.7452593107085, 7.932224205485563),
       new google.maps.LatLng(49.69879289989988, 7.968754903987283),
       new google.maps.LatLng(49.72603560937313, 8.063940678731853),
       new google.maps.LatLng(49.69486025256855, 8.070909211434451),
       new google.maps.LatLng(49.66272378852369, 8.156888756069215),
       new google.maps.LatLng(49.67721946816607, 8.220682924030861),
       new google.maps.LatLng(49.72414764066492, 8.223680110420094),
       new google.maps.LatLng(49.78799087806428, 8.229469649464132),
       new google.maps.LatLng(49.78534882261009, 8.318534284386789),
       new google.maps.LatLng(49.81540566892321, 8.389273428538033),
       new google.maps.LatLng(49.85238689201433, 8.387428438269112),
       new google.maps.LatLng(49.86617777870866, 8.357879229328095),
       new google.maps.LatLng(49.89652053362601, 8.345907600612438),
       new google.maps.LatLng(49.94091813839922, 8.345183332415921),
       new google.maps.LatLng(49.98750823435655, 8.304804403936465),
       new google.maps.LatLng(50.02508715225962, 8.255375336676064),
       new google.maps.LatLng(50.0360184902862, 8.192619123506992),
       new google.maps.LatLng(50.02147848170198, 8.117288237624148),
       new google.maps.LatLng(50.00905379113306, 8.087734580256345),
       new google.maps.LatLng(49.99181425476095, 8.008923812055917),
       new google.maps.LatLng(49.97057731992259, 7.929747912482751),
       new google.maps.LatLng(49.97639615591107, 7.871310415194994),
       new google.maps.LatLng(50.00794165461571, 7.85368264100719),
       new google.maps.LatLng(50.03139941656214, 7.821120067457055),
       new google.maps.LatLng(50.05753676253676, 7.774539065323928),
       new google.maps.LatLng(50.08471131918235, 7.761750670420828),
       new google.maps.LatLng(50.11511415038526, 7.730549828968575),
       new google.maps.LatLng(50.13577037353584, 7.731093613251478),
       new google.maps.LatLng(50.1181248381105, 7.652906828571204),
       new google.maps.LatLng(50.08553896386005, 7.570943369887939),
       new google.maps.LatLng(50.01457730685566, 7.473479710790427),
       new google.maps.LatLng(50.01769993666135, 7.413513510900465),
       new google.maps.LatLng(49.97744247988086, 7.351039422530836),
       new google.maps.LatLng(49.95762286962104, 7.291892699615672),
       new google.maps.LatLng(49.90543860691104, 7.218526005945005)
    ];
    region_55.push(region_55_1);
    region_borders['region_55'] = region_55;
    region_center['region_55'] = '';
    
    //******************************************************************************    
    //PLZ Region 56
    //******************************************************************************  
    region_56 = [];
    var region_56_1 = [
       new google.maps.LatLng(50.25887493527856, 6.918433372796986),
       new google.maps.LatLng(50.16190151084248, 6.980997697217546),
       new google.maps.LatLng(50.08960683486423, 6.945690613533455),
       new google.maps.LatLng(50.08080702634266, 7.012585280851258),
       new google.maps.LatLng(50.06035523936867, 7.092906704671382),
       new google.maps.LatLng(49.98659270203687, 7.120530548889903),
       new google.maps.LatLng(49.95451135915785, 7.0684238827763),
       new google.maps.LatLng(49.9080588487908, 7.147909361381974),
       new google.maps.LatLng(49.90712572929895, 7.21704225583307),
       new google.maps.LatLng(49.96104647833828, 7.292834808423898),
       new google.maps.LatLng(49.97811809086672, 7.349788548803358),
       new google.maps.LatLng(50.01972632763666, 7.411682351010624),
       new google.maps.LatLng(50.01494715440563, 7.472073290362369),
       new google.maps.LatLng(50.06141715478196, 7.547012642388617),
       new google.maps.LatLng(50.08625518200146, 7.570602667176097),
       new google.maps.LatLng(50.11731442255546, 7.653079830297109),
       new google.maps.LatLng(50.13559638824006, 7.730359099242023),
       new google.maps.LatLng(50.15919733304127, 7.732079729797618),
       new google.maps.LatLng(50.13283220458348, 7.850554482286953),
       new google.maps.LatLng(50.10485819608111, 7.92496409167031),
       new google.maps.LatLng(50.15218459466075, 7.911404404730231),
       new google.maps.LatLng(50.18173721338933, 7.889433171720757),
       new google.maps.LatLng(50.21209988991704, 7.948291438330619),
       new google.maps.LatLng(50.23293558206287, 7.993564568603412),
       new google.maps.LatLng(50.2151582338574, 8.041580144219385),
       new google.maps.LatLng(50.23313472965211, 8.060835101656812),
       new google.maps.LatLng(50.26321410719115, 8.033903712527099),
       new google.maps.LatLng(50.30140039650074, 8.022480649711367),
       new google.maps.LatLng(50.34149707321949, 7.997784559201138),
       new google.maps.LatLng(50.36859445991804, 7.949506911539301),
       new google.maps.LatLng(50.39704588551587, 7.966900827189431),
       new google.maps.LatLng(50.41021846844204, 7.975625908090864),
       new google.maps.LatLng(50.43751479956781, 7.984020977594648),
       new google.maps.LatLng(50.44931032264608, 8.009269431554557),
       new google.maps.LatLng(50.49206269172998, 7.98524752759993),
       new google.maps.LatLng(50.55057258333341, 8.043972016972065),
       new google.maps.LatLng(50.53963189287261, 8.122344768151899),
       new google.maps.LatLng(50.59499416912579, 8.158708089919307),
       new google.maps.LatLng(50.65253525326305, 8.113806379804902),
       new google.maps.LatLng(50.68506235470593, 8.127262323066674),
       new google.maps.LatLng(50.69134805278035, 8.023191140998012),
       new google.maps.LatLng(50.68696281541272, 7.931916923378603),
       new google.maps.LatLng(50.61379614955475, 7.924654828606212),
       new google.maps.LatLng(50.61030425375836, 7.791459707319972),
       new google.maps.LatLng(50.62617841271736, 7.71426102457715),
       new google.maps.LatLng(50.58793697322164, 7.662485300833914),
       new google.maps.LatLng(50.62139515993591, 7.573650324562733),
       new google.maps.LatLng(50.59658969299726, 7.480330767947693),
       new google.maps.LatLng(50.57878410996797, 7.480692441524182),
       new google.maps.LatLng(50.56557034745699, 7.509135452637739),
       new google.maps.LatLng(50.54615510445861, 7.466889117336127),
       new google.maps.LatLng(50.52674183886424, 7.393595355621634),
       new google.maps.LatLng(50.49262785864746, 7.338641355750799),
       new google.maps.LatLng(50.46594279132693, 7.256907508685213),
       new google.maps.LatLng(50.49000167105993, 7.214574473997731),
       new google.maps.LatLng(50.45559558343168, 7.121941807763285),
       new google.maps.LatLng(50.35515063668424, 6.98788248315646),
       new google.maps.LatLng(50.32339945691259, 7.022584567165193),
       new google.maps.LatLng(50.30108135552098, 6.972721450636383),
       new google.maps.LatLng(50.25887493527856, 6.918433372796986)
    ];
    region_56.push(region_56_1);
    region_borders['region_56'] = region_56;
    region_center['region_56'] = '';
    
    //******************************************************************************    
    //PLZ Region 57
    //******************************************************************************  
    region_57 = [];
    var region_57_1 = [
        new google.maps.LatLng(51.06976313782361, 7.712480528073256),
        new google.maps.LatLng(51.00097171183184, 7.723936809458882),
        new google.maps.LatLng(50.94333410046401, 7.783450289423078),
        new google.maps.LatLng(50.92400612132569, 7.850255786990196),
        new google.maps.LatLng(50.84267304026235, 7.804302416230964),
        new google.maps.LatLng(50.84764163516979, 7.721869037671887),
        new google.maps.LatLng(50.81864909730447, 7.662945939396848),
        new google.maps.LatLng(50.74141461459804, 7.586403901054799),
        new google.maps.LatLng(50.71326825211439, 7.437469452738423),
        new google.maps.LatLng(50.66893196302074, 7.48388136327952),
        new google.maps.LatLng(50.61728018675119, 7.460499845471665),
        new google.maps.LatLng(50.59571341818323, 7.480712398871036),
        new google.maps.LatLng(50.62290013697428, 7.574673556894957),
        new google.maps.LatLng(50.58806161988839, 7.663283851781221),
        new google.maps.LatLng(50.62757725991523, 7.713296245890769),
        new google.maps.LatLng(50.61257649410326, 7.790806419770475),
        new google.maps.LatLng(50.61116842033012, 7.887384161928339),
        new google.maps.LatLng(50.61334334388467, 7.925325798911369),
        new google.maps.LatLng(50.68877718496045, 7.932798911371284),
        new google.maps.LatLng(50.69309956917304, 8.021707976640721),
        new google.maps.LatLng(50.68694640423023, 8.128058112964212),
        new google.maps.LatLng(50.73562558806223, 8.161342596772659),
        new google.maps.LatLng(50.78651065216524, 8.130841791483602),
        new google.maps.LatLng(50.84841857308949, 8.222849415837935),
        new google.maps.LatLng(50.88291666942519, 8.280932725003741),
        new google.maps.LatLng(50.86141619291043, 8.310447012888169),
        new google.maps.LatLng(50.86212463134268, 8.356469416904773),
        new google.maps.LatLng(50.91352247206868, 8.433052200072096),
        new google.maps.LatLng(50.96803513141456, 8.482600101037153),
        new google.maps.LatLng(51.02244510798575, 8.529921671572842),
        new google.maps.LatLng(51.0752833461024, 8.505220218066045),
        new google.maps.LatLng(51.09959420873425, 8.547122612329048),
        new google.maps.LatLng(51.09200276291114, 8.656781468998284),
        new google.maps.LatLng(51.11113631656807, 8.713529510520337),
        new google.maps.LatLng(51.13118526743693, 8.692796503262974),
        new google.maps.LatLng(51.16843368602779, 8.749973763437707),
        new google.maps.LatLng(51.21019342640618, 8.763788901507114),
        new google.maps.LatLng(51.26721964265841, 8.726718617866545),
        new google.maps.LatLng(51.24639059536005, 8.598330298838272),
        new google.maps.LatLng(51.27713417619437, 8.555614152918331),
        new google.maps.LatLng(51.29964493197222, 8.508209421022826),
        new google.maps.LatLng(51.30207669558705, 8.421805533938485),
        new google.maps.LatLng(51.27208764030219, 8.297814351520017),
        new google.maps.LatLng(51.24186735332222, 8.259591775376451),
        new google.maps.LatLng(51.22028250373628, 8.196620875546811),
        new google.maps.LatLng(51.17216316223446, 8.141877621292455),
        new google.maps.LatLng(51.19774776785564, 8.100371260005065),
        new google.maps.LatLng(51.23435026316385, 8.112861609402831),
        new google.maps.LatLng(51.24103499624094, 8.06368482134058),
        new google.maps.LatLng(51.23401358974875, 7.935366580511412),
        new google.maps.LatLng(51.17868736018475, 7.939447656317366),
        new google.maps.LatLng(51.14194151242024, 7.797064559755822),
        new google.maps.LatLng(51.07079194101419, 7.809940599067772),
        new google.maps.LatLng(51.06976313782361, 7.712480528073256)
    ];
    region_57.push(region_57_1);
    region_borders['region_57'] = region_57;
    region_center['region_57'] = '';
    
    //******************************************************************************    
    //PLZ Region 58
    //******************************************************************************  
    region_58 = [];
    var region_58_1 = [
        new google.maps.LatLng(51.18669316478497, 7.423188376938876),
        new google.maps.LatLng(51.12577047955725, 7.496616944845758),
        new google.maps.LatLng(51.10545688849385, 7.497907473664887),
        new google.maps.LatLng(51.09807915782296, 7.596506669902237),
        new google.maps.LatLng(51.06838816434716, 7.626570046627301),
        new google.maps.LatLng(51.0838424673744, 7.688071118993161),
        new google.maps.LatLng(51.07106528640625, 7.71323955913362),
        new google.maps.LatLng(51.07197416778928, 7.809078245369983),
        new google.maps.LatLng(51.14376962085247, 7.795022546108328),
        new google.maps.LatLng(51.16630538997079, 7.887968984869913),
        new google.maps.LatLng(51.17973034991023, 7.941487545413626),
        new google.maps.LatLng(51.23407929138808, 7.934675382824066),
        new google.maps.LatLng(51.24570389622541, 7.912120382810654),
        new google.maps.LatLng(51.37206040379736, 7.899934854869565),
        new google.maps.LatLng(51.4506126904736, 7.85955881865166),
        new google.maps.LatLng(51.48058540493889, 7.920901373360618),
        new google.maps.LatLng(51.51300432097243, 7.882672862461626),
        new google.maps.LatLng(51.52284088053339, 7.780139041221625),
        new google.maps.LatLng(51.49156531597852, 7.670161589638198),
        new google.maps.LatLng(51.46269445656675, 7.677484270591242),
        new google.maps.LatLng(51.45230166829405, 7.635400816418194),
        new google.maps.LatLng(51.50346920764853, 7.597078549724873),
        new google.maps.LatLng(51.41797324644181, 7.526254083725044),
        new google.maps.LatLng(51.43830927565823, 7.375214774989547),
        new google.maps.LatLng(51.42403063435226, 7.311976803398601),
        new google.maps.LatLng(51.43642452352189, 7.223845320324935),
        new google.maps.LatLng(51.38510274104086, 7.257383771165467),
        new google.maps.LatLng(51.36212075472729, 7.298776511656964),
        new google.maps.LatLng(51.34045705930392, 7.306839521991167),
        new google.maps.LatLng(51.31131156650957, 7.30467567713589),
        new google.maps.LatLng(51.30861865964526, 7.261279086316243),
        new google.maps.LatLng(51.28645101429581, 7.251110702168053),
        new google.maps.LatLng(51.25784583956657, 7.264429008896933),
        new google.maps.LatLng(51.23833725591044, 7.308134455424328),
        new google.maps.LatLng(51.2447433118219, 7.366612886201804),
        new google.maps.LatLng(51.21496372688039, 7.428705618680427),
        new google.maps.LatLng(51.18669316478497, 7.423188376938876)
    ];
    region_58.push(region_58_1);
    region_borders['region_58'] = region_58;
    region_center['region_58'] = '';
    
    //******************************************************************************    
    //PLZ Region 59
    //******************************************************************************  
    region_59 = [];
    var region_59_1 = [
       new google.maps.LatLng(51.50387771181986, 7.596937897007821),
       new google.maps.LatLng(51.45250637902259, 7.635350752585694),
       new google.maps.LatLng(51.4625797071099, 7.677364276391305),
       new google.maps.LatLng(51.49239693786245, 7.669236979678282),
       new google.maps.LatLng(51.52374282696465, 7.779158046402288),
       new google.maps.LatLng(51.51270800575158, 7.884586036038248),
       new google.maps.LatLng(51.48023972398946, 7.921334397320267),
       new google.maps.LatLng(51.45183054082167, 7.858088134643804),
       new google.maps.LatLng(51.39179430611284, 7.888273411365205),
       new google.maps.LatLng(51.37193139297944, 7.898390051241149),
       new google.maps.LatLng(51.3086929816233, 7.908887963388427),
       new google.maps.LatLng(51.24594145585372, 7.911447454314668),
       new google.maps.LatLng(51.23432095572931, 7.9326430215402),
       new google.maps.LatLng(51.24302889072261, 8.059463523921824),
       new google.maps.LatLng(51.23622338094032, 8.111622960071687),
       new google.maps.LatLng(51.19811389470028, 8.100292176512731),
       new google.maps.LatLng(51.17206652720659, 8.14216749820363),
       new google.maps.LatLng(51.22010734098304, 8.196621848430805),
       new google.maps.LatLng(51.24338286357327, 8.26153769830932),
       new google.maps.LatLng(51.27394037486538, 8.29769632333641),
       new google.maps.LatLng(51.30314981037849, 8.419589371153259),
       new google.maps.LatLng(51.30048116157426, 8.509048965571846),
       new google.maps.LatLng(51.27971644821159, 8.556137273408996),
       new google.maps.LatLng(51.36861510432689, 8.687721980718466),
       new google.maps.LatLng(51.44992677382695, 8.764664158673659),
       new google.maps.LatLng(51.47748345920103, 8.628593860760216),
       new google.maps.LatLng(51.46835746415989, 8.547244482753481),
       new google.maps.LatLng(51.56665751964002, 8.478845495274118),
       new google.maps.LatLng(51.62345997258323, 8.580861215004465),
       new google.maps.LatLng(51.6557005542851, 8.573086066881149),
       new google.maps.LatLng(51.68293166851268, 8.476678587576183),
       new google.maps.LatLng(51.71789714740498, 8.469516801282456),
       new google.maps.LatLng(51.72469588379778, 8.319581373837455),
       new google.maps.LatLng(51.77607674101249, 8.253855731110162),
       new google.maps.LatLng(51.79022640131885, 8.257947698220896),
       new google.maps.LatLng(51.84020889090835, 8.219486605811353),
       new google.maps.LatLng(51.89310419617616, 8.126260787223334),
       new google.maps.LatLng(51.92133846329619, 8.026733525292769),
       new google.maps.LatLng(51.85587444085873, 7.941570405902256),
       new google.maps.LatLng(51.8760248924942, 7.864954223647218),
       new google.maps.LatLng(51.80027777197481, 7.887920067095622),
       new google.maps.LatLng(51.80933034120604, 7.80137385161755),
       new google.maps.LatLng(51.73584193289775, 7.819368575724306),
       new google.maps.LatLng(51.73311860321484, 7.744849108154302),
       new google.maps.LatLng(51.83893526176098, 7.606175035194987),
       new google.maps.LatLng(51.76896063156929, 7.542509405856785),
       new google.maps.LatLng(51.83031743503494, 7.44308561944921),
       new google.maps.LatLng(51.77118194649884, 7.265135677155303),
       new google.maps.LatLng(51.73710974205217, 7.325387862791031),
       new google.maps.LatLng(51.71090046279885, 7.308064258728193),
       new google.maps.LatLng(51.63400897772567, 7.454994582807064),
       new google.maps.LatLng(51.63906171692781, 7.551583879918682),
       new google.maps.LatLng(51.62392534060036, 7.57628147497464),
       new google.maps.LatLng(51.59062894324296, 7.603072493304389),
       new google.maps.LatLng(51.5659889039854, 7.59588715826069),
       new google.maps.LatLng(51.54405846729137, 7.633953480071543),
       new google.maps.LatLng(51.51917204919276, 7.641385944365783),
       new google.maps.LatLng(51.50387771181986, 7.596937897007821)
    ];
    region_59.push(region_59_1);
    region_borders['region_59'] = region_59;
    region_center['region_59'] = '';
    
    //******************************************************************************    
    //PLZ Region 60
    //******************************************************************************  
    region_60 = [];
    var region_60_1 = [
       new google.maps.LatLng(50.02620836834413, 8.521051979559404),
       new google.maps.LatLng(50.02072497697844, 8.596390483362164),
       new google.maps.LatLng(50.04641661110067, 8.61663139773005),
       new google.maps.LatLng(50.05844970489515, 8.700941418566144),
       new google.maps.LatLng(50.06007894278133, 8.749892228337115),
       new google.maps.LatLng(50.0770452572764, 8.799886925835924),
       new google.maps.LatLng(50.10561603786989, 8.819066868751078),
       new google.maps.LatLng(50.13769904859373, 8.784629832582381),
       new google.maps.LatLng(50.17795728222517, 8.80034086069027),
       new google.maps.LatLng(50.16459054924166, 8.728477872097098),
       new google.maps.LatLng(50.18135396432383, 8.707749157748863),
       new google.maps.LatLng(50.22022500397469, 8.733675448747132),
       new google.maps.LatLng(50.21406891807932, 8.665261819254269),
       new google.maps.LatLng(50.19052885292956, 8.630073898631416),
       new google.maps.LatLng(50.16628047324848, 8.600605307107283),
       new google.maps.LatLng(50.15094031510633, 8.603028870648917),
       new google.maps.LatLng(50.11948377236978, 8.598744586347252),
       new google.maps.LatLng(50.09668079055339, 8.569274818659132),
       new google.maps.LatLng(50.07100667626191, 8.554733888972017),
       new google.maps.LatLng(50.04687046366895, 8.556155609179559),
       new google.maps.LatLng(50.02620836834413, 8.521051979559404)
    ];
    region_60.push(region_60_1);
    region_borders['region_60'] = region_60;
    region_center['region_60'] = '';
    
    //******************************************************************************    
    //PLZ Region 61
    //******************************************************************************  
    region_61 = [];
    var region_61_1 = [
       new google.maps.LatLng(50.43199361253927, 8.949324246854619),
       new google.maps.LatLng(50.34452375401205, 8.927639775875226),
       new google.maps.LatLng(50.31953967814006, 8.974433893253025),
       new google.maps.LatLng(50.29273104374265, 8.905193892693266),
       new google.maps.LatLng(50.27475893774471, 8.908703902364801),
       new google.maps.LatLng(50.24941404366363, 8.967084930051403),
       new google.maps.LatLng(50.22525022660228, 8.934251029295785),
       new google.maps.LatLng(50.19228847671286, 8.88574818078602),
       new google.maps.LatLng(50.1771504297835, 8.797423564246214),
       new google.maps.LatLng(50.16482282872844, 8.728766445618955),
       new google.maps.LatLng(50.18155794080356, 8.708929606915099),
       new google.maps.LatLng(50.21972171850864, 8.734217588946724),
       new google.maps.LatLng(50.21322624223902, 8.665388021586613),
       new google.maps.LatLng(50.16538397179998, 8.599635871343898),
       new google.maps.LatLng(50.16914444335846, 8.552387945595758),
       new google.maps.LatLng(50.15919281261204, 8.514791151903292),
       new google.maps.LatLng(50.16752121125628, 8.449984789726003),
       new google.maps.LatLng(50.1860391296842, 8.42724924102529),
       new google.maps.LatLng(50.18944201299328, 8.35713693695201),
       new google.maps.LatLng(50.22023389456371, 8.404944031759724),
       new google.maps.LatLng(50.23969213397684, 8.382169630809935),
       new google.maps.LatLng(50.25659959645628, 8.411398978913693),
       new google.maps.LatLng(50.29493264638698, 8.352777644262323),
       new google.maps.LatLng(50.33844740948509, 8.315829763530683),
       new google.maps.LatLng(50.37877601134623, 8.359552321738331),
       new google.maps.LatLng(50.41553111384921, 8.46706349522737),
       new google.maps.LatLng(50.39696694006306, 8.506414028321176),
       new google.maps.LatLng(50.44550266078168, 8.579868756023947),
       new google.maps.LatLng(50.48262216978987, 8.675033061964063),
       new google.maps.LatLng(50.46730575125863, 8.773339511765821),
       new google.maps.LatLng(50.45485279858526, 8.805350300296999),
       new google.maps.LatLng(50.43148858266847, 8.857907245903874),
       new google.maps.LatLng(50.43218854651526, 8.948790519643053),
       new google.maps.LatLng(50.34432919146891, 8.927383034928983),
       new google.maps.LatLng(50.43199361253927, 8.949324246854619)
    ];
    region_61.push(region_61_1);
    region_borders['region_61'] = region_61;
    region_center['region_61'] = '';
    
    //******************************************************************************    
    //PLZ Region 62
    //******************************************************************************  
    region_62 = [];
    var region_62_1 = [
        
    ];
    region_62.push(region_62_1);
    region_borders['region_62'] = region_62;
    region_center['region_62'] = '';
    
    //******************************************************************************    
    //PLZ Region 63
    //******************************************************************************  
    region_63 = [];
    var region_63_1 = [
       new google.maps.LatLng(50.01939246115003, 8.5979196897271),
       new google.maps.LatLng(49.94946180529486, 8.676822138418627),
       new google.maps.LatLng(49.94978829373112, 8.765891056854649),
       new google.maps.LatLng(49.96126399228258, 8.876777645021612),
       new google.maps.LatLng(49.99856445363562, 8.946374522944991),
       new google.maps.LatLng(49.97266515975426, 9.036441809810981),
       new google.maps.LatLng(49.92720347848996, 9.10258203344002),
       new google.maps.LatLng(49.87600650929785, 9.094164581067458),
       new google.maps.LatLng(49.85473207486299, 9.11616838147677),
       new google.maps.LatLng(49.83645311718823, 9.079566864279522),
       new google.maps.LatLng(49.79117414613403, 9.0886543307856),
       new google.maps.LatLng(49.75061054338183, 9.128750365532056),
       new google.maps.LatLng(49.70628385854006, 9.134158493334583),
       new google.maps.LatLng(49.68750243321561, 9.092080838573587),
       new google.maps.LatLng(49.6340197612982, 9.089310072687418),
       new google.maps.LatLng(49.59748129866594, 9.074872964552378),
       new google.maps.LatLng(49.57455830710855, 9.11026061913924),
       new google.maps.LatLng(49.57734398680509, 9.229269384423217),
       new google.maps.LatLng(49.63351395701503, 9.289295597948202),
       new google.maps.LatLng(49.65186559883264, 9.319000507171104),
       new google.maps.LatLng(49.64281957514656, 9.406414721495794),
       new google.maps.LatLng(49.67873238158454, 9.377371841884143),
       new google.maps.LatLng(49.72842908318978, 9.346804359695147),
       new google.maps.LatLng(49.74093981150134, 9.270147274737663),
       new google.maps.LatLng(49.79975711162623, 9.325838768151213),
       new google.maps.LatLng(49.82270163291561, 9.365442415266063),
       new google.maps.LatLng(49.86847314979612, 9.398173423057372),
       new google.maps.LatLng(49.88379219043613, 9.438855606016755),
       new google.maps.LatLng(49.94111456235136, 9.483949224769081),
       new google.maps.LatLng(49.9463815377206, 9.459861088534375),
       new google.maps.LatLng(50.00822863489696, 9.403055833815582),
       new google.maps.LatLng(50.08625820927168, 9.411843468880763),
       new google.maps.LatLng(50.09297695431556, 9.513697169461452),
       new google.maps.LatLng(50.14448897827016, 9.511124691564113),
       new google.maps.LatLng(50.21089841618203, 9.504031215639966),
       new google.maps.LatLng(50.2470360108162, 9.503966596657381),
       new google.maps.LatLng(50.35660211609893, 9.380832860513335),
       new google.maps.LatLng(50.44896717818247, 9.337081318106046),
       new google.maps.LatLng(50.46058914914321, 9.260837530395509),
       new google.maps.LatLng(50.53255910106983, 9.245569170125925),
       new google.maps.LatLng(50.54873644437311, 9.141846961715833),
       new google.maps.LatLng(50.49527671659209, 9.073841949653163),
       new google.maps.LatLng(50.48989850018837, 8.982017659395655),
       new google.maps.LatLng(50.43025750882607, 8.948895927355691),
       new google.maps.LatLng(50.34406712711096, 8.928808625031671),
       new google.maps.LatLng(50.31938374992652, 8.974149293290148),
       new google.maps.LatLng(50.29091312836977, 8.906842619427724),
       new google.maps.LatLng(50.27555880084529, 8.907836079909623),
       new google.maps.LatLng(50.24724385760362, 8.969844039779872),
       new google.maps.LatLng(50.19264243520347, 8.886432014370797),
       new google.maps.LatLng(50.17534262379145, 8.799836611378264),
       new google.maps.LatLng(50.13751900610124, 8.785318467698191),
       new google.maps.LatLng(50.10512086263101, 8.819641673046819),
       new google.maps.LatLng(50.07791163411989, 8.799586309043486),
       new google.maps.LatLng(50.05946916504131, 8.750056348249714),
       new google.maps.LatLng(50.05754306722764, 8.704075433873875),
       new google.maps.LatLng(50.04539295920797, 8.617704225182326),
       new google.maps.LatLng(50.01939246115003, 8.5979196897271) 
    ];
    region_63.push(region_63_1);
    region_borders['region_63'] = region_63;
    region_center['region_63'] = '';
    
    //******************************************************************************    
    //PLZ Region 64
    //******************************************************************************  
    region_64 = [];
    var region_64_1 = [
       new google.maps.LatLng(49.8157270899905, 8.389676905681709),
       new google.maps.LatLng(49.77283972433174, 8.42090478294735),
       new google.maps.LatLng(49.7602737301274, 8.484978160374963),
       new google.maps.LatLng(49.72874971346117, 8.454927594644243),
       new google.maps.LatLng(49.71261253953717, 8.543704170203938),
       new google.maps.LatLng(49.66202185024044, 8.508180992333722),
       new google.maps.LatLng(49.61971055974347, 8.526790903855808),
       new google.maps.LatLng(49.58994897815689, 8.601125012093988),
       new google.maps.LatLng(49.58314388903711, 8.682253444266237),
       new google.maps.LatLng(49.62742989394299, 8.71125886989843),
       new google.maps.LatLng(49.62059135783113, 8.813826114216397),
       new google.maps.LatLng(49.6014815815947, 8.81945051724581),
       new google.maps.LatLng(49.60970125590396, 8.882797509134665),
       new google.maps.LatLng(49.60900227937146, 8.968855229702775),
       new google.maps.LatLng(49.59765438655332, 9.051889646972114),
       new google.maps.LatLng(49.59822187823345, 9.077467763091015),
       new google.maps.LatLng(49.63378411412092, 9.087750043820391),
       new google.maps.LatLng(49.68675128712953, 9.092641690803944),
       new google.maps.LatLng(49.70665418426874, 9.133840170091398),
       new google.maps.LatLng(49.75050582353609, 9.12905268768297),
       new google.maps.LatLng(49.79091461523705, 9.08886768353139),
       new google.maps.LatLng(49.83633009285947, 9.079876342234805),
       new google.maps.LatLng(49.85509931401192, 9.115479717499825),
       new google.maps.LatLng(49.87640405031118, 9.095035828503734),
       new google.maps.LatLng(49.926989282001, 9.103138993856149),
       new google.maps.LatLng(49.97235017533183, 9.036860926286884),
       new google.maps.LatLng(49.99806713337121, 8.94595729563539),
       new google.maps.LatLng(49.96031380140943, 8.876705934049891),
       new google.maps.LatLng(49.95019743818179, 8.765688801857159),
       new google.maps.LatLng(49.94932921167965, 8.676789332733579),
       new google.maps.LatLng(50.02039660306931, 8.596529351398594),
       new google.maps.LatLng(50.02625849824652, 8.523347372051944),
       new google.maps.LatLng(49.97695435072955, 8.506516607487857),
       new google.maps.LatLng(49.94216985187318, 8.419504481292918),
       new google.maps.LatLng(49.92910893375765, 8.445915622625948),
       new google.maps.LatLng(49.85337916922646, 8.38630260487424),
       new google.maps.LatLng(49.8157270899905, 8.389676905681709)
    ];
    region_64.push(region_64_1);
    region_borders['region_64'] = region_64;
    region_center['region_64'] = '';
    
    //******************************************************************************    
    //PLZ Region 65
    //******************************************************************************  
    region_65 = [];
    var region_65_1 = [
       new google.maps.LatLng(49.85260977017369, 8.38653470581197),
       new google.maps.LatLng(49.88363107616907, 8.41220919293167),
       new google.maps.LatLng(49.92951702937079, 8.445797808221796),
       new google.maps.LatLng(49.94259533798933, 8.420080188474445),
       new google.maps.LatLng(49.97714111619131, 8.50748414606911),
       new google.maps.LatLng(50.02612256300422, 8.52308614395497),
       new google.maps.LatLng(50.04710956797093, 8.554670804563461),
       new google.maps.LatLng(50.07238517034536, 8.554372768232346),
       new google.maps.LatLng(50.09735223701071, 8.570329250415881),
       new google.maps.LatLng(50.11953623552719, 8.600728230342234),
       new google.maps.LatLng(50.16583687228338, 8.600208948387058),
       new google.maps.LatLng(50.16962509646409, 8.55211967823805),
       new google.maps.LatLng(50.15983958772193, 8.514728125442321),
       new google.maps.LatLng(50.16750376077275, 8.450139560578215),
       new google.maps.LatLng(50.18649166429634, 8.428647694485662),
       new google.maps.LatLng(50.18971426169137, 8.356724052075942),
       new google.maps.LatLng(50.22057288065058, 8.405209748227234),
       new google.maps.LatLng(50.23968793905571, 8.381978577645906),
       new google.maps.LatLng(50.25673752469411, 8.411752976589785),
       new google.maps.LatLng(50.29507927188993, 8.352738829592585),
       new google.maps.LatLng(50.33884208500995, 8.315604439195033),
       new google.maps.LatLng(50.37938616342665, 8.361253128723501),
       new google.maps.LatLng(50.37983608668883, 8.3039123336562),
       new google.maps.LatLng(50.46943421108676, 8.20643500525372),
       new google.maps.LatLng(50.53965082245253, 8.121129833367442),
       new google.maps.LatLng(50.54995886515161, 8.044614317962719),
       new google.maps.LatLng(50.4917048254852, 7.986295038505187),
       new google.maps.LatLng(50.4494445062553, 8.00753501586283),
       new google.maps.LatLng(50.43678853787527, 7.984111384060162),
       new google.maps.LatLng(50.40994701766596, 7.977757204174543),
       new google.maps.LatLng(50.36807902179501, 7.949820573463715),
       new google.maps.LatLng(50.34055606624126, 7.997254503468132),
       new google.maps.LatLng(50.29643609024754, 8.024465659772989),
       new google.maps.LatLng(50.26142982665904, 8.034244644372674),
       new google.maps.LatLng(50.23281106372265, 8.06027633973474),
       new google.maps.LatLng(50.21460989849243, 8.04061134878501),
       new google.maps.LatLng(50.23286164841652, 7.993499636454235),
       new google.maps.LatLng(50.1808950262425, 7.890593395485399),
       new google.maps.LatLng(50.15233030046331, 7.910324826190267),
       new google.maps.LatLng(50.10461500396423, 7.92564957948678),
       new google.maps.LatLng(50.13188605222957, 7.849688748450934),
       new google.maps.LatLng(50.15944871393881, 7.731349905744267),
       new google.maps.LatLng(50.11381162860051, 7.73020956235661),
       new google.maps.LatLng(50.08410014702874, 7.759288881648394),
       new google.maps.LatLng(50.05662449243324, 7.77266007363123),
       new google.maps.LatLng(50.0310706548775, 7.821808821022415),
       new google.maps.LatLng(50.00618643568908, 7.854322989088369),
       new google.maps.LatLng(49.97550806747736, 7.871944739743022),
       new google.maps.LatLng(49.96972179144542, 7.932544117767348),
       new google.maps.LatLng(49.99219637501467, 8.020522340149597),
       new google.maps.LatLng(50.00681039012679, 8.087564903769945),
       new google.maps.LatLng(50.02321985991474, 8.127137231035919),
       new google.maps.LatLng(50.03532214105861, 8.189967915707435),
       new google.maps.LatLng(50.02414659477191, 8.253270961632062),
       new google.maps.LatLng(49.99001765635608, 8.303136287230579),
       new google.maps.LatLng(49.94109079673262, 8.344557460509561),
       new google.maps.LatLng(49.89659613753601, 8.347726973357378),
       new google.maps.LatLng(49.86574293468934, 8.359717393078608),
       new google.maps.LatLng(49.85260977017369, 8.38653470581197)
    ];
    region_65.push(region_65_1);
    region_borders['region_65'] = region_65;
    region_center['region_65'] = '';
    
    //******************************************************************************    
    //PLZ Region 66
    //******************************************************************************  
    region_66 = [];
    var region_66_1 = [
       new google.maps.LatLng(49.54903567266214, 6.375539899890692),
       new google.maps.LatLng(49.4640044967131, 6.377663328863847),
       new google.maps.LatLng(49.47022577622153, 6.444502109678345),
       new google.maps.LatLng(49.41833487405177, 6.561832360574702),
       new google.maps.LatLng(49.36110308785683, 6.603460278409139),
       new google.maps.LatLng(49.32256201888072, 6.596150440344088),
       new google.maps.LatLng(49.28070792723049, 6.663020145132128),
       new google.maps.LatLng(49.21865056787733, 6.714255571162293),
       new google.maps.LatLng(49.1889205305075, 6.714660345627699),
       new google.maps.LatLng(49.16686612092514, 6.751852548578137),
       new google.maps.LatLng(49.15314650769375, 6.844116417820755),
       new google.maps.LatLng(49.17845438964385, 6.868605878468066),
       new google.maps.LatLng(49.21204949588662, 6.844418377893602),
       new google.maps.LatLng(49.21317090453017, 6.901199511901286),
       new google.maps.LatLng(49.2214164169552, 6.946240011076554),
       new google.maps.LatLng(49.19117404882542, 7.015722411166101),
       new google.maps.LatLng(49.1236847871617, 7.05260185619228),
       new google.maps.LatLng(49.13178879670647, 7.09009048374768),
       new google.maps.LatLng(49.14459865557598, 7.11510359973428),
       new google.maps.LatLng(49.12561660157653, 7.164104455059412),
       new google.maps.LatLng(49.12890068612451, 7.278241577798184),
       new google.maps.LatLng(49.12266039484402, 7.311503528132404),
       new google.maps.LatLng(49.14912052885533, 7.346514998613998),
       new google.maps.LatLng(49.1507321683142, 7.376844652678161),
       new google.maps.LatLng(49.17563599071996, 7.379537218619349),
       new google.maps.LatLng(49.18108001393823, 7.458902611110652),
       new google.maps.LatLng(49.1675303448263, 7.507632745125554),
       new google.maps.LatLng(49.14204046050303, 7.505859623341875),
       new google.maps.LatLng(49.08609877862569, 7.576854831416724),
       new google.maps.LatLng(49.09040059092005, 7.621030147184815),
       new google.maps.LatLng(49.05867051583265, 7.654982908053651),
       new google.maps.LatLng(49.06429161315628, 7.711397440387078),
       new google.maps.LatLng(49.0559552186126, 7.783170071603529),
       new google.maps.LatLng(49.07031155448159, 7.799808231627599),
       new google.maps.LatLng(49.11133311761365, 7.766557036876822),
       new google.maps.LatLng(49.13279944014384, 7.812469044695742),
       new google.maps.LatLng(49.20467313597137, 7.82938109082091),
       new google.maps.LatLng(49.20521039595572, 7.770625692502073),
       new google.maps.LatLng(49.22940099926953, 7.776692968105641),
       new google.maps.LatLng(49.25090176348617, 7.836194511110794),
       new google.maps.LatLng(49.32015993074704, 7.847766925253971),
       new google.maps.LatLng(49.294335408121, 7.798334243970269),
       new google.maps.LatLng(49.27797114010834, 7.710910831658486),
       new google.maps.LatLng(49.31042204300737, 7.685381330270147),
       new google.maps.LatLng(49.34809664078074, 7.683346301677347),
       new google.maps.LatLng(49.41747009911902, 7.680434479343036),
       new google.maps.LatLng(49.43152041816271, 7.651536220791972),
       new google.maps.LatLng(49.47781986184872, 7.574385757906736),
       new google.maps.LatLng(49.51900714960092, 7.616904030101512),
       new google.maps.LatLng(49.56694384697784, 7.601160436018146),
       new google.maps.LatLng(49.60847583530218, 7.596018441121992),
       new google.maps.LatLng(49.62586898404419, 7.542936804550662),
       new google.maps.LatLng(49.62513015845447, 7.499128878523321),
       new google.maps.LatLng(49.58408215140358, 7.435630866564136),
       new google.maps.LatLng(49.57414072242404, 7.358039248815061),
       new google.maps.LatLng(49.56755968349314, 7.221425044182794),
       new google.maps.LatLng(49.60525982667506, 7.101260848044022),
       new google.maps.LatLng(49.66428536816285, 7.157087559508808),
       new google.maps.LatLng(49.70505883578004, 7.07706056585759),
       new google.maps.LatLng(49.64038224324847, 7.044365327359507),
       new google.maps.LatLng(49.59290468739818, 6.826878664077771),
       new google.maps.LatLng(49.54559917340367, 6.680114032388929),
       new google.maps.LatLng(49.53544747618723, 6.564273393064603),
       new google.maps.LatLng(49.53839893163477, 6.480931536600423),
       new google.maps.LatLng(49.54903567266214, 6.375539899890692) 
    ];
    region_66.push(region_66_1);
    region_borders['region_66'] = region_66;
    region_center['region_66'] = '';
    
    //******************************************************************************    
    //PLZ Region 67
    //******************************************************************************  
    region_67 = [];
    var region_67_1 = [
       new google.maps.LatLng(49.62433681909226, 7.496888320224906),
       new google.maps.LatLng(49.62448045666683, 7.542416963770339),
       new google.maps.LatLng(49.60637634195333, 7.596545642443651),
       new google.maps.LatLng(49.56727816984236, 7.599076486738165),
       new google.maps.LatLng(49.51908130853485, 7.616365464529952),
       new google.maps.LatLng(49.47897780631671, 7.574587225146727),
       new google.maps.LatLng(49.41714180267144, 7.680503687166609),
       new google.maps.LatLng(49.31025846511927, 7.686312528973593),
       new google.maps.LatLng(49.27875515765778, 7.709062001950857),
       new google.maps.LatLng(49.29557818899124, 7.795771220473751),
       new google.maps.LatLng(49.31836828659429, 7.845149011227313),
       new google.maps.LatLng(49.31124352437241, 7.945244271741425),
       new google.maps.LatLng(49.30008271355178, 8.035205668216738),
       new google.maps.LatLng(49.27494254885038, 8.132388739258541),
       new google.maps.LatLng(49.2506571569522, 8.157751675301423),
       new google.maps.LatLng(49.25880123720167, 8.249890466910813),
       new google.maps.LatLng(49.21478329599508, 8.253154326434661),
       new google.maps.LatLng(49.20855965609411, 8.347036907619646),
       new google.maps.LatLng(49.25678791583961, 8.36951671510873),
       new google.maps.LatLng(49.25267195359979, 8.421744983585873),
       new google.maps.LatLng(49.28576987199638, 8.47264100348076),
       new google.maps.LatLng(49.3067129992969, 8.490104549790709),
       new google.maps.LatLng(49.3402811866217, 8.477336340534503),
       new google.maps.LatLng(49.40577732892438, 8.502287905807897),
       new google.maps.LatLng(49.4586118386469, 8.480331796998716),
       new google.maps.LatLng(49.50968698764542, 8.441049293709357),
       new google.maps.LatLng(49.55318411590801, 8.422685864820316),
       new google.maps.LatLng(49.59908808360543, 8.416772028088397),
       new google.maps.LatLng(49.67068465407434, 8.368164556755346),
       new google.maps.LatLng(49.72334105857941, 8.361831734759843),
       new google.maps.LatLng(49.72896052466439, 8.45501284485989),
       new google.maps.LatLng(49.75976899807459, 8.484392602334868),
       new google.maps.LatLng(49.77134500077271, 8.421195198071498),
       new google.maps.LatLng(49.815567438062, 8.391201877609205),
       new google.maps.LatLng(49.78481218852266, 8.318433468100391),
       new google.maps.LatLng(49.78710962383026, 8.229235746247896),
       new google.maps.LatLng(49.67690735900592, 8.221074920034717),
       new google.maps.LatLng(49.66044433898644, 8.158674044206776),
       new google.maps.LatLng(49.69291310878781, 8.073991865986414),
       new google.maps.LatLng(49.72329220970264, 8.061843740066806),
       new google.maps.LatLng(49.69817024066346, 7.968984857420818),
       new google.maps.LatLng(49.74284254190255, 7.936705039283427),
       new google.maps.LatLng(49.75253251088419, 7.817874165066405),
       new google.maps.LatLng(49.74126384556965, 7.738837430446002),
       new google.maps.LatLng(49.70918616880571, 7.731958445581468),
       new google.maps.LatLng(49.66540156241116, 7.593928702074127),
       new google.maps.LatLng(49.6522631906869, 7.50483196830279),
       new google.maps.LatLng(49.62433681909226, 7.496888320224906)
    ];
    region_67.push(region_67_1);
    region_borders['region_67'] = region_67;
    region_center['region_67'] = '';
    
    //******************************************************************************    
    //PLZ Region 68
    //******************************************************************************  
    region_68 = [];
    var region_68_1 = [
       new google.maps.LatLng(49.26953334838521, 8.451701342835516),
       new google.maps.LatLng(49.19406225498061, 8.518776701012694),
       new google.maps.LatLng(49.19714426398846, 8.521686496381729),
       new google.maps.LatLng(49.21348899365253, 8.578045787661843),
       new google.maps.LatLng(49.24082349557995, 8.648868287820164),
       new google.maps.LatLng(49.27606168335777, 8.659126262462957),
       new google.maps.LatLng(49.29943971120139, 8.604514440966877),
       new google.maps.LatLng(49.33904813475587, 8.608155473369496),
       new google.maps.LatLng(49.37246112447348, 8.611669240339523),
       new google.maps.LatLng(49.40716121663119, 8.609498879065283),
       new google.maps.LatLng(49.42042599611276, 8.578311845904521),
       new google.maps.LatLng(49.44165885849607, 8.631151589252639),
       new google.maps.LatLng(49.48982136450588, 8.647392729706908),
       new google.maps.LatLng(49.53646721516225, 8.627310110461913),
       new google.maps.LatLng(49.5893262827877, 8.608240023691421),
       new google.maps.LatLng(49.61913505963347, 8.529360507753509),
       new google.maps.LatLng(49.66152511331885, 8.508929004064399),
       new google.maps.LatLng(49.71152443884219, 8.54332948999598),
       new google.maps.LatLng(49.72815110849572, 8.454168551866072),
       new google.maps.LatLng(49.72385116050954, 8.361882301116646),
       new google.maps.LatLng(49.66923641948939, 8.367879701049862),
       new google.maps.LatLng(49.60011003015394, 8.416680063944217),
       new google.maps.LatLng(49.55295804420566, 8.424540641448722),
       new google.maps.LatLng(49.50759079723139, 8.443877022068184),
       new google.maps.LatLng(49.45523312215206, 8.482979990935753),
       new google.maps.LatLng(49.40551431150546, 8.5011720670065),
       new google.maps.LatLng(49.34114784569313, 8.478999642787153),
       new google.maps.LatLng(49.30568891621539, 8.490708074591964),
       new google.maps.LatLng(49.26953334838521, 8.451701342835516) 
    ];
    region_68.push(region_68_1);
    region_borders['region_68'] = region_68;
    region_center['region_68'] = '';
    
    //******************************************************************************    
    //PLZ Region 69
    //******************************************************************************  
    region_69 = [];
    var region_69_1 = [
       new google.maps.LatLng(49.24276959197752, 8.652589328916873),
       new google.maps.LatLng(49.23402975120952, 8.740812745815731),
       new google.maps.LatLng(49.25903561515771, 8.777392089012842),
       new google.maps.LatLng(49.31646421574671, 8.78823410777972),
       new google.maps.LatLng(49.35300879304012, 8.831991355555367),
       new google.maps.LatLng(49.37586418576383, 8.857309222301135),
       new google.maps.LatLng(49.41698565532492, 8.889174480858781),
       new google.maps.LatLng(49.3869997566586, 8.935256886955049),
       new google.maps.LatLng(49.3788509355898, 9.012017127102263),
       new google.maps.LatLng(49.38625134421076, 9.10503010372379),
       new google.maps.LatLng(49.4241674856805, 9.09944649008658),
       new google.maps.LatLng(49.48835556984159, 9.116052386789175),
       new google.maps.LatLng(49.50047605799766, 9.22630785920232),
       new google.maps.LatLng(49.55699809677947, 9.268915264891781),
       new google.maps.LatLng(49.57714716741012, 9.228738283712328),
       new google.maps.LatLng(49.57308655798414, 9.116369991724586),
       new google.maps.LatLng(49.59739897546564, 9.074491077232192),
       new google.maps.LatLng(49.60890272467248, 8.968588939914575),
       new google.maps.LatLng(49.60967646531132, 8.881382888466341),
       new google.maps.LatLng(49.60147241019242, 8.819875164492837),
       new google.maps.LatLng(49.62007064019249, 8.813256915257131),
       new google.maps.LatLng(49.62754782558438, 8.71184435481412),
       new google.maps.LatLng(49.58378884437228, 8.682770791674969),
       new google.maps.LatLng(49.58786955516862, 8.608162228468377),
       new google.maps.LatLng(49.49042017625623, 8.64674486668234),
       new google.maps.LatLng(49.44151335202353, 8.631208842561852),
       new google.maps.LatLng(49.42008481058072, 8.580036367134019),
       new google.maps.LatLng(49.40574571443661, 8.608728446629275),
       new google.maps.LatLng(49.37244992189535, 8.612178534126986),
       new google.maps.LatLng(49.29827680400523, 8.60421851521915),
       new google.maps.LatLng(49.27531292260184, 8.658922145772008),
       new google.maps.LatLng(49.24276959197752, 8.652589328916873)
    ];
    region_69.push(region_69_1);
    region_borders['region_69'] = region_69;
    region_center['region_69'] = '';
    
    //******************************************************************************    
    //PLZ Region 70
    //******************************************************************************  
    region_70 = [];
    var region_70_1 = [
    ];
    region_70.push(region_70_1);
    region_borders['region_70'] = region_70;
    region_center['region_70'] = '';
    
    //******************************************************************************    
    //PLZ Region 71
    //******************************************************************************  
    region_71 = [];
    var region_71_1 = [
    ];
    region_71.push(region_71_1);
    region_borders['region_71'] = region_71;
    region_center['region_71'] = '';
    
    //******************************************************************************    
    //PLZ Region 72
    //******************************************************************************  
    region_72 = [];
    var region_72_1 = [
    ];
    region_72.push(region_72_1);
    region_borders['region_72'] = region_72;
    region_center['region_72'] = '';
    
    //******************************************************************************    
    //PLZ Region 73
    //******************************************************************************  
    region_73 = [];
    var region_73_1 = [
    ];
    region_73.push(region_73_1);
    region_borders['region_73'] = region_73;
    region_center['region_73'] = '';
    
    //******************************************************************************    
    //PLZ Region 74
    //******************************************************************************  
    region_74 = [];
    var region_74_1 = [
    ];
    region_74.push(region_74_1);
    region_borders['region_74'] = region_74;
    region_center['region_74'] = '';
    
    //******************************************************************************    
    //PLZ Region 75
    //******************************************************************************  
    region_75 = [];
    var region_75_1 = [
    ];
    region_75.push(region_75_1);
    region_borders['region_75'] = region_75;
    region_center['region_75'] = '';
    
    //******************************************************************************    
    //PLZ Region 76
    //******************************************************************************  
    region_76 = [];
    var region_76_1 = [
    ];
    region_76.push(region_76_1);
    region_borders['region_76'] = region_76;
    region_center['region_76'] = '';
    
    //******************************************************************************    
    //PLZ Region 77
    //******************************************************************************  
    region_77 = [];
    var region_77_1 = [
    ];
    region_77.push(region_77_1);
    region_borders['region_77'] = region_77;
    region_center['region_77'] = '';
    
    //******************************************************************************    
    //PLZ Region 78
    //******************************************************************************  
    region_78 = [];
    var region_78_1 = [
    ];
    region_78.push(region_78_1);
    region_borders['region_78'] = region_78;
    region_center['region_78'] = '';
    
    //******************************************************************************    
    //PLZ Region 79
    //******************************************************************************  
    region_79 = [];
    var region_79_1 = [
    ];
    region_79.push(region_79_1);
    region_borders['region_79'] = region_79;
    region_center['region_79'] = '';
    
    //******************************************************************************    
    //PLZ Region 80
    //******************************************************************************  
    region_80 = [];
    var region_80_1 = [
    ];
    region_80.push(region_80_1);
    region_borders['region_80'] = region_80;
    region_center['region_80'] = '';
    
    //******************************************************************************    
    //PLZ Region 81
    //******************************************************************************  
    region_81 = [];
    var region_81_1 = [
    ];
    region_81.push(region_81_1);
    region_borders['region_81'] = region_81;
    region_center['region_81'] = '';
    
    //******************************************************************************    
    //PLZ Region 82
    //******************************************************************************  
    region_82 = [];
    var region_82_1 = [
    ];
    region_82.push(region_82_1);
    region_borders['region_82'] = region_82;
    region_center['region_82'] = '';
    
    //******************************************************************************    
    //PLZ Region 83
    //******************************************************************************  
    region_83 = [];
    var region_83_1 = [
    ];
    region_83.push(region_83_1);
    region_borders['region_83'] = region_83;
    region_center['region_83'] = '';
    
    //******************************************************************************    
    //PLZ Region 84
    //******************************************************************************  
    region_84 = [];
    var region_84_1 = [
    ];
    region_84.push(region_84_1);
    region_borders['region_84'] = region_84;
    region_center['region_84'] = '';
    
    //******************************************************************************    
    //PLZ Region 85
    //******************************************************************************  
    region_85 = [];
    var region_85_1 = [
    ];
    region_85.push(region_85_1);
    region_borders['region_85'] = region_85;
    region_center['region_85'] = '';
    
    //******************************************************************************    
    //PLZ Region 86
    //******************************************************************************  
    region_86 = [];
    var region_86_1 = [
    ];
    region_86.push(region_86_1);
    region_borders['region_86'] = region_86;
    region_center['region_86'] = '';
    
    //******************************************************************************    
    //PLZ Region 87
    //******************************************************************************  
    region_87 = [];
    var region_87_1 = [
    ];
    region_87.push(region_87_1);
    region_borders['region_87'] = region_87;
    region_center['region_87'] = '';
    
    //******************************************************************************    
    //PLZ Region 88
    //******************************************************************************  
    region_88 = [];
    var region_88_1 = [
    ];
    region_88.push(region_88_1);
    region_borders['region_88'] = region_88;
    region_center['region_88'] = '';
    
    //******************************************************************************    
    //PLZ Region 89
    //******************************************************************************  
    region_89 = [];
    var region_89_1 = [
    ];
    region_89.push(region_89_1);
    region_borders['region_89'] = region_89;
    region_center['region_89'] = '';
    
    //******************************************************************************    
    //PLZ Region 90
    //******************************************************************************  
    region_90 = [];
    var region_90_1 = [
    ];
    region_90.push(region_90_1);
    region_borders['region_90'] = region_90;
    region_center['region_90'] = '';
    
    //******************************************************************************    
    //PLZ Region 91
    //******************************************************************************  
    region_91 = [];
    var region_91_1 = [
    ];
    region_91.push(region_91_1);
    region_borders['region_91'] = region_91;
    region_center['region_91'] = '';
    
    //******************************************************************************    
    //PLZ Region 92
    //******************************************************************************  
    region_92 = [];
    var region_92_1 = [
    ];
    region_92.push(region_92_1);
    region_borders['region_92'] = region_92;
    region_center['region_92'] = '';
    
    //******************************************************************************    
    //PLZ Region 93
    //******************************************************************************  
    region_93 = [];
    var region_93_1 = [
    ];
    region_93.push(region_93_1);
    region_borders['region_93'] = region_93;
    region_center['region_93'] = '';
    
    //******************************************************************************    
    //PLZ Region 94
    //******************************************************************************  
    region_94 = [];
    var region_94_1 = [
    ];
    region_94.push(region_94_1);
    region_borders['region_94'] = region_94;
    region_center['region_94'] = '';
    
    //******************************************************************************    
    //PLZ Region 95
    //******************************************************************************  
    region_95 = [];
    var region_95_1 = [
    ];
    region_95.push(region_95_1);
    region_borders['region_95'] = region_95;
    region_center['region_95'] = '';
    
    //******************************************************************************    
    //PLZ Region 96
    //******************************************************************************  
    region_96 = [];
    var region_96_1 = [
    ];
    region_96.push(region_96_1);
    region_borders['region_96'] = region_96;
    region_center['region_96'] = '';
    
    //******************************************************************************    
    //PLZ Region 97
    //******************************************************************************  
    region_97 = [];
    var region_97_1 = [
    ];
    region_97.push(region_97_1);
    region_borders['region_97'] = region_97;
    region_center['region_97'] = '';
    
    //******************************************************************************    
    //PLZ Region 98
    //******************************************************************************  
    region_98 = [];
    var region_98_1 = [
    ];
    region_98.push(region_98_1);
    region_borders['region_98'] = region_98;
    region_center['region_98'] = '';
    
    //******************************************************************************    
    //PLZ Region 99
    //******************************************************************************  
    region_99 = [];
    var region_99_1 = [
    ];
    region_99.push(region_99_1);
    region_borders['region_99'] = region_99;
    region_center['region_99'] = '';
}