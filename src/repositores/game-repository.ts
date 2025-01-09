import { GameModel } from "../contracts/game-model";

  const database: GameModel[] = [
    { id: 1, name: 'Cleid' },
    { id: 2, name: 'Outro Jogo' },
  ];
  
  export const findAllGame = async (): Promise<GameModel[]> => {
    return database;
  };
  
  export const findAllGameById = async (id: number): Promise<GameModel | undefined> => {
    return database.find(game => game.id === id); 
  };
  