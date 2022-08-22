const candidatoA = "Will Smith";
const candidatoB = "Stephen king";
const candidatoC = "Robert Lawrence";

let conteoA = 0;
let conteoB = 0;
let conteoC = 0;

let ingresoVoto = prompt("¿Desea ingresar un voto? (si/no)");

while(ingresoVoto.toLowerCase() !== "no"){
    let nombre = prompt("Ingrese su nombre:");
    if(nombre !== ""){
        alert(`Bienvenido ${nombre}`);
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

alert(`Resultados:\n${candidatoA}: ${conteoA} votos\n${candidatoB}: ${conteoB} votos\n${candidatoC}: ${conteoC} votos`)
