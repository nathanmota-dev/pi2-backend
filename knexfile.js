require('dotenv').config();

module.exports = {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    pool: {
        min: parseInt(process.env.DB_POOL_MIN, 10),
        max: parseInt(process.env.DB_POOL_MAX, 10),
    },
    migrations: {
        tableName: process.env.DB_MIGRATIONS_TABLE,
    },
};
