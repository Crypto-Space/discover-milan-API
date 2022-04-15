import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ILocation } from 'src/model';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  @ApiTags('Locations')
  private getAllLocations(): ILocation[] {
    return this.locationsService.getAll();
  }
  
  @Get(':id')
  @ApiTags('Locations')
  private getLocationById(@Param('id', ParseIntPipe) id: number): ILocation {
    return this.locationsService.getById(id);
  }
  
}
