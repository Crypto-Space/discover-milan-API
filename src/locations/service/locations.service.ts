import { Model } from 'mongoose';
import { BadRequestException, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';

@Injectable()
export class LocationsService {

  readonly #logger = new Logger(LocationsService.name);

  constructor(
    @Inject('LOCATION_MODEL') private locationModel: Model<LocationDto>
  ) {}
  
  async getAll(): Promise<LocationDto[]> {
    try {
      return await this.locationModel.find();      
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
  }
  
  async getById(id: string): Promise<LocationDto> {
    try {
      const location = await this.locationModel.findOne({ _id: id });
      if (!location) {
        throw new BadRequestException();
      }
      return location;
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
  }
}
