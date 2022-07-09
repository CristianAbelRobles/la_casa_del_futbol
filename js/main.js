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

}


crearReserva ()
