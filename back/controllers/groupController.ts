import { Request, Response } from 'express';
import { Group } from '../modele/group';
import GroupService from '../service/groupService';

export class GroupController {

  static async createGroup(req: Request, res: Response): Promise<void> {
    try {
      const group: Group = req.body;
      const createdGroup = await GroupService.createGroup(group);
      res.status(200).json({ success: true, message: 'Group created successfully', data: createdGroup });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to create group', error: error as Error });
    }
  }

  static async getGroupById(req: Request, res: Response): Promise<void> {
    try {
      const groupId = parseInt(req.params.id, 10);
      const group = await GroupService.getGroupById(groupId);
      if (group) {
        res.status(200).json({ success: true, message: 'Group retrieved successfully', data: group });
      } else {
        res.status(404).json({ success: false, message: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to retrieve group by ID', error: error as Error });
    }
  }

  static async getAllGroups(req: Request, res: Response): Promise<void> {
    try {
      const groups = await GroupService.getAllGroups();
      res.status(200).json({ success: true, message: 'Groups retrieved successfully', data: groups });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to retrieve groups', error: error as Error });
    }
  }

  static async updateGroup(req: Request, res: Response): Promise<void> {
    try {
      const groupId = parseInt(req.params.id, 10);
      const updatedGroup: Group = req.body;
      await GroupService.updateGroup(groupId, updatedGroup);
      res.status(200).json({ success: true, message: 'Group updated successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to update group', error: error as Error });
    }
  }

  static async deleteGroup(req: Request, res: Response): Promise<void> {
    try {
      const groupId = parseInt(req.params.id, 10);
      await GroupService.deleteGroup(groupId);
      res.status(200).json({ success: true, message: 'Group deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to delete group', error: error as Error });
    }
  }
}
