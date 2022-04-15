import { Module } from '@nestjs/common';
import { LocationsService } from './service/locations.service';
import { LocationsController } from './locations.controller';
import { locationProviders } from './provider/location.provider';
import { DatabaseModule } from 'src/config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationsController],
  providers: [LocationsService, ...locationProviders],
})
export class LocationsModule {}
