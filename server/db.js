import pg from "pg";

// database
const db = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "traveling",
  password: "mukul",
  port: 5432,
});

export default db;
