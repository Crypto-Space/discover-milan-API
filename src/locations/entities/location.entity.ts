export class Location {
    id: number;
    name!: string;
    address!: string;
    coordinates!: { latitude: number, longitude: number };
    description?: string;
    imageNames?: string[];
    link?: string;

    constructor(data: Location) {
        Object.assign(this, data);
    }
}
