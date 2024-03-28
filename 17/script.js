"use strict";

// Ako želimo, možemo definirati vrijednost objekta pomoću varijabli na globalnom scopeu

const ime = "Darko";
const prezime = "Horvat";
const godine = 30;

// Ako nam je ime svojstva objekta jednako varijabli pomoću koje dodjeljujemo vrijednost, možemo to sksraćeno ovako zapisati:
const osoba = {
    ime : ime,
    prezime : prezime,
    godine : godine,
};

console.log(osoba);

/* DEKONSTRUIRANJE OBJEKTA/LISTE */

// 1. dekonstruiranje liste

const brojevi = [1, 2, 3, 4, 5, 6];

const [broj1, broj2, ...ostatakListe] = brojevi;

console.log(broj1, broj2, ostatakListe);

const [num1, , , num4] = brojevi;

console.log(num1, num4);

// 2. dekonstruiranje objekta

const todo = {
    id: 1,
    zadatak: "Kupi kruh",
    adresa: {
        ulica: "Trg trgovine",
        grad: "Sisak",
    },
};

/* const id = todo.id;
console.log(id); */

const {id, zadatak, adresa} = todo;

const {
    id: todoID,
    adresa: {ulica},
} = todo

const grad = todo.adresa.grad; // jednostavniji način za ući u objekt

console.log(ulica, todoID, grad);




