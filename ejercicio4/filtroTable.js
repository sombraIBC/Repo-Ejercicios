//VARIABLES GLOBALES
let inputs;
let filas;

//Capturamos el evento "DOMContentLoaded", se ejecutará la función cuando el HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    //Declaración de variables
    inputs = document.querySelectorAll('.buscador');
    filas = document.querySelectorAll('table tbody tr');

    //Capturamos los eventos de los inputs
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", filtrar, false);
    }
});





//FUNCIONES
//1. Función que filtra letra por letra
function filtrar() {
	let celdas, coincide;

    //Creamos un array con los valores de cada input
    let filtros = [];

    for (let i = 0; i < inputs.length; i++) {
        filtros.push(inputs[i].value.toLowerCase());
    }


    //Iteramos sobre las filas de la tabla
    for (let i = 0; i < filas.length; i++) {
        celdas = filas[i].querySelectorAll('td');
        coincide = true;

        //Comprobamos si todas las celdas coinciden con los filtros
        for (let c = 0; c < filtros.length && coincide; c++) {
            if (filtros[c] !== "" && !celdas[c].textContent.toLowerCase().startsWith(filtros[c])) {
                coincide = false;
            }
        }

        //Mostramos o ocultamos la fila dependiendo de si coincide
        if (coincide) {
            filas[i].style.display = "";
        } else {
            filas[i].style.display = "none";
        }
    }
}