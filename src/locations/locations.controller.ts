import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationDto } from './dto/location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
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
  
  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: CreateLocationDto })
  @Post()
  @ApiTags('Locations')
  async postLocation(@Body() input: CreateLocationDto): Promise<LocationDto> {
    return await this.locationsService.createLocation(input);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: UpdateLocationDto })
  @Put(':id')
  @ApiTags('Locations')
  async putLocation(@Param('id') id: string, @Body() input: UpdateLocationDto) {
    return await this.locationsService.updateLocation(id, input);
  }
}
