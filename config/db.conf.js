module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "user123",
  DB: "test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
}