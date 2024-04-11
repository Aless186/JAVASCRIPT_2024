"use strict";

const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
    if (e.key === "Enter") {
        alert ("Stisnuo si Enter");
    }
};

inputKey.addEventListener("keydown", keyDown);


const onKeyPress = (e) => {
    console.log("keypress");
    if (e.repeat) {
        alert (`Pusti tipku ${e.key}`);
    }
};

const keyUp = () => {
    console.log("keyup");
};

inputKey.addEventListener ("keypress", onKeyPress); // bilo što da stisnete clg-at će se
inputKey.addEventListener("keyup", keyUp); // clg će se okinut tek kada stisnemo i maknemo prst sa tipke
inputKey.addEventListener("keydown", keyDown); // čim stisnete enter, okinut će se alert

// input events 

const inputForma = document.getElementById("filter");
const naslov = document.querySelector ("h2");

const onInput = (e) => {
    console.log(e.target.value); // target.value nam daje vrijednost koja je trenutno upisana u input polje
    naslov.textContent = e.target.value; // s ovim mijenjamo sadržaj h2 sa onim što je upisano u input polje
};

const onFocus = () => {
    console.log("input je u fokusu");
};

const onBlur = () => {
    console.log("input nije u fokusu");
};

inputForma.addEventListener("input", onInput); // input će raditi isto što i keydown ali ga je bolje upotrijebiti kao input polje
inputForma.addEventListener("focus", onFocus); // provjerava da li smo kliknuli u input polje
inputForma.addEventListener("blur", onBlur); // provjerava da li smo kliknuli van input polja


