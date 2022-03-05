export class Club {
    public idClub	: number;
    public descripcion : string;
    public logo : string;

    constructor(idClub : number, descripcion : string, logo : string) {
        this.idClub = idClub;
        this.descripcion = descripcion;
        this.logo = logo;
    }
}