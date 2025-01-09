import { GameModel } from "../contracts/game-model";
import * as gameRepo from "../repositores/game-repository";
import * as HttpMethod from "../utils/http-hellp";


export const getGameServices = async () => {
    const resServices = await gameRepo.findAllGame();
    let response = null;
    
    if(resServices){
        response = await HttpMethod.ok(resServices);
    }else{
        response = await HttpMethod.noContent()
    }
    
    return response ;
};

export const getGameByIdServices = async (id: number) => {
    const data = await gameRepo.findAllGameById(id);
    let response = null;
    
    if(data){
        response = HttpMethod.ok(data);
    }else{
        response = HttpMethod.noContent();
    }
     
    return response;
};

export const createGameServices = async (game:GameModel)=> {
    let response = null;
    if(Object.keys(game).length !== 0){
        response = HttpMethod.created();
        await gameRepo.insertGame(game);
    }else{
        response = HttpMethod.badRequest();
    }

    return response;
}