import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
  NotFoundException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandler implements NestInterceptor {
  readonly #logger = new Logger(ErrorHandler.name);
  intercept(_: ExecutionContext, next: CallHandler<HttpException>): Observable<any> {
    return next.handle().pipe(
      catchError((error: HttpException) => {
        switch (error.name) {
          case BadRequestException.name:
            return throwError(() => error);
          case InternalServerErrorException.name:
            return throwError(() => error);
          case NotFoundException.name:
            return throwError(() => error);
          default:
            this.#logger.error('Default Error!');
            return throwError(() => error);
        }
      }),
    );
  }
}
