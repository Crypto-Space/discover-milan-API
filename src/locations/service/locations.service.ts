import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { ILocation } from '../../model';
import { locationData } from '../../config/mock';

@Injectable()
export class LocationsService {

  constructor(
    @Inject('LOCATION_MODEL') private locationModel: Model<Location>
  ) {}
  
  public getAll()  {
    this.locationModel.find();
  }
  
  public getById(id: number) {
    return locationData.find(location => location.id === id);
  }
}
