import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocationDto } from './dto/location.dto';
import { LocationsService } from './service/locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiResponse({ type: [LocationDto] })
  @Get()
  @ApiTags('Locations')
  async getAllLocations(): Promise<LocationDto[]> {
    return await this.locationsService.getAll();
  }
  
  @ApiResponse({ type: LocationDto })
  @Get(':id')
  @ApiTags('Locations')
  async getLocationById(@Param('id') id: string): Promise<LocationDto> {
    return await this.locationsService.getById(id);
  }
  
}
