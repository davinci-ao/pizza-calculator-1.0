//Marco Spaans
//opdracht: pizza calculator 1.0
const SMALL = 2.43;
const MEDIUM = 3.23;
const LARGE = 4.55;

var pizza_s = prompt("Hoeveel kleine pizza's wilt u?"); //vraag naar hoeveelheid small pizza's
var pizza_m = prompt("Hoeveel kleine pizza's wilt u?"); //vraag naar hoeveelheid medium pizza's
var pizza_l = prompt("Hoeveel kleine pizza's wilt u?"); //vraag naar hoeveelheid large pizza's

var cost_s = pizza_s * SMALL; //bereken totaal small pizza's
var cost_m = pizza_m * MEDIUM; //bereken totaal medium pizza's
var cost_l = pizza_l * LARGE; //bereken totaal large pizza's
var cost_all = cost_s + cost_m + cost_l; //bereken totaal prijs van alle pizza's

document.write("<p><ins>bestelling</ins></p>");
document.write("<p><b>" + pizza_s + "</b> small pizza's</p> ");
document.write("<p><b>" + pizza_m + "</b> medium pizza's</p> ");
document.write("<p><b>" + pizza_l + "</b> large pizza's</p> ");
document.write("<p><ins>totaal</ins></p>");
document.write("<p><b>€" + cost_all + "'-</b></p>");

console.log(cost_s);
console.log(cost_m);
console.log(cost_l);
console.log(cost_all);
