const ime = "Alessandro"
const zanimanje = "medicinski tehničar"
const godRođenja = "1998"
const trenutnaGod = "2024"

// String literal

const osoba = "Ja sam " + ime + ", " + (trenutnaGod - godRođenja) + "-godišnji "+ zanimanje + ".";

console.log (osoba)

// Template literal

const osobaNovo = `Ja sam ${ime}, ${trenutnaGod-godRođenja}-godišnji ${zanimanje}.`;


const zemlja = "Hrvatska"
const kontinent = "Europa"
const populacija = 3.8e6

const rečenica = `${zemlja} ima ${populacija} i nalazi se u ${kontinent}.`;

console.log (rečenica);

console.log (zemlja.length)

// matematičke metode s brojevima i varijablama

let x;

// izračun korijena 

x = Math.sqrt(16);

// apsolutna vrijednost

x = Math.abs(-5);

// zaokruživanje decimalnog broja

x = Math.round(5.4);

// prisilno zaokruživanje na gore
x = Math.ceil (5.1);

// prisilno zaokruživanje na dolje

x = Math.floor (5.9);

// uklanjanje decimalne vrijednosti

x = Math.trunc (4.4);


// min broj iz liste/niza

x = Math.min (2, 5, 6, 7, 1)

// max broj iz liste

x = Math.max (2, 5, 6, 7, 1)

// random broj

x = Math.random () * 10

console.log(x)

// Zadatak - kako dobiti random broj 

const randomBroj = Math.floor(Math.random ()*10 + 1);

console.log (randomBroj)

// Zadatak - definirajte 2 varijable (a, b). neka a bude random broj između 1 i 100, a var b između 1 i 50. 
// Napravi var za sumu i razliku ta dva broja i to zapiši u tem. lit. rezultat računskih operacija u te varijable

const a = Math.floor(Math.random ()*100 + 1);
const b = Math.floor(Math.random ()*50 + 1);

const c = a + b;
const d = a-b;

const sum = `${a} + ${b} = ${c}`;
const razlika = `${a} - ${b} = ${d}`;

console.log (sum, razlika)

