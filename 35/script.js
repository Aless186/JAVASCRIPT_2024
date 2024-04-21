"use strict";

/* 
REcimo da želimo napraviti više asinkronih poziva jer imamo podatke koji dolze iz različitih izvora i koji se moraju čitati u ispravnom redoslijedu. To bi mogli napraviti koristeći callback funkcije, međutim velika količina takvih poziva rezultira callback hellom iliti ovako ugnježđenim pozivima funkcija koji se onda budu zahvaljujući tom ugnježđenju izvodili u redoslijedu kako bi mi htjeli.
*/

/* function getData(putanja, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(this.response));
        }
    };

    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random()*2000) + 100);
};



getData("./filmovi.json", (filmovi) => {
    console.log(filmovi);
    getData("./glumci.json", (glumci) => {
        console.log(glumci);
        getData("./redatelji.json", (redatelji) => {
            console.log(redatelji);
        });
    });
});
 */

/* _______________________________________________________ */

/* S obzirom da je callback hell bio problem dugo vremena, uvođenje Promise rješenja je malo poboljšalo priču... */

function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject("Dogodila se greška...");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 100);
  });
}

getData("./filmovi.json")
  .then((filmovi) => {
    console.log(filmovi);
    return getData("./glumci.json");
  })
  .then((glumci) => {
    console.log(glumci);
    return getData("./redatelji.json");
  })
  .then((redatelji) => {
    console.log(redatelji);
  })
  .catch((greska) => {
    console.log(greska);
  });
