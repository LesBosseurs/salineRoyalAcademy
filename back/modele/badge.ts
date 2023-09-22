export interface BadgeStep {
    level: number;
    requirement: number;
}

export interface FormatedSqlBadge {
    badge_id: Number;
    name: String;
    description: String;
    image: String;
    steps: BadgeStep[];
}

export interface Badge {
    badge_id: number;
    name: string;
    description: string;
    image: string;
    steps: {
      level: number;
      requirement: number;
    }[];
}