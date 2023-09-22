import { GroupFormatted } from "./group";
import { User } from "./user";
export interface School {
  school_id: string;
  name: string;
  code: string;
  type: string;
}

export interface SchoolFormatted {
  school_id: string;
  name: string;
  code: string;
  type: string;
  Groups: GroupFormatted[];
}
