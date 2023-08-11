import { User } from "../modele/user";
import pool from "../db/database";

class UserRepository {
  static async getAllUsers(): Promise<User[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw error
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getUserById(userId: string): Promise<User> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM users, study WHERE users.user_id = $1 AND study.user_id = $1';
        const values = [userId];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async getUserByEmailAndPassword(email: string, password: string): Promise<User> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
        const values = [email, password];
        const result = await pool.query(query, values);
        return result.rows[0];
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async createUser(user: User): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const query = `
        INSERT INTO users (first_name, last_name, email, password, phone, notifications, instruments, status)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING user_id
      `;
        const values = [
          user.first_name || null,
          user.last_name || null,
          user.email,
          user.password,
          user.phone || null,
          user.notifications || false,
          user.instruments || null,
          user.status || 'New'
        ];
        const result = await pool.query(query, values);
        const insertedUserId = result.rows[0].user_id;
        return (insertedUserId)
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }


  static async updateUser(userId: string, updatedUser: User): Promise<void> {
    try {
      let c = await pool.connect()
      try {
        const query = `
  UPDATE users
  SET first_name = $1,
      last_name = $2,
      email = $3,
      password = $4,
      phone = $5,
      notifications = $6,
      instruments = $7,
      status = $8
  WHERE user_id = $9
`;
        const values = [
          updatedUser.first_name,
          updatedUser.last_name,
          updatedUser.email,
          updatedUser.password,
          updatedUser.phone,
          updatedUser.notifications,
          updatedUser.instruments,
          updatedUser.status,
          userId,
        ];
        await pool.query(query, values);
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw error;
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      const c = await pool.connect();
      try {
        const values = [userId];
        const query = 'UPDATE users SET status = \'Inactive\' WHERE user_id = $1';
        await pool.query(query, values);
      } catch (error) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error) {
      throw error;
    }
  }

  static async getUsersByFilters(filters: Partial<User>): Promise<User[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM users';
        const values: any[] = [];
        const conditions: string[] = [];
        let index = 1;
        for (const key in filters) {
          if (filters.hasOwnProperty(key) && filters[key as keyof User]) {
            if (key === 'instruments') {
              const instruments = filters[key as keyof User] as string[];
              const instrumentConditions = instruments.map((instrument) => {
                values.push(`${instrument}`);
                return `$${index++} ILIKE any(instruments)`;
              });
              conditions.push(`(${instrumentConditions.join(' OR ')})`);
            } else {
              values.push(`${filters[key as keyof User]}%`);
              conditions.push(`${key} ILIKE $${index++}`);
            }
          }
        }
        let filteredQuery = query;
        if (conditions.length > 0) {
          filteredQuery += ' WHERE ' + conditions.join(' AND ');
        }
        const result = await pool.query(filteredQuery, values);
        return result.rows;
      } catch (error: unknown) {
        throw error;
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw error;
    }
  }



}

export default UserRepository;
