export const environment = {
  api: {
    port: process.env.API_PORT || 3000,
    host: process.env.API_HOST || 'localhost',
  },
  database: {
    type: process.env.DB_TYPE || 'mongo',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 27017,
    username: process.env.MONGO_INITDB_ROOT_USERNAME || '',
    password: process.env.MONGO_INITDB_ROOT_PASSWORD || '',
    database: process.env.DB_NAME,
    collections: process.env.MONGO_DB_COLLECTIONS.split(','),
  },
};
