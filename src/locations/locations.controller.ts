import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  private getAllLocations() {
    return this.locationsService.getAll();
  }
  
  @Get(':id')
  private getLocationById(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.getById(id);
  }
  
}
