import  Camioneta  from './Clases/Camioneta';
import AutoCiudad from './Clases/AutoCiudad';

/* Creo una camioneta para pruebas*/
let camioneta = new Camioneta();
camioneta.ver();
camioneta.prender();
camioneta.ver();
for(let t:number = 1;t<15;t++){
    camioneta.acelerar();    
}
camioneta.ver();
/* Creo un auto particular para pruebas*/
let autoParticular = new AutoCiudad();
autoParticular.ver();
autoParticular.prender();
autoParticular.ver();
for(let t:number = 1;t<15;t++){
    autoParticular.acelerar();
}
autoParticular.cargarCombustible(15);
autoParticular.ver();
autoParticular.cargarCombustible(45);
autoParticular.ver();
