export abstract class Automotor {
    private estaPrendido: boolean;
    protected velocidadActual: number;
    protected cantidadCombustible: number;
    protected capacidadTanque: number;
    protected consumo: number;

    public constructor() {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.cantidadCombustible = 10;
    }

    abstract acelerar (): void;
        
    abstract frenar (): void;

    public cargarCombustible(cantidad:number){
        while (( this.cantidadCombustible < this.capacidadTanque-1)&&(cantidad>0)) {
            this.cantidadCombustible+=1;
            console.log(`${this.cantidadCombustible} Cargando... ${this.cantidadCombustible} litros.`);
            cantidad-=1;
        }
        if (cantidad>0) {
            console.log("Tanque lleno, retire la manguera.")
        }
    }
    public verCombustible():number {
        return this.cantidadCombustible;
    }
    public prender (): void {
        if (this.cantidadCombustible>this.consumo) {
            this.estaPrendido = true;
            console.log(`Auto Encendido.`);
            this.cantidadCombustible -= this.consumo; 
        }
    }
    public apagar (): void {
        this.estaPrendido = false;
        console.log(`Auto Apagado.`)
    }
    public ver (): void {
        console.log(this);
    } 
}