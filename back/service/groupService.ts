import { Group } from "../modele/group";
import { GroupRepository } from "../repository/groupeRepository";
class GroupService {
  static async getAllGroups(): Promise<Group[]> {
    try {
      return await GroupRepository.getAllGroups();
    } catch (error: unknown) {
      throw new Error(`Unable to get all Groups: ${error}`);
    }
  }

  static async getGroupById(groupId: string): Promise<Group> {
    try {
      return await GroupRepository.getGroupById(groupId);
    } catch (error: unknown) {
      throw new Error(`Unable to get Group by ID: ${error}`);
    }
  }

  static async createGroup(group: Group): Promise<Group> {
    try {
      return await GroupRepository.createGroup(group);
    } catch (error: unknown) {
      throw new Error(`Unable to create a Group: ${error}`);
    }
  }

  static async updateGroup(updatedGroup: Group): Promise<void> {
    try {
      await GroupRepository.updateGroup(updatedGroup);
    } catch (error) {
      throw new Error(`Unable to update Group: ${error}`);
    }
  }

  static async deleteGroup(groupId: string): Promise<void> {
    try {
      await GroupRepository.deleteGroup(groupId);
    } catch (error) {
      throw new Error(`Unable to delete Group: ${error}`);
    }
  }

}

export default GroupService