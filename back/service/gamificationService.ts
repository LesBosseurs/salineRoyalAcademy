import pool from "../db/database";
import { Stats } from "../modele/stats";
import GamificationRepository from "../repository/gamificationRepository";

class GamificationService{
    static async getAllStatsByUser(user_id : Number): Promise<Stats> {
        try {
            return await GamificationRepository.getAllStatsByUser(user_id);
          } catch (error: unknown) {
            throw new Error(`Unable to get all Gamification: ${error}`);
          }
    }
}

export default GamificationService