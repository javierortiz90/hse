let hojasDeSeguridad = []
fetch("./json/hojasDeSeguridad.json")
.then((Response) => Response.json())
.then(hojas => {
    hojasDeSeguridad = hojas.hojasDeSeguridad
    init()
})
.catch(error => {
    console.log("error:", error)
})

let procedimientos = []
fetch("./json/procedimientos.json")
.then((Response) => Response.json())
.then(proc => {
    procedimientos = proc.procedimientos
})
.catch(error => {
    console.log("error:", error)
})

let diluciones = []
fetch("./json/diluciones.json")
.then((Response) => Response.json())
.then(diluc => {
    diluciones = diluc.diluciones
})
.catch(error => {
    console.log("error:", error)
})

//-------------------------HOJAS DE SEGURIDAD-------------------------//

const grillaHojas = document.getElementById("grilla-hojas")

function init(){
    hojasDeSeguridad.forEach((e) => crearHojasDom(e))
}

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
        const procedimientosFiltrados = procedimientos.filter((p) => p.cliente.some((cliente) => cliente.toUpperCase().includes(filtrar)));
        procedimientosFiltrados.forEach((e) => crearBotonesProcedimientos(e));

        const dilucionesFiltrados = diluciones.filter((d) => d.cliente.some((cliente) => cliente.toUpperCase().includes(filtrar)))
        dilucionesFiltrados.forEach((e) => crearDilucionesDom(e))

        if (dilucionesFiltrados.length > 0) {
            crearTituloDilucionesDom();
        }
    }
}

function eliminarBusqueda(){
    buscador.value = "";
    grillaHojas.innerHTML = "";
    botonera.innerHTML = ""
    grillaDiluciones.innerHTML = ""
    tituloGrillaDiluciones.innerHTML = ""
    hojasDeSeguridad.forEach((e) => crearHojasDom(e)); // Restaurar el contenido original
}

//-------------------------PROCEDIMIENTOS-------------------------//

const botonera = document.getElementById("botonera")

//procedimientos.forEach((x) => crearBotonesProcedimientos(x))

function crearBotonesProcedimientos(f) {

    const boton = document.createElement("button")
    boton.classList.add("rounded-pill", "m-2", "btn", "btn-secondary")
    boton.innerHTML = `
        ${f.procedimiento}
    `
    boton.addEventListener("click", () => { 
       window.open(f.archivo);
    });
    botonera.appendChild(boton)
} 

//-------------------------DILUCIONES-------------------------//

const grillaDiluciones = document.getElementById("grilla-diluciones")


//diluciones.forEach((e) => crearDilucionesDom(e))

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

//-------------------------TITULO DILUCIONES-------------------------//

const tituloGrillaDiluciones = document.getElementById("titulo-grilla-diluciones")

function crearTituloDilucionesDom(){
    const h3 = document.createElement("h3")
    h3.classList.add("mt-5")
    h3.innerHTML = `<h3>Procedimientos de Diluciones</h3>`
    tituloGrillaDiluciones.appendChild(h3) 
}