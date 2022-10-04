import GestorDeArchivos from './Clases/GestorDeArchivos';
import GestorLibros from './Clases/GestorLibros';
import Libro from "./Clases/Libro";
import crearLibro from './helpers/functions'
import * as ReadlineSync from 'readline-sync';
//Iniciar programa
/*
* Obtengo del archivo *.txt los libros 
*/
console.log(`Cargando los datos desde el archivo...`);
let datos: GestorDeArchivos = new GestorDeArchivos("listado-libros.txt");
//Estos son los datos que hay en el archivo.
//datos.mostrarArreglo();
console.log(`Se cargaron ${datos.getArregloString().length } registro(s) desde el archivo...`);
let listaEjemplares : Array<Libro> = [];
console.log(`Inicializando Libros...`);
for (let i : number= 0; i < datos.getArregloString().length; i++){
    crearLibro(datos.getArregloString()[i], listaEjemplares);
    
}
let biblioteca : GestorLibros = new GestorLibros(listaEjemplares);
console.log(`Biblioteca creada...`);

function imprimirMenu():void {
    console.log(`╔═════════════════════════════════════════╗`);
    console.log(`║                 MENU                    ║`);
    console.log(`╠═════════════════════════════════════════╣`);
    console.log(`║ 1- Cargar Libro Nuevo.                  ║`);
    console.log(`║ 2- Eliminar Libro.                      ║`);
    console.log(`║ 3- Consultar Libro.                     ║`);
    console.log(`║ 4- Modificar Libro.                     ║`);
    console.log(`║ 5- Mostrar toda la Biblioteca.          ║`);
    console.log(`║ 0- Salir.                               ║`);
    console.log(`╚═════════════════════════════════════════╝`);
}
let opcion: number = 1;
while (opcion != 0){
    imprimirMenu()
    opcion = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (opcion) {
    case 0:
        console.log("Gracias por utilizar la Aplicacion.");
        break;
    case 1:
        console.log("Bienvenido a la carga de nuevo Libro");
        biblioteca.cargarLibro();
        break;
    case 2:
        console.log("Eliminar Libro.");
        let idEliminar: string = ReadlineSync.question("Ingrese el numero de Identificacion: ");
        biblioteca.eliminarLibro(idEliminar);
        break;
    case 3:
        console.log("Consultar Libro.");
        let idConsulta: string = ReadlineSync.question("Ingrese el numero de Identificacion: ");
        biblioteca.consultarLibro(idConsulta);
        break;
    case 4:
        console.log("Modificar Libro.");
        let idModificar: string = ReadlineSync.question("Ingrese el numero de Identificacion: ");
        biblioteca.modificarLibro(idModificar);
        break;
    case 5:
        biblioteca.mostrarColeccion();
        break;
    default:
        console.log("El dato ingresado no se corresponde con ninguna opcion");
        break;
    }
}
