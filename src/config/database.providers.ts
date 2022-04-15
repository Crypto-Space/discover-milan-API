import { env } from 'is_not_env';
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${env.DB_ADMIN}:${env.DB_PWD}@${env.DB_CLUSTER_NAME}.iufkn.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`,
      ),
  },
];
