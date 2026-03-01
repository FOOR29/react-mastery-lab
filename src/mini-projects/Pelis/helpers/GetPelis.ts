import { pelis } from "../data/pelis";
import type { Pelis } from "../types/Index";

export const GetPelisById = (id: string): Pelis | undefined => {
  return pelis.find((peli) => peli.id === Number(id));
};
