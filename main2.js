var Frases = new Array()
/*P2 T12-T25*/
Frases[0] = ["Alguns exemples de processament de senyals que es poden fer analògicament són: amplificació, filtratge i rectificació.",1];
Frases[1] = ["L'amplificació és un processament analògic.",1];
Frases[2] = ["El filtratge és un processament analògic.",1];
Frases[3] = ["La integració és un processament analògic.",1];


/*Frases[] = ["",];*/

var Q = Frases.length;
var Aleatori = Math.round(Math.random()*(Q-1));
/*function ShowFrase(){
	document.write(Frases[Aleatori][0]);
}*/
document.getElementById("idfrases").innerHTML = Frases[Aleatori][0];

var errades = 0;
var correctes = 0;

document.getElementById("verdader").addEventListener("click", function(){resposta(1);});
document.getElementById("fals").addEventListener("click", function(){resposta(0);});
document.getElementById("seguent").addEventListener("click", function(){passa()});

function resposta(res){
	if(res == Frases[Aleatori][1]) {
		document.getElementById("solucio").innerHTML = "Correcte!";
		document.getElementById("fals").disabled = true;
		document.getElementById("verdader").disabled = true;
		correctes++;
		Frases[Aleatori][1] = 2 /**/
		document.getElementById("estanbe").innerHTML = "Correctes: "+correctes;
		document.getElementById("estanmalament").innerHTML = "Errades: "+errades;
	}
	else if(res != Frases[Aleatori][1]) {
		document.getElementById("solucio").innerHTML = "Nooo! Malament!";
		document.getElementById("fals").disabled = true;
		document.getElementById("verdader").disabled = true;
		errades++;
		document.getElementById("estanbe").innerHTML = "Correctes: "+correctes;
		document.getElementById("estanmalament").innerHTML = "Errades: "+errades;
	}
}

function passa(){
	if(correctes == Q) acaba(); /**/
	else { /**/
		Aleatori = Math.round(Math.random()*(Q-1));
		if(Frases[Aleatori][1] == 2) passa2(); /**/
		else{ /**/
			document.getElementById("idfrases").innerHTML = Frases[Aleatori][0];
			document.getElementById("solucio").innerHTML = "";
			document.getElementById("verdader").disabled = false;
			document.getElementById("fals").disabled = false;
		}
	}
}

function passa2(){
	Aleatori++;
	if (Aleatori>=Q) Aleatori = 0;
	if(Frases[Aleatori][1] == 2) passa2()
	else {
		document.getElementById("idfrases").innerHTML = Frases[Aleatori][0];
		document.getElementById("solucio").innerHTML = "";
		document.getElementById("verdader").disabled = false;
		document.getElementById("fals").disabled = false;
	}
}

function acaba(){
	document.getElementById("idfrases").innerHTML = "Felicitats! Has endevinat totes les frases que hi havia disponibles! Cada cop estàs més preparat per l'examen.";
	document.getElementById("seguent").innerHTML = "Acabat";
	document.getElementById("seguent").disabled = true;
}