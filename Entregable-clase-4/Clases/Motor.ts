export default class Motor {
    private modelo : string;
    private marca : string;
    private año : number;
    private codigo: string;
   
    public constructor( modelo : string, marca : string, año : number, codigo: string){
        this.modelo = modelo;
        this.marca = marca;
        if (0<año && año<2099) {
            this.año = año;    
        }else {
            this.año = 2022;
        } 
        this.codigo = codigo;
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
    public getCodigo (): string {
        return this.codigo;
    }
    public setModelo (modelo : string): void {
        this.modelo = modelo;
    }
    
    public setCodigo (codigo: string): void {
        this.codigo = codigo;
    }
}