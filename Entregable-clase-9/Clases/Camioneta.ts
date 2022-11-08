import { Automotor } from "./Automotor";

export default class Camioneta extends Automotor {
    
    public constructor() {
        super();
        this.capacidadTanque = 100;
        this.consumo = 0.025;
    }

    public acelerar (): void {
        this.velocidadActual+=2;
        this.cantidadCombustible -= this.consumo; 
    }
    public frenar (): void {
       if (this.velocidadActual>1)  {
        this.velocidadActual-=2;
        this.cantidadCombustible -= this.consumo; 
       }
    }
    
  
}