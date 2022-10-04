//import * as fs from 'fs';
import * as ReadlineSync from 'readline-sync';
import Libro from './Libro'

export default class GestorLibros {
    private listaLibros: Array<Libro>;

    public constructor(libros: Array<Libro>) {
        this.listaLibros = libros;
    }

    public getListaLibros(): Array<Libro> {
        return this.listaLibros;
    }
    /* Cargar Libro 
    * Ingresar un nuevo libro a la colección por teclado.
    */
    public cargarLibro(): void {
        let titulo: string = ReadlineSync.question("Ingrese el titulo del libro: ");
        let autor: string = ReadlineSync.question("Ingrese el autor del libro: ");
        let editorial: string = ReadlineSync.question("Ingrese la editorial del libro: ");
        let codigo: string = ReadlineSync.question("Ingrese el codigo de barra del libro: ");
        let nuevoLibro : Libro = new Libro(titulo,autor,editorial,codigo);
        this.agregarLibro(nuevoLibro);        
    }
    /* Eliminar Libro
    *  Dada una identificación valida elimina el libro de la colección.
    */
    public eliminarLibro(identificacion: string ): void {
        let librosAux: Libro[] = [];
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.listaLibros.length; t++) {
            let nuevoLibro : Libro = this.listaLibros[t];
	        if (nuevoLibro.getCodigoBarra() != identificacion) {
                librosAux.push(nuevoLibro);
            }
            else {
                encontrado = true;
            }
        }
        if (encontrado){
            this.listaLibros = librosAux;
            console.log("La identificación fue eliminada.");
        }
    }
    /* Insertar
    * Dado un libro lo agrega a la colección de libros.
    */    
    public agregarLibro(ejemplar: Libro): void {
        this.listaLibros.push(ejemplar);
    }
    /* consultar
    * Dada un numero de identificación válido devuelve por pantalla el libro que poseea
    * esa identificación entre la lista de libros de la colección.
    */   
    public consultarLibro(identificacion: string ): void {
        let encontrado: boolean = false;
        for (let t: number = 0; t < this.listaLibros.length; t++) {
            let nuevoLibro : Libro = this.listaLibros[t];
	        if (nuevoLibro.getCodigoBarra() == identificacion) {
                t = this.listaLibros.length;
                this.mostrarLibro(nuevoLibro, true, true);
                encontrado = true;
            }
        }
        if (encontrado == false){ 
            console.log("La identificación no existe.");
        }
    }
    /* Modificar Libro
    * Dada un numero de identificacion válido lo detecta y realiza las consultas 
    * para hacer las modificaciones pertinentes al libro.
    */  
    public modificarLibro(identificacion: string ): void {
        for (let t: number = 0; t < this.listaLibros.length; t++) {
            let nuevoLibro : Libro = this.listaLibros[t];
	        if (nuevoLibro.getCodigoBarra() == identificacion) {
                console.log(`Actualmente el titulo es ${nuevoLibro.getTitulo()}`);
                let titulo: string = ReadlineSync.question(`Ingrese el nuevo titulo para el libro:`);
                nuevoLibro.setTitulo(titulo);
                console.log(`Actualmente el autor del libro es: ${nuevoLibro.getAutor()}`);
                let autor: string = ReadlineSync.question("Ingrese el nuevo nombre de autor del libro:");
                nuevoLibro.setAutor(autor);
                console.log(`Actualmente la editorial del libro es: ${nuevoLibro.getEditorial()}`);
                let editorial: string = ReadlineSync.question("Ingrese la nueva Editorial del libro:");
                nuevoLibro.setEditorial(editorial);
                console.log(`Actualmente el Codigo de Barra del libro es: ${nuevoLibro.getCodigoBarra()}`);
                let codigo: string = ReadlineSync.question("Ingrese el nuevo Codigo de Barra del libro:");
                nuevoLibro.setCodigoBarra(codigo);
                console.log("El libro fue modificado.")
                t = this.listaLibros.length;
            }
        }
    
    }
    /* Mostrar Libro
    * Dado ejemplar: libro lo imprime en patalla en formato de tabla.
    *  si primero es true imprime la cabecera de la tabla.
    *  si ultimo es true cierra el formato de la tabla sino deja abierta.
    */
    public mostrarLibro(ejemplar: Libro, primero:boolean, ultimo:boolean):void {
        if (primero) {
            console.log(`╔════════╦══════════════════════════════════════╦══════════════════════════════════════╦════════════════════════════════════╗`);
            console.log(`║ Codigo ║           Titulo                     ║             Autor                    ║       Editorial                    ║`);
        } 
        console.log(`╠════════╬══════════════════════════════════════╬══════════════════════════════════════╬════════════════════════════════════╣`);
        let valor: string = "║ ";
        valor += ejemplar.getCodigoBarra();
        while (valor.length < 9){ valor+= " "; }
        valor += "║ ";
        valor += ejemplar.getTitulo();
        while (valor.length < 48) { valor+=" "; }
        valor+= "║ ";
        valor+= ejemplar.getAutor();
        while (valor.length < 87) {
            valor+= " ";
        }
        valor+="║ ";
        valor+= ejemplar.getEditorial();
        while (valor.length < 124) {  valor+=" "; }
        valor+= "║";
        console.log(valor);
        if (ultimo) {
            console.log(`╚════════╩══════════════════════════════════════╩══════════════════════════════════════╩════════════════════════════════════╝`);
        }
    }
    /* Mostrar Colección
    *  Muestra en formato de tabla toda la colección disponible al momento.
    */
    public mostrarColeccion():void {
        for (let t: number = 0; t < this.listaLibros.length; t++) {
            let nuevoLibro : Libro = this.listaLibros[t];
	        if (t == 0) {
                this.mostrarLibro(nuevoLibro, true, false);    
            } else if (t == (this.listaLibros.length-1) ){
                this.mostrarLibro(nuevoLibro, false, true);    
            }else {
                this.mostrarLibro(nuevoLibro, false, false);    
            }
        }
    }
}