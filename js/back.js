//////////////////////////////// VALIDAR FORMULARIO /////////////////////////////////

let reserva = false; // inicio reserva en false para validar antes de crear una reserva nueva en la function agregarReserva()
let msjDia = document.querySelector("#msjDia");
let msjErrorFecha = "";
const errorFecha = document.querySelector('#errorFecha');
const fechaReserva = document.querySelector('.fecha');
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = { 
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false
}

const validarCampo = (expresion, input, campo) => {   //funcion dinamica para validar los campos del formulario
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto'); // accedo al div con la class grupo de manera dinamica y le agrego la class -correcto (para que se oculte el msj de error en la etiqueta <p>)
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');      // accedo al div con la class grupo de manera dinamica y le agrego la class -correcto (para que se oculte el msj de error en la etiqueta <p>)
		document.querySelector(`#grupo__${campo} i`).classList.add('bi-check-circle-fill');         // seleeciono de manera dimamica los id de cada grupo de elemento de cada input, accedo al icono y la agrego la class check (correcto)
		document.querySelector(`#grupo__${campo} i`).classList.remove('bi-x-circle-fill');               // seleeciono de manera dimamica los id de cada grupo de elemento de cada input, accedo al icono y la saco la class x (incorrecto)
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');  // selecciono de manera dimamica los id de cada grupo de elemento de cada input y accedo al que tiene el class .formulario__input-error y le saco la class formulario__input-error-activo  
		campos[campo] = true;  // le doy valor true a cada campo para poder validar que todos esten correctos antes de ejecutar el submit
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('bi-x-circle-fill');
		document.querySelector(`#grupo__${campo} i`).classList.remove('bi-check-circle-fill');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false; // le doy valor false a cada campo para que no pase la validacion y no pueda ejecutar el submit
	}
}

const calcularFecha =(fechaReserva)=>{
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear()); // obentengo el año del dia actual
    const mesActual = parseInt(fechaActual.getMonth())+1; // obentengo el mes del dia actual y le sumo 1 porque inicia el conteo desde el mes 0
    const diaActual = parseInt(fechaActual.getDate());  // obentengo el dia actual

    // 2022-08-22 voy a obtener los valores de la fecha de reserva por posiciones en su string

    const anoReserva = parseInt(String(fechaReserva).substring(0, 4));  // [2022]-08-22
    const mesReserva = parseInt(String(fechaReserva).substring(5, 7));  // 2022-[08]-22
    const diaReserva = parseInt(String(fechaReserva).substring(8, 10));  // 2022-08-[22]

    if (anoReserva < anoActual) {
        msjDia.classList.add('text-danger')
        msjErrorFecha = "Año de reserva erroneo.";
        reserva=false;
    } else if ((mesReserva < mesActual) && (anoReserva <= anoActual)){
        msjDia.classList.add('text-danger')
        msjErrorFecha = "Mes de reserva erroneo.";
        reserva=false;
    } else if ((diaReserva <= diaActual) && (mesReserva <= mesActual) && (anoReserva <= anoActual)){
        //errorFecha.classList.remove('ocultar');
        msjDia.classList.add('text-danger')
        msjErrorFecha = "Día de reserva invalido, revise el dia ingresado, tenga en cuenta que no se aceptan reservas para el mismo día, solo se aceptan reservas a partir de mañana.";
        reserva=false;
    } else {
        msjDia.classList.remove('text-danger')
        msjErrorFecha = "";
        reserva=true;
    }
    return msjErrorFecha;
}
// VALIDAR QUE LA FECHA CUMPLA LOS REQUERIMIENTOS PARA GENERAR UNA RESERVA Y DEVOLVER UN MSJ
window.addEventListener('load', function () {
    fechaReserva.addEventListener('change', function () {
        errorFecha.innerText = `${calcularFecha(this.value)}`;
    });
});

const validarFormulario = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
    }
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario); // EVENTO QUE SE EJECUTA LUEGO DE PRESIONAR UNA TECLA
	input.addEventListener('blur', validarFormulario); // EVENTO QUE SE EJECUTA CUANDO HAGO CLICK FUERA DEL INPUT
});

// FUNCION PARA RESETEAR LOS CAMPOS LUEGO DE HACER UNA RESERVA
const resetCampos = () => {
    campos.nombre = false;
    campos.apellido = false;
    campos.telefono = false;
    campos.correo = false;
}

//////////////////////////////////////////////////////////////////////////////////////

