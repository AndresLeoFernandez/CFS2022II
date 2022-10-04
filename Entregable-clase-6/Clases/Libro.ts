export default class Libro {
    private titulo : string;
    private autor : string;
    private editorial : string;
    private codigoBarra: string;
   
    public constructor( titulo : string, autor : string, editorial : string, codigoBarra: string){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.codigoBarra = codigoBarra;
    }
    public getTitulo (): string {
        return this.titulo;
    }
    public getAutor (): string {
        return this.autor;
    }
    public getEditorial (): string {
        return this.editorial;
    }
    public getCodigoBarra (): string {
        return this.codigoBarra;
    }
    public setTitulo (titulo : string): void {
        this.titulo = titulo;
    }
    public setAutor (autor: string): void {
        this.autor = autor;
    }
    public setEditorial (editorial: string): void {
        this.editorial = editorial;
    }
    public setCodigoBarra (codigoBarra: string): void {
        this.codigoBarra = codigoBarra;
    }
}