export interface user_badge {
    badge_id: Number,
    step: Number,
    date_earned: Date
}

export interface user_badges {
    user_id: Number,
    num_logins: Number,
    last_login_date: Date | null,
    badges: user_badge[]
}