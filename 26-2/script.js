"use strict";

const forma = document.getElementById ("zadatak-forma");

const onSubmit = (e) => {
    e.preventDefault();
    const zadatak = document.getElementById("zadatak-input");
    if (zadatak.value === "") {
        alert ("NIste unijeli input");
        return;
    }
    console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit);

// EVENT BUBBLING - događa se kada postavimo više event listenera na "isto" mjesto u HTML - u

const gumb = document.querySelector ("form button");
const div = document.querySelector ("form-div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", (e) => {
    alert ("Gumb je stisnut");
    e.stopPropagation(); // ovo dodajemo kako bi spriječili event bubbling
});

// div.addEventListener ("click", () => {
//     alert ("Div je stisnut je stisnut");
// });

form.addEventListener ("click", () => {
    alert ("Form je stisnut");
});

/*  Brisanje elemenata iz HTML DOM - a */

const lista = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
    if(e.target.className === "pojedinacni-zadatak") {
        e.target.remove();
    }
});

lista.addEventListener("mouseover", (e) => {
    if (e.target.className === "pojedinacni-zadatak") {
        e.target.style.color = "#000000";
    }
});



