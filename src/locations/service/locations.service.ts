import { Model } from 'mongoose';
import {
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDto } from '../dto/update-location.dto';

@Injectable()
export class LocationsService {
  readonly #logger = new Logger(LocationsService.name);

  constructor(
    @Inject('LOCATION_MODEL') private locationModel: Model<LocationDto>,
  ) {}

  async getAll(): Promise<LocationDto[]> {
    return await this.locationModel.find();
  }

  async getById(id: string): Promise<LocationDto> {
    const location = await this.locationModel.findOne({ _id: id })
    .catch((err) => {
      throw new NotFoundException(`Location with id ${id} not found!`);
    });
    return location;
  }

  async createLocation(input: CreateLocationDto): Promise<LocationDto> {
    const newLocation = new this.locationModel(input);
    return await newLocation.save();
  }

  async createMultiLocation(
    input: CreateLocationDto[],
  ): Promise<LocationDto[]> {
    return await this.locationModel.insertMany(input);
  }

  async updateLocation(
    id: string,
    input: UpdateLocationDto,
  ): Promise<LocationDto> {
    return await this.locationModel.findOneAndUpdate({ _id: id }, input, {
      returnOriginal: false,
    })
  }

  async deleteLocation(id: string): Promise<LocationDto> {
    return await this.locationModel.findByIdAndDelete(id);
  }
}
