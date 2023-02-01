import postgres from 'postgres';

const sql = postgres({
  host: 'postgres',
  port: 5432,
  database: 'postgres',
  username: 'postgres',
  password: 'postgres'
});

export default sql;