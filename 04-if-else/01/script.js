// if petlja će odvrtiti kod koji se nalazi u bloku, ovisno o true ili false

if (true) {
    console.log("Funkcionira jer sam true");
}

if (false) {
    console.log("Ne funkcionira jer sam false");
}

// Primjer iz prakse

const godina = 19;
const punoljetan = godina >=18;

if (punoljetan) {
    console.log("Punoljetan si, možeš glasat.");
}

// if-else petlja će definirati što će se dogoditi ako if tvrdnja istinita, a else blok ako nije istinita

if (godina <= 18) {
    console.log("Rezultat provjere je false i ovo se neće izvrtiti");
} else {
    console.log("Ovo će se ispisati jer je ovo sada rezultat if-else petlje");
}
