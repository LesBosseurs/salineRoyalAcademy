import UserRepository from '../repository/userRepository';
import pool from "../db/database";
import { User } from '../modele/user';

class UserService {
  static async getAllUsers(): Promise<User[]> {
    try {
      return await UserRepository.getAllUsers();
    } catch (error: unknown) {
      throw new Error(`Unable to get all users: ${error}`);
    }
  }

  static async getUserById(userId: string): Promise<User> {
    try {
      return await UserRepository.getUserById(userId);
    } catch (error) {
      throw new Error(`Unable to get user by ID: ${error}`);
    }
  }

  static async createUser(user: User): Promise<void> {
    try {
      const myUserId = await UserRepository.createUser(user);
      return myUserId
    } catch (error) {
      throw new Error(`Unable to create user: ${error}`);
    }
  }

  static async updateUser(userId: string, updatedUser: User): Promise<void> {
    try {
      await UserRepository.updateUser(userId, updatedUser);
    } catch (error) {
      throw new Error(`Unable to update user: ${error}`);
    }
  }

  static async deleteUser(userId: string): Promise<void> {
    try {
      await UserRepository.deleteUser(userId);
    } catch (error) {
      throw new Error(`Unable to delete user: ${error}`);
    }
  }

  static async loginUser(email: string, password: string): Promise<User> {
    try {
      return await UserRepository.getUserByEmailAndPassword(email, password);
    } catch (error) {
      throw new Error(`Unable to get user by Email/Password: ${error}`);
    }
  }
}

export default UserService;
