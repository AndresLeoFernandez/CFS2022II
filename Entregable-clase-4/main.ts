import crearAutomotor, { generarPatente  } from "./Helpers/functions";
import GestorDeArchivos from './Clases/GestorDeArchivos';
import GestorAutomotor from './Clases/GestorAutomotor';
import Automotor from "./Clases/Automotor";
import * as ReadlineSync from 'readline-sync';

function imprimirMenuCargaAutosDeArchivo(): void {
    console.log(`╔═════════════════════════════════════════════════════════════════╗`);
    console.log(`║                            BIENVENIDO                           ║`);
    console.log(`╠═════════════════════════════════════════════════════════════════╣`);
    console.log(`║ La Aplicacion cuenta con un archivo con datos de Automoviles.   ║`);
    console.log(`║ Seleccione la opcion deseada de acuerdo a su preferencia.       ║`);
    console.log(`║                                                                 ║`);
    console.log(`║          1- Cargar Autos desde Archivo.                         ║`);
    console.log(`║          2- Pasar al Menu Principal.                            ║`);
    console.log(`║          0- Salir.                                              ║`);
    console.log(`║                                                                 ║`);
    console.log(`║                                                                 ║`);
    console.log(`║                                                                 ║`);
    console.log(`╚═════════════════════════════════════════════════════════════════╝`);
}


function imprimirMenuPrincipal (): void {
    console.log(`╔═════════════════════════════════════════╗`);
    console.log(`║                 MENU                    ║`);
    console.log(`╠═════════════════════════════════════════╣`);
    console.log(`║ 1- Cargar Automotor nuevo.              ║`);
    console.log(`║ 2- Eliminar Automotor.                  ║`);
    console.log(`║ 3- Consultar Automotor.                 ║`);
    console.log(`║ 4- Consultar Ficha Automotor.           ║`);
    console.log(`║ 5- Modificar Automotor.                 ║`);
    console.log(`║ 6- Mostrar Listado de Automoviles.      ║`);
    console.log(`║ 0- Salir.                               ║`);
    console.log(`╚═════════════════════════════════════════╝`);
}

function solicitarOpcion(min: number,max: number ):number {
    let opcion: number = -1;
    while (!(opcion>= min && opcion<= max)){
        opcion = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    } 
    return opcion;
}


//Iniciar programa
let listaEjemplares : Array<Automotor> = [];
let op: number = 1;
imprimirMenuCargaAutosDeArchivo();
op = solicitarOpcion(0,2);
switch (op) {
    case 0:
        console.log(``);
        console.log(``);
        console.log(`╔══════════════════════════════════════════════════════════╗`);
        console.log("║        Gracias por utilizar la Aplicación.               ║");
        console.log(`╚══════════════════════════════════════════════════════════╝`);
        console.log(``);
        console.log(``);
        break;
    case 1:
        console.log(`╔══════════════════════════════════════════════════════════╗`);
        console.log(`║ Cargando los datos desde el archivo...                   ║`);
        // Obtengo del archivo *.txt los libros 
        let datos: GestorDeArchivos = new GestorDeArchivos("listado-autos.txt");
        //Estos son los datos que hay en el archivo.
        console.log(`║                                                          ║`);
        console.log(`║ Se cargaron ${datos.getArregloString().length } registro(s) desde el archivo... ║`);
        console.log(`║ Inicializando Automotores desde Archivo...               ║`);
        console.log(`╚══════════════════════════════════════════════════════════╝`);
        for (let i : number= 0; i < datos.getArregloString().length; i++){
            crearAutomotor(datos.getArregloString()[i], listaEjemplares);            
        }
    default:    
        let registroDeAutomoviles : GestorAutomotor = new GestorAutomotor(listaEjemplares);
        console.log(``);
        console.log(``);
        console.log(`╔══════════════════════════════════════════════════════════╗`);
        console.log("║   Registro de Automoviles creada...                      ║");
        console.log("║   Para verlos ingrese a la opcion 6 del menu principal.  ║");
        console.log(`╚══════════════════════════════════════════════════════════╝`);
        console.log(``);
        console.log(``);
        let opp: number = 1;
        while (op != 0) {
            imprimirMenuPrincipal();
            op = solicitarOpcion(0,6);
            switch (op) {
                case 0:
                    console.log("Gracias por utilizar la Aplicación.");
                    break;
                case 1:
                    console.log("Bienvenido a la carga de un nuevo Automovil");
                    registroDeAutomoviles.cargarAutomotor();
                    break;
                case 2:
                    console.log("Eliminar un Automovil.");
                    let idEliminar: string = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.eliminarAutomotor(idEliminar);
                    break;
                case 3:
                    console.log("Consultar Automovil.");
                    let idConsulta: string = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.consultarAutomotor(idConsulta, true);
                    break;
                case 4:
                    console.log("Consultar Ficha Automovil .");
                    let idConsultaFicha: string = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.consultarAutomotor(idConsultaFicha, false);
                    break;    
                case 5:
                    console.log("Modificar Libro.");
                    let idModificar: string = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.modificarAutomotor(idModificar);
                    break;
                case 6:
                    registroDeAutomoviles.mostrarColeccion();
                    break;
                default:
                    console.log("El dato ingresado no se corresponde con ninguna opcion");
                    break;
            }
        }
        break;
}
