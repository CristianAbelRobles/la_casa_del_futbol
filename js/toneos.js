let clubes = [
    {posicion: 1, escudo:"../recursos/escudos/boca_juniors.png", nombre: "Boca Juniors", partidosJugados: 16, partidosGanados: 9, partidosEmpatados: 5, partidosPerdidos: 2, golesFavor: 19, golesContra: 8, diferenciaGoles: 11, totalPuntos: 32},
    {posicion: 2, escudo:"../recursos/escudos/gimnasia", nombre: "Gimansia", partidosJugados: 16, partidosGanados: 8, partidosEmpatados: 6, partidosPerdidos: 2, golesFavor: 16, golesContra: 7, diferenciaGoles: 9, totalPuntos: 30},
    {posicion: 3, escudo:"../recursos/escudos/huracan.png", nombre: "Huracán", partidosJugados: 16, partidosGanados: 7, partidosEmpatados: 7, partidosPerdidos: 2, golesFavor: 19, golesContra: 12, diferenciaGoles: 7, totalPuntos: 28},
    {posicion: 4, escudo:"../recursos/escudos/godoy_cruz.png", nombre: "Godoy Cruz", partidosJugados: 16, partidosGanados: 8, partidosEmpatados: 4, partidosPerdidos: 4, golesFavor: 20, golesContra: 14, diferenciaGoles: 6, totalPuntos: 28},
    {posicion: 5, escudo:"../recursos/escudos/argentinos.png", nombre: "Argentinos Jrs.", partidosJugados: 16, partidosGanados: 8, partidosEmpatados: 3, partidosPerdidos: 5, golesFavor: 18, golesContra: 14, diferenciaGoles: 4, totalPuntos: 27},
    {posicion: 6, escudo:"../recursos/escudos/patronato.png", nombre: "Patronato", partidosJugados: 16, partidosGanados: 7, partidosEmpatados: 5, partidosPerdidos: 4, golesFavor: 25, golesContra: 14, diferenciaGoles: 11, totalPuntos: 26},
    {posicion: 7, escudo:"../recursos/escudos/atletico_tucuman.png", nombre: "Atlético Tucuman", partidosJugados: 16, partidosGanados: 8, partidosEmpatados: 2, partidosPerdidos: 6, golesFavor: 21, golesContra: 21, diferenciaGoles: 0, totalPuntos: 26},
    {posicion: 8, escudo:"../recursos/escudos/racing.png", nombre: "Racing", partidosJugados: 16, partidosGanados: 6, partidosEmpatados: 7, partidosPerdidos: 3, golesFavor: 23, golesContra: 14, diferenciaGoles: 9, totalPuntos: 25},
    {posicion: 9, escudo:"../recursos/escudos/platense.png", nombre: "Platense", partidosJugados: 16, partidosGanados: 6, partidosEmpatados: 7, partidosPerdidos: 3, golesFavor: 17, golesContra: 13, diferenciaGoles: 4, totalPuntos: 25},
    {posicion: 10, escudo:"../recursos/escudos/san_lorenzo.png", nombre: "San Lorenzo", partidosJugados: 16, partidosGanados: 5, partidosEmpatados: 9, partidosPerdidos: 2, golesFavor: 22, golesContra: 17, diferenciaGoles: 3, totalPuntos: 24}
];

///////////////////////////////////////////// FETCH ///////////////////////////////////////////////////

let btnMostrarTabla = document.querySelector("#btnTorneo");
let btnOcultarTabla = document.querySelector("#btnTorneoOcultar");
let contenedorTabla = document.querySelector("#btnTorneoOcultar");

const mostrarTabla = async () => {
    try{
        mostrarTablaUsuarios();
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let result = await response.json();
        contenedorUsuarios.innerHTML+=`
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">escudo</th>
                    <th scope="col">Club</th>
                    <th scope="col">PJ<span class="ocultar">Partidos jugados</span> </th>
                    <th scope="col">G<span class="ocultar">Triunfos</span> </th>
                    <th scope="col">E<span class="ocultar">Empates</span> </th>
                    <th scope="col">P<span class="ocultar">Derrotas</span> </th>
                    <th scope="col">GF<span class="ocultar">Goles marcados</span> </th>
                    <th scope="col">GC<span class="ocultar">Goles en contra</span> </th>
                    <th scope="col">DG<span class="ocultar">Diferencia de Goles</span></th>
                    <th scope="col">Pts<span class="ocultar">Puntos Totales</span></th>
                </tr>
            </thead>
            <tbody id="contenedorUsuarios2">
            </tbody>
            `
        let contenedorUsuarios2 = document.querySelector('#contenedorUsuarios2')
        result.map(persona => {
            const tr = document.createElement('tr');
            tr.classList.add('white');
            tr.classList.add('listaReserva')
            const contentUsuarios = `
                <th scope="row">${persona.id}</th>
                <td><i class="bi bi-person-square green"></i> ${persona.name}</td>
                <td><i class="bi bi-calendar-check green"></i> ${persona.username}</td>
                <td><i class="bi bi-geo-alt green"></i> ${persona.address.city}</td>
                <td><i class="bi bi-telephone green"></i> ${persona.phone}</td>
                <td><i class="bi bi-envelope green"></i> ${persona.email}</td>
                `
            tr.innerHTML = contentUsuarios;
            contenedorUsuarios2.append(tr);
        })
    } catch (error) {
        console.log(error);
    }
}

function mostrarBtnTabla() {
    if(btnOcultarUsuarios.classList.contains("ocultar")) {
        btnOcultarUsuarios.classList.remove("ocultar");
        botonUsuarios.classList.add("ocultar");
        contenedorUsuarios.classList.remove("ocultar");
        //boton visualizar reservas
        btnVisualizarReservas.classList.add("ocultar");
    } else {
        btnOcultarUsuarios.classList.add("ocultar");
        botonUsuarios.classList.remove("ocultar");
        contenedorUsuarios.classList.add("ocultar");
        //boton visualizar reservas
        btnVisualizarReservas.classList.remove("ocultar");
    }
}

function resetTabla(){
    contenedorUsuarios.innerHTML = '';
    if (botonUsuarios.classList.contains("ocultar")) {
        botonUsuarios.classList.remove("ocultar");
        btnOcultarUsuarios.classList.add("ocultar");
    }
}

btnMostrarTabla.onclick = () => {
    resetTabla();
    mostrarTabla();
}

btnOcultarTabla.addEventListener("click", mostrarTabla);

window.addEventListener('load', function () {
    fechaReserva.addEventListener('change', function () {
        errorFecha.innerText = `${calcularFecha(this.value)}`;
    });
});