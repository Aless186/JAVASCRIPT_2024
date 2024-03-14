// konverzija vrste podataka - type conversion

const inputGodina = "2000";

// 1. način - promjena string u number - parseInt funkcija
const godina = parseInt(inputGodina);

console.log (godina + 18);

// 2. način -  pomoću Numbera

const godina2 = Number(inputGodina);

console.log (godina2 + 18);

// 3. način - pomoću + operatora

const godina3 = +inputGodina;

console.log(godina3 + 18);

// konverzija number u string

const stringGodina = String (godina);

console.log(typeof stringGodina);

// primjer dec. broj

const decBroj = "10.5";

const stringDecBroj = parseInt (decBroj);

const stringDecBroj2 = parseFloat (decBroj);

console.log(stringDecBroj2);

console.log(stringDecBroj);

// ----------------------------------------------------------------

// prisilna/automatska konverzija - type coercision

console.log("Ja imam " + 1 + " auto.");

// oduzimanje u ovoj varijanti JS prepoznaje i pretvara sve u brojeve
console.log("23" - "10" - 3);

// prvo se događa konkatenacija u string "2310", tek nakon toga slijedi oduzimanje i pretvorba u broj
console.log("23" + "10" - 3);

// true iznosi 1, a false 0
console.log(5 + true);
console.log(5 + false);

// ne znamo koji je to broj
console.log(5 + undefined);

// množenje i dijeljenje pretvara u broj
console.log("24" * "2");

