

export class Marker {
    public lat: number;
    public lng: number;
    public tittle: string = "Sin título";
    public description: string = "Sin descripción"

    constructor( lat: number, lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }
}