import UserRepository from '../repository/userRepository';
import pool from "../db/database";
import { User } from '../modele/user';

class UserService {
  static async getAllUsers(): Promise<User[]> {
    try {
      return await UserRepository.getAllUsers();
    } catch (error: unknown) {
      throw error 
    }
  }

  static async getUserById(userId: string): Promise<User> {
    try {
      return await UserRepository.getUserById(userId);
    } catch (error) {
      throw error;
    }
  }

  static async createUser(user: User): Promise<void> {
    try {
      const myUserId = await UserRepository.createUser(user);
      return myUserId
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId: string, updatedUser: User): Promise<void> {
    try {
      await UserRepository.updateUser(userId, updatedUser);
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      await UserRepository.deleteUser(userId);
    } catch (error) {
      throw error;
    }
  }

  static async loginUser(email: string, password: string): Promise<User> {
    try {
      return await UserRepository.getUserByEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  static async getUsersByFilters(filters: Partial<User>): Promise<User[]> {
    try {
      return await UserRepository.getUsersByFilters(filters);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
