// let bienvenida = prompt("¡Hola! Bienvenido al armado de tu presupuesto.")

function solicitarNombre() {
    let nombre = prompt("Ingresa tu/s nombre/s.");
}
solicitarNombre();

function solicitarApellido() {
    let apellido = prompt("Ingresa tu/s apellido/s.");
}
solicitarApellido();

function bienvenida(nombre, apellido) {
    alert("¡Hola " + nombre + " " + apellido + "! Bienvenido/a tu armado de presupuesto.")
}
bienvenida();

// -----------------------------------------------------------------------

let ingreso = prompt("Selecciona el nivel de estudios del encargado del Service de PC: \n 1. Amateur \n 2. Semi-profesional \n 3. Profesional Certificado \n 4. Universitario (para empresas)");

switch (ingreso) {
    case "1":
        alert("Seleccionaste Amateur.");
        break;

    case "2":
        alert("Seleccionaste Semi-profesional.");
        break;
        
    case "3":
        alert("Seleccionaste Profesional Certificado.");
        break;
        
    case "4":
        alert("Seleccionaste Universitario (para empresas).");
        break;
4
    default:
        alert("Opción no válida.");
        break;
}

