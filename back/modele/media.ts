import { Oeuvre } from './oeuvre';

export interface Media {
    media_id: Number;
    title: string;
    description: string;
    type: string;
    url: string;
    oeuvre: Oeuvre[];
  }