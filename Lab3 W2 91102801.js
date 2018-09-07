/*Jesse Sommeling
Applicatieontwikkelaar niv. 4 */


//Opdracht 1.
for (tafel6 = 1; tafel6<=10; tafel6++) { //For loop. 1e statement zet een variabele voordat de loop start. 2e statement definieert de omstandigheden voor de loop. 3e statement zorgt ervoor dat de juiste variabele met 1 verhoogt wordt eerdere keer wanneer de loop-block is uitgevoerd.
	document.write(tafel6+ ' x 6 = ' + tafel6*6 + '<br />'); //De berekening van de tafel, inclusief variabelen.
}

//Opdracht 2.
document.write("<br />")
for (tafel3 =1; tafel3<=10; tafel3++) { //For loop. 1e statement zet een variabele voordat de loop start. 2e statement definieert de omstandigheden voor de loop. 3e statement zorgt ervoor dat de juiste variabele met 1 verhoogt wordt eerdere keer wanneer de loop-block is uitgevoerd.
	document.write(tafel3 + ' x 3 = ' + tafel3*3 + '<br />'); //De berekening van de tafel, inclusief variabelen.
}
document.write("<br />")
// Om er voor te zorgen dat je op een handige manier een andere tafel kunt uitrekenen, zonder dat je teveel wijzigingen in de code moet doen:
// Kun je dat doen met de volgende code:

var getalTafel = prompt('Voer een getal in waarvan je de tafel wilt berekenen'); //vraagt aan de gebruiker om invoer, zodat er een variabele van gemaakt kan worden. Deze variabele gebruik je weer voor de berekening van de tafel. De keuze voor welke tafel er berekend moet worden.
var aantal = prompt('Met welke aantallen wil je ' + getalTafel + ' vermenigvuldigen?');//vraagt aan de gebruiker om invoer, zodat er een variabele van gemaakt kan worden. Deze variabele gebruik je weer in de For-loop.
for (tafel = 1; tafel<=aantal; tafel++) { //For loop. 1e statement zet een variabele voordat de loop start. 2e statement definieert de omstandigheden voor de loop. 3e statement zorgt ervoor dat de juiste variabele met 1 verhoogt wordt eerdere keer wanneer de loop-block is uitgevoerd.
	document.write(tafel + ' x '+ getalTafel + ' =' + tafel*getalTafel + '<br />'); //De berekening van de tafel, inclusief variabelen.
}

//Opdracht 3.
document.write("<br />")
var getal = 12;//standaard voor de opdracht, getal 12.
var getal = Number(prompt('Voor opdracht 3; met welk getal wilt u deze vermenigvuldigen?'));//met een variabele gekoppeld aan de prompt; er wordt om invoer gevraagd, de invoer van de gebruiker veranderd in een variabele. Om te voorkomen dat de variabele een string blijft, is de methode Number() toegevoegd. De uitvoer is nu een getal.
document.write(getal + ' + 6 = ' + (getal+6) + ' x 10 = ' + ((getal+6)*10) + ' / 5 = ' + ((getal+6)*10)/5 + ' - 12 = ' + ((((getal+6)*10)/5)-12));// de berekening, rekening houdend met wiskunde voorrangsregels.


//Wat opvalt als je de 12 vervangt met de invoer van de gebruiker is dat er hele andere waarden komen te staan. Zo is standaard 12 + 6 = 18. Echter, als invoer is het een string, dus komt er te staan 126 als antwoord. Later veranderd 126 weer in een getal waardoor toekomstige antwoorden wiskundig kloppen.
// Als oplossing hiervoor moet je dus een manier vinden om de invoer wat standaard een string is, om te zetten naar een getal(integer).
// Dit is te doen met o.a. de Number() methode. Deze converteerd strings naar een getal.