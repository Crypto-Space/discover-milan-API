import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiBearerAuth()
  @Post()
  @ApiTags('Locations')
  async postLocation(@Body() input: CreateLocationDto): Promise<LocationDto> {
    return await this.locationsService.createLocation(input);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: CreateLocationDto })
  @ApiBearerAuth()
  @Post('multipleData')
  @ApiTags('Locations')
  async postMultiLocation(
    @Body() input: CreateLocationDto[],
  ): Promise<LocationDto[]> {
    return await this.locationsService.createMultiLocation(input);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: UpdateLocationDto })
  @ApiBearerAuth()
  @Put(':id')
  @ApiTags('Locations')
  async putLocation(
    @Param('id') id: string,
    @Body() input: UpdateLocationDto,
  ): Promise<LocationDto> {
    return await this.locationsService.updateLocation(id, input);
  }

  @ApiResponse({ type: Boolean })
  @ApiBearerAuth()
  @Delete(':id')
  @ApiTags('Locations')
  async deleteLocation(@Param('id') id: string): Promise<LocationDto> {
    return await this.locationsService.deleteLocation(id);
  }
}
