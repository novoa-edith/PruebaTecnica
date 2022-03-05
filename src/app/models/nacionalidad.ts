export class Nacionalidad {
    public idNacionalidad	: number;
    public descripcion : string;
    public continente: string;

    constructor(idNacionalidad : number, descripcion : string, continente : string) {
        this.idNacionalidad = idNacionalidad;
        this.descripcion = descripcion;
        this.continente = continente;
    }
}