/*

class Reserva {
    constructor (nombre, apellido, dia, horario, telefono, mail, parrilla){
        this.nombre = nombre
        this.apellido = apellido
        this.dia = dia
        this.horario = horario
        this.telefono = telefono
        this.mail = mail
        this.parrilla = parrilla
    }
}

*/


function crearReserva () {
    let nombreReserva = prompt("Ingresa su nombre.");
    let apellidoReserva = prompt(`${nombreReserva}, ingresa tu Apellido.`);
    let diaReserva = prompt(`${nombreReserva}, qué dia te gustaria reservar?`);
    let horarioReserva = parseInt(prompt(`${nombreReserva}, en que horario te gustaria jugar?`));
        while ((horarioReserva<=9) || (horarioReserva>=23)) {
            alert(`${nombreReserva}, no tenemos alquiler disponible en ese horario, por favor elija uno diferente.`);
            horarioReserva = parseInt(prompt(`${nombreReserva}, en que horario te gustaria jugar?`));
            }
    let telefonoReserva = prompt("Ingresa tu Telefono de contacto");
    let mailReserva = prompt("Ingresa tu Mail de contacto");
    let parrillaReserva = prompt("Quiere reservar parrilla con su alquiler?");
    alert(`Reserva creada por ${nombreReserva} ${apellidoReserva} para el día ${diaReserva} a las ${horarioReserva}hs. su telefono de contacto es ${telefonoReserva} y su correo ${mailReserva}, ${parrillaReserva} quiere reservar la parrilla.`);
    
}
let respuesta = parseInt(prompt("que le gustaria hacer?\n 1- Crear Reserva \n 2- Consultar Reservas hechas \n 3- eliminar una reserva\n 4- Salir"));

if (respuesta === 4){
    alert("Gracias por visitarnos")
}else if (respuesta === 1){
    crearReserva ()
    let respuestaNueva = prompt("Desea crear otra reserva?").toUpperCase;
    while (respuestaNueva == "si") {
        crearReserva()
    }
}else if (respuesta === 2){
    alert("MOSTTRAR RESERVAS")
}else if (respuesta === 3){
    alert("ELIMINAR RESERVA")
}else {
    alert("Ingrese una respuesta valida.")
}
















/*
function crearReserva () {
    let nombreReserva = prompt("Ingresa su nombre.");
    let apellidoReserva = prompt(`${nombreReserva}, ingresa su Apellido.`);
    let diaReserva = prompt(`${nombreReserva}, qué dia te gustaria reservar?`);
    let horarioReserva = parseInt(prompt(`${nombreReserva}, en que horario te gustaria jugar?`));
        while ((horarioReserva<=9) || (horarioReserva>=23)) {
            alert(`${nombreReserva}, no tenemos alquiler disponible en ese horario, por favor elija uno diferente.`);
            horarioReserva = parseInt(prompt(`${nombreReserva}, en que horario te gustaria jugar?`));
            }
    let telefonoReserva = prompt("Ingresa tu Telefono de contacto");
    let mailReserva = prompt("Ingresa tu Mail de contacto");
    let parrillaReserva = prompt("Quiere reservar parrilla con su alquiler?");
    alert(`Reserva creada por ${nombreReserva} ${apellidoReserva} el día ${diaReserva} a las ${horarioReserva}, su telefono de contacto es ${telefonoReserva} y su correo ${mailReserva}, ${parrillaReserva} quiere reservar la parrilla.`);


crearReserva ()

*/
