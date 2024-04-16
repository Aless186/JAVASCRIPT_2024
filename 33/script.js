"use strict";

/* 
Promise (obećanje) je objekt koji će rezultirati jednom vrijednosti koja može biti ili rješena ili nerješena, Sastoji se od egzekutor funkcije koja mora napraviti provjeru resolve (uspješno rješena) ili reject (neuspješno rješeno/odbačeno). Nakon toga sa .then metodom možemo definirati što će se dogoditi u oba slučaja.
*/

const obecanje = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async zadatak je dovršen");
        resolve();
    }, 1000)
});

obecanje.then (() => {
    console.log("obećanje je dovršeno....");
});

console.log("Pozz iz globalnog sinkronog koda");

// Promise možemo pisati i kao anonimne funkcije
new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve({
            ime: "Alessandro", prezime: "Ninković"
        });
    }, 1000);
}).then((osoba) => console.log(`${osoba.ime} ${osoba.prezime} je tu...`));

// Idemo još vidjet kako riještit reject situaciju

const dohvatiUsera= new Promise ((resolve, reject) => {
    setTimeout(() => {
        let greska = false;

        if(!greska) {
            resolve({ime:"Alessandro", prezime: "Ninković"});
        } else {
            reject("Nešto je pošlo po krivu");
        };
    }, 1000);
});

/* 
Kada definiramo što će se dogoditi sa resolve dijelom egzekutor funkcije, onda sa .then metodom na tom objektu možemo definiratu što će se događati nakon toga. A sa .catch metodom ćemo vidjeti što će se događati ako se dogodi reject. Finally će se odvrititi bez obzira da li je objekt završio sa resolve ili reject...
*/

dohvatiUsera
    .then((osoba) => console.log(`${osoba.ime} ${osoba.prezime} je tu ....`))
    .catch((error) => console.log(error))
    .finally(()=>console.log("Finally ne zanima da li je resolve ili reject, on se bude izvršio"));

// PRAKTIČAN PRIMJER - primjer sa callbackom kako smo već radili

// const imena = [
//     {ime: "Marija", prezime: "Marić"},
//     {ime: "Iva", prezime: "Ivić"},
// ];

// const kreirajIme = (ime, cb) => {
//     setTimeout(() => {
//         imena.push(ime);
//         cb();
//     }, 1000);
// };

// const getImena = () => {
//     setTimeout(() => {
//         imena.forEach((osoba) => {
//             const div = document.createElement("div");
//             div.innerHTML = `<p> ${osoba.ime} ${osoba.prezime}</p>`;
//             document.getElementById("imena").appendChild(div); 
//         });
//     }, 1000);
// };

// kreirajIme({ime: "Ana", prezime: "Anić"}, getImena);

// Idemo isto ovo složiti pomoću obećanja

const imena = [
    {ime: "Marija", prezime: "Marić"},
    {ime: "Iva", prezime: "Ivić"},
];

const kreirajIme = (ime) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let greska = false;
    
            if(!greska) {
                imena.push(ime);
                resolve();
            } else {
                reject("Nešto je pošlo po krivu");
            };
        }, 1000);
    });
};

const getImena = () => {
    setTimeout(() => {
        imena.forEach((osoba) => {
            const div = document.createElement("div");
            div.innerHTML = `<p> ${osoba.ime} ${osoba.prezime}</p>`;
            document.getElementById("imena").appendChild(div); 
        });
    }, 1000);
};

const pokaziGresku = (error) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong> ${error}</strong>`;
    document.getElementById("imena").appendChild(p);
};

kreirajIme({ime: "Ana", prezime: "Anić"}).then(getImena).catch(pokaziGresku);