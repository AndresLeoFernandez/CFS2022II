import { Automotor } from "./Automotor";

export default class AutoDeportivo extends Automotor {
    
    public constructor() {
        super();
        this.capacidadTanque = 80;
        this.consumo = 0.08;
    }

    public acelerar (): void {
        this.velocidadActual+=3;
        this.cantidadCombustible -= this.consumo; 
    }
    public frenar (): void {
       if (this.velocidadActual>1)  {
        this.velocidadActual-=3;
        this.cantidadCombustible -= this.consumo; 
       }
    }
}