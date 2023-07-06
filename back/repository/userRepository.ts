import pool from "../db/database";

export interface User {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  notification: string;
  instruments: string;
  role: string;
  group_id: string;
}

class UserRepository {
  static async getAllUsers(): Promise<User[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM users';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch users: ${error}`);
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch users: ${error}`);
    }
  }

  static async getUserById(userId: string): Promise<User> {
    try {
      const query = 'SELECT * FROM users WHERE user_id = $1';
      const values = [userId];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error: unknown) {
      throw new Error(`Unable to fetch user: ${error}`);
    }
  }

  static async createUser(user: User): Promise<void> {
    try {
      const query =
        'INSERT INTO users (user_id, first_name, last_name, email, password, phone, notification, instruments, role, group_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
      const values = [
        user.user_id,
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.phone,
        user.notification,
        user.instruments,
        user.role,
        user.group_id
      ];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to create user: ${error}`);
    }
  }

  static async updateUser(userId: string, updatedUser: User): Promise<void> {
    try {
      const query =
        'UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, phone = $5, notification = $6, instruments = $7, role = $8, group_id = $9 WHERE user_id = $10';
      const values = [
        updatedUser.first_name,
        updatedUser.last_name,
        updatedUser.email,
        updatedUser.password,
        updatedUser.phone,
        updatedUser.notification,
        updatedUser.instruments,
        updatedUser.role,
        updatedUser.group_id,
        userId
      ];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to update user: ${error}`);
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      const query = 'DELETE FROM users WHERE user_id = $1';
      const values = [userId];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to delete user: ${error}`);
    }
  }
}

export default UserRepository;
