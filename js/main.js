//-------------------------HOJAS DE SEGURIDAD-------------------------//
class hojaDeSeguridad {
    constructor (id, producto, archivo, cliente){
        this.id = id
        this.producto = producto
        this.archivo = archivo
        this.cliente = cliente
    }
}


const hoja1 = new hojaDeSeguridad(1, "Agua Destilada", "assets/arc/aguaDestilada.pdf", ["cepas burzaco"])
const hoja2 = new hojaDeSeguridad(2, "Alcohol Etilico 96°", "assets/arc/alcoholEtilico96.pdf", ["cepas burzaco"])
const hoja3 = new hojaDeSeguridad(3, "Blem Lavanda", "assets/arc/blemLustraLavandaJohnson.pdf", ["hospital aleman"])
const hoja4 = new hojaDeSeguridad(4, "Cera Acrílica A-20", "assets/arc/ceraAcrilicaA20Qualiquimica.pdf", ["cepas avellaneda"])
const hoja5 = new hojaDeSeguridad(5, "Cera Extra Negra", "assets/arc/ceraExtraNegraQualiquimica.pdf", ["hospital aleman"])
const hoja6 = new hojaDeSeguridad(6, "Cera Extra Roja", "assets/arc/ceraExtraRojaQualiquimica.pdf", ["hospital aleman"])
const hoja7 = new hojaDeSeguridad(7, "Cera Jet", "assets/arc/ceraJetJohnson.pdf", ["hospital aleman"])
const hoja8 = new hojaDeSeguridad(8, "DBX-100", "assets/arc/dbx100Thames.pdf", ["cepas avellaneda"]) 
const hoja9 = new hojaDeSeguridad(9, "Desengrasante Industrial A", "assets/arc/desengrasanteIndustrialAAlquimia.pdf", ["hospital aleman"])
const hoja10 = new hojaDeSeguridad(10, "Detergente Concentrado C-43", "assets/arc/detergenteConcentradoC43JK.pdf", ["cepas avellaneda"]) 
const hoja11 = new hojaDeSeguridad(11, "Detergente Sodico Concentrado", "assets/arc/detergenteSodicoConcentradoJK.pdf", ["hospital aleman"])
const hoja12 = new hojaDeSeguridad(12, "Drax Ultra", "assets/arc/draxUltraDiversey.pdf", ["cepas burzaco"]) 
const hoja13 = new hojaDeSeguridad(13, "Emerel Forte", "assets/arc/adic/EmerelForteDiversey.pdf", ["hospital aleman"])
const hoja14 = new hojaDeSeguridad(14, "Cera Extra Superconcentrada", "assets/arc/emulsionCeraSuperconcentradaQualiquimica.pdf", ["hospital aleman"])
const hoja15 = new hojaDeSeguridad(15, "Flash Blanco Antibacterial", "assets/arc/flashBlancoAntibacterialDiversey.pdf", ["hospital aleman","cepas avellaneda"]) 
const hoja16 = new hojaDeSeguridad(16, "Flash Ultra Pino", "assets/arc/flashUltraPinoDiversey.pdf", ["hospital aleman"]) 
const hoja17 = new hojaDeSeguridad(17, "Floorclean", "assets/arc/floorcleanDiversey.pdf", ["cepas burzaco"]) 
const hoja18 = new hojaDeSeguridad(18, "Forward Antibacterial", "assets/arc/forwardAntibacterialDiversey.pdf", ["cepas burzaco"]) 
const hoja19 = new hojaDeSeguridad(19, "Glade Lavanda", "assets/arc/gladeAerosolLavandaJohnson.pdf", ["hospital aleman"])
const hoja20 = new hojaDeSeguridad(20, "Lavencere", "assets/arc/lavencereQuimicaErpe.pdf", ["hospital aleman"])
const hoja21 = new hojaDeSeguridad(21, "Limpiador de Acero Inoxidable", "assets/arc/limpiadorAceroInoxidableAlquimia.pdf", ["hospital aleman"])
const hoja22 = new hojaDeSeguridad(22, "Limpiador Acrilico R-7", "assets/arc/limpiadorAcrilicoR7Qualiquimica.pdf", ["hospital aleman"])
const hoja23 = new hojaDeSeguridad(23, "Limpiador Multiuso", "assets/arc/limpiadorMultiusoQualiquimica.pdf", ["cepas avellaneda"]) 
const hoja24 = new hojaDeSeguridad(24, "Limpiador Neutro", "assets/arc/limpiadorNeutroAlquimia.pdf", ["cepas burzaco"]) 
const hoja25 = new hojaDeSeguridad(25, "Limpiador Neutro Concentrado", "assets/arc/limpiadorNeutroConcentradoAcrilwaxWassington.pdf", ["cepas avellaneda"]) 
const hoja26 = new hojaDeSeguridad(26, "Limpiador Neutro R-9", "assets/arc/limpiadorNeutroR9Acrylpo.pdf", ["hospital aleman"])
const hoja27 = new hojaDeSeguridad(27, "Limpiador Neutro Baja Espuma", "assets/arc/limpiadorNeutroWassington.pdf", ["hospital aleman", "cepas avellaneda"])
const hoja28 = new hojaDeSeguridad(28, "Limpiador de Sarro", "assets/arc/limpiadorSarroAlquimia.pdf", ["hospital aleman","cepas burzaco"])
const hoja29 = new hojaDeSeguridad(29, "Oxan 30", "assets/arc/oxan30JK.pdf", ["hospital aleman","cepas avellaneda"])
const hoja30 = new hojaDeSeguridad(30, "Pasta Luxor", "assets/arc/pastaLimpiadoraLuxor.pdf", ["hospital aleman"])
const hoja31 = new hojaDeSeguridad(31, "Secuestrante de Polvo S-5", "assets/arc/secuestrantePolvoS5Qualiquimica.pdf", ["hospital aleman"])
const hoja32 = new hojaDeSeguridad(32, "Sellador S-10", "assets/arc/selladorAcrylpoS10Qualiquimica.pdf", ["cepas avellaneda"]) 
const hoja33 = new hojaDeSeguridad(33, "Shampoo Limpiador de Alfombras", "assets/arc/shampooLimpiadorAlfombrasDenkyl.pdf", ["hospital aleman", "medicus"])//eliminar medicus

