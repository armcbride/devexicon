module.exports= {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    host: DB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }
}
