import { Request, Response } from 'express';
import UserService from '../service/userService';

class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.json({ success: true, message: 'Users retrieved successfully', data: users });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve users', error: error as Error });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.json({ success: true, message: 'User retrieved successfully', data: user });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve user', error: error as Error });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;
      await UserService.createUser(user);
      res.json({ success: true, message: 'User created successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to create user', error: error as Error });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;
      await UserService.updateUser(userId, updatedUser);
      res.json({ success: true, message: 'User updated successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to update user', error: error as Error });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId);
      res.json({ success: true, message: 'User deleted successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to delete user', error: error as Error });
    }
  }
}

export default UserController;
