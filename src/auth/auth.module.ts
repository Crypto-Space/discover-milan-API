import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { env } from '../../is_not_env';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
    secret: env.SECRET,
    signOptions: { expiresIn: '2m' }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
