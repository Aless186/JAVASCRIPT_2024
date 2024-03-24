"use script";

const osoba = ["Darko", "Horvat", 30, "poštar", ["Marko", "Maja", "Josipa"]];

console.log(osoba);

/* 
U situaciji kada bi htjeli ključeve za dohvaćanje podataka (što ne možemo u listama, jer tamo ih hvatamo po indexu, tj. broju na kojem se nalaze u listi), možemo koristiti objekte. Za razliku od listi, njih definiramo vitičastom zagradom i njezini članovi imaju svoj ključ. Znači mi definiramo ključ pod kojim se sprema vrijednost i pomoću tog ljuča možemo i dohvaćati vrijednost iz objekta. Znači stvari iz liste dohvaćamo indexom, tj. broje, a kod objekta dohvaćamo ključem koji smo dodijelili određenoj vrijednosti.
 */

const objekt = {
    firstName: "Darko",
    lastName: "Horvat",
    godine: 30,
    zanimanje: "poštar",
    prijatelji: ["Marko", "Maja", "Josipa"],
};

console.log(objekt);

/* Dohvaćanje određene vrijednosti iz objekta pomoću ključa se može odraditi na 2 načina  */

//1 način je tzv. "dot" notacija
console.log(objekt.prijatelji[1]);

//2 način je tzv. "bracket" notacija
console.log(objekt["godine"]);

//demonstracija kada bi koristili "bracket " notaciju

console.log(objekt.firstName);

console.log(objekt ["firstName"]);

// konkretno kada koristi bracket notaciju

const spojnica = "Name";

console.log(objekt["first" + spojnica]);
console.log(objekt["last" + spojnica]);

// const upitnik = prompt ("Što Vas zanima o osobi? Izaberi firstName, lastName, godine, zanimanje, prijatelji");

// dot notacijom ovo ne možemo ispisati, tj. ne znamo što je ovo, jer nearavno upitnik nije član objekta
console.log(objekt.upitnik);

// bracket notacijom ovo možemo dohvatiti
// console.log(objekt[upitnik]);

// par korisnih o listama

const prijatelji = ["Marko", "Maja", "Josipa"];

/* Postoje 2 načina da provjerimo na kojem mjestu se nalazi određeni član liste i da li je uopće član liste */

// indexOf metoda liste je način provjere da li je određena vrijednost član liste, ako je dat će nam lokaciju u listi, ako nije dat će -1 
console.log(prijatelji.indexOf("Marko"));

//includes je boolean provjera
console.log(prijatelji.includes("Josipa"));

if (prijatelji.includes ("Josipa")) {
    console.log("Imam prijateljicu Josipu");
};

/* NAČINI SPAJANJA LISTI */

let x;
const voce = ["jabuke", "kruske", "tresnje"];
const bobice = ["kupine", "maline", "borovnice"];

 /* 1. način je da nestamo (postavimo listu unutar liste) */

// voce.push (bobice);
// console.log(voce);

/* 2. način je konkateniranje listi, dugo korišteno */

x = voce.concat (bobice);
console.log(x);

/* 3. način - Spread operator koji služi za expandiranje listi/objekata u jednu varijablu. U biti ćemo ga koristiti za spajanje objekata više nego listi.. */

const brojevi = [1, 2, 3];
const noviBrojevi = [...brojevi, 4];
console.log(noviBrojevi);

const brojevi2 = [4, 5, 6];
const noviBrojevi2 = [...brojevi, ...brojevi2];
console.log(noviBrojevi2);

// prije se koristila flat metoda kako bi se eliminirali nepotrebne podliste
const lista = [voce, bobice];
const slozenaLista = lista.flat();
console.log(slozenaLista);
