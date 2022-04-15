import { Module } from '@nestjs/common';
import { LocationsService } from './service/locations.service';
import { LocationsController } from './locations.controller';

@Module({
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
