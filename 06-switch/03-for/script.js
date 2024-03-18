console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++) {
    console.log(`gol ${ponavljanje}`);
}

const lista = ["stol", "stolica", "stolnjak", "vaza"];

for (let i = 0; i < lista.length; i++) {
    console.log(lista [i]);
}

// lista / niz / array - objetni tip podataka

const prijatelji1 = "Luka";
const prijatelji2 = "Ivan";
const prijatelji3 = "Hrvoje";

const prijatelji = ["Luka", "Ivan", "Hrvoje"];

console.log(prijatelji);

console.log(prijatelji[0]);
console.log(prijatelji.length);
console.log(prijatelji[prijatelji.length - 1]);

prijatelji[2] = "Stjepan";
console.log(prijatelji);

// Vrijednost const varijable se ne može mijenjati primitivnim vrijednostima, a lista nije primitivna vrijednost, stoga možemo s obzirom da se zapisuje u drugu vrste memorije mijenjati njezine vrijednosti.

// jednostvane metode listi

prijatelji.unshift ("Barbara"); // unshift metodom dodajemo novog člana na početak liste
console.log(prijatelji);

prijatelji.push ("Maja"); // push - dodaje na kraj liste
prijatelji.shift(); //shift - miče prvog člana
prijatelji.pop(); //pop - miče zadnjeg člana
prijatelji.reverse(); // reverse - mijenja tijek liste

//jednostavne metode na brojevnim listama

const godine = new Array(24, 28, 32, 36, 42, 58);

let x;

x = godine.includes(28); // provjera da li u listi imamo određenu vrijednost
x = godine.indexOf (28); // provjera gdje se u listi nalazi tražena vrijednost
x = godine.indexOf (26); // ako stavimo u provjeru vrijednost koja se ne nalazi u listi dobit ćemo -1
x = godine.slice(1); // kada u slice metodi definiramo jednim brojem metodu, onda definiramo koliko članova s početka liste mičemo i spremamo novu listu bez tih članova
x = godine.slice (1, 5); // u slice metodom češće iz postojeće liste definiramo koje članove liste (od / do) želimo izvući i spremiti u novu listu.

x = godine.splice (4, 2); // splice metodom razbijam postojeću listu na dvije liste na način da kao prvi parametar definiram od kojeg člana liste krećem, a drugi parametar definira koliko članova liste uzimam i spremam u novu listu. Članovi automatski prestaju biti članovi orginalne liste.

console.log(godine, x);



