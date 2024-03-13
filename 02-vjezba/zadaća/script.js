// 1. ZADATAK

// 3 definirane varijable

const zemlja = "Hrvatska";
const kontinent = "Europi";
const populacija = 3.8e6;

// Zadatak je prepoloviti populaciju na pola, nakon toga uvećati za 1. 

let polaPopulacije = ((populacija/2) + 1);


// Nakon toga definirajte novu varijablu koja će predstavljati populaciju neke druge zemlje (po vašem odabiru),

const populacijaVB = 67.33e6;


// nakon toga usporedite da li je populacija Hrvatske veća od te zemlje koju ste definirali.

console.log = (populacija > populacijaVB);


// Za kraj, koristeći string i template literal način i varijable, spremite u varijable rečenicu : „Hrvatska ima 3800000 stanovnika i nalazi se u Europi“. 

const string = zemlja + " ima " + populacija + " stanovnika i nalazi se u " + kontinent + ".";

const template = `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}.`;

// 2. ZADATAK

// Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih i provjeri boolean vrijednost true/false da li je Markov ITM veći od Josipovog ITM-a.

// računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)

const markoTT = 78;
const markoTV = 1.69;

const josipTT = 92;
const josipTV = 1.95;

const MarkoITM = Math.round ((markoTT / markoTV**2));

const JosipITM = Math.round ((josipTT / josipTV**2));

console.log = (MarkoITM > JosipITM);

