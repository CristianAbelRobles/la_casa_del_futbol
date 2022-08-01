
let listaReservas = [
    {nombre: "Cristian", apellido: "robles", dia: "2022-08-24", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Laura", apellido: "nacimiento", dia: "2022-08-24", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Joaquin", apellido: "robles", dia: "2022-08-24", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Abel", apellido: "Lopez", dia: "2022-08-25", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Ezequiel", apellido: "Gonzalez", dia: "2022-08-25", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Ulises", apellido: "Benitez", dia: "2022-08-25", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
    {nombre: "Alejandro", apellido: "robles", dia: "2022-08-26", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Pablo", apellido: "nacimiento", dia: "2022-08-26", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Enrique", apellido: "robles", dia: "2022-08-26", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Nahuel", apellido: "Lopez", dia: "2022-08-27", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Ciro", apellido: "Gonzalez", dia: "2022-08-27", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Mateo", apellido: "Benitez", dia: "2022-08-27", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
    {nombre: "Gustavo", apellido: "robles", dia: "2022-08-27", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Javier", apellido: "nacimiento", dia: "2022-08-27", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Diego", apellido: "robles", dia: "2022-08-28", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Jorge", apellido: "Lopez", dia: "2022-08-28", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Nemias", apellido: "Gonzalez", dia: "2022-08-28", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Emanuel", apellido: "Benitez", dia: "2022-08-29", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
];

const visulalizarReserva = () => {
    for(let i = 0; i < listaReservas.length; i++){
        let tablaReservas = document.querySelector(".tablaReservas");
        let numeroReserva = i + 1;
        tablaReservas.innerHTML += `
            <div class="row align-items-start white" >
                <div class="col" id="reserva${numeroReserva}">
                    ${numeroReserva}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].dia}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].nombre}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].apellido}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].horario}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].telefono}
                </div>
                <div class="col" id="">
                    ${listaReservas[i].mail}
                </div>
                <div class="col"id="">
                    ${listaReservas[i].parrilla}
                </div>
                <div class="col">
                    <button type="button" class="btn btn-danger eliminar">Eliminar</button>
                </div>
            </div>
    `
    }
    console.log(botonesEliminar)
}

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

const agregarReserva = () => {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let dia = document.querySelector("#dia").value;
    let horario = document.querySelector("#hora").value;
    let telefono = document.querySelector("#telefono").value;
    let mail = document.querySelector("#mail").value;
    let parrilla = document.querySelector("#parrilla").value;
    let reservaNueva = new Reserva (nombre, apellido, dia, horario, telefono, mail, parrilla);
    listaReservas.push(reservaNueva);
    console.log(listaReservas)
}

// eliminar reservas del array 

let botonesEliminar = document.querySelectorAll(".eliminar"); //selecciono todos los botones eliminar
    for (let i=0; i<botonesEliminar.length; i++){
        let boton = botonesEliminar[i];
        boton.addEventListener(click, eliminarReserva);
}

function eliminarReserva (e){
    let boton = e.target;
    let padre = boton.parentElement;
    let idReserva = padre.querySelector("#id");
    console.log(idReserva)
}
/*
const eliminarReserva = () => {
    let deleteR = parseInt(prompt("¿Qué Número de reserva le gustaria borrar?"));
    console.log(deleteR);
    console.log(listaReservas[deleteR]);
    listaReservas.splice(deleteR - 1, 1);
    mostrarReserva ()
    console.log(listaReservas);
}
*/



document.querySelector("#visualizarReservas").addEventListener("click", function() {
    visulalizarReserva ()
});

document.querySelector("#btnReservar").addEventListener("click", function() {
    agregarReserva ()
});

/*
document.querySelector("#btnReservar").addEventListener("click", function() {
    agregarReserva ()
});
*/


/*
document.querySelector("#btnEliminar").addEventListener("click", function() {
    eliminarReserva()
});

*/









/*



function aparecer (){
    document.getElementById("tarjetero").style.display = "block";
}

function ocultar (){
    document.getElementById("tarjetero").style.display = "none";
}

ocultar ()


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

