export class Location {
    id: number;
    name!: string;
    cityName!: string;
    coordinates!: { latitude: number, longitude: number };
    description?: string;
    imageNames?: string[];
    link?: string;

    constructor(data: Location) {
        Object.assign(this, data);
    }
}
