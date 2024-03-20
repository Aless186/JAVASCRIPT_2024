// 2 + 2 je npr. expression jer će proizvesti novu vrijednost
// 2000 je također expression jer je to određena vrijednost
// if else i switch statement (deklaracije)
//deklaracije možete gledati kao nekakve kompletne rečenice, expressioni bi bili riječi koje čine tu rečenicu
// Statementi (deklaracije) su u biti sekvence akcija

const godine = 23;

if (godine >= 18) {
    console.log("Punoljetan si");
} else {
    console.log("Maloljetan si");
}

// Trojni operator (ternary operator) možete gledati kao drugačiji način pisanja if else deklaracije.

godine >= 18 ? console.log("Može") : console.log("Ne može");

const Punoljetan = godine >= 18 ? "Može" : "Ne može";
console.log(Punoljetan);

console.log(`${godine >= 18 ? "može" : "ne može"}`);
