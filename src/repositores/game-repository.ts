import { DLC, GameModel } from "../contracts/game-model";
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

export const deleteOneGame = async (id: number) => {
    const index = database.findIndex(game => game.id === id);

    if(index !== -1){
        database.splice(index, 1);
        return true;
    }

    return false;
};


export const updateGameById = async (id: number, dlc: DLC):Promise<GameModel>=> {
    const gameIndex = database.findIndex(game => game.id === id);

    if(gameIndex !== -1){
        database[gameIndex].dlc = dlc;
    }

    return database[gameIndex]
}

export const getGameDetailList = async (id:number) => {
    const game = database.find(game => game.id === id);
    if (game){
        return{
            minimum_recommendations: game.minimum_recommendations,
            maximum_recommendations: game.maximum_recommendations
        }
    }
    return null
}