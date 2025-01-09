import * as data from "../repositores/game-repository";
import { noContent, ok } from "../utils/http-hellp";


export const getGameServices = async () => {
    const resServices = await data.findAllGame();
    let response = null;
    
    if(resServices){
        response = await ok(resServices);
    }else{
        response = await noContent()
    }
    
    return response ;
};

