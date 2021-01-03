import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  //   host: 'localhost',
  url:
    'postgres://ndivannthzosat:f444f31effa9d4a8b4da2f2ea6849af9b78e009895a823c3fec652315d13bd2a@ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/de29i7dcglu7lg',
  //   port: 5432,
  retryAttempts: 5,
  //   username: 'postgres',
  //   username: 'ndivannthzosat',
  //   password: 'postgres',
  //   password: 'f444f31effa9d4a8b4da2f2ea6849af9b78e009895a823c3fec652315d13bd2a',
  //   database: 'books',
  //   database: 'de29i7dcglu7lg',
  // entities: [__dirname + './../**/*.entity.ts'],
  entities: [join(__dirname, '..', 'modules', '**', '*.entity{.ts,.js}')],
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
}
