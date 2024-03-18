const dan = prompt ("Koji je danas dan?");

switch (dan) {
    case "ponedjeljak": // ovaj case radi provjeru kao da sam upisao : dan === ponedjeljak
        console.log("Danas je prvi radni dan tjedna.");
        console.log("Danas smo 4 dana udaljeni od vikenda");
        break;
    case "utorak":
        console.log("danas je drugi dan tjedna");
        break;
    case "srijeda":
        console.log("sredina tjedna");
    case "četvrtak":
        console.log("mali petak");
        break; // obzirom da nakon casea srijede nije bilo breaka, ispisat će se i case četvrtak
    case "petak":
        console.log("PETAK JEE!!");
        break;
    case "subota":
    case "nedjelja":
        console.log("vikend je....");
        break;
    default:
        console.log("niste unesli dan u tjednu");
}

