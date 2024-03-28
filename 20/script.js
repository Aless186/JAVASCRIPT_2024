"use strict";

// MAP metoda

const listaBrojeva = [1, 4, 8, 17];

// prođi listaBrojeva, svakog pomnoži sa 2 i spremi u novu listu rezultata

// const rezultat = listaBrojeva.map((broj) => broj*2);
// console.log(rezultat);

// kako bi dodali string na naše rezultate koristeći coersion

const mapa = listaBrojeva.map((broj) => "Broj " + broj);
console.log(mapa);

// ajde umnožak napravite s forEach metodom

const brojevi2 = [];
listaBrojeva.forEach((broj) => {
    brojevi2.push(broj * 2);
}); 

console.log(brojevi2);

const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
]; 

const marka = auti.map ((marke) => marke.ime);

console.log(marka);

// Kreirajte koristeći map metodu objekt koji će imati samo marku i kategoriju

const auti2 = auti.map((auto)=> {
    return {marka: auto.ime, kategorija: auto.kategorija};
});

console.log(auti2);

//Npr. trebate napraviti više od jedne metode na određenoj listi kako bi dobili željeni rezultat

const rezultat = listaBrojeva.map((broj) => Math.sqrt(broj)).map((broj) => broj * 2);

const rezultat2 = listaBrojeva
    .map(function(broj){
        return Math.sqrt(broj);
    })
    .map(function(broj) {
        return broj*2;
    });
console.log(rezultat2);



/* 
REDUCE metoda

izvršava tzv. "reducer" callback funkciju kojoj je svrha da sve članove liste svede i zapiše u jednu vrijednost. Npr. zamislite primjer sa košaricom proizvoda, svaki proizvod ima svoju vrijednost, a nas recimo zanima suma svih tih stavki (a ne znamo koliko ih ima).
*/

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pocetnaVrijednost = 0;

//reduce metoda

const suma = lista.reduce(function(prijasnjaVrijednost, trenutnaVrijednost){
    return prijasnjaVrijednost + trenutnaVrijednost;
},pocetnaVrijednost);

console.log(suma);

const suma2 = lista.reduce((prije, sad) => prije + sad, 0);
console.log(suma2);

// for petlja - isto to

const suma3 = () => {
    let prije = 0;
    for (const broj of lista) {
        prije += broj;
    }
    return prije;
};

console.log(suma3());


// kosarica

const kosarica = [
    { id: 1, proizvod: "kruh", cijena: 1.5 },
    { id: 2, pr0izvod: "mlijeko", cijena: 2 },
    { id: 3, proizvod: "salama", cijena: 5 },
    { id: 4, proizvod: "sapun", cijena: 4 },
    { id: 5, proizvod: "čips", cijena: 3 },
];

const suma4 = kosarica.reduce((zbroj, item) => {
    return (zbroj += item.cijena);
}, 0);

console.log(suma4);



