import { ApiProperty } from "@nestjs/swagger";

export class LocationDto {
    @ApiProperty()
    _id: string;
    @ApiProperty()
    name: string;
    @ApiProperty({ required: false })
    description: string;
    @ApiProperty()
    coordinates: { latitude: number, longitude: number };
    @ApiProperty({ required: false })
    imageNames: Array<string>;
    @ApiProperty({ required: false })
    link: string;
}