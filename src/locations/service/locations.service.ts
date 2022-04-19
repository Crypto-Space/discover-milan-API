import { Model } from 'mongoose';
<<<<<<< HEAD
import { BadRequestException, Inject, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDto } from '../dto/update-location.dto';
=======
import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  UseInterceptors,
} from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';
import { CreateLocationDto } from '../dto/create-location.dto';
import { UpdateLocationDto } from '../dto/update-location.dto';
import { ErrorHandler } from 'src/interceptors/ErrorHandler.interceptor';
>>>>>>> 4484ec81a17cb16383e63c204dfa91b644d88d0d

@UseInterceptors(new ErrorHandler())
@Injectable()
export class LocationsService {
  readonly #logger = new Logger(LocationsService.name);

  readonly #logger = new Logger(LocationsService.name);

  constructor(
<<<<<<< HEAD
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

  async deleteLocation(id: string): Promise<LocationDto> {
    try {
      return await this.locationModel.findByIdAndDelete(id);
    } catch ({ status, message }) {
      this.#logger.error(`${status}, ${message}`);
      throw new InternalServerErrorException();
    }
=======
    @Inject('LOCATION_MODEL') private locationModel: Model<LocationDto>,
  ) {}

  async getAll(): Promise<LocationDto[]> {
    return await this.locationModel.find();
  }

  async getById(id: string): Promise<LocationDto> {
    const location = await this.locationModel.findById(id);
    if (!location) {
      throw new BadRequestException();
    }
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
    });
  }

  async deleteLocation(id: string): Promise<LocationDto> {
    return await this.locationModel.findByIdAndDelete(id);
>>>>>>> 4484ec81a17cb16383e63c204dfa91b644d88d0d
  }
}
