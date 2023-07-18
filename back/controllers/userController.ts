import { Request, Response } from 'express';
import UserService from '../service/userService';
var jwt = require('jsonwebtoken');
require('dotenv').config()

class UserController {
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json({ success: true, message: 'Users retrieved successfully', data: users });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve users', error: error as Error });
    }
  }

  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const user = await UserService.getUserById(userId);
      res.status(200).json({ success: true, message: 'User retrieved successfully', data: user });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve user by Id', error: error as Error });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;
      const myUserid = await UserService.createUser(user);
      const token = jwt.sign({ id: myUserid }, process.env.JWT_SECRET);
      res.cookie('access_token', token, {
        httpOnly: false
      })
      res.status(200).json({ success: true, message: 'User created successfully', myUserid });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to create user', error: error as Error });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      const updatedUser = req.body;
      await UserService.updateUser(userId, updatedUser);
      res.status(200).json({ success: true, message: 'User updated successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to update user', error: error as Error });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId);
      res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to delete user', error: error as Error });
    }
  }

  static async loginUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const myUser = await UserService.loginUser(email, password);
      console.log(myUser)
      console.log(process.env.JWT_SECRET)

      const token = jwt.sign({ id: myUser.user_id }, process.env.JWT_SECRET);
      res.cookie('access_token', token, {
        httpOnly: false
      })

      res.status(200).json({ token });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to login', error: error as Error });
    }
  }

  static async disconnectUser(req: Request, res: Response): Promise<void> {
    res.clearCookie('access_token');
    res.status(200).json({ message: 'User disconnected successfully' });
  }

  static async getUsersByFilters(req: Request, res: Response): Promise<void> {
    try {
      const filters = req.query;

      const users = await UserService.getUsersByFilters(filters);

      res.status(200).json({ success: true, message: 'Users retrieved successfully', data: users });
    } catch (error: unknown) {
      res.status(500).json({ success: false, message: 'Failed to retrieve users by Filters', error: error as Error });
    }
}
}

export default UserController;
