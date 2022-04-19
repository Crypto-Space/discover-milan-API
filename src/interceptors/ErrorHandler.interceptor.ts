import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandler implements NestInterceptor {
  #logger = new Logger(ErrorHandler.name);
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof BadRequestException) {
          return throwError(() => new BadRequestException());
        } else if (error instanceof InternalServerErrorException) {
          return throwError(
            () => new InternalServerErrorException(error.message),
          );
        } else {
          this.#logger.error('Default Error!');
          return throwError(() => error);
        }
      }),
    );
  }
}
