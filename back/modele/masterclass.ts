import { Media } from './media';

export interface Masterclass {
    title: string;
    description: string;
    genre: string;
    quote: string; 
    published_date: Date;
    spoken_language : string;
    instruments: Array<string>;
}

export interface MasterclassMediaPeople {
    masterclass_id: Number;
    title: string;
    description: string;
    genre: string;
    quote: string; 
    published_date: Date;
    spoken_language : string;
    instruments: Array<string>;
    medias: Media[];
}

export interface SuiviMasterclass {
    user_id: Number;
    masterclass_id: Number;
    start_date: Date;
    is_validated: boolean;
    view_number: Number;
  }
  