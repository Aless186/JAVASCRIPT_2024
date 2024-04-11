/* U našem browseru iamo lokalno i sesijsko spremanje podataka. Podaci se spremaju po principu ključ-vrijednost par i zapisani su kao string.
Razlika je u tome da sesijsko spremanje traje sve dok ne zatvorimo stranicu, dok je lokalno zapisano u browseru i neće nestati nakon što se
stranica zatvori. Ovo je naravno individualno i bit će zapisano samo u browseru ko klijenta. Ono što je još bitno je da s obzirom da metode
za spremanje podataka ne mogu spremati objekte, moramo ih prvo stringify metodom pretvoriti (objekte) u stringove i onda tek možemo spremiti
u localStorage i kada dohvaćamo iz localStoragea moramo pretvoriti stringove u objekt parse metodom. */

/* localStorage.setItem("id", "vrijednost koju spremamo"); // sprema vrijednost s ključem
localStorage.getItem("id"); // dohvaća vrijednost zapisanu na traženom (upisanom ) ključu
localStorage.removeItem("id"); // briše ključ i vrijednost na traženom ključi
localStorage.clear(); // clear metoda briše sve zapisano u localStorage */

"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// Funkcija za povlačenje zadatka iz lokalnog spremišta

const prikaziZadatkeLS = () => {
  const zadaciSpremiste = dohvatiLocalStorage ();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
};


// Funkcija za kreiranje novog zadatka
const dodajZadatak = (e) => {
  e.preventDefault();

  const noviZadatak = zadatakInput.value.trim();

  if(noviZadatak === "") {
    alert("Molimo Vas unesite zadatak");
    return;
  } else {
    kreirajZadatak(noviZadatak);

    provjeriListu();

    // pozivanje funkcija za dodavanje novog zadatka u localStorage
    dodajLocalStorage(noviZadatak);

    zadatakInput.value = "";
  }
  
  

  
  // pozivanje funkcije za dodavanje novog zadatka u localStorage
  dodajLocalStorage(zadatakInput.value);

  zadatakInput.value = "";
}; 

//Funkcija za kreiranje zadatka

const kreirajZadatak = () => {

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);


};

/* // Funkcija za dodavanje zadataka i localStorage. Prvvo moramo provjeriti imamo li već zadatke u localStorageu. Ako nemamo (provjera sa if petljom) onda ćemo napraviti našu varijablu kao praznu listu. S druge strane ako imamo nešto u spremištu, onda ćemo prvo spremiti ono šta se nalazi unutra u našu varijablu, ali s obzirom da u localStorage imamo stringove(JSON format) moramo/možemo ih odmag parse metodom pretvoriti u objekt. */

const dodajLocalStorage = (zadatakInput) => {
    let zadaciSpremiste;
  
    if (localStorage.getItem("kljuc") === null) {
      zadaciSpremiste = [];
    } else {
      zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
    };
 // push metodom ćemo spremiti novi zadatak u našu listu zadataka
 zadaciSpremiste.push(zadatakInput);

 // Kada dodamo novi zadatak, onda ga trebamo spremiti pomoću naše liste u localStorage kao string, stoga koristimo stringify metodu.
 localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
}; 
// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
    if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
      e.target.parentElement.parentElement.remove();
    }
};
  
// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
    listaZadataka.innerHTML = "";
    provjeriListu();
};

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) => {
    const zadaci = listaZadataka.querySelectorAll("li");
    const tekst = e.target.value.toLowerCase();

    zadaci.forEach((zadatak) => {
        const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
        if (imeZadatka.indexOf(tekst) != -1) {
            zadatak.style.display = "flex";
        } else {
            zadatak.style.display = "none";
        }
    });
}

// funkcija za provjeru ima li elemenata u listi 
const provjeriListu = () => {
    const zadaci = listaZadataka.querySelectorAll("li");
    if (zadaci.length === 0) {
        filter.style.display = "none";
        brisiSve.style.display = "none";
    } else {
        filter.style.display = "block";
        brisiSve.style.display = "block";
    }
};
  
// Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke); 
filter.addEventListener("input", filtrirajZadatke);
/* 
Napravit ćemo event listener koji će se okinuti u trenutku kada se dokument učitava i za event ćemo postaviti trenutak kad se učita DOM
i definirat ćemo funkciju koja će ispisati podatke iz lokalnog spremišta. S obzirom da se to prvo u biti bude odradilo, tu funkciju ćemo
postaviti kao prvu funkciju koja će se pojaviti u našoj skripti. Morat ćemo također prebaciti kreiranje samog elementa iz funkcije
dodajZadatak u ovu novu funkciju kako bi spriječili duplo kreiranje zadatka na displayu, jer u biti sa ovom funkcijom dohvaćamo zadatke
iz lokalnog spremišta i kreiramo ih sa podacima zapisanima u lokalnom spremištu.
*/

document.addEventListener("DOMContentLoaded", prikaziZadatkeLS); 

provjeriListu();
