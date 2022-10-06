import Automotor from "../Clases/Automotor";
import Motor from "../Clases/Motor";

const letras: Array<string> = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"];

function Azar(tope: number): number {
    return Math.floor(Math.random() * tope);
}
/* Generar Patente
*   Funcion auxiliar que retorna una patente con formato LLL-999 donde 
    L es una letra del abecedario y 
    9 un numero entre 0 y 9.
*/
export function generarPatente(): string {
    let resultado = "";
    resultado += letras[Azar(25)];
    resultado += letras[Azar(25)];
    resultado += letras[Azar(25)];
   resultado += "-"; 
    resultado += Azar(10);
    resultado += Azar(10);
    resultado += Azar(10);
    return resultado;
}
/* Crear Automotor
*  Transforma una cadena que contiene todos los campos que necesita un automotor para crearse y 
*  genera un objeto Automotor con su respectivo Motor 
*/
export default function crearAutomotor(automotorTexto: string, arrayAutomotores: Array<Automotor>) : void {
    let propiedadesAutomotor : string[] = automotorTexto.split(','); 
    let modelo: string = propiedadesAutomotor[0];
    let marca: string = propiedadesAutomotor[1];
    let año: number = Number(propiedadesAutomotor[2]);
    let patente: string = propiedadesAutomotor[3];
    let modeloMotor: string = propiedadesAutomotor[4];
    let marcaMotor: string = propiedadesAutomotor[5];
    let añoMotor: number = Number(propiedadesAutomotor[6]);
    let codigo: string = modeloMotor + "-" + marcaMotor + "-" + añoMotor;
    let motor: Motor = new Motor(modeloMotor,marcaMotor, añoMotor,codigo);
    let nuevoAutomotor : Automotor = new Automotor(modelo,marca,año,motor,patente);
    arrayAutomotores.push(nuevoAutomotor);
}