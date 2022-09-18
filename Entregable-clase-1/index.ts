// Importo la libreria
import * as fs from 'fs';
// Alojo en la variable texto el contenido del archivo numeros.txt como una cadena de string
let texto : string = fs.readFileSync("numeros.txt", "utf-8");
// Alojo en el arreglo de string valores una cadena de caracteres por posicion que representa un numero
let valores : string[] = texto.split(" ");
// Alojo en el arreglo arrOfNum cada uno de los valores en formato Number
let arrOfNum = valores.map(str => { return Number(str); });

/* Funcion sumaArrego 
*  (in) Ingresa arreglo de numeros 
*  (out) Retorna un valor numerico que es la suma
*/
const sumarArreglo = (arreglo: number[]): number => {
    let suma : number = 0; 
    for (let i: number = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}
//muestro por consola el resultado total
console.log(sumarArreglo(arrOfNum));