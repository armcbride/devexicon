module.exports= {
development: {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
},
staging: {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
},
production: {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false
}
};