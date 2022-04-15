import { Connection } from 'mongoose';
import { LocationSchema } from '../../schemas/location.schema';

export const locationProviders = [
  {
    provide: 'LOCATION_MODEL',
    useFactory: (connection: Connection) => connection.model('Location', LocationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];