import { Automotor } from "./Automotor";

export default class AutoCiudad extends Automotor {
    
    public constructor() {
        super();
        this.capacidadTanque = 60;
        this.consumo = 0.01;
    }

    public acelerar (): void {
        if (this.cantidadCombustible> this.consumo) {
            this.velocidadActual+=1;
            this.cantidadCombustible -= this.consumo; 
        }else {
            console.log("STOP");
        }
    }
    public frenar (): void {
        if (this.cantidadCombustible>0.2) {
            if (this.velocidadActual>1)  {
                this.velocidadActual-=1;
                this.cantidadCombustible -= this.consumo; 
            }
        }else {
            console.log("STOP");
        }

    }
}