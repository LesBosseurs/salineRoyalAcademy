import pool from "../db/database";
import { Stats } from "../modele/stats";
import GamificationRepository from "../repository/gamificationRepository";
import { user_badge, user_badges } from "../modele/user_badges";
import { Badge } from "../modele/badge";

class GamificationService{
    static async getBadgesStatsByUser(user_id : Number): Promise<Stats> {
        try {
            return await GamificationRepository.getBadgesStatsByUser(user_id);
        } catch (error: unknown) {
          throw new Error(`Unable to get all stats: ${error}`);
        }
    }

    static async getAllBadgesWithUserBadges(user_id : Number): Promise<{badges: Badge[], user_badges:user_badges}> {
      try {
        return await GamificationRepository.getAllBadgesWithUserBadges(user_id);
      } catch (error: unknown) {
        throw new Error(`Unable to get all badges & userBadges: ${error}`);
      }
    }

    static async createBadge(badge : Badge): Promise<Badge> {
      try {
        return await GamificationRepository.createBadge(badge);
      } catch (error: unknown) {
        throw new Error(`Unable to create badge: ${error}`);
      }
    }

    static async updateBadge(badge : Badge): Promise<Badge> {
      try {
        return await GamificationRepository.updateBadge(badge);
      } catch (error: unknown) {
        throw new Error(`Unable to update badge: ${error}`);
      }
    }

    static async updateUserBadge(user_id : Number, user_badges : user_badge): Promise<user_badge[]> {
      try {
        return await GamificationRepository.updateUserBadge(user_id, user_badges);
      } catch (error: unknown) {
        throw new Error(`Unable to update userBadges: ${error}`);
      }
    }

    static async dailyLogin(user_id: Number): Promise<Boolean> {
      try {
        return await GamificationRepository.dailyLogin(user_id);
      } catch (error: unknown) {
        throw new Error(`Unable to do the dailyLogin: ${error}`);
      }
    }
}

export default GamificationService