let btnOcultar = document.querySelector("#btnOcultar");
let btnVisualizarReservas = document.querySelector("#visualizarReservas");
let btnReservar = document.querySelector("#btnReservar");
let contenedorReservas = document.querySelector("#tablaReservas");
let cajaMsj = document.querySelector("#cajaMsj");
let contenedorHoariosDisponibles = document.querySelector("#horariosDisponibles");

let listaReservas = JSON.parse(localStorage.getItem("listaReservas")) || [ 
    // PREGUNTO SI EXISTE LA LISTA DE RESERVAS EN LOCAL STORAGE - SI EXISTE USO LA QUE EXISTE / NO EXISTE USO ESTA ->
    {nombre: "Cristian", apellido: "robles", dia: "2022-08-24", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Laura", apellido: "nacimiento", dia: "2022-08-23", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Joaquin", apellido: "robles", dia: "2022-08-24", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Abel", apellido: "Lopez", dia: "2022-08-23", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Ezequiel", apellido: "Gonzalez", dia: "2022-08-25", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Ulises", apellido: "Benitez", dia: "2022-08-21", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
    {nombre: "Alejandro", apellido: "robles", dia: "2022-08-26", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Pablo", apellido: "nacimiento", dia: "2022-08-28", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Enrique", apellido: "robles", dia: "2022-08-26", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Marcelo", apellido: "Perez", dia: "2022-08-24", horario: 10, telefono: 1133456798, mail: "Juanperez@gmail.com", parrilla: "si"},
    {nombre: "Nahuel", apellido: "Lopez", dia: "2022-08-27", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Ciro", apellido: "Gonzalez", dia: "2022-08-22", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Mateo", apellido: "Benitez", dia: "2022-09-27", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
    {nombre: "Gustavo", apellido: "robles", dia: "2022-09-26", horario: 15, telefono: 1130164798, mail: "cristian@gmail.com", parrilla: "si"},
    {nombre: "Javier", apellido: "nacimiento", dia: "2022-09-27", horario: 19, telefono: 1164568798, mail: "laura@gmail.com", parrilla: "no"},
    {nombre: "Diego", apellido: "robles", dia: "2022-09-28", horario: 13, telefono: 116567798, mail: "joaquin@gmail.com", parrilla: "si"},
    {nombre: "Jorge", apellido: "Lopez", dia: "2022-09-29", horario: 14, telefono: 118768598, mail: "abel@gmail.com", parrilla: "si"},
    {nombre: "Nemias", apellido: "Gonzalez", dia: "2022-09-28", horario: 16, telefono: 1165684564, mail: "ezeuiel@gmail.com", parrilla: "no"},
    {nombre: "Emanuel", apellido: "Benitez", dia: "2022-09-29", horario: 22, telefono: 1164634538, mail: "ulises@gmail.com", parrilla: "si"},
];

// FUNCION DONDE APLICO SORT PARA ORDENAR POR DIA LAS RESERVAS
function ordenarReservas(){
    listaReservas.sort(function (a, b) {
        if (a.dia > b.dia){
            return 1
        } else {
            return -1
        }
    });
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
    let horariosDisponibles = [10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23]; // array con el listado de todos los horarios posibles a reservar
    let reservado = 0;
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let dia = document.querySelector("#dia").value;
    let horario = parseInt(document.querySelector("#hora").value);
    let telefono = document.querySelector("#telefono").value;
    let mail = document.querySelector("#correo").value;
    let parrilla = document.querySelector("#parrilla").value;

    // HAGO UN FOR PARA REVISAR MI ARRAY Y VER SI HAY UNA RESERVA CREADA EL MISMO DIA Y HORARIO QUE QUIERE GENERAR EL USUARIO.
    for (let i = 0; i < listaReservas.length ; i++) {
        if ((listaReservas[i].dia == dia) && (listaReservas[i].horario == horario)) { 
            reservado = 1; // SI ENCUENTRA UNA RESERVA EL MISMO DIA Y HORARIO CAMBIA EL VALOR DE LA VARIABLE RESERVADO
        } else if (listaReservas[i].dia == dia){
            //hago la busqueda de la posicion dentro del array de reservas de los horarios que ya estan reservados para ese dia
            let h = horariosDisponibles.indexOf(listaReservas[i].horario)
            // h = es la posicion del horario reservado
            horariosDisponibles.splice(h, 1);
            //borro los horarios reservados de ese dia para devolver al cliente una lista con los horarios disponibles ese dia
        }
    }
    if (reservado === 1) {  
        //SI LA RESERVA YA EXISTE VISUALIZO MENSAJE DE ERROR Y OFREZCO LOS HORARIOS DISPONIBLES PARA ESE DIA
        cajaMsj.innerHTML = `
            <span class="bg-warning text-center d-block fs-4"><i class="bi bi-info-square"></i> Horarios disponibles para el día ${dia}</span>
            <div class="d-flex flex-wrap px-5 cajaMsj bg-dark" id="bodyMsj">
            </div>
            `
            horariosDisponibles.map(horario => {
                const div = document.createElement('div');
                div.classList.add('m-2');
                const Content = `
                    <i class="bi bi-clock green"></i> <span class="white">${horario}:00 Hs.</span>
                    `
                div.innerHTML = Content;
                bodyMsj.append(div);
            })
        Swal.fire({   // MENSAJE DE ALERTA DE LIBRERIA sweetalert2
            icon: 'error',
            title: 'Reserva no disponible, intente con un día u horario diferente. Tambien puede revisar nuestra lista de reservas.',
        })
        cajaMsj.classList.remove("ocultar")
        
    } else {
        //  SI LA RESERVA NO EXISTE SE CREA UNA NUEVA
        cajaMsj.innerHTML = ``; // vacio la caja de msj si existe un mensaje con reservas disponibles por alguna consulta previa a la reserva exitosa.
        let reservaNueva = new Reserva (nombre, apellido, dia, horario, telefono, mail, parrilla);
        listaReservas.push(reservaNueva);
        localStorage.setItem("listaReservas", JSON.stringify(listaReservas))
        Swal.fire({   // MENSAJE DE ALERTA DE LIBRERIA sweetalert2
            icon: 'success',
            title: 'Reserva Creada con Exito!',
            showConfirmButton: false,
            timer: 2000
        })

        formulario.reset(); // SI LA RESERVA SE CREA CON EXITO SE RESETEAN LOS INPUTS CON INFORMACION DEL CLIENTE, SI SE SOLICITA UNA RESERVA QUE YA EXISTE NO SE BORRAN ASI EL USUARIO NO TIENE QUE VOLVER A COMPLETAR LOS CAMPOS PARA INTRODUCIR OTRA FECHA TENTATIVA.
        resetCampos(); // RESETEO EL VALOR DE LOS IMPUTS A FALSE PARA QUE NO SE PUEDAN CREAR NUEVAS RESERVAS CON CAMPOS VACIOS
    }
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

function resetTablero(){
    contenedorReservas.innerHTML = '';
    if (btnVisualizarReservas.classList.contains("ocultar")) {
        btnVisualizarReservas.classList.remove("ocultar");
        btnOcultar.classList.add("ocultar");
    }
}

function visulalizarReserva(){

    // CREO UN ARRAY DE LAS FECHAS DE LAS RESERVAS PARA USARLAS EN MI FITRO DINAMICO DE FECHAS
    const fechaReservas = listaReservas.map(function (reserva){
        return reserva.dia;
    });

    // APLICO SET PARA QUE NO SE REPITAN LAS FECHAS DEL FILTRO
    let filtroFechaReservas = [... new Set (fechaReservas)].sort();

    ordenarReservas()
    mostrar();
    // LE AGREGO ID AL ARRAY DE RESERVAS
    let acumuladorId = 0;
    const idReservas = listaReservas.map(res =>{
        acumuladorId++
        return {
            id: parseInt(`${acumuladorId}`),
            ...res
        }
    });

    contenedorReservas.innerHTML = `
        <thead >
            <tr>
            <th scope="col text-center">#</th>
            <th scope="col text-center">Nombre</th>
            <th scope="col text-center">Fecha <select name="filtradoFechas" id="filtradoFechas"><option value="Todas">Todas</option></select><button type="submit" class="m-1 btn btn-info" id="btnFiltrarDia"><i class="bi bi-eye-fill"></i> Filtrar</button></th>
            <th scope="col text-center">Hora</th>
            <th scope="col text-center">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col text-center">Parrilla</th>
            <th scope="col text-center">Accion</th>
            </tr>
        </thead>
        <tbody id="contenedorReservas2">
        </tbody>
    `
    let contenedorReservas2 = document.querySelector('#contenedorReservas2'); // ASIGNO EL CONTENEDOR DE LAS RESERVAS
    let filtradoFechas = document.querySelector('#filtradoFechas'); // ASIGNO EL CONTENEDOR DE FECHAS A FILTRAR 

    // creo un filtro dinamico de dia para visualizar las fechas de las reservas
    filtroFechaReservas.forEach(filtro => {
        filtradoFechas.innerHTML += `
            <option value="${filtro}">${filtro}</option>
        `
    });

    idReservas.map(reserva => {
        const tr = document.createElement('tr');
        reserva.parrilla  === "si" ? msjParrilla = `<i class="bi bi-check-circle green"></i>` : msjParrilla = ``;
        tr.classList.add('white');
        tr.classList.add('listaReserva')
        const Content = `
            <th scope="row" class="removeId" id="${reserva.id}">${reserva.id}</th>
            <td><i class="bi bi-person-square green"></i> ${reserva.nombre} ${reserva.apellido}</td>
            <td><i class="bi bi-calendar-check green"></i> ${reserva.dia}</td>
            <td><i class="bi bi-clock green"></i> ${reserva.horario}:00 Hs.</td>
            <td><i class="bi bi-telephone green"></i> ${reserva.telefono}</td>
            <td><i class="bi bi-envelope green"></i> ${reserva.mail}</td>
            <td class="text-center">${msjParrilla}</td>
            <td ><button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i> Eliminar</button></td>
        `
        tr.innerHTML = Content;
        contenedorReservas2.append(tr); // las reservas las voy ingresando en el contenedor que esta asignado en contenedorReservas2
        tr.querySelector(".eliminar").addEventListener('click', eliminarReserva);
    })

    //////////////////////////////////////////// FILTRO POR DIA ////////////////////////////////////////////

    let btnFiltrarDia = document.querySelector('#btnFiltrarDia');
    
    btnFiltrarDia.addEventListener("click", (e)=>{
        e.preventDefault();
        contenedorReservas2.innerHTML=``;      
        let diaFiltrado = document.querySelector("#filtradoFechas").value;
        console.log(diaFiltrado)
        if (diaFiltrado == "Todas"){

            btnOcultar.classList.add("ocultar");
            btnVisualizarReservas.classList.remove("ocultar");
            contenedorReservas.classList.add("ocultar")

            visulalizarReserva()
        } else {
            let arrayPrueba = idReservas.filter((fecha)=>{
                if (fecha.dia != diaFiltrado){
                    return false;
                } else {
                    return true;
                }
            });

            arrayPrueba.map(array => {
                const tr = document.createElement('tr');
                array.parrilla  === "si" ? parrilla = `<i class="bi bi-check-circle green"></i>` : parrilla = ``;
                tr.classList.add('listaReserva')
                const ContentFiltrado =`
                    <th scope="row" class="removeId" id="${array.id}">${array.id}</th>
                    <td><i class="bi bi-person-square green"></i> ${array.nombre} ${array.apellido}</td>
                    <td><i class="bi bi-calendar-check green"></i> ${array.dia}</td>
                    <td><i class="bi bi-clock green"></i> ${array.horario}:00 Hs.</td>
                    <td><i class="bi bi-telephone green"></i> ${array.telefono}</td>
                    <td><i class="bi bi-envelope green"></i> ${array.mail}</td>
                    <td class="text-center">${parrilla}</td>
                    <td ><button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i> Eliminar</button></td>
                `
                tr.innerHTML = ContentFiltrado;
                contenedorReservas2.append(tr);
                tr.querySelector(".eliminar").addEventListener('click', eliminarReserva);
            });
        }
    });
}

function eliminarReserva(e){
    const buttonEliminar = e.target;
    const tr = buttonEliminar.closest(".listaReserva");
    const removeId = parseInt(tr.querySelector('.removeId').textContent);
    console.log(tr.querySelector('.removeId').textContent);
    listaReservas.splice(removeId-1, 1);
    tr.remove();
    mostrar()
    localStorage.setItem("listaReservas", JSON.stringify(listaReservas));
    Swal.fire({  // MENSAJE DE ALERTA DE LIBRERIA sweetalert2
        icon: 'error',
        title: 'Reserva Eliminada!',
        showConfirmButton: false,
        timer: 2000
    })
    visulalizarReserva()
}

btnReservar.addEventListener("click", (e)=>{
    e.preventDefault();
	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && reserva){  //
		agregarReserva ();
        resetTablero();
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
        
	} else {
        Swal.fire({ // MENSAJE DE ALERTA DE LIBRERIA sweetalert2
            icon: 'error',
            title: 'Debe completar correctamente el formulario antes de hacer la Reserva',
        })
	}
});

btnVisualizarReservas.addEventListener("click", visulalizarReserva);

btnOcultar.addEventListener("click", mostrar);

