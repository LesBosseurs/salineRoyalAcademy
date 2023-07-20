import { Group } from "../modele/group";
import { GroupRepository } from "../repository/groupeRepository";
export class GroupService {

  static async createGroup(group: Group): Promise<Group> {
    // Votre logique de création de groupe ici
    return GroupRepository.createGroup(group);
  }

  static async getGroupById(groupId: number): Promise<Group | null> {
    // Votre logique de récupération de groupe par ID ici
    return GroupRepository.getGroupById(groupId);
  }

  static async getAllGroups(): Promise<Group[]> {
    // Votre logique de récupération de tous les groupes ici
    return GroupRepository.getAllGroups();
  }

  static async updateGroup(groupId: number, updatedGroup: Group): Promise<void> {
    // Votre logique de mise à jour de groupe ici
    return GroupRepository.updateGroup(groupId, updatedGroup);
  }

  static async deleteGroup(groupId: number): Promise<void> {
    // Votre logique de suppression de groupe ici
    return GroupRepository.deleteGroup(groupId);
  }
}
