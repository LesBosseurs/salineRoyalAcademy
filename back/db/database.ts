import { Pool, Client } from 'pg';

// Connexion via docker
/* const pool = new Pool({
   host: 'db',
   user: 'your_username',
   password: 'your_password',
   database: 'your_database'
 }); */

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

export default pool;
