import databaseClient, { DatabaseClient } from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async readAll(): Promise<Program[]> {
    try {
      const [rows] = await databaseClient.query<Rows>("select * from program");
      return rows as Program[];
    } catch (error) {
      console.error("Error reading programs from database:", error);
      throw error;
    }
  }
}

export default new ProgramRepository();
