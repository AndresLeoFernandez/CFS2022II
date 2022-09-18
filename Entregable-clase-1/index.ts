// Importo la libreria
import * as fs from 'fs';
// alojo en la variable texto el contenido del archivo como un string
let texto : string = fs.readFileSync("numeros.txt", "utf-8");
//let texto : string = "1 2 3 4 5"
// alojo en la variable palabras arreglo de string caa una de las palabras
let valores : string[] = texto.split(" ");
let arrOfNum = valores.map(str => { return Number(str); });

const sumarArreglo = (arreglo: number[]): number => {
    let suma : number = 0; 
    for (let i: number = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

console.log(sumarArreglo(arrOfNum));