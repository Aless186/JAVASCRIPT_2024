/* Zadatak 1

Recimo da imamo 7900 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (3840 lovaca),
koliko iz Istre (brojLovaca2 = 500 lovaca) i koliko iz Dalmacije (brojLovaca3 = 1440 lovaca) */

const lovciHr = 7900;

const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

function postotakLovaca () {
    
}


/* Zadatak 2

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu:
`${zemlja} ima ${populacija} lovaca što je oko ${postotak}% svijeta` */
function postotakSvijeta(populacija) {
    return (populacija/10000) * 100;
};

function opisZemlje (zemlja, populacija) {
    const postotak = postotakSvijeta (populacija);
    const opis = `${zemlja} ima ${populacija} igrača tenisa što je oko ${postotak}% svijeta`;
    return (opis);
};

console.log(opisZemlje ("Hrvatska", 10));
console.log(opisZemlje ("Kina", 3441));
console.log(opisZemlje ("USA", 332));


/* Zadatak 3

Imamo 2 tima, koji su igrali međusobno 6 puta i svaki ima po 3 pobjede.
Želimo izračunati prosjek golova u svih 6 utakmica za svaku ekipu koristeći arrow funkciju.
Tim pobjeđuje jedino ako ima u prosjeku više golova od drugog tima.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka.
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa
sa ispisom prosjeka golova obje ekipe npr. Real je u prosjeku zabio 4 gola, a Barcelona 1.
Možete iskoristi if-else petlju kako bi složili ispis. */

/* primjer:
Barca : 2, 3, 3, 3, 4, 1
Real : 1, 4, 1, 5, 0, 5 */


const prosjek = (a, b, c, d, e, f) => (a + b + c + d + e +f) / 6;

const prosjekBarca = prosjek (2, 3, 3, 3, 4, 1);
const prosjekReal = prosjek (1, 4, 1, 5, 1, 5);

const zadatak3 = (prosjekBarca, prosjekReal) => {
    if (prosjekBarca > prosjekReal) {
        console.log(`Barca je pobjedila zato što ima prosjek golova od ${prosjekBarca} : ${prosjekReal}`);
    } else if (prosjekReal > prosjekBarca) {
        console.log(`Real je pobjedilo zato što ima prosjek golova od ${prosjekReal} : ${prosjekBarca}`);
    } else {
        console.log("Rezultat je izjednačen");
    }
};

zadatak3 (prosjekBarca, prosjekReal);
