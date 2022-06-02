const { Pool } = require("pg")
// Coloca aquí tus credenciales
const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "vision",
  password: "12345",
  port: 8080,
});
module.exports = pool;
