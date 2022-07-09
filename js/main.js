
function crearReserva () {
    let nombreReserva = prompt("Ingrese su Nombre");
    let apellidoReserva = prompt("Ingrese su Apellido");
    let diaReserva = prompt("Que dia le gustaria reservar?");
    let horarioReserva = parseInt(prompt(`${nombreReserva}, En que horario le gustaria jugar?`));
        while ((horarioReserva<=9) || (horarioReserva>=23)) {
            alert(`${nombreReserva}, No tenemos alquiler disponible en ese horario, por favor elija uno diferente`);
            let horarioReserva = parseInt(prompt(`${nombreReserva}, En que horario le gustaria jugar?`));
            }
    let telefonoReserva = prompt("Ingrese su Telefono de contacto");
    let mailReserva = prompt("Ingrese su Mail de contacto");
    let parrillaReserva = prompt("Quiere reservar parrilla con su alquiler?");

}

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

crearReserva ()





// alert("Su reserva se creo exitosamente")
// alert("el dia y horario seleccionado ya esta reservado por favor elija otro")
