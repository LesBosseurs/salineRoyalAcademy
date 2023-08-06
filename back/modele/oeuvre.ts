import { People } from './people';

export interface Oeuvre {
    oeuvre_id: Number;
    title: string;
    people: People[];
  }