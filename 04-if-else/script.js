// strict i loose provjere

const godine = 18;

// ovo će se ispisati jer stroga provjera (strict) će provjeriti vrijednost podataka i tipove podataka i ako se oboje slaže, onda će biti true...

if (godine===18) {
    console.log("Punoljetni ste");
}

// ovo se neće ispisati jer iako je vrijednost podataka ista, tipovi nisu isti (string nije jednak broju)

if ("18"===18) {
    console.log("Ovo neće ispisati ...");
}

//  Ovo će se ispisati jer je labava (loose) provjera koja će samo provjeriti da li su vrijednosti podataka iste, neće provjeriti tipove podataka...

if ("18" == 18) {
    console.log("Ovo će se ispisati");
}

// praktični primjer

// const broj = Number( prompt ("Koji ti je najdraži broj?") );

// if (broj === 1) {
//     console.log("Broj 1 je top");
// } else if (broj === 2) {
//     console.log("Broj 2 j2 top");
// }else {
//     console.log("1 je zakon broj, zašto njega niste upisali?");
// }

// -----------------------------------------------------------------

// i / ili operateri

const istina = true;
const laž = false;

// "I" operator se piše sa 2 znaka "&&" i rezultat jegove provjere će biti true samo ako su svi članovi provjere true

console.log(istina && laž && true);

// "ILI" operator se piše sa 2 znaka 


// not operator se definira znakom "!" i za potrebe provjere mijenja vrijednost u suprotnu od zadane

const punoljetan = false;

if (istina && !punoljetan) {
    console.log("Ovo je istinita tvrdnja...");
}

// Nullish coalescing operator - logički operator koji će ovratiti operand sa desne strane ako je s lijeve strane vrijednost operanda null ili undefined, inače će vratiti lijevog operanda (za razliku od truthy i falsy) koji će vratiti i 0 i prazan string.

let Nullish;

Nullish = 10 ?? 20;
Nullish = "lijeva" ?? "desna";
Nullish = "" ?? "desna";
Nullish = 0 ?? "desna";
Nullish = null ?? "desna";
Nullish = false ?? "desna";
Nullish = undefined ?? "desna";

console.log(Nullish);