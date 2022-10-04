import Libro from "../Clases/Libro";

export default function crearLibro(libroTexto: string, arrayLibros: Array<Libro>) : void{

    let propiedadesLibro : string[] = libroTexto.split(','); 
    let titulo: string = propiedadesLibro[0];
    let autor: string = propiedadesLibro[1];
    let editorial: string = propiedadesLibro[2];
    let codigo: string = propiedadesLibro[3];
    let nuevoLibro : Libro = new Libro(titulo,autor,editorial,codigo);
    arrayLibros.push(nuevoLibro);
}
