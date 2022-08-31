///////////////////////////////////////////// FETCH ///////////////////////////////////////////////////
let contenedorTabla = document.querySelector("#tablaTorneo");
let tablaTitulo = document.querySelector("#tablaTitulo");

const mostrarTabla = async () => {
    try{
        let response = await fetch("../datos/clubes.json");
        let clubes = await response.json();
        contenedorTabla.innerHTML+=`
            <thead>
                <tr>
                    <th scope="col" width="10px">#</th>
                    <th scope="col" width="50px">Club</th>
                    <th scope="col"></th>
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
            <tbody id="equiposTabla">
            </tbody>
            `
        let equiposTabla = document.querySelector('#equiposTabla')
        clubes.map(club => {
            const tr = document.createElement('tr');
            tr.classList.add('white');
            tr.classList.add('listaReserva')
            const contentClubes = `

                    <th scope="row">${club.posicion}</th>
                    <td><img src="${club.escudo}" alt=""></td>
                    <td style="text-align: left;">${club.nombre}</td>
                    <td>${club.partidosJugados}</td>
                    <td>${club.partidosGanados}</td>
                    <td>${club.partidosEmpatados}</td>
                    <td>${club.partidosPerdidos}</td>
                    <td>${club.golesFavor}</td>
                    <td>${club.golesContra}</td>
                    <td>${club.diferenciaGoles}</td>
                    <td>${club.totalPuntos}</td>

                `
            tr.innerHTML = contentClubes;
            equiposTabla.append(tr);
        })
    } catch (error) {
        console.log(error);
    }
}

function mostrarBtnTabla() {
    if(btnOcultarTabla.classList.contains("ocultar")) {
        btnOcultarTabla.classList.remove("ocultar");
        btnMostrarTabla.classList.add("ocultar");
        contenedorTabla.classList.remove("ocultar");
        tablaTitulo.classList.remove("ocultar");
    } else {
        btnOcultarTabla.classList.add("ocultar");
        btnMostrarTabla.classList.remove("ocultar");
        contenedorTabla.classList.add("ocultar");
        tablaTitulo.classList.add("ocultar");
    }
}

function resetTabla(){
    contenedorTabla.innerHTML = '';
    if (btnMostrarTabla.classList.contains("ocultar")) {
        btnMostrarTabla.classList.remove("ocultar");
        btnOcultarTabla.classList.add("ocultar");
    }
}

window.addEventListener('load', function () {
    mostrarTabla();
});

