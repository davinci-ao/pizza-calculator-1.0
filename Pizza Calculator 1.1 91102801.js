/*Jesse Sommeling 91102801
Applicatieontwikkelaar niv. 4*/

const SMALL = 799; // een small pizza kost 7.99.
const MEDIUM = 1049; // een medium pizza kost 10.49.
const LARGE = 1249; // een large pizza kost 12.49.

var aantalSmall = 0; // Hier variabelen aangemaakt omdat een aangemaakte variabele in de functie-block de variabele niet wordt meegenomen voor de rest van de code.
var aantalMedium = 0;
var aantalLarge = 0;
var aantalSmallExtra = 0;
var aantalMediumExtra = 0;
var aantalLargeExtra = 0;


var pizzaKeuze = prompt('Wat voor pizza wilt u? U kunt kiezen uit Small, Medium of Large.');
var lowercasePizza = pizzaKeuze.toLowerCase(); //dit dwingt de keuze tot een lowercase. Dus zelfs als de gebruiker hoofdletters gebruikt, is het resultaat altijd in kleine letters.

function choice() { //hier maak ik een functie-blok aan, zodat deze meerdere malen teruggeroepen kan worden. Dit scheelt het aanmaken van veel programmeer-statements.
	var pizzaKeuze = prompt('Wat voor pizza wilt u? U kunt kiezen uit Small, Medium of Large.');
	var lowercasePizza = pizzaKeuze.toLowerCase();
	if (lowercasePizza=='small'){
		small();
	}
	if (lowercasePizza=='medium') {
		medium();
	}
	if (lowercasePizza=='large'){
		large();
	}

}

function small() {
	var amount = prompt('Prima keuze! Hoeveel small-pizza\'s wilt u?');
	aantalSmall = aantalSmall + Number(amount);
	var meerKeuze = prompt('Wilt u nog meer pizza\'s bestellen?');
	var lwrcMeerKeuze = meerKeuze.toLowerCase();
		if (lwrcMeerKeuze=='ja') {
		choice();
		}
	else {
		calculation();
		}
	}


function medium() {
	var amount = prompt('Prima keuze! Hoeveel medium-pizza\'s wilt u?');
	aantalMedium = aantalMedium + Number(amount);
	var meerKeuze = prompt('Wilt u nog meer pizza\'s bestellen?');
	var lwrcMeerKeuze = meerKeuze.toLowerCase();
		if (lwrcMeerKeuze=='ja') {
		choice();
		}
	else {
		calculation();
		}
}

function large(){
	var amount = prompt('Prima keuze! Hoeveel large-pizza\'s wilt u?');
	aantalLarge = aantalLarge + Number(amount);
	var meerKeuze = prompt('Wilt u nog meer pizza\'s bestellen?');
	var lwrcMeerKeuze = meerKeuze.toLowerCase();
		if (lwrcMeerKeuze=='ja') {
			choice();
		}
	else {
		calculation();
	}
}

 function calculation() {
 var subtotaal = (Number((aantalSmall*SMALL))+Number((aantalMedium*MEDIUM)) + Number((aantalLarge*LARGE)))/100;
 var subtotaalExtra = (Number((aantalSmallExtra*SMALL))+Number((aantalMediumExtra*MEDIUM)) + Number((aantalLargeExtra*LARGE)))/100;
 var totaal = subtotaal + subtotaalExtra;
 document.write('Heel erg bedankt voor uw bestelling. Het totaal bedrag is ' + totaal + ' euro.<br />');
 document.write('<hr />U heeft besteld: <ul>');
 	if (aantalSmall!==0) {//0 gezien oorspronkelijke waarde ook 0 is als er geen wijzigingen opgetreden van de variabele/bestellingen zijn in de categorie pizza's. Bij geen waarde had ook undefined of null gemogen.
 		document.write('<li>' + aantalSmall + 'x small pizza(\'s) van ' + SMALL/100 + ' = ' + Number((aantalSmall*SMALL))/100 + ' euro.</li>');
 	}
 
 	if (aantalMedium!==0) {
 		document.write('<li>' + Number(aantalMedium) + 'x medium pizza(\'s) van ' + MEDIUM/100 + ' = ' + Number((aantalMedium*MEDIUM))/100 + ' euro.</li>');
 	}

 	if (aantalLarge!==0) {
 		document.write('<li>' + aantalLarge + 'x large pizza(\'s) van ' + LARGE/100 + ' = ' + Number((aantalLarge*LARGE))/100 + ' euro.</li>');
 	}
 	
}


if (lowercasePizza=='small') {
	small();
}

	
if (lowercasePizza=='medium') {
	medium();
}

if (lowercasePizza=='large') {
	large();
}

