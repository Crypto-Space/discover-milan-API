import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ILocation } from 'src/model';
import { LocationsService } from './service/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  @ApiTags('Locations')
  private getAllLocations() {
    return this.locationsService.getAll();
  }
  
  @Get(':id')
  @ApiTags('Locations')
  private getLocationById(@Param('id', ParseIntPipe) id: number): ILocation {
    return this.locationsService.getById(id);
  }
  
}
