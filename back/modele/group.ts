import { User } from "./user";
export interface Group {
    group_id: number;
    school_id: number;
    date_start: string | null;
    date_end: string | null;
  }
  

  export interface GroupFormatted {
    group_id: number;
    school_id: number;
    date_start: string | null;
    date_end: string | null;
    users: User[]
  }