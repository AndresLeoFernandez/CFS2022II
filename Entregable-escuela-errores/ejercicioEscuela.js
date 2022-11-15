var Alumno = /** @class */ (function () {
    function Alumno(nombre, DNI, nota) {
        this.nombre = nombre;
        this.DNI = DNI;
        this.nota = nota;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota < 0) {
            throw new Error('Numero Invalido: No existe un valor nota menor a 0');
        }
        else if (this.nota >= 0 && this.nota < 7) {
            console.log("El alumnno ".concat(this.nombre, " esta desaprobado"));
        }
        else if (this.nota >= 7 && this.nota <= 10) {
            console.log("El alumnno ".concat(this.nombre, " esta aprobado"));
        }
        else if (this.nota > 10) {
            throw new Error('Numero Invalido: No existe nota mayor a 10');
        }
    };
    return Alumno;
}());
//Iniciar programa
var alumno1 = new Alumno("Joaquin Mana", 32569854, -8);
var alumno2 = new Alumno("Gabriela Mana", 14582854, 5);
var alumno3 = new Alumno("Joaquin Mimo", 32569854, 8);
var alumno4 = new Alumno("Gabriela Mini", 4582854, 15);
/*alumno1.estaAprobado();*/
/**
 * Si dejo asi emite toda las lineas de errores
*/
console.log("Ejecuto Test para ver los resultados.");
try {
    console.log("ejecuto alumno1.estaAprobado()");
    alumno1.estaAprobado();
}
catch (error) {
    console.log(error.message);
}
try {
    console.log("ejecuto alumno2.estaAprobado()");
    alumno2.estaAprobado();
}
catch (error) {
    console.log(error.message);
}
try {
    console.log("ejecuto alumno3.estaAprobado()");
    alumno3.estaAprobado();
}
catch (error) {
    console.log(error.message);
}
try {
    console.log("ejecuto alumno4.estaAprobado()");
    alumno4.estaAprobado();
}
catch (error) {
    console.log(error.message);
}
