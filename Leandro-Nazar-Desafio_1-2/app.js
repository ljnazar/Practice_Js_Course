const candidatoA = "Will Smith";
const candidatoB = "Stephen king";
const candidatoC = "Robert Lawrence";

let conteoA = 0;
let conteoB = 0;
let conteoC = 0;

let nombres = [];

let ingresoVoto = prompt("¿Desea ingresar un voto? (si/no)");

while(ingresoVoto.toLowerCase() !== "no"){
    let nombre = prompt("Ingrese su nombre:");
    if(nombre !== ""){
        alert(`Bienvenido ${nombre}`);
        nombres.push(nombre);
        let voto = prompt(`Ingrese su voto:\nA - ${candidatoA}\nB - ${candidatoB}\nC - ${candidatoC}`);
        switch(voto.toUpperCase()){
            case "A":
                alert("Usted voto por Will Smith");
                conteoA++;
                break;
            case "B":
                alert("Usted voto por Stephen king");
                conteoB++;
                break;
            case "C":
                alert("Usted voto por Robert Lawrence");
                conteoC++;
                break;
            default:
                alert("Opción no válida");
                break;
        }
        ingresoVoto = prompt("¿Desea ingresar otro voto? (si/no)");
    }
    else{
        alert("Nombre no ingresado")
    }
}

// Ejemplo de aplicación del for, tener en cuenta que sólo utilizando length ya tendría la cantidad de votantes
let cantVotantes = "";
for(i=1; i <= nombres.length; i++){
    cantVotantes = i;
}

alert(`Resultados:\n\n${candidatoA}: ${conteoA} votos\n${candidatoB}: ${conteoB} votos\n${candidatoC}: ${conteoC} votos\n\nCantidad de votantes: ${cantVotantes}`)
