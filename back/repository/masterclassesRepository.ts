import pool from "../db/database";

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
  masterclass_id: string;
  title: string;
  description: string;
  genre: string;
  quote: string; 
  published_date: Date;
  spoken_language : string;
  instruments: Array<string>;
  medias: Media[];
}

export interface Media {
  media_id: string;
  title: string;
  description: string;
  type: string;
  url: string;
  oeuvre: Oeuvre[]

}

export interface Oeuvre {
  oeuvre_id: string;
  title: string;
  people: People[];
}

export interface People {
  people_id: string;
  first_name: string;
  last_name: string;
  type: string;
  image: string;
}


class MasterclassesRepository {

  static async getAllMasterclasses(): Promise<Masterclass[]> {
    try {
      let c = await pool.connect()
      try {
        const query = 'SELECT * FROM MASTERCLASSES';
        const result = await pool.query(query);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch masterclasses: ${error}`);
      } finally {
        c.release()
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch masterclasses: ${error}`);
    }
  }

  static async getMasterclassByID(masterclassId: string): Promise<MasterclassMediaPeople> {
    try {

      // Récupérer les informations de base de la masterclass
      const masterclassQuery = `SELECT * FROM masterclasses WHERE masterclass_id = $1;`;
      const masterclassValues = [masterclassId];
      const masterclassResult = await pool.query(masterclassQuery, masterclassValues);
  
      if (masterclassResult.rows.length === 0) {
        throw new Error("Masterclass not found");
      }
  
      const masterclassData: MasterclassMediaPeople = {
        masterclass_id: masterclassResult.rows[0].masterclass_id,
        title: masterclassResult.rows[0].title,
        description: masterclassResult.rows[0].description,
        genre: masterclassResult.rows[0].genre,
        quote: masterclassResult.rows[0].quote,
        published_date: masterclassResult.rows[0].published_date,
        spoken_language : masterclassResult.rows[0].spoken_language,
        instruments: masterclassResult.rows[0].instruments,
        medias: [],
      };
  
      // Récupérer les médias liés à la masterclass
      const mediaQuery = `SELECT * FROM medias WHERE masterclass_id = $1;`;
      const mediaValues = [masterclassId];
      const mediaResult = await pool.query(mediaQuery, mediaValues);
  
      for (const mediaRow of mediaResult.rows) {
        const media: Media = {
          media_id: mediaRow.media_id,
          title: mediaRow.title,
          description: mediaRow.description,
          type: mediaRow.type,
          url: mediaRow.url,
          oeuvre: [],
        };
  
        // Récupérer les œuvres liées au média
        const oeuvreQuery = `SELECT * FROM OEUVRES WHERE oeuvre_id = $1;`;
        const oeuvreValues = [mediaRow.oeuvre_id];
        const oeuvreResult = await pool.query(oeuvreQuery, oeuvreValues);
  
        for (const oeuvreRow of oeuvreResult.rows) {
          const oeuvre: Oeuvre = {
            oeuvre_id: oeuvreRow.oeuvre_id,
            title: oeuvreRow.title,
            people: [],
          };
  
          // Récupérer les personnes liées à l'œuvre
          const peopleQuery = `SELECT people_id, first_name, last_name, type, image FROM peoples WHERE people_id = $1;`;
          const peopleValues = [oeuvreRow.people_id];
          const peopleResult = await pool.query(peopleQuery, peopleValues);
  
          for (const peopleRow of peopleResult.rows) {
            const person: People = {
              people_id: peopleRow.people_id,
              first_name: peopleRow.first_name,
              last_name: peopleRow.last_name,
              type: peopleRow.type,
              image: peopleRow.image,
            };
  
            oeuvre.people.push(person);
          }
  
          media.oeuvre.push(oeuvre);
        }
  
        masterclassData.medias.push(media);
      }
  
      return masterclassData;
    } catch (error: unknown) {
      throw new Error(`Unable to fetch masterclass: ${error}`);
    }
  }
  
  static async createMasterclass(masterclass: Masterclass): Promise<void> {
    try {
      const values = [
        masterclass.title,
        masterclass.description,
        masterclass.genre,
        masterclass.instruments,
        masterclass.quote,
        masterclass.published_date,
        masterclass.spoken_language,
      ];
      const query =
        'INSERT INTO MASTERCLASSES (masterclass_id, title, description, genre, instruments, quote, published_date, spoken_language) VALUES ($1, $2, $3, $4, $5)';
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to create masterclass: ${error}`);
    }
  }

  static async updateMasterclass(masterclassId: string, updatedMasterclass: Masterclass): Promise<void> {
    try {
      const query =
        'UPDATE masterclasses SET title = $1, description = $2, quote = $3, genre = $4, instruments = $5, published_date = $6, spoken_date = $7  WHERE masterclass_id = $8';
      const values = [
        updatedMasterclass.title,
        updatedMasterclass.description,
        updatedMasterclass.quote,
        updatedMasterclass.genre,
        updatedMasterclass.instruments,
        updatedMasterclass.published_date,
        updatedMasterclass.spoken_language,
        masterclassId
      ];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to update user: ${error}`);
    }
  }

  static async deleteMasterclass(masterclass_id: string): Promise<void> {
    try {
      const query = 'DELETE FROM MASTERCLASSES WHERE masterclass_id = $1';
      const values = [masterclass_id];
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to delete masterclass: ${error}`);
    }
  }

}

export default MasterclassesRepository;