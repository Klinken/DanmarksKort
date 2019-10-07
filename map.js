var cities = [
	['albertslund',8],
	['alleroed',5],
	['assens',13],
	['ballerup',4],
	['billund',0],
	['broendby',5],
	['broenderslev',10],
	['dragoer',1],
	['egedal',2],
	['esbjerg',20],	
	['fanoe',0],
	['favrskov',8],
	['faxe',7],
	['fredensborg',2],
	['fredericia',2],
	['frederiksberg',22],
	['frederikshavn',10],
	['frederikssund',1],
	['furesoe',1],
	['faaborg-midtfyn',2],
	['gentofte',9],
	['gladsaxe',7],
	['glostrup',0],
	['greve',5],
	['gribskov',1],
	['guldborgsund',1],
	['haderslev',13],
	['halsnaes',3],
	['hedensted',9],
	['helsingoer',3],
	['herlev',0],
	['herning',14],
	['hilleroed',0],
	['hjoerring',7],
	['holbaek',15],
	['holstebro',7],
	['horsens',8],
	['hoersholm',0],
	['hvidovre',0],
	['hoeje-taastrup',16],
	['ikast-brande',14],
	['ishoej',2],
	['jammerbugt',4],
	['kalundborg',16],
	['kerteminde',7],
	['kolding',15],
	['koebenhavn',49],
	['koege',1],
	['langeland',5],
	['lejre',0],
	['lemvig',0],
	['lolland',0],
	['lyngby-taarbaek',5],
	['laesoe',0],
	['mariagerfjord',4],
	['middelfart',1],
	['morsoe',0],
	['norddjurs',1],
	['nordfyn',14],
	['nyborg',2],
	['naestved',11],
	['odder',0],
	['odense',40],
	['odsherred',0],
	['randers',7],
	['rebild',7],
	['ringkoebing-skjern',10],
	['ringsted',1],
	['roskilde',1],
	['rudersdal',1],
	['roedovre',0],
	['samsoe',0],
	['silkeborg',10],
	['skanderborg',1],
	['skive',3],
	['slagelse',10],
	['solroed',3],
	['soroe',0],
	['stevns',1],
	['struer',0],
	['svendborg',9],
	['syddjurs',0],
	['soenderborg',0],
	['thisted',0],
	['toender',1],
	['taarnby',0],
	['vallensbaek',0],
	['varde',1],
	['vejen',2],
	['vejle',0],
	['vesthimmerlands',4],
	['viborg',2],
	['vordingborg',3],
	['aeroe',0],	
	['aabenraa',13],
	['aalborg',38],
	['aarhus',25]
];

var setColor = () => {
    for (var i = 0; i < cities.length; i++){
	var element = document.getElementById(cities[i][0]);
	if(cities[i][1] > 30){
     element.style.fill = 'hsl(0, 82%, 42%)';
	} else if (cities[i][1] > 20){
	 element.style.fill = 'hsl(0, 82%, 52%)';	
	} else if (cities[i][1] > 15){
	 element.style.fill = 'hsl(0, 82%, 57%)';	
	} else if (cities[i][1] > 0){
	 element.style.fill = 'hsl(0, 82%, 72%)';	
	}	else {
	 element.style.fill = '#add8e6';
	} 
}
};


var onHover = (event, x) => {
	var mouseX = event.pageX - 82;
	var mouseY = event.pageY - 75;
	var infoBox = document.getElementById('information');
	var waitinglist;
	for (var i = 0; i < cities.length; i++){
		if(cities[i][0] === x.id){
			waitinglist = cities[i][1];
		}
	}
	if(waitinglist === 0){
		null;
	} else {
	
	infoBox.style.display = "block";
	infoBox.style.top = mouseY + "px";
	infoBox.style.left = mouseX + "px";
	infoBox.innerHTML = "Nuværende venteliste: " + waitinglist;
	}
};

var onOut = (x) => {
	var infoBox = document.getElementById('information');
	infoBox.style.display = "none";
}