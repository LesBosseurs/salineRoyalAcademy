import pool from "../db/database";
import { UserStats } from "../modele/user_badges";
import GamificationRepository from "../repository/gamificationRepository";
import { user_badges } from "../modele/user_badges";
import { Badge } from "../modele/badge";
import { SchoolStats } from "../modele/school";


class GamificationService{

    // LES GET //

    // Fonction qui recupere un badge en fonction de son badge_id
    static async getBadge(badge_id : Number): Promise<Badge> {
        try {
            return await GamificationRepository.getBadge(badge_id);
        } catch (error: unknown) {
          throw new Error(`Unable to get badge: ${error}`);
        }
    };

    // Fonction qui recupere tous les badges
    static async getBadges(): Promise<Badge[]> {
        try {
            return await GamificationRepository.getBadges();
        } catch (error: unknown) {
          throw new Error(`Unable to get all badges: ${error}`);
        }
    };

    // Fonction qui recupere un badge en fonction de son badge_id
    static async getUserBadge(user_id : Number, badge_id : Number): Promise<user_badges> {
        try {
            return await GamificationRepository.getUserBadge(user_id, badge_id);
        } catch (error: unknown) {
          throw new Error(`Unable to get UserBadge: ${error}`);
        }
    };

    // Fonction qui recupere tous les UserBadges d'un user
    static async getUserBadges(user_id : Number): Promise<user_badges[]> {
        try {
            return await GamificationRepository.getUserBadges(user_id);
        } catch (error: unknown) {
          throw new Error(`Unable to get all UserBadge: ${error}`);
        }
    };

    // Fonction qui va recuperer tous les badges existant ainsi que la progression (UserBadges) d'un user
    // Cette progression est update avant d'etre récuperer
    static async getAllBadgesWithUserBadges(user_id : Number): Promise<{badges: Badge[], user_badges:user_badges[]}> {
        try {
            const badges = await this.getBadges();
            const updateUserBadges = await this.updateUserBadges(user_id, badges);
            console.log(updateUserBadges);
            const user_badges = await this.getUserBadges(user_id);
            return {badges, user_badges};
        } catch (error: unknown) {
            throw new Error(`Unable to get all badges & userBadges: ${error}`);
        }
    };

    // Fonction qui va recuperer les stats des badges 
    static async getBadgesStatsByUser(user_id : Number): Promise<UserStats> {
        try {
            return await GamificationRepository.getBadgesStatsByUser(user_id);
        } catch (error: unknown) {
          throw new Error(`Unable to get all Badges Stats: ${error}`);
        }
    };

    // Fonction qui recupere les stats d'une école
    static async getSchoolStats(school_id: Number): Promise<SchoolStats> {
        try {
          return await GamificationRepository.getSchoolStats(school_id);
        } catch (error: unknown) {
          throw new Error(`Unable to retrieve school stats: ${error}`);
        }
    };

    // POST //

    // Fonction qui creer une nouvelle ligne dans la table badges
    static async createBadge(badge : Badge): Promise<Badge> {
        try {
            return await GamificationRepository.createBadge(badge);
        } catch (error: unknown) {
            throw new Error(`Unable to create badge: ${error}`);
        }
    };

    // Fonction qui creer de nouvelles lignes dans la table badges
    static async createBadges(badge : Badge[]): Promise<Badge[]> {
        try {
            return await GamificationRepository.createBadges(badge);
        } catch (error: unknown) {
            throw new Error(`Unable to create badges: ${error}`);
        }
    };

    // Fonction qui update un badge 
    static async updateBadge(badge_id : Number, badge : Badge): Promise<Badge> {
        try {
            return await GamificationRepository.updateBadge(badge_id, badge);
        } catch (error: unknown) {
            throw new Error(`Unable to update badge: ${error}`);
        }
    };

    // Fonction qui update la progression des tous les badges d'un user
    static async updateUserBadges(user_id : Number, badges? : Badge[]): Promise<Boolean> {
        try {
            if (!badges) {
                const badges = await this.getBadges();
                const userStats = await this.getBadgesStatsByUser(user_id);
                const updateUserBadges = await GamificationRepository.updateUserBadges(user_id, badges, userStats);
                return updateUserBadges;
            }else {
                const userStats = await this.getBadgesStatsByUser(user_id);
                const updateUserBadges = await GamificationRepository.updateUserBadges(user_id, badges, userStats);
                return updateUserBadges;
            }
            
        } catch (error: unknown) {
            throw new Error(`Unable to update userBadges : ${error}`);
        }
    };

    

    

}

export default GamificationService