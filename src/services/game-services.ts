import {findAllGame,findAllGameById }from "../repositores/game-repository";
import * as HttpMethod from "../utils/http-hellp";


export const getGameServices = async () => {
    const resServices = await findAllGame();
    let response = null;
    
    if(resServices){
        response = await HttpMethod.ok(resServices);
    }else{
        response = await HttpMethod.noContent()
    }
    
    return response ;
};

export const getGameByIdServices = async (id: number) => {
    const data = await findAllGameById(id);
    let response = null;
    
    if(data){
        response = HttpMethod.ok(data);
    }else{
        response = HttpMethod.noContent();
    }
    
    return response;
};