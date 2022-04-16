import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Location {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop({ type: Object })
  coordinates: { location: number; longitude: number };
  @Prop()
  imageNames: string[];
  @Prop()
  link: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
