import Motor from "./Motor";

export default class Automotor {
    private modelo : string;
    private marca : string;
    private año : number;
    private patente: string;
    private motor: Motor;
   
    public constructor( modelo : string, marca : string, año : number, motor: Motor, patente?: string) {
        this.modelo = modelo;
        this.marca = marca;
        if (0<año && año<2099) {
            this.año = año;    
        }else {
            this.año = 2022;
        } 
        this.motor = motor;
        if (patente == undefined) {
         this.patente = "pendiente";
        } else {
            this.patente = patente;
        }
    }
    public getModelo (): string {
        return this.modelo;
    }
    public getMarca (): string {
        return this.marca;
    }
    public getAño (): number {
        return this.año;
    }
    public getPatente (): string {
        return this.patente;
    }
    public getMotor (): Motor {
        return this.motor;
    }
    public setModelo (modelo : string): void {
        this.modelo = modelo;
    }    
    public setPatente (patente: string): void {
        this.patente = patente;
    }
    public setAño (año: number) :void {
        this.año = año;
    }
    public estaPatentado (): boolean {
        return this.patente != "pendiente";
    }
}