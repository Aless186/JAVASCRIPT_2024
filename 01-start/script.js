// varijable možemo definirati s const, let i var

// const način definiranja varijable se mora prilikom deklaracije odmah i inicijalizirati i ne mže se mijenjati vrijednost.

const js = "JS je suuuuuper"

// let način definiranja varijable se može deklarirat, naknadno inicijalizirati i može se mijenjati vrijednost.

let js2;
js2 = "JS je super!"

var  varX= 5;
var varX = 6;

console.log (js);
console.log (js2, varX);


// Vrste vrijednosti varijabli - primitivni i objektni...

// brojevi

const dob = 20;

// tekst/string (tekstualne sekvencem uvijek se stavlja u navodnike)

const imePrezime = "Alessandro Ninković";

// Boolean može biti samo True ili False

const polaznik = true;

// Undefines npr. varijabla kojoj nismo dodijelili vrijednost

let brojPrisutnih;

// null - o tome kasnije

// Matematički operateri

const godineStarosti = 2024 - 1994;
console.log (godineStarosti);

let x = 10 +5;

//  x = x+10

x+= 10;
x-= 10;
x--;
x++;

// Usporedni operateri - mogu biti jedan od slijedeća 4 : >, <, <=, >= - rezultat je uvijel Boolean


// Spajanje vrijednosti

// operateri - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence 

const ime = "Alessandro";
const prezime = "Ninković";
console.log (ime + " " + prezime)

let y, z;
y = z = 25 - 10 - 5;

// zadatak 1 - definirajte 3 varijeble i dodijelite im vrijednosti

const nadimak = "Aless";
const godine = "25";
const birthday = true;

console.log (nadimak, godine, birthday)

