/*Jesse Sommeling
Applicatiebeheerder niveau 4*/

const DRIEVRAGEN = 'U dient drie vragen te beantwoorden'; // Hiermee maakt men een constante aan: een stuk geheugen dat niet gewijzigd kan worden, met een specifiek aangemaakte naam.
alert(DRIEVRAGEN);  // Hiermee maakt men een pop up, met de gewenste soort tekst. In dit geval is de gewenste tekst een constante genaamd DRIEVRAGEN.

var voornaam = prompt('Wat is uw voornaam?'); //Met de var maakt men een variabele aan; Een stuk geheugen met een naam toegewezen.
var achternaam = prompt('Wat is uw achternaam?'); // de prompt functie zorgt ervoor dat het mogelijk is om aan de gebruiker informatie te vragen. De gebruiker kan dan informatie geven.
var leeftijd = prompt('Wat is uw leeftijd?'); // door de gemaakte variabele te verbinden met de prompt functie kan men een stuk informatie invoeren vanuit de webpagina. Het stukje informatie dat ingevoerd is door de gebruiker, wordt dan toegewezen aan de specifieke variabele.

document.write('Hartelijk bedankt voor het beantwoorden van de vragen ' + voornaam + ' ' + achternaam + '. U bent ' + leeftijd + ' jaar oud.'); // Tot slot worden hier alle variabelen verwerkt in een string dat wordt weergegeven op de webpagina.
