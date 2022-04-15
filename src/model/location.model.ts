
export interface ILocation {
    id: number;
    name: string;
    coordinates: { latitude: number, longitude: number };
    description?: string;
    imageNames?: string[];
    link?: string;
}