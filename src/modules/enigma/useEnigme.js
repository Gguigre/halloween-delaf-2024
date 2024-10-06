import { enigmes } from "../../domain/enigmes/engimes";

export const useEnigme = (enigmeId) => {
  const allEnigmes = enigmes;
  return allEnigmes[enigmeId];
};
