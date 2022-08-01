let btnOcultar = document.querySelector("#btnOcultar");
let btnVisualizarReservas = document.querySelector("#visualizarReservas");
let btnReservar = document.querySelector("#btnReservar");
let contenedorReservas = document.querySelector("#tablaReservas");

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

function mostrar() {
    if(btnOcultar.classList.contains("ocultar")) {
        btnOcultar.classList.remove("ocultar");
        btnVisualizarReservas.classList.add("ocultar");
        contenedorReservas.classList.remove("ocultar");
    } else {
        btnOcultar.classList.add("ocultar");
        btnVisualizarReservas.classList.remove("ocultar");
        contenedorReservas.classList.add("ocultar");
    }
}

const visulalizarReserva = () => {
    for(let i = 0; i < listaReservas.length; i++){
        let numeroReserva = i + 1;
        contenedorReservas.innerHTML += `
            <div class="row listaReserva align-items-start white" >
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
    mostrar()
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


btnReservar.addEventListener("click", (e)=>{
    e.preventDefault();
    agregarReserva ();
});

btnVisualizarReservas.addEventListener("click", visulalizarReserva);

btnOcultar.addEventListener("click", mostrar);