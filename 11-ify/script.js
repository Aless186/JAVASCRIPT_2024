/* Napisat ćemo IIFE - Immediately Invoked Function Expression - ovo će biti funkcija koja će se izvršiti odmah nakon što se definira.
Sintaksa IIFE funkcije je takva da ju postavljamo unutar okruglih zagrada i unutar prve pišemo funkcijum, a druga služi za pokretanje */

"use strict";

/* const user = "Alessandro";
console.log(user); */

(function () {
    const user = "Alessandro";
    console.log(user);
})();

(function () {
    const user = "Maja";
    console.log(user);
    const ifi = () => console.log("Ovo dolazi iz IFIE funkcije");
    ifi();
})();

(
    function(ime, godine) {
        console.log(`Pozz, ja sam ${ime} i imam ${godine} godine.`);
    }
)("Matea", 30)

