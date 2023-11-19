module.exports = {
    client: "mysql2",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "bd-pi2"
    },
    poll: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: "knex_migrations"
    }
}