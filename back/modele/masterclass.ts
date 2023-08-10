// modele/masterclass.ts

export interface Masterclass {
    masterclass_id?: number;
    title: string;
    description: string;
    citation?: string;
    benefits?: string;
    quote?: string;
    genre?: string;
    instruments: string[];
    published_date: Date;
    spoken_language?: string;
  }
  