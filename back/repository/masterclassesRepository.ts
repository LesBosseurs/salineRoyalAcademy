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

export interface Media {
  media_id: Number;
  title: string;
  description: string;
  type: string;
  url: string;
  oeuvre: Oeuvre[];
}

export interface Oeuvre {
  oeuvre_id: Number;
  title: string;
  people: People[];
}

export interface People {
  people_id: Number;
  first_name: string;
  last_name: string;
  type: string;
  image: string;
}

export interface SuiviMasterclass {
  user_id: Number;
  masterclass_id: Number;
  start_date: Date;
  is_validated: boolean;
  view_number: Number;
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

  static async getAllSuiviMasterclasses(user_id: Number): Promise<any[]> {
    try {
      const query = `
        SELECT
          masterclasses.*,
          ARRAY_AGG(suivi_Masterclasses.start_date) AS start_dates,
          ARRAY_AGG(suivi_Masterclasses.is_validated) AS is_validated_values,
          ARRAY_AGG(suivi_Masterclasses.view_Number) AS view_Numbers
        FROM
          masterclasses
        LEFT JOIN
          suivi_Masterclasses ON masterclasses.masterclass_id = suivi_Masterclasses.masterclass_id
        WHERE
          suivi_Masterclasses.user_id = $1
        GROUP BY
          masterclasses.masterclass_id;`
      ;
      const values = [user_id];
      const result = await pool.query(query, values);
      return result.rows
    } catch (error: unknown) {
      throw new Error(`Unable to delete masterclass: ${error}`);
    }
  }

  static async getMasterclassByID(masterclassId: Number): Promise<MasterclassMediaPeople> {
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

  static async getMasterclassesByFilters(filters: Partial<Masterclass>): Promise<Masterclass[]> {
    try {
      let c = await pool.connect();
      try {
        const query = 'SELECT * FROM MASTERCLASSES';
        const values: any[] = [];
        const conditions: string[] = [];
        let index = 1;
        console.log(filters)
        for (const key in filters) {
          if (filters.hasOwnProperty(key) && filters[key as keyof Masterclass]) {
            if (key === 'instruments') {
              const instruments = filters[key as keyof Masterclass] as string[];
              const instrumentConditions = instruments.map((instrument) => {
                values.push(`${instrument}`);
                return `$${index++} ILIKE any(instruments)`;
              });
              conditions.push(`(${instrumentConditions.join(' OR ')})`);
            } else {
              values.push(`${filters[key as keyof Masterclass]}%`);
              conditions.push(`${key} ILIKE $${index++}`);
            }
          }
        }
        let filteredQuery = query;
        if (conditions.length > 0) {
          filteredQuery += ' WHERE ' + conditions.join(' AND ');
        }
        console.log({ filteredQuery });
  
        const result = await pool.query(filteredQuery, values);
        return result.rows;
      } catch (error: unknown) {
        throw new Error(`Unable to fetch Masterclasses: ${error}`);
      } finally {
        c.release();
      }
    } catch (error: unknown) {
      throw new Error(`Unable to fetch Masterclasses: ${error}`);
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
        'INSERT INTO MASTERCLASSES (title, description, genre, instruments, quote, published_date, spoken_language) VALUES ($1, $2, $3, $4, $5, $6, $7)';
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to create masterclass: ${error}`);
    }
  }

  static async updateMasterclass(masterclassId: Number, updatedMasterclass: Masterclass): Promise<void> {
    try {
      const query =
        'UPDATE MASTERCLASSES SET title = $1, description = $2, quote = $3, genre = $4, instruments = $5, published_date = $6, spoken_language = $7  WHERE masterclass_id = $8';
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
      console.log(masterclassId)
      await pool.query(query, values);
    } catch (error: unknown) {
      throw new Error(`Unable to update masterclass: ${error}`);
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

  static async getSuiviMasterclassByUser(user_id: Number, masterclass_id: Number): Promise<SuiviMasterclass> {
    try {
      let insertValues: any;
      let query: string;
      query = `
        SELECT *
        FROM suivi_Masterclasses
        WHERE user_id = $1 AND masterclass_id = $2;`;
      let values = [user_id, masterclass_id];
      let result = (await pool.query(query, values))/* .rows[0] */;
      if (result.rows.length === 0) {
        query = `
          INSERT INTO suivi_Masterclasses (user_id, masterclass_id, start_date, is_validated, view_number)
          VALUES ($1, $2, $3, $4, $5);`;
        insertValues = [user_id, masterclass_id, new Date(), false, 1];
      } else {
        query = `
          UPDATE suivi_Masterclasses
          SET start_date = $3, is_validated = $4, view_number = $5
          WHERE user_id = $1 AND masterclass_id = $2;`;
        result.rows[0].view_number += 1;
        insertValues = result.rows[0];
      }
      console.log(query)
      await pool.query(query, Object.values(insertValues));
      return insertValues;
    } catch (error: unknown) {
      throw new Error(`Unable to get or create suivi_masterclass: ${error}`);
    }
  }
  

  

}

export default MasterclassesRepository;