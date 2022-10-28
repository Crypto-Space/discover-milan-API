import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorHandler } from 'src/interceptors/ErrorHandler.interceptor';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationDto } from './dto/location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationsService } from './service/locations.service';

@ApiTags('Locations')
@Controller('locations')
@UseInterceptors(ErrorHandler)
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiResponse({ type: [LocationDto] })
  @Get()
  async getAllLocations(): Promise<LocationDto[]> {
    return await this.locationsService.getAll();
  }

  @ApiResponse({ type: LocationDto })
  @Get(':id')
  async getLocationById(@Param('id') id: string): Promise<LocationDto> {
    return await this.locationsService.getById(id);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: CreateLocationDto })
  @ApiBearerAuth()
  @Post()
  async postLocation(@Body() input: CreateLocationDto): Promise<LocationDto> {
    return await this.locationsService.createLocation(input);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: CreateLocationDto })
  @ApiBearerAuth()
  @Post('multipleData')
  async postMultiLocation(
    @Body() input: CreateLocationDto[],
  ): Promise<LocationDto[]> {
    return await this.locationsService.createMultiLocation(input);
  }

  @ApiResponse({ type: LocationDto })
  @ApiBody({ type: UpdateLocationDto })
  @ApiBearerAuth()
  @Put(':id')
  async putLocation(
    @Param('id') id: string,
    @Body() input: UpdateLocationDto,
  ): Promise<LocationDto> {
    return await this.locationsService.updateLocation(id, input);
  }

  @ApiResponse({ type: Boolean })
  @ApiBearerAuth()
  @Delete(':id')
  async deleteLocation(@Param('id') id: string): Promise<LocationDto> {
    return await this.locationsService.deleteLocation(id);
  }
}