const hojasDeSeguridad = [hoja1, hoja2, hoja3, hoja4, hoja5, hoja6, hoja7, hoja8, hoja9, hoja10, hoja11, hoja12, hoja13, hoja14, hoja15, hoja16, hoja17, hoja18, hoja19, hoja20, hoja21, hoja22, hoja23, hoja24, hoja25, hoja26, hoja27, hoja28, hoja29, hoja30, hoja31, hoja32, hoja33]
 

const grillaHojas = document.getElementById("grilla-hojas")

hojasDeSeguridad.forEach((e) => crearHojasDom(e))

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
class procedimiento {
    constructor (id, procedimiento, archivo, cliente){
        this.id = id
        this.procedimiento = procedimiento
        this.archivo = archivo
        this.cliente = cliente
    }
}
const procedimiento1 = new procedimiento(1, "Inducción HSE", "assets/arc/adic/introHSE-REV06.pdf",["hospital aleman"])
const procedimiento2 = new procedimiento(2, "Introducción Sist. de Gestión", "assets/arc/adic/introSCMS-REV09.pdf",["hospital aleman"])
const procedimiento3 = new procedimiento(3, "Capacitaciones", "assets/arc/adic/regCap.pdf",["hospital aleman"])
const procedimiento4 = new procedimiento(4, "Check-list Evacuación y Derrame", "assets/arc/adic/evaDer.pdf",["hospital aleman"])

const procedimientos = [procedimiento1, procedimiento2, procedimiento3, procedimiento4]

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
class hojaDilucion {
    constructor (id, producto, archivo, cliente){
        this.id = id
        this.producto = producto
        this.archivo = archivo
        this.cliente = cliente
    }
}

const dilucion1 = new hojaDilucion(1, "Cera A-20", "assets/arc/dil/dilucionCera-A20.pdf", ["hospital aleman"])
const dilucion2 = new hojaDilucion(2, "Emerel Forte L. Diaria", "assets/arc/dil/dilucionEmerelForteLimpiezDiaria.pdf", ["hospital aleman"])
const dilucion3 = new hojaDilucion(3, "Emerel Forte Removedor Cera", "assets/arc/dil/dilucionEmerelForteRemovedorCera.pdf", ["hospital aleman"])
const dilucion4 = new hojaDilucion(4, "Lavencere", "assets/arc/dil/dilucionLavencere.pdf", ["hospital aleman"])
const dilucion5 = new hojaDilucion(5, "Limpiador Neutro Acrilwax", "assets/arc/dil/dilucionLimpiadorNeutroAcrilwax.pdf", ["hospital aleman"])
const dilucion6 = new hojaDilucion(6, "Oxan 30", "assets/arc/dil/dilucionOxan30.pdf", ["hospital aleman"])
const dilucion7 = new hojaDilucion(7, "Limpiador Acrilico R7", "assets/arc/dil/dilucionR7.pdf", ["hospital aleman"])
const dilucion8 = new hojaDilucion(8, "Limpiador Neutro R9", "assets/arc/dil/dilucionR9.pdf", ["hospital aleman"])

const diluciones = [dilucion1, dilucion2, dilucion3, dilucion4, dilucion5, dilucion6, dilucion7, dilucion8]
 

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
        window.open(h.archivo);
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