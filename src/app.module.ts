import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { ErrorHandler } from './interceptors/ErrorHandler.interceptor';
import { LocationsModule } from './locations/locations.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LocationsModule, DatabaseModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: ErrorHandler }],
})
export class AppModule {}
