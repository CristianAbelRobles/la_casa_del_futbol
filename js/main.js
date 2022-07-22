
let listaReservas = [
    {nombre: "Cristian", apellido: "robles", dia: "Lunes", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Laura", apellido: "nacimiento", dia: "Martes", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Joaquin", apellido: "robles", dia: "Miercoles", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Abel", apellido: "Lopez", dia: "Jueves", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Ezequiel", apellido: "Gonzalez", dia: "Viernes", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Ulises", apellido: "Benitez", dia: "Sabado", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
]

function aparecer (){
    document.getElementById("tarjetero").style.display = "block";
}

function ocultar (){
    document.getElementById("tarjetero").style.display = "none";
}

ocultar ()

const mostrarReserva = () => {
    for(let i = 0; i < listaReservas.length; i++){
        /*
        const contenedorDiv = document.createElement("div");
        tarjetero.appendChild(contenedorDiv);
        contenedorDiv.className = "card m-2";
        contenedorDiv.id = ("tarjetas" + i);

        console.log("tarjetas" + i)
        
        const contenedorDivBody = document.createElement("div");
        ("tarjeta" + i).appendChild(contenedorDivBody);
        contenedorDivBody.className = "card-body";
        contenedorDivBody.id = ("cardBody" + i);

        console.log("cardBody" + i)

        const tituloCard = document.createElement("h5");
        ("cardBody" + i).appendChild(tituloCard);
        tituloCard.className = "card-title";
        tituloCard.id = ("js-card-titulo" + i);

        */
        
        document.querySelector("#js-card-titulo" + i).textContent = (`Reserva de ${listaReservas[i].nombre} ${listaReservas[i].apellido}`);
        document.querySelector("#js-card-text" + i).textContent = (`para el día ${listaReservas[i].dia} a las ${listaReservas[i].horario}hs. su telefono de contacto es ${listaReservas[i].telefono} y su correo ${listaReservas[i].mail}, ${listaReservas[i].parrilla} quiere reservar la parrilla.`);
    }
}
document.querySelector("#btnVisualizarReservas").addEventListener("click", function() {
    mostrarReserva ()
});




/*
class Reserva{
    constructor(nombre, apellido, dia, horario, telefono, mail, parrilla){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dia = dia;
        this.horario = horario;
        this.telefono = telefono;
        this.mail = mail;
        this.parrilla = parrilla
    }
}

let listaReservas = [
    {nombre: "cristian", apellido: "robles", dia: "martes", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "laura", apellido: "nacimiento", dia: "miercoles", horario: 19, telefono: 1164688798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "joaquin", apellido: "robles", dia: "viernes", horario: 13, telefono: 116463498, mail: "joaquin@gmail.com", parrilla: "si"}
]

const agregarReserva = () => {
    let nombre = prompt("Ingresa su nombre.");
    let apellido = prompt(`${nombre}, ingresa tu Apellido.`);
    let dia = prompt(`${nombre}, qué dia te gustaria reservar?`);
    let horario = parseInt(prompt(`${nombre}, en que horario te gustaria jugar?`));
        while ((horario<=9) || (horario>=23)) {
            alert(`${nombre}, no tenemos alquiler disponible en ese horario, por favor elija uno diferente.`);
            horario = parseInt(prompt(`${nombre}, en que horario te gustaria jugar?`));
        }
    let telefono = prompt("Ingresa tu Telefono de contacto");
    let mail = prompt("Ingresa tu Mail de contacto");
    let parrilla = prompt("Quiere reservar parrilla con su alquiler?");
    alert(`Reserva creada por ${nombre} ${apellido} para el día ${dia} a las ${horario}hs. su telefono de contacto es ${telefono} y su correo ${mail}, ${parrilla} quiere reservar la parrilla.`);
    let reservaNueva = new Reserva (nombre, apellido, dia, horario, telefono, mail, parrilla);
    listaReservas.push(reservaNueva)
}

let respuesta = parseInt(prompt("que le gustaria hacer?\n 1- Crear Reserva \n 2- Consultar Reservas hechas \n 3- eliminar una reserva\n 4- Salir"));

if (respuesta === 4){
    alert(`Gracias por visitarnos`)
}else if (respuesta === 1){
    agregarReserva()
    let respuestaNueva = prompt("Desea crear otra reserva?").toLowerCase;
    while (respuestaNueva == "si") {
        agregarReserva()
    }
}else if (respuesta === 2){
    for(let i = 0; i < listaReservas.length; i++){
        alert(`Reserva creada por ${listaReservas[i].nombre} ${listaReservas[i].apellido} para el día ${listaReservas[i].dia} a las ${listaReservas[i].horario}hs. su telefono de contacto es ${listaReservas[i].telefono} y su correo ${listaReservas[i].mail}, ${listaReservas[i].parrilla} quiere reservar la parrilla.`)
    }
}else if (respuesta === 3){
    alert("ELIMINAR RESERVA")
}else {
    alert("Ingrese una respuesta valida.")
}



















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

array de objetos 

let listaReservas = [ {
    nombre: cristian,
    apellido: robles,
    dia: martes,
    horario: 20,
    correo: cristian@gmail.com,
    telefono: 11 3322 55696,
    parrilla: si,
}, {reserva2}, {reserva3}, {reserva4}, {reserva5}];


console.log(listaReservas [0].nombre) /// cristian
console.log(listaReservas [0].apellido) /// robles
console.log(listaReservas [0].dia) /// martes
console.log(listaReservas [0].horario) /// 20
console.log(listaReservas [0].correo) /// cristian@gmail.com
console.log(listaReservas [0].telefono) /// 11 3322 55696
console.log(listaReservas [0].parrilla) /// si

cosonle.log(listaReservas.length) 

listaReservas.push(reserva)    // Agregar reserva al array


listaReservas.splice()        // para borrar un elemento especifico del array   // hay que fijarse de donde hasta donde queremos borrar 

listaReservas.splice(listaReservas.indexOf("martes"),1);                 // para eliminar una reserva
console.log(listaRservas);

let reservaBorrar = prompt ("Cual reservar le gustaria eliminar?");      // para eliminar una reserva
if (listaReservas.indexOf(reservaBorrar)) != -1 {
    listaReservas.splice(listaReservas.indexOf(reservaBorrar),1);
}
console.log(listaReservas);




function borrar(){
    let reservaBorrar = prompt ("Cual reservar le gustaria eliminar?");      // FUNCTION para eliminar una reserva
    if (listaReservas.indexOf(reservaBorrar) != -1) {
        listaReservas.splice(listaReservas.indexOf(reservaBorrar),1);
    }
    console.log(listaReservas);
}

*/

