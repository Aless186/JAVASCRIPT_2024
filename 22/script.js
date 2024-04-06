"use strict";
/* window objekt i sve metode koje možemo primjeniti na window objwktu */
console.log(window);

/* naš HTML dokument i prikaz njega u konzoli. Možemo ga napisati bez prefiksa window jer jw window top lvl objekt s podobjektima */
console.log(document);

/* sa innerHTML metodom možemo dohvatiti sadržaj unutar našeg document objekta koji dolazi iz DOM-a, ovdje dohvaćamo sadržaj kod bodya */
console.log(document.body.innerHTML);

/* sa innerText metodom možemo dohvatiti sadržaj unutar našeg bodya */
console.log(document.body.innerText);

/* ova priča nije samo read only, možemo mijenjati stvari na ovaj način, npr. izmjeniti sadžaj bodya */
/* document.body.innerHTML = "<h1>Hello World</h1>";

document.getElementById("header").innerHTML = "<h1>Hello World</h1>";
 */


