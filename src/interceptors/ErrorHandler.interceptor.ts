import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandler implements NestInterceptor {
  readonly #logger = new Logger(ErrorHandler.name);
  intercept(_: ExecutionContext, next: CallHandler<HttpException>): Observable<HttpException> {
    return next.handle().pipe(
      catchError((error: HttpException) => {
        switch (error.name) {
          case BadRequestException.name:
            this.#logger.error(`[BadRequestException] ${error.message}`);
            return of(EMPTY);
          case InternalServerErrorException.name:
            this.#logger.error(`[InternalServerErrorException] ${error.message}`);
            return of(EMPTY);
          case NotFoundException.name:
            this.#logger.error(`[NotFoundException] ${error.message}`);
            return of(EMPTY);
          default:
            this.#logger.error(`[Default Error] ${error.message}`);
            return of(EMPTY);
        }
      }),
    );
  }
}
