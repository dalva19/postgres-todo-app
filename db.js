const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRESS_DB_USER,
  password: process.env.POSTGRES_DB_PW,
  database: "todo_database",
  host: "localhost",
  post: 5432,
});

module.exports = pool;
