import { GameModel } from "../contracts/game-model";
import { database } from "./game-data";



export const findAllGame = async (): Promise<GameModel[]> => {
    return database;
};
  
export const findAllGameById = async (id: number): Promise<GameModel | undefined> => {
    return database.find(games => games.id === id); 
};

export const insertGame = async (game: GameModel) => {
    database.push(game)
};