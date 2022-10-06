//import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';
import { generarPatente } from '../Helpers/functions';
import Automotor from './Automotor'
import Motor from './Motor';

export default class GestorAutomotor {
    private listaAutomotores: Array<Automotor>;

    public constructor(Automotores: Array<Automotor>) {
        this.listaAutomotores = Automotores;
    }

    public getListaAutomotores(): Array<Automotor> {
        return this.listaAutomotores;
    }
    /* Cargar Automotor 
    * Ingresar un nuevo Automotor a la colección por teclado.
    */
    public cargarAutomotor(): void {
        let modelo: string = ReadlineSync.question("Ingrese el modelo del Automotor: ");
        let marca: string = ReadlineSync.question("Ingrese la marca del Automotor: ");
        let año: number = ReadlineSync.questionInt("Ingrese el año del Automotor: ");
        console.log("Los datos correspondientes al motor se generan automaticamente para no demorar la carga.");
        console.log("La patente se asigna de forma aleatoria.");
        console.log("Para ver los datos completos del automovil debe consultar la opcion 4- Consultar Ficha Automotor.");
        let motor: Motor = new Motor("mx","marc-x",año,"mx-marc-x-"+ año);
        let nuevoAutomotor : Automotor = new Automotor(modelo,marca,año,motor,generarPatente());
        this.agregarAutomotor(nuevoAutomotor);        
    }
    /* Eliminar Automotor
    *  Dada una identificación valida elimina el Automotor de la colección.
    */
    public eliminarAutomotor(identificacion: string ): void {
        let AutomotoresAux: Automotor[] = [];
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.listaAutomotores.length; t++) {
            let nuevoAutomotor : Automotor = this.listaAutomotores[t];
	        if (nuevoAutomotor.getPatente().toLowerCase() != identificacion.toLowerCase()) {
                AutomotoresAux.push(nuevoAutomotor);
            }
            else {
                encontrado = true;
            }
        }
        if (encontrado){
            this.listaAutomotores = AutomotoresAux;
            console.log("La identificación fue eliminada.");
        }
    }
    /* Insertar
    * Dado un Automotor lo agrega a la colección de Automotores.
    */    
    public agregarAutomotor(ejemplar: Automotor): void {
        this.listaAutomotores.push(ejemplar);
    }
    /* consultar
    * Dada un numero de identificación válido devuelve por pantalla el Automotor que poseea
    * esa identificación entre la lista de Automotores de la colección.
    */   
    public consultarAutomotor(identificacion: string, enTabla: boolean ): void {
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.listaAutomotores.length; t++) {
            let nuevoAutomotor : Automotor = this.listaAutomotores[t];
	        if (nuevoAutomotor.getPatente().toLowerCase() == identificacion.toLowerCase()) {
                t = this.listaAutomotores.length;
                if (enTabla) {
                    this.mostrarAutomotor(nuevoAutomotor, true, true);    
                } else {
                    this.mostrarFichaAutomotor(nuevoAutomotor);
                }
                encontrado = true;
            }
        }
        if (encontrado == false){ 
            console.log("La identificación no existe.");
        }
    }
    /* Modificar Automotor
    * Dada un numero de identificacion válido lo detecta y realiza las consultas 
    * para hacer las modificaciones pertinentes al Automotor.
    */  
    public modificarAutomotor(identificacion: string ): void {
        for (let t: number = 0; t < this.listaAutomotores.length; t++) {
            let nuevoAutomotor : Automotor = this.listaAutomotores[t];
	        if (nuevoAutomotor.getPatente().toLowerCase() == identificacion.toLowerCase()) {
                console.log(`Actualmente el modelo es ${nuevoAutomotor.getModelo()}`);
                let modelo: string = ReadlineSync.question(`Ingrese el nuevo modelo para el Automotor:`);
                nuevoAutomotor.setModelo(modelo);
                console.log(`Actualmente el año del Automotor es: ${nuevoAutomotor.getAño()}`);
                let año: number = ReadlineSync.questionInt("Ingrese el nuevo año de fabricación del Automotor:");
                nuevoAutomotor.setAño(año);
                console.log("El Automotor fue modificado.")
                t = this.listaAutomotores.length;
            }
        }
    
    }
    /* Mostrar Automotor
    * Dado ejemplar: Automotor lo imprime en patalla en formato de tabla.
    *  si primero es true imprime la cabecera de la tabla.
    *  si ultimo es true cierra el formato de la tabla sino deja abierta.
    */
    public mostrarAutomotor(ejemplar: Automotor, primero:boolean, ultimo:boolean):void {
        if (primero) {
            console.log(`╔════════╦══════════════════════════════════════╦══════════════════════════════════════╦════════════════════════════════════╗`);
            console.log(`║Patente ║           Modelo                     ║             Marca                    ║       Año de Fabricación           ║`);
        } 
        console.log(`╠════════╬══════════════════════════════════════╬══════════════════════════════════════╬════════════════════════════════════╣`);
        let valor: string = "║ ";
        valor += ejemplar.getPatente();
        while (valor.length < 9){ valor+= " "; }
        valor += "║ ";
        valor += ejemplar.getModelo();
        while (valor.length < 48) { valor+=" "; }
        valor+= "║ ";
        valor+= ejemplar.getMarca();
        while (valor.length < 87) {
            valor+= " ";
        }
        valor+="║ ";
        valor+= ejemplar.getAño();
        while (valor.length < 124) {  valor+=" "; }
        valor+= "║";
        console.log(valor);
        if (ultimo) {
            console.log(`╚════════╩══════════════════════════════════════╩══════════════════════════════════════╩════════════════════════════════════╝`);
        }
    }

    public mostrarFichaAutomotor (ejemplar: Automotor): void {
        let linea: string;
        console.log(`╔═════════════════════╦═══════════════════════════════════════╗`);
        linea = ejemplar.getPatente();
        while (linea.length < 38) {  linea+=" "; }
        console.log(`║ Patente             ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea = ejemplar.getModelo();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Modelo              ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea = ejemplar.getMarca();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Marca               ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea = ejemplar.getAño().toString();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Año de Fabricación  ║ ${linea}║`);
        console.log(`╠═════════════════════╩═══════════════════════════════════════╣`);
        console.log(`║                     DATOS MOTOR                             ║`);
        console.log(`╠═════════════════════╦═══════════════════════════════════════╣`);
        linea =  ejemplar.getMotor().getModelo();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Modelo              ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea = ejemplar.getMotor().getMarca();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Marca               ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea =  ejemplar.getMotor().getAño().toString();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Año de Fabricación  ║ ${linea}║`);
        console.log(`╠═════════════════════╬═══════════════════════════════════════╣`);
        linea = ejemplar.getMotor().getCodigo();
        while (linea.length < 38) {  linea += " "; }
        console.log(`║ Codigo              ║ ${linea}║`);
        console.log(`╚═════════════════════╩═══════════════════════════════════════╝`);
    }

    /* Mostrar Colección
    *  Muestra en formato de tabla toda la colección disponible al momento.
    */
    public mostrarColeccion():void {
        if (this.listaAutomotores.length>0){
            for (let t: number = 0; t < this.listaAutomotores.length; t++) {
                let nuevoAutomotor : Automotor = this.listaAutomotores[t];
	            if (t == 0) {
                    this.mostrarAutomotor(nuevoAutomotor, true, false);    
                } else if (t == (this.listaAutomotores.length-1) ){
                    this.mostrarAutomotor(nuevoAutomotor, false, true);    
                }else {
                    this.mostrarAutomotor(nuevoAutomotor, false, false);    
                }
            }
        } else {
            console.log(``);
            console.log(``);
            console.log(`╔══════════════════════════════════════════════════════════╗`);
            console.log("║   No existen Automoviles registrados por el momento.     ║");
            console.log("║   Cargue uno ingresando a la opcion 1 del menu.          ║");
            console.log(`╚══════════════════════════════════════════════════════════╝`);
            console.log(``);
            console.log(``);
        }
    }
}