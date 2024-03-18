// primjer do-while, while-do

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

let brojac = 0;

do {
    brojac++;
    console.log(brojac);
} while (brojac < 10);

// napišite while petlju koja će ispisivati sve brojeve od 3 do 20
// korak dalje, ispisujemo brojeve koji su djeljivi s 9 i one koji nisu djeljivi s 9
let broj = 3;

while (broj <= 20) {
    if (broj % 9 === 0) {
    console.log(broj);
    } else if (broj % 9 != 0) {
        console.log(broj);
    }
    broj++;
}