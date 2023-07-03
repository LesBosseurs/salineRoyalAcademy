import { Pool, Client } from 'pg';

const pool = new Pool({
  host: 'db',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

export default pool;
