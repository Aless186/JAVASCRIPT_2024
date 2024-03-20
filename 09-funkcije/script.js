"use strict";

// na ovaj način deklariramo funkciju i njen kod koji se izvršava kada se funkcija pokrene
function ispis() {
    console.log("Zovem se Alessandro");
};

// na ovaj način inicijaliziramo funkciju (calling, running, executing)
ispis();
ispis();
ispis();
ispis();
ispis();

// Kod deklaracije funkcije, moguće je napraviti inicijaliziranje funkcije u redovima prije funkcijske logike, drugim riječima, možemo ju hoistat iznad funkcije i sve će raditi.
const test = nutriBullet (7, 2);

function nutriBullet (jabuke, kruške) {
    console.log(jabuke, kruške);
    const sok = `Sok od ${jabuke} jabuka i ${kruške} krušaka`;
    return sok;
    console.log("OVO SE NEĆE ISPISATI JER DOLAZI NAKON RETURN");
};

const sokOdJabuke = nutriBullet(3, 2);
const sokOdKruske = nutriBullet(2, 4);

console.log(sokOdJabuke, sokOdKruske, test);

// arrow funkcije

function rodjenje (godRodjenja) {
    return 2024 - godRodjenja;
};

console.log(rodjenje(1998));

// ista funkcija napisana ARROW funkcijskom sintaksom

const arrowRodjenje = (godRodjenja) => 2024 - godRodjenja;
const arrowFunkcija = (godRodjenja) => {
    const izracun = 2024 - godRodjenja;
    return izracun;
};
console.log(arrowRodjenje(1998));
console.log(arrowFunkcija(2006));

// primjer arrow funkcije

const godDoMirovine = (godRodjenja, imePrezime) => {
    const godine = 2024 - godRodjenja;
    const mirovina = 65 - godine;
    if (mirovina > 0) {
       return `${imePrezime} će se umiroviti za ${mirovina} godina/e.`;
    } else {
        return  `${imePrezime} je već u mirovini.`;
    }
};

console.log(godDoMirovine(1998, "Alessandro Ninković"));
console.log(godDoMirovine (1993, "Matea Hećimović"));


