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
  intercept(_: ExecutionContext, next: CallHandler<HttpException>): Observable<HttpException> {
    return next.handle().pipe(
      catchError((error: HttpException) => {
        switch (error.name) {
          case BadRequestException.name:
            this.#logger.error(`Bad request: ${error.message}`);
            return throwError(() => error);
          case InternalServerErrorException.name:
            this.#logger.error(`Internal server error: ${error.message}`);
            return throwError(() => error);
          case NotFoundException.name:
            this.#logger.error(`Not found: ${error.message}`);
            return throwError(() => error);
          default:
            this.#logger.error(`Generic error: ${error.message}`);
            return throwError(() => error);
        }
      }),
    );
  }
}
