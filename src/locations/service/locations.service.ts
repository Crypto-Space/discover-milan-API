import { Model } from 'mongoose';
import { BadRequestException, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDto } from '../dto/update-location.dto';

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
      const location = await this.locationModel.findById(id);
      if (!location) {
        throw new BadRequestException();
      }
      return location;
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
  }

  async createLocation(input: CreateLocationDto): Promise<LocationDto> {
    try {
      const newLocation = new this.locationModel(input);
      return await newLocation.save();
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
  }

  async updateLocation(id: string, input: UpdateLocationDto): Promise<LocationDto> {
    try {
      return await this.locationModel.findOneAndUpdate({ _id: id }, input, { returnOriginal: false });
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
  }
}
