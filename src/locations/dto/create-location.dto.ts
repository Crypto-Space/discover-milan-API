import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
  @ApiProperty({ required: true, example: 'Duomo di Milano' })
  name: string;
  @ApiProperty({
    required: true,
    example: 'Il duomo si trova al centro di Milano',
  })
  description: string;
  @ApiProperty({
    required: true,
<<<<<<< HEAD
    example: '{ "latitude": 1.0; "longitude": 2.0} ',
=======
    example: { latitude: 1.0, longitude: 2.0 },
>>>>>>> 4484ec81a17cb16383e63c204dfa91b644d88d0d
  })
  coordinates: { latitude: number; longitude: number };
  @ApiProperty({ required: false, example: '["link_1.png", "link_2.png"]' })
  imageNames: Array<string>;
  @ApiProperty({ required: false, example: 'https://www.google.it' })
  link: string;
}