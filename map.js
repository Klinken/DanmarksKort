var cities = [
	/* Structure of the array is as follows [ID, Waitinglist, City]   */ 
		['albertslund',0, 'Albertslund'],
		['alleroed',0, 'Allerød'],
		['assens',0, 'Assens'],
		['ballerup',0, 'Ballerup'],
		['billund',0, 'Billund'],
		['broendby',0, 'Brøndby'],
		['broenderslev',0, 'Brønderslev'],
		['dragoer',0, 'Dragør'],
		['egedal',0, 'Egedal'],
		['esbjerg',0, 'Esbjerg'],	
		['fanoe',0, 'Fanø'],
		['favrskov',0, 'Favrskov'],
		['faxe',0, 'Faxe'],
		['fredensborg',0, 'Fredensborg'],
		['fredericia',0, 'Fredericia'],
		['frederiksberg',0, 'Frederiksberg'],
		['frederikshavn',0, 'Frederikshavn'],
		['frederikssund',0, 'Frederikssund'],
		['furesoe',0, 'Furesø'],
		['faaborg-midtfyn',0, 'Faaborg-Midtfyn'],
		['gentofte',0, 'Gentofte'],
		['gladsaxe',0, 'Gladsaxe'],
		['glostrup',0, 'Glostrup'],
		['greve',0, 'Greve'],
		['gribskov',0, 'Gribskov'],
		['guldborgsund',0, 'Guldborgsund'],
		['haderslev',0, 'Haderslev'],
		['halsnaes',0, 'Halsnæs'],
		['hedensted',0, 'Hedensted'],
		['helsingoer',0, 'Helsingør'],
		['herlev',0, 'Herlev'],
		['herning',0, 'Herning'],
		['hilleroed',0, 'Hillerød'],
		['hjoerring',0, 'Hjørring'],
		['holbaek',0, 'Holbæk'],
		['holstebro',0, 'Holstebro'],
		['horsens',0, 'Horsens'],
		['hoersholm',0, 'Hørsholm'],
		['hvidovre',0, 'Hvidovre'],
		['hoeje-taastrup',0, 'Høje-Taastrup'],
		['ikast-brande',0, 'Ikast-Brande'],
		['ishoej',0, 'Ishøj'],
		['jammerbugt',0, 'Jammerbugt'],
		['kalundborg',0, 'Kalundborg'],
		['kerteminde',0, 'Kerteminde'],
		['kolding',0, 'Kolding'],
		['koebenhavn',0, 'København'],
		['koege',0, 'Køge'],
		['langeland',0, 'Langeland'],
		['lejre',0, 'Lejre'],
		['lemvig',0, 'Lemvig'],
		['lolland',0, 'Lolland'],
		['lyngby-taarbaek',0, 'Lyngby-Taarbæk'],
		['laesoe',0, 'Læsø'],
		['mariagerfjord',0,'Mariagerfjord'],
		['middelfart',0,'Middelfart'],
		['morsoe',0,'Morsø'],
		['norddjurs',0,'Norddjurs'],
		['nordfyn',0,'Nordfyn'],
		['nyborg',0,'Nyborg'],
		['naestved',0,'Næstved'],
		['odder',0,'Odder'],
		['odense',0,'Odense'],
		['odsherred',0,'Odsherred'],
		['randers',0,'Randers'],
		['rebild',0,'Rebild'],
		['ringkoebing-skjern',0,'Ringkøbing-Skjern'],
		['ringsted',0,'Ringsted'],
		['roskilde',0,'Roskilde'],
		['rudersdal',0,'Rudersdal'],
		['roedovre',0,'Rødovre'],
		['samsoe',0,'Samsø'],
		['silkeborg',0,'Silkeborg'],
		['skanderborg',0,'Skanderborg'],
		['skive',0,'Skive'],
		['slagelse',0,'Slagelse'],
		['solroed',0,'Solrød'],
		['soroe',0,'Sorø'],
		['stevns',0,'Stevns'],
		['struer',0,'Struer'],
		['svendborg',0,'Svendborg'],
		['syddjurs',0,'Syddjurs'],
		['soenderborg',0,'Sønderborg'],
		['thisted',0,'Thisted'],
		['toender',0,'Tønder'],
		['taarnby',0,'Tårnby'],
		['vallensbaek',0,'Vallensbæk'],
		['varde',0,'Varde'],
		['vejen',0,'Vejen'],
		['vejle',0,'Vejle'],
		['vesthimmerlands',0,'Vesthimmerlands'],
		['viborg',0,'Viborg'],
		['vordingborg',0,'Vordingborg'],
		['aeroe',0,'Ærø'],	
		['aabenraa',0,'Aabenraa'],
		['aalborg',0,'Aalborg'],
		['aarhus',0,'Aarhus']
	];
	
	var setColor = () => {
		for (var i = 0; i < cities.length; i++){
		var element = document.getElementById(cities[i][0]);
		if(cities[i][1] > 30){
		 element.style.fill = 'hsl(0, 82%, 42%)';
		} else if (cities[i][1] > 20){
		 element.style.fill = 'hsl(0, 82%, 52%)';	
		} else if (cities[i][1] > 8){
		 element.style.fill = 'hsl(0, 82%, 57%)';	
		} else if (cities[i][1] > 4){
			element.style.fill = 'hsl(0, 82%, 65%)';	
		} else if (cities[i][1] > 0){
		 element.style.fill = 'hsl(0, 82%, 82%)';	
		}	else {
		 element.style.fill = '#add8e6';
		} 
	}
	};
	
	
	var onHover = (event, x) => {
		var mouseX = event.pageX - 80;
		var mouseY = event.pageY - 87;
		var infoBox = document.getElementById('kort-information');
		var waitinglist;
		var city;
		for (var i = 0; i < cities.length; i++){
			if(cities[i][0] === x.id){
				waitinglist = cities[i][1];
				city = cities[i][2];
			}
		}
		if(waitinglist === 0){
			null;
		} else {
		
		infoBox.style.display = "grid";
		infoBox.style.top = mouseY + "px";
		infoBox.style.left = mouseX + "px";
		infoBox.innerHTML = "<span id='kort-information-title'>" + city + "</span>" + "<span>" + waitinglist + "</span>";
		}
	};
	
	var onOut = (x) => {
		var infoBox = document.getElementById('kort-information');
		infoBox.style.display = "none";
	}