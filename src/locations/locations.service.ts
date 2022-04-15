import { Injectable } from '@nestjs/common';
import { ILocation } from '../model';
import { locationData } from '../config/mock';

@Injectable()
export class LocationsService {

  constructor() {}
  
  public getAll(): ILocation[] {
    return locationData;
  }
  
  public getById(id: number) {
    return locationData.find(location => location.id === id);
  }
}
