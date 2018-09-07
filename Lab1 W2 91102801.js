/*Jesse Sommeling
Applicatiebeheerder niveau 4*/

alert('U dient drie vragen te beantwoorden.'); //De alert functie zorgt ervoor dat er een pop-up opent, met een gewenste stuk tekst.
var voornaam = prompt('Wat is uw voornaam?');  //Met de var maakt men een variabele aan; Een stuk geheugen met een naam toegewezen.
var achternaam = prompt('Wat is uw achternaam?');// de prompt functie zorgt ervoor dat het mogelijk is om aan de gebruiker informatie te vragen. De gebruiker kan dan informatie geven.
var leeftijd = prompt('Wat is uw leeftijd?'); // door de gemaakte variabele te verbinden met de prompt functie kan men een stuk informatie invoeren vanuit de webpagina. Het stukje informatie dat ingevoerd is door de gebruiker, wordt dan toegewezen aan de specifieke variabele.

document.write('Hartelijk bedankt voor het beantwoorden van de vragen ' + voornaam + ' ' + achternaam + '. U bent ' + leeftijd + ' jaar oud.'); // Tot slot worden hier alle variabelen verwerkt in een string dat wordt weergegeven op de webpagina.
