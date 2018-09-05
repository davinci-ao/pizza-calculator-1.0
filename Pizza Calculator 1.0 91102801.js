/*Jesse Sommeling 91102801
Applicatieontwikkelaar niv. 4*/

var small = prompt('Hoeveel small pizza\'s wilt u?');//Met de var maakt men een variabele aan; Een stuk geheugen met een naam toegewezen.
var medium = prompt('Hoeveel medium pizza\'s wilt u?');// de prompt functie zorgt ervoor dat het mogelijk is om aan de gebruiker informatie te vragen. De gebruiker kan dan informatie geven.
var large = prompt('Hoeveel large pizza\'s wilt u?');// door de gemaakte variabele te verbinden met de prompt functie kan men een stuk informatie invoeren vanuit de webpagina. Het stukje informatie dat ingevoerd is door de gebruiker, wordt dan toegewezen aan de specifieke variabele.
// small 7.99 Medium 10.49 Large 12.49

const SMALL = 7.99; // een small pizza kost 7.99.
const MEDIUM = 10.49; // een medium pizza kost 10.49.
const LARGE = 12.49; // een large pizza kost 12.49.

var kostenSmall = Number((small*SMALL).toFixed(2)); // de .toFixed() functie is gebruikt om het antwoord in 2 decimalen weer te geven.
var kostenMedium = Number((medium*MEDIUM).toFixed(2)); // de Number() functie is gebruikt om er voor te zorgen dat de berekende waarde als een getalwaarde wordt gezien en niet als een string.
var kostenLarge = Number((large*LARGE).toFixed(2));
var totaal = (kostenSmall + kostenMedium + kostenLarge).toFixed(2);

document.write('U heeft besteld: <ul><li>' + small + ' pizza\'s' + ' x 7.99 = ' + kostenSmall + ' euro.</li>');
document.write('<li>' + medium + ' pizza\'s' + ' x 10.49 = ' + kostenMedium + ' euro. </li>'); 
document.write('<li>' + large + ' pizza\'s' + ' x 12.49 = ' + kostenLarge + ' euro. </li></ul>');
document.write('<hr /><br />' + 'Totaal bedrag = ' + totaal + ' euro.');

//Voor de overzichtelijkheid van de code is er gebruik gemaakt van meerdere document.write statements.