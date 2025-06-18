let hojasDeSeguridad = []
let procedimientos = []
let diluciones = []

const fetchHojas = fetch("./json/hojasDeSeguridad.json")
    .then(res => res.json())
    .then(data => {
        hojasDeSeguridad = data.hojasDeSeguridad;
    });

const fetchProcedimientos = fetch("./json/procedimientos.json")
    .then(res => res.json())
    .then(data => {
        procedimientos = data.procedimientos;
    });

const fetchDiluciones = fetch("./json/diluciones.json")
    .then(res => res.json())
    .then(data => {
        diluciones = data.diluciones;
    });

Promise.all([fetchHojas, fetchProcedimientos, fetchDiluciones])
    .then(() => {
        const params = new URLSearchParams(window.location.search);
        const nombre = params.get("n");
        if (nombre) {
            buscador.value = nombre;
            filtrarPorBuscador();
        }
    })
    .catch(error => console.error("Error al cargar los datos:", error));

const grillaHojas = document.getElementById("grilla-hojas")

function crearHojasDom(h) {
    const div = document.createElement("div")
    div.classList.add("col-12", "col-sm-6", "col-md-4", "text-center", "p-3")
    div.innerHTML = `
        <div class="rounded-3 h-100 align-content-center bg-light border p-3">
            <h5 class="">${h.producto}</h5>
        </div>
    `
    div.addEventListener("click", () => { 
        window.open(h.archivo);
    });
    grillaHojas.appendChild(div)
}

const buscador = document.getElementById("buscador");
const eliminar = document.getElementById("eliminar")

buscador.addEventListener("input", filtrarPorBuscador)
eliminar.addEventListener("click", eliminarBusqueda)

function filtrarPorBuscador() {
    grillaHojas.innerHTML = ""
    botonera.innerHTML = ""
    grillaDiluciones.innerHTML = ""
    tituloGrillaDiluciones.innerHTML = ""
    let filtrar = buscador.value.toUpperCase().trim();
    const hojasFiltradas = hojasDeSeguridad.filter((hoja) => hoja.cliente.some((cliente) => cliente.toUpperCase().includes(filtrar)));
    hojasFiltradas.forEach((e) => crearHojasDom(e));

    if(filtrar !== ""){
        const dilucionesFiltrados = diluciones.filter((d) => d.cliente.some((cliente) => cliente.toUpperCase().includes(filtrar)))
        dilucionesFiltrados.forEach((e) => crearDilucionesDom(e))

        dilucionesFiltrados.length > 0 ? botonMostrarTodos() : null
        dilucionesFiltrados.length > 0 ? crearTituloDilucionesDom() : null

        const procedimientosFiltrados = procedimientos.filter((p) => p.cliente.some((cliente) => cliente.toUpperCase().includes(filtrar)));
        procedimientosFiltrados.forEach((e) => crearBotonesProcedimientos(e));
    }
}

function eliminarBusqueda(){
    buscador.value = "";
    grillaHojas.innerHTML = "";
    botonera.innerHTML = ""
    grillaDiluciones.innerHTML = ""
    tituloGrillaDiluciones.innerHTML = ""
    //hojasDeSeguridad.forEach((e) => crearHojasDom(e));
}

const botonera = document.getElementById("botonera")

function botonMostrarTodos(){
    const botonMostrarTodos = document.createElement("button")
    botonMostrarTodos.classList.add("rounded-pill", "btn", "btn-secondary", "mx-2", "my-1")
    botonMostrarTodos.textContent = "Procedimiento Diluciones"

    botonMostrarTodos.addEventListener('click', () => {
        const irADiluciones = document.getElementById("titulo-grilla-diluciones")
        irADiluciones ? irADiluciones.scrollIntoView({ behavior: 'smooth' }) : null
    })
    botonera.appendChild(botonMostrarTodos)
}

function crearBotonesProcedimientos(f) {
    const boton = document.createElement("button")
    boton.classList.add("rounded-pill", "btn", "btn-secondary", "mx-2", "my-1")
    boton.innerHTML = `
        ${f.procedimiento}
    `
    boton.addEventListener("click", () => { 
       window.open(f.archivo);
    });
    botonera.appendChild(boton)
} 

const grillaDiluciones = document.getElementById("grilla-diluciones")

function crearDilucionesDom(d) {
    const div = document.createElement("div")
    div.classList.add("col-12", "col-sm-6", "col-md-4", "text-center", "p-3")
    div.innerHTML = `
        <div class="rounded-3 h-100 align-content-center bg-light border p-3">
            <h5 class="">${d.producto}</h5>
        </div>
    `
    div.addEventListener("click", () => { 
        window.open(d.archivo);
    });
    grillaDiluciones.appendChild(div)
}

const tituloGrillaDiluciones = document.getElementById("titulo-grilla-diluciones")

function crearTituloDilucionesDom(){
    const h3 = document.createElement("h3")
    h3.classList.add("mt-5")
    h3.innerHTML = `<h3>Procedimientos de Diluciones</h3>`
    tituloGrillaDiluciones.appendChild(h3) 
}