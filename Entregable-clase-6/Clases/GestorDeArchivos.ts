import * as fs from 'fs';
export default class GestorDeArchivos {
    private arregloString: string[];

    constructor(txtFileLocation: string) {
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); //esta variable guarda "Karen Simari,325486925;Juan Garcia,254879658;Lola Perez,124587625"
        this.arregloString = archivoTxt.split(';');  //vamos a tener nuestro "objetos" separados por ;
        //["Karen Simari,325486925","Juan Garcia,254879658", "Lola Perez,124587625"] 
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}