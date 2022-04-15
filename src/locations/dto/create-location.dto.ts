import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
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