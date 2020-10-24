// This configuration file is used only with TypeORM CLI!
const { join } = require('path');

module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: process.env.NODE_ENV === 'development',
  logging: process.env.NODE_ENV === 'development',
  entities: ['src/**/*.entity.ts'],
  migrations: ['migrations/*.ts'],
};